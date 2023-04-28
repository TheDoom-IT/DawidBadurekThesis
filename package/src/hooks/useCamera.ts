import * as THREE from 'three';
import { useEffect } from 'react';
import { ParamsProps } from '../types';
import { useObject3D } from './useObject3D';
import { useCanvasContext } from '../contexts/canvas-context';

export function useCamera<C extends new (...params: any[]) => R, R extends THREE.Camera>(
    constructor: C,
    props: ParamsProps<C, R>,
): R {
    const object = useObject3D(constructor, props);
    const canvasContext = useCanvasContext();

    useEffect(() => {
        if (!canvasContext?.setCamera) {
            return;
        }

        if (canvasContext?.camera !== null && canvasContext.camera !== object) {
            console.warn(
                'Canvas should contain only single camera object. Only second camera will be used.',
            );
        }

        canvasContext.setCamera(object);
    }, [object, canvasContext?.setCamera, canvasContext?.camera]);

    return object;
}
