import React, { FC, useEffect } from 'react';
import * as THREE from 'three';
import { useCanvasContext } from '../contexts/canvas-context';
import { useThreeObject } from '../hooks/useThreeObject';
import { Object3DProps } from '../types/props';

export function createThreeCamera<C extends new (...params: any[]) => R, R extends THREE.Camera>(
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

            if (canvasContext?.camera !== null && canvasContext.camera !== object) {
                console.warn(
                    'Canvas should contain only single camera object. Only second camera will be used.',
                );
            }

            canvasContext.setCamera(object);
        }, [object, canvasContext?.setCamera, canvasContext?.camera]);

        return <>{props.children}</>;
    };
}