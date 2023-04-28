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

    const setNewCamera = useCallback(
        (camera: THREE.Camera) => {
            setCamera(camera);
            updateCameraAspect(camera, size ? size.width / size.height : undefined);
        },
        [setCamera],
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
    }, [renderer, scene, camera, setScene, setNewCamera, effectComposer, setEffectComposer, size]);

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
            console.log(`size changed: ${width} ${height}`);
            // updateCameraAspect(camera, width / height);
        }
    }, [renderer, camera]);

    const render = useCallback(() => {
        // console.log('render before resize');
        // resizeCanvasIfNeeded();
        // console.log('render after resize');
        if (scene !== null && camera !== null) {
            if (effectComposer !== null) {
                effectComposer.render();
            } else {
                renderer?.render(scene, camera);
            }
        }

        resizeCanvasIfNeeded();
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
        console.log('start render loop');
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
