import React, { FC, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { useCanvasContext } from '../contexts/canvas-context';
import { ParentContext } from '../contexts/parent-context';
import { useObject3D } from '../hooks/useObject3D';
import { BasicProps } from '../types';

export type MainSceneProps = BasicProps<THREE.Scene>;

export const MainScene: FC<MainSceneProps> = (props: MainSceneProps) => {
    const object = useObject3D(THREE.Scene, props);
    const canvasContext = useCanvasContext();

    useLayoutEffect(() => {
        if (!object || !canvasContext?.setScene) {
            return;
        }

        if (canvasContext?.mainScene !== null && canvasContext.mainScene !== object) {
            console.warn(
                'Canvas should contain only single scene object. Only second scene will be used.',
            );
        }

        canvasContext.setScene(object);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canvasContext?.mainScene, canvasContext?.setScene, object]);
    return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
};
