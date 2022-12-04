import React, { ForwardedRef, forwardRef, useEffect, useRef, useLayoutEffect, ReactElement, ReactFragment, ReactNode, ReactPortal } from 'react';
import * as THREE from 'three';
import * as ReactIs from "react-is";
import { useEffectWithArray } from '../hooks/useEffectWithArray';
import { handleForwardRef, addTestScene } from '../utils';
import { getElementType } from '../utils/get-element-type';
import { MAIN_PARENT } from '../main-parent';
import { cameraChildren, childContructor, geometryChildren, materialChildren, meshChild, sceneChild } from '../utils/supported-children';
import { ObjectProps } from '../types/object-props';
import { validateChildType } from '../utils/validate-child-type';
import { isElementSupported } from '../utils/is-element-supported';

export type CanvasProps = ObjectProps<{ divId: string }, typeof THREE.WebGLRenderer, THREE.WebGLRenderer>

export const Canvas = (props: CanvasProps) => {
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const sceneRef = useRef<THREE.Scene>();
    const cameraRef = useRef<THREE.PerspectiveCamera>();
    const animations = useRef<{ (timestamp: number): void }[]>([]);
    const animationFrameId = useRef<number>(0);

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
        resizeCanvasIfNeeded();

        if (sceneRef.current !== undefined && cameraRef.current !== undefined) {
            rendererRef.current!.render(sceneRef.current, cameraRef.current);
        }
        // TODO: run other animations here
        animations.current?.forEach(animation => animation(timestamp));

        animationFrameId.current = requestAnimationFrame(animate);
    }

    // create renderer, remove it on unmount
    useLayoutEffect(() => {
        rendererRef.current = new THREE.WebGLRenderer();
        animate(0);

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
        validateChildType(child);

        const reactElementChild = child as ReactElement;
        const type = getElementType(reactElementChild);
        isElementSupported(type, MAIN_PARENT);

        if (cameraChildren.includes(type)) {
            if (cameraRef.current !== undefined) {
                throw new Error('Canvas should contain only single camera object.');
            }
            cameraRef.current = new childContructor[type](...reactElementChild.props.params) as THREE.PerspectiveCamera;
            // TODO: update camera aspect here
            updateCameraAspect();

            handleForwardRef(reactElementChild.props.innerRef, cameraRef.current);
            return;
        }

        if (type === sceneChild) {
            if (sceneRef.current !== undefined) {
                throw new Error('Canvas should contain only single scene object.')
            }
            sceneRef.current = new THREE.Scene();

            const childrenArray = React.Children.toArray(reactElementChild.props.children);
            childrenArray.forEach((child) => {
                handleChild(child, sceneRef.current);
            })

            handleForwardRef(reactElementChild.props.innerRef, sceneRef.current);
            return;
        }
    }

    const handleChild = (child: ReturnType<typeof React.Children.toArray>[number], parent: any) => {
        validateChildType(child);

        const childType = getElementType(child as ReactElement);
        isElementSupported(childType, parent.type);

        console.log(childType);

        if (childType === meshChild) {
            const mesh = new THREE.Mesh();
            sceneRef.current?.add(mesh);

            if ((child as ReactElement).props.animate) {
                animations.current?.push((timestamp) => (child as ReactElement).props.animate(timestamp, mesh));
            }
            const childrenArray = React.Children.toArray((child as ReactElement).props.children);
            childrenArray.forEach((child) => {
                handleChild(child, mesh);
            });

            handleForwardRef((child as ReactElement).props.innerRef, mesh);
        }

        if (materialChildren.includes(childType)) {
            const material = new childContructor[childType](...(child as ReactElement).props.params);
            parent.material = material;

            console.log(material);
            if ((child as ReactElement).props.animate) {
                animations.current?.push((timestamp) => (child as ReactElement).props.animate(timestamp, material));
            }

            handleForwardRef((child as ReactElement).props.innerRef, material);
            return;
        }

        if (geometryChildren.includes(childType)) {
            const geometry = new childContructor[childType](...(child as ReactElement).props.params);
            parent.geometry = geometry;

            if ((child as ReactElement).props.animate) {
                animations.current?.push((timestamp) => (child as ReactElement).props.animate(timestamp, geometry));
            }

            handleForwardRef((child as ReactElement).props.innerRef, geometry);
            return;
        }
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
