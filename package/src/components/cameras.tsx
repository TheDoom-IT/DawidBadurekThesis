import React, { FC, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types';
import { createThreeCamera } from '../utils';
import { useCamera } from '../hooks/useCamera';
import { useCanvasContext } from '../contexts/canvas-context';

export type OrtographicCameraProps = Object3DProps<
    typeof THREE.OrthographicCamera,
    THREE.OrthographicCamera
>;
export type PerspectiveCameraProps = Object3DProps<
    typeof THREE.PerspectiveCamera,
    THREE.PerspectiveCamera
>;

export const OrtographicCamera: FC<OrtographicCameraProps> = createThreeCamera(
    THREE.OrthographicCamera,
);
export const PerspectiveCamera: FC<PerspectiveCameraProps> = (props) => {
    const camera = useCamera(THREE.PerspectiveCamera, props);
    const canvasContext = useCanvasContext();

    useLayoutEffect(() => {
        if (!canvasContext?.size) {
            return;
        }

        console.log(`aspect updated ${canvasContext.size.width} ${canvasContext.size.height}`);
        camera.aspect = canvasContext.size.width / canvasContext.size.height;
        camera.updateProjectionMatrix();
    }, [camera, canvasContext?.size?.height, canvasContext?.size?.width]);

    return <>{props.children}</>;
};
