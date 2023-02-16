import React, { forwardRef, useEffect, useRef, useLayoutEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { handleForwardRef } from '../utils';
import { ExtendedProps } from '../types';
import { CanvasContext } from '../contexts/canvas-context';
import { ParentContext } from '../contexts/parent-context';

export type CanvasTestProps = ExtendedProps<
    { divId: string },
    typeof THREE.WebGLRenderer,
    THREE.WebGLRenderer
>;

export const CanvasTest = (props: CanvasTestProps) => {
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
    const [scene, setScene] = useState<THREE.Scene | null>(null);
    const [camera, setCamera] = useState<THREE.Camera | null>(null);
    const animationFrameId = useRef<number>(0);
    const previousTimestamp = useRef<number>();

    const canvasContext = useMemo<CanvasContext>(() => {
        if (renderer && scene && camera) {
            return {
                renderer,
                mainScene: scene,
                camera: camera,
            };
        }

        return null;
    }, [renderer, scene, camera]);

    const findDiv = () => {
        const div = document.getElementById(props.divId);
        if (!div) {
            throw new Error(`Failed to find a div with id "${props.divId}"!`);
        }
        return div;
    };

    const updateCameraAspect = (aspect?: number) => {
        if (!camera || !(camera instanceof THREE.PerspectiveCamera)) {
            return;
        }

        if (aspect !== undefined) {
            camera.aspect = aspect;
        } else {
            const div = findDiv();
            const { height, width } = div.getBoundingClientRect();
            camera.aspect = width / height;
        }

        camera.updateProjectionMatrix();
    };

    // make canvas addaptive to the div size
    const resizeCanvasIfNeeded = () => {
        if (!renderer) {
            return;
        }
        const div = findDiv();

        const { height, width } = div.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = renderer.domElement;

        if (height !== canvasHeight || width !== canvasWidth) {
            renderer?.setSize(width, height, false);
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

        // animations.current?.forEach((animation) => animation(timestamp, elapsed));

        if (scene !== null && camera !== null) {
            renderer?.render(scene, camera);
        }

        animationFrameId.current = requestAnimationFrame(animate);
    };

    useLayoutEffect(() => {
        const camera = new THREE.PerspectiveCamera();
        camera.position.z = 5;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x999999);
        setRenderer(new THREE.WebGLRenderer());
        setScene(scene);
        setCamera(camera);

        return () => {
            renderer?.dispose();
            renderer?.forceContextLoss();
        };
    }, []);

    // create WebGLRenderer
    useLayoutEffect(() => {
        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, [renderer, scene, camera]);

    // append canvas to the DOM
    useLayoutEffect(() => {
        if (!renderer) {
            return;
        }
        const div = findDiv();
        div.appendChild(renderer.domElement); //eslint-disable-line @typescript-eslint/no-non-null-assertion

        return () => {
            div.removeChild(renderer.domElement); //eslint-disable-line @typescript-eslint/no-non-null-assertion
        };
    }, [props.divId, renderer]);

    useEffect(() => {
        handleForwardRef(props.innerRef, renderer!); //eslint-disable-line @typescript-eslint/no-non-null-assertion
    }, [forwardRef]);

    return (
        <CanvasContext.Provider value={canvasContext}>
            <ParentContext.Provider value={scene}>{props.children}</ParentContext.Provider>
        </CanvasContext.Provider>
    );
};
