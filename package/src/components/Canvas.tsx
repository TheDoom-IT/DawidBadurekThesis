import React, { useRef, useLayoutEffect, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import * as POST from 'postprocessing';
import { handleForwardRef } from '../utils';
import { ParamsProps } from '../types';
import { CanvasContext, CanvasContextType } from '../contexts/canvas-context';
import { useAnimation } from '../hooks/useAnimation';

export type CanvasProps = ParamsProps<typeof THREE.WebGLRenderer, THREE.WebGLRenderer>;

export const Canvas = (props: CanvasProps) => {
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
    const [scene, setScene] = useState<THREE.Scene | null>(null);
    const [camera, setCamera] = useState<THREE.Camera | null>(null);
    const [effectComposer, setEffectComposer] = useState<POST.EffectComposer | null>(null);
    const [size, setSize] = useState<{ width: number; height: number } | null>(null);
    const divRef = useRef<HTMLDivElement>(null);

    useAnimation(props.animate, renderer);
    const animationFrameId = useRef<number | null>(null);
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

    const updateCameraAspect = useCallback((camera: THREE.Camera | null, aspect?: number) => {
        if (!camera || !(camera instanceof THREE.PerspectiveCamera) || !divRef.current) {
            return;
        }

        if (aspect !== undefined) {
            camera.aspect = aspect;
        } else {
            const { height, width } = divRef.current.getBoundingClientRect();
            camera.aspect = width / height;
        }

        camera.updateProjectionMatrix();
    }, []);

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
        if (!renderer || !divRef.current) {
            return;
        }
        const { height, width } = divRef.current.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = renderer.domElement;

        if (Math.floor(height) !== canvasHeight || Math.floor(width) !== canvasWidth) {
            renderer.setSize(width, height, false);
            setSize({ width, height });
            updateCameraAspect(camera, width / height);
        }
    }, [updateCameraAspect, renderer, camera]);

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

    useLayoutEffect(() => {
        if (!canvas) {
            return;
        }

        const newRenderer = new THREE.WebGLRenderer({ canvas: canvas });
        setRenderer(newRenderer);

        return () => {
            newRenderer.dispose();
            // TODO: React.ScrictMode causes canvas to show lack of context for a single frame
            newRenderer.forceContextLoss();
        };
    }, [canvas]);

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

    const initCanvas = useCallback((ref: HTMLCanvasElement | null) => {
        setCanvas(ref);
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }} ref={divRef}>
            <canvas ref={initCanvas} style={{ display: 'block' }}>
                <CanvasContext.Provider value={canvasContext}>
                    {props.children}
                </CanvasContext.Provider>
            </canvas>
        </div>
    );
};
