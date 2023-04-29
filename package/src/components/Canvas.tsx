import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import * as POST from 'postprocessing';
import { handleForwardRef } from '../utils';
import { ExtendedProps } from '../types';
import { CanvasContext, CanvasContextType } from '../contexts/canvas-context';
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
    const [effectComposer, setEffectComposer] = useState<POST.EffectComposer | null>(null);
    const [size, setSize] = useState<{ width: number; height: number } | null>(null);

    useAnimation(props.animate, renderer);
    const animationFrameId = useRef<number | null>(null);

    const findDiv = useCallback(() => {
        const div = document.getElementById(props.divId);
        if (!div) {
            throw new Error(`Failed to find a div with id "${props.divId}"!`);
        }
        return div;
    }, [props.divId]);

    const updateCameraAspect = useCallback(
        (camera: THREE.Camera | null, aspect?: number) => {
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
        },
        [findDiv],
    );

    const setNewCamera = useCallback(
        (camera: THREE.Camera) => {
            setCamera(camera);
            updateCameraAspect(camera);
        },
        [updateCameraAspect],
    );

    const canvasContext = useMemo<CanvasContextType>(() => {
        return {
            renderer,
            mainScene: scene,
            setScene,
            camera: camera,
            setCamera: setNewCamera,
            setEffectComposer,
            effectComposer: effectComposer,
            size,
        };
    }, [renderer, scene, camera, setNewCamera, effectComposer, size]);

    // make canvas adaptive to the div size
    const resizeCanvasIfNeeded = useCallback(() => {
        if (!renderer) {
            return;
        }
        const div = findDiv();

        const { height, width } = div.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = renderer.domElement;

        if (Math.floor(height) !== canvasHeight || Math.floor(width) !== canvasWidth) {
            renderer.setSize(width, height, false);
            setSize({ width, height });
            updateCameraAspect(camera, width / height);
        }
    }, [findDiv, updateCameraAspect, renderer, camera]);

    const render = useCallback(() => {
        resizeCanvasIfNeeded();

        if (scene !== null && camera !== null) {
            if (effectComposer !== null) {
                effectComposer.render();
            } else {
                renderer?.render(scene, camera);
            }
        }

        animationFrameId.current = requestAnimationFrame(render);
    }, [effectComposer, scene, camera, renderer, resizeCanvasIfNeeded]);

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
    }, [findDiv, renderer]);

    useLayoutEffect(() => {
        const newRenderer = new THREE.WebGLRenderer();
        setRenderer(newRenderer);

        return () => {
            newRenderer.dispose();
            // TODO: React.ScrictMode causes canvas to show lack of context for a single frame
            newRenderer.forceContextLoss();
        };
    }, []);

    useLayoutEffect(() => {
        if (!renderer) {
            return;
        }

        return handleForwardRef(props.innerRef, renderer);
    }, [props.innerRef, renderer]);

    // start render loop
    useLayoutEffect(() => {
        animationFrameId.current = requestAnimationFrame(render);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            animationFrameId.current = null;
        };
    }, [render]);

    return <CanvasContext.Provider value={canvasContext}>{props.children}</CanvasContext.Provider>;
};
