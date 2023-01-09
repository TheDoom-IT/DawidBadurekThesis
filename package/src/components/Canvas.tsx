import React, { ForwardedRef, forwardRef, useEffect, useRef, useLayoutEffect, ReactElement, ReactFragment, ReactNode, ReactPortal } from 'react';
import * as THREE from 'three';
import { handleForwardRef, addTestScene } from '../utils';
import { getElementType } from '../utils/get-element-type';
import { MAIN_PARENT } from '../main-parent';
import {
    cameraChildren,
    childContructor,
    geometryChildren,
    materialChildren,
    objectChildren,
    sceneChild
} from '../utils/supported-children';
import { GeneralProps } from '../types/props';
import { validateChildType } from '../utils/validate-child-type';
import { isElementSupported } from '../utils/is-element-supported';

export type CanvasProps = GeneralProps<{ divId: string }, typeof THREE.WebGLRenderer, THREE.WebGLRenderer>

export const Canvas = (props: CanvasProps) => {
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const sceneRef = useRef<THREE.Scene>();
    const cameraRef = useRef<THREE.PerspectiveCamera>();
    const animations = useRef<{ (timestamp: number, elapsed: number): void }[]>([]);
    const animationFrameId = useRef<number>(0);
    const previousTimestamp = useRef<number>();

    const findDiv = () => {
        const div = document.getElementById(props.divId);
        if (!div) {
            throw new Error(`Failed to find a div with id ${props.divId}!`);
        }
        return div;
    }

    const updateCameraAspect = (aspect?: number) => {
        if (!cameraRef.current) {
            return;
        }

        if (aspect) {
            cameraRef.current.aspect = aspect;
        } else {
            const div = findDiv();
            const { height, width } = div.getBoundingClientRect();
            cameraRef.current.aspect = width / height;
        }

        cameraRef.current.updateProjectionMatrix();
    }

    // make canvas addaptive to the div size
    const resizeCanvasIfNeeded = () => {
        const div = findDiv();

        const { height, width } = div.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = rendererRef.current!.domElement;

        if (height !== canvasHeight || width !== canvasWidth) {
            rendererRef.current!.setSize(width, height, false);
            // TODO: update camera here
            updateCameraAspect(width / height);
        }
    }

    const animate = (timestamp: number) => {
        if (previousTimestamp.current == undefined) {
            previousTimestamp.current = timestamp;
        }

        const elapsed = timestamp - previousTimestamp.current;
        previousTimestamp.current = timestamp;
        resizeCanvasIfNeeded();

        animations.current?.forEach(animation => animation(timestamp, elapsed));

        if (sceneRef.current !== undefined && cameraRef.current !== undefined) {
            rendererRef.current!.render(sceneRef.current, cameraRef.current);
        }

        animationFrameId.current = requestAnimationFrame(animate);
    }

    // create renderer, remove it on unmount
    useLayoutEffect(() => {
        rendererRef.current = new THREE.WebGLRenderer();
        animationFrameId.current = requestAnimationFrame(animate);

        // TODO: remove it
        //add an animated cube for testing purposes
        // const dispose = addTestScene(rendererRef.current);

        return () => {
            // TODO: remove it
            // dispose an animated cube created for test
            // dispose();

            // stop animations
            cancelAnimationFrame(animationFrameId.current);

            rendererRef.current!.dispose();
            rendererRef.current!.forceContextLoss();
        }
    }, []);

    // append canvas to the DOM, remove it on unmount/div change
    useLayoutEffect(() => {
        const div = findDiv();
        div.appendChild(rendererRef.current!.domElement);

        return () => {
            div.removeChild(rendererRef.current!.domElement);
        }
    }, [props.divId]);

    const handleMainChild = (child: ReturnType<typeof React.Children.toArray>[number]) => {
        const validatedChild = validateChildType(child);

        const type = getElementType(validatedChild);
        isElementSupported(type, MAIN_PARENT);

        if (cameraChildren.includes(type)) {
            if (cameraRef.current !== undefined) {
                throw new Error('Canvas should contain only single camera object.');
            }
            cameraRef.current = new childContructor[type](...(validatedChild.props.params ?? [])) as THREE.PerspectiveCamera;
            // TODO: update camera aspect here
            updateCameraAspect();

            handleForwardRef(validatedChild.props.innerRef, cameraRef.current);
            return;
        }

        if (type === sceneChild) {
            if (sceneRef.current !== undefined) {
                throw new Error('Canvas should contain only single scene object.')
            }
            sceneRef.current = new THREE.Scene();

            const childrenArray = React.Children.toArray(validatedChild.props.children);
            childrenArray.forEach((child) => {
                handleChild(child, sceneRef.current);
            })

            handleForwardRef(validatedChild.props.innerRef, sceneRef.current);
            return;
        }
    }

    const handleChild = (child: ReturnType<typeof React.Children.toArray>[number], parent: any) => {
        const validatedChild = validateChildType(child);

        const childType = getElementType(validatedChild);
        isElementSupported(childType, parent.type);

        if (objectChildren.includes(childType)) {
            const object = new childContructor[childType](...(validatedChild.props.params ?? [])) as THREE.Mesh | THREE.Points;

            if (validatedChild.props.position) {
                const [x, y, z] = validatedChild.props.position;
                object.position.set(x, y, z);
            }
            sceneRef.current?.add(object);

            if (validatedChild.props.animate) {
                animations.current?.push((timestamp, elapsed) => validatedChild.props.animate(timestamp, elapsed, object));
            }
            const childrenArray = React.Children.toArray(validatedChild.props.children);
            childrenArray.forEach((child) => {
                handleChild(child, object);
            });

            handleForwardRef((child as ReactElement).props.innerRef, object);
        }

        if (materialChildren.includes(childType)) {
            const material = new childContructor[childType](...(validatedChild.props.params ?? []));
            parent.material = material;

            if (validatedChild.props.animate) {
                animations.current?.push((timestamp, elapsed) => validatedChild.props.animate(timestamp, elapsed, material));
            }

            handleForwardRef(validatedChild.props.innerRef, material);
            return;
        }

        if (geometryChildren.includes(childType)) {
            const geometry = new childContructor[childType](...(validatedChild.props.params === undefined ? [] : validatedChild.props.params));
            parent.geometry = geometry;

            if (validatedChild.props.animate) {
                animations.current?.push((timestamp, elapsed) => validatedChild.props.animate(timestamp, elapsed, geometry));
            }

            handleForwardRef(validatedChild.props.innerRef, geometry);
            return;
        }

        const object = new childContructor[childType](...(validatedChild.props.params === undefined ? [] : validatedChild.props.params));
        parent.add(object);

        if (validatedChild.props.animate) {
            animations.current?.push((timestamp, elapsed) => validatedChild.props.animate(timestamp, elapsed, object));
        }

        handleForwardRef(validatedChild.props.innerRef, object);
        return;
    }

    // add children to the renderer
    useLayoutEffect(() => {
        const childrenArray = React.Children.toArray(props.children);

        childrenArray.forEach((child) => {
            handleMainChild(child);
        });

        return () => {
            // TODO: remove previous children
            cameraRef.current = undefined;
            sceneRef.current = undefined;
            animations.current = [];
        }
    }, [props.children])

    // console.log(React.Children.toArray(props.children));
    // console.log(simplifyChildren(props.children));
    // useEffectWithArray(() => {
    // console.log('useEffectWithArray');
    // }, props.children);

    useEffect(() => {
        handleForwardRef(props.innerRef, rendererRef.current!);
    }, [forwardRef]);
    return <>
        {props.children}
    </>
};
