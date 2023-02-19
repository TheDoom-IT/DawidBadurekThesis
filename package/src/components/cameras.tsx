import React, { FC, useEffect } from 'react';
import * as THREE from 'three';
import { useCanvasContext } from '../contexts/canvas-context';
import { useThreeObject } from '../hooks/useThreeObject';
import { Object3DProps } from '../types/props';

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
export const PerspectiveCamera: FC<PerspectiveCameraProps> = createThreeCamera(
    THREE.PerspectiveCamera,
);

function createThreeCamera<C extends new (...params: any) => R, R extends THREE.Camera>(
    constructor: C,
): FC<Object3DProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: Object3DProps<C, R>) => {
        const object = useThreeObject(constructor, props);
        const canvasContext = useCanvasContext();

        useEffect(() => {
            if (!object || !canvasContext?.setCamera) {
                return;
            }

            canvasContext.setCamera(object);
        }, [object, canvasContext?.setCamera]);

        return <>{props.children}</>;
    };
}
