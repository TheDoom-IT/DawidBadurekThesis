import React, { ForwardedRef, useEffect } from 'react';
import * as THREE from 'three';
import { useCanvasContext } from '../contexts/canvas-context';
import { useObject3D } from '../hooks/useObject3D';
import { Object3DProps } from '../types';

export function createThreeCamera<C extends new (...params: any[]) => R, R extends THREE.Camera>(
    constructor: C,
) {
    //eslint-disable-next-line react/display-name
    return React.forwardRef<R, Object3DProps<C, R>>(
        (props: Object3DProps<C, R>, ref: ForwardedRef<R>) => {
            const object = useObject3D(constructor, props, ref);
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
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [object, canvasContext?.setCamera, canvasContext?.camera]);

            return <>{props.children}</>;
        },
    );
}
