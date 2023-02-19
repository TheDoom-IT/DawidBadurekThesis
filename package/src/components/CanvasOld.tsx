import React, { forwardRef, useEffect, useRef, useLayoutEffect, ReactElement } from 'react';
import * as ReactIs from 'react-is';
import * as THREE from 'three';
import {
    checkIsElementSupported,
    getElementType,
    handleForwardRef,
    validateChildType,
} from '../utils';
import {
    cameraChildren,
    controlsChildren,
    geometryChildren,
    mainParent,
    materialChildren,
    sceneChild,
} from '../constants/children-list';
import { constructors, controlsConstructor } from '../constants';
import { ExtendedProps } from '../types';
import { useLayoutEffectWithChildren } from '../hooks/useEffectWithArray';
import { Object3D } from 'three';

export type CanvasOldProps = ExtendedProps<
    { divId: string },
    typeof THREE.WebGLRenderer,
    THREE.WebGLRenderer
>;

export const CanvasOld = (props: CanvasOldProps) => {
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const sceneRef = useRef<THREE.Object3D>();
    const cameraRef = useRef<THREE.PerspectiveCamera>();
    const animations = useRef<{ (timestamp: number, elapsed: number): void }[]>([]);
    const objects = useRef<any[]>([]);
    const controlsToCreate = useRef<string[]>([]);
    const animationFrameId = useRef<number>(0);
    const previousTimestamp = useRef<number>();

    const findDiv = () => {
        const div = document.getElementById(props.divId);
        if (!div) {
            throw new Error(`Failed to find a div with id "${props.divId}"!`);
        }
        return div;
    };

    const updateCameraAspect = (aspect?: number) => {
        if (!cameraRef.current) {
            return;
        }

        if (aspect !== undefined) {
            cameraRef.current.aspect = aspect;
        } else {
            const div = findDiv();
            const { height, width } = div.getBoundingClientRect();
            cameraRef.current.aspect = width / height;
        }

        cameraRef.current.updateProjectionMatrix();
    };

    // make canvas addaptive to the div size
    const resizeCanvasIfNeeded = () => {
        const div = findDiv();

        const { height, width } = div.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = rendererRef.current!.domElement; //eslint-disable-line @typescript-eslint/no-non-null-assertion

        if (height !== canvasHeight || width !== canvasWidth) {
            rendererRef.current?.setSize(width, height, false);
            updateCameraAspect(width / height);
        }
    };

    const animate = (timestamp: number) => {
        if (previousTimestamp.current == undefined) {
            previousTimestamp.current = timestamp;
        }

        const elapsed = timestamp - previousTimestamp.current;
        previousTimestamp.current = timestamp;
        resizeCanvasIfNeeded();

        animations.current?.forEach((animation) => animation(timestamp, elapsed));

        if (sceneRef.current !== undefined && cameraRef.current !== undefined) {
            rendererRef.current?.render(sceneRef.current, cameraRef.current);
        }

        animationFrameId.current = requestAnimationFrame(animate);
    };

    const childHandler = (
        childType: string,
        validatedChild: ReactElement,
        callback: (object: any) => void,
    ) => {
        const object = new constructors[childType](...(validatedChild.props.params ?? []));
        objects.current.push(object);
        callback(object);

        if (object instanceof Object3D) {
            if (validatedChild.props.position) {
                const [x, y, z] = validatedChild.props.position;
                object.position.set(x, y, z);
            }

            if (validatedChild.props.rotation) {
                const [x, y, z] = validatedChild.props.rotation;
                object.rotation.set(x, y, z);
            }
        }

        if (validatedChild.props.animate) {
            animations.current?.push((timestamp, elapsed) =>
                validatedChild.props.animate(timestamp, elapsed, object),
            );
        }

        const childrenArray = React.Children.toArray(validatedChild.props.children);
        childrenArray.forEach((child) => {
            handleChild(child, object.type, object);
        });

        handleForwardRef(validatedChild.props.innerRef, object);
    };

    const handleChild = (
        child: ReturnType<typeof React.Children.toArray>[number],
        parentType: string,
        parent?: any,
    ) => {
        if (ReactIs.typeOf(child) === ReactIs.Fragment) {
            const children = (child as ReactElement).props.children;
            const childrenArray = React.Children.toArray(children);
            childrenArray.forEach((child) => handleChild(child, parentType, parent));
            return;
        }

        const validatedChild = validateChildType(child);
        const childType = getElementType(validatedChild);
        checkIsElementSupported(childType, parentType);

        if (cameraChildren.includes(childType)) {
            childHandler(childType, validatedChild, (object) => {
                if (cameraRef.current !== undefined) {
                    console.warn(
                        'Canvas should contain only single camera object. Only second camera will be used.',
                    );
                }
                cameraRef.current = object;
                updateCameraAspect();
            });
            return;
        }

        if (childType === sceneChild) {
            childHandler(childType, validatedChild, (object) => {
                if (sceneRef.current !== undefined) {
                    console.warn(
                        'Canvas should contain only single scene object. Only second scene will be used.',
                    );
                }
                sceneRef.current = object;
            });
            return;
        }

        if (materialChildren.includes(childType)) {
            childHandler(childType, validatedChild, (object) => {
                parent.material = object;
            });
            return;
        }

        if (geometryChildren.includes(childType)) {
            childHandler(childType, validatedChild, (object) => {
                parent.geometry = object;
            });
            return;
        }

        if (controlsChildren.includes(childType)) {
            controlsToCreate.current.push(childType);
            return;
        }
        // Object3D
        childHandler(childType, validatedChild, (object) => {
            parent.add(object);
        });
    };

    const createControls = () => {
        controlsToCreate.current.forEach((controlType) => {
            if (cameraRef.current) {
                const control = controlsConstructor[controlType](
                    cameraRef.current,
                    rendererRef.current?.domElement,
                );
                objects.current.push(control);
            }
        });
    };

    // create WebGLRenderer
    useLayoutEffect(() => {
        rendererRef.current = new THREE.WebGLRenderer();
        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId.current);

            rendererRef.current?.dispose();
            rendererRef.current?.forceContextLoss();
        };
    }, []);

    // append canvas to the DOM
    useLayoutEffect(() => {
        const div = findDiv();
        div.appendChild(rendererRef.current!.domElement); //eslint-disable-line @typescript-eslint/no-non-null-assertion

        return () => {
            div.removeChild(rendererRef.current!.domElement); //eslint-disable-line @typescript-eslint/no-non-null-assertion
        };
    }, [props.divId]);

    useLayoutEffectWithChildren(() => {
        const childrenArray = React.Children.toArray(props.children);

        childrenArray.forEach((child) => {
            handleChild(child, mainParent);
        });

        createControls();

        return () => {
            objects.current.forEach((object) => {
                // TODO: check if children array should be cleared
                // maybe dispose() is enough
                // if (object.children) {
                // object.children = [];
                // }

                if (typeof object.dispose === 'function') {
                    object.dispose();
                }
            });
            cameraRef.current = undefined;
            sceneRef.current = undefined;
            objects.current = [];
            animations.current = [];
            controlsToCreate.current = [];
        };
    }, props.children);

    useEffect(() => {
        handleForwardRef(props.innerRef, rendererRef.current!); //eslint-disable-line @typescript-eslint/no-non-null-assertion
    }, [forwardRef]);

    return <></>;
};
