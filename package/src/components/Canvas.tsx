import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { handleForwardRef } from '../utils';
import { ExtendedProps } from '../types';
import { CanvasContext } from '../contexts/canvas-context';
import { useAnimation } from '../hooks/useAnimation';

export type CanvasProps = ExtendedProps<
    { divId: string },
    typeof THREE.WebGLRenderer,
    THREE.WebGLRenderer
>;

export const Canvas = (props: CanvasProps) => {
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
    const [scene, setScene] = useState<THREE.Scene | null>(null);
    const [camera, setCamera] = useState<THREE.Camera | null>(null);
    useAnimation(props.animate, renderer);
    const animationFrameId = useRef<number | null>(null);

    const setNewCamera = useCallback(
        (camera: THREE.Camera) => {
            setCamera(camera);
            updateCameraAspect(camera);
        },
        [setCamera],
    );

    const canvasContext = useMemo<CanvasContext>(() => {
        return {
            renderer,
            mainScene: scene,
            setScene,
            camera: camera,
            setCamera: setNewCamera,
        };
    }, [renderer, scene, camera, setScene, setCamera]);

    const findDiv = () => {
        const div = document.getElementById(props.divId);
        if (!div) {
            throw new Error(`Failed to find a div with id "${props.divId}"!`);
        }
        return div;
    };

    const updateCameraAspect = (camera: THREE.Camera | null, aspect?: number) => {
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
            renderer.setSize(width, height, false);
            updateCameraAspect(camera, width / height);
        }
    };

    const render = () => {
        resizeCanvasIfNeeded();

        if (scene !== null && camera !== null) {
            renderer?.render(scene, camera);
        }

        animationFrameId.current = requestAnimationFrame(render);
    };

    // append canvas to the DOM
    useLayoutEffect(() => {
        if (!renderer) {
            return;
        }
        const div = findDiv();
        div.appendChild(renderer.domElement);
        return () => {
            div.removeChild(renderer.domElement);
        };
    }, [props.divId, renderer]);

    useLayoutEffect(() => {
        const newRenderer = new THREE.WebGLRenderer();
        setRenderer(newRenderer);

        const cleanRef = handleForwardRef(props.innerRef, newRenderer);

        return () => {
            if (cleanRef) {
                cleanRef();
            }
            newRenderer.dispose();
            // TODO: React.ScrictMode causes canvas to show lack of context for a single frame
            newRenderer.forceContextLoss();
        };
    }, []);

    // start render loop
    useLayoutEffect(() => {
        animationFrameId.current = requestAnimationFrame(render);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            animationFrameId.current = null;
        };
    }, [renderer, scene, camera]);

    return <CanvasContext.Provider value={canvasContext}>{props.children}</CanvasContext.Provider>;
};
