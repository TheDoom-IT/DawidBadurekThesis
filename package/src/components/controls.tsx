import React, { useLayoutEffect } from 'react';
import { useCanvasContext } from '../contexts/canvas-context';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const OrbitControls = () => {
    const canvasContext = useCanvasContext();

    useLayoutEffect(() => {
        if (!canvasContext?.camera || !canvasContext?.renderer) {
            return;
        }

        const controls = new ThreeOrbitControls(
            canvasContext.camera,
            canvasContext.renderer.domElement,
        );

        return () => {
            controls.dispose();
        };
    }, [canvasContext?.camera, canvasContext?.renderer]);
    return <></>;
};
