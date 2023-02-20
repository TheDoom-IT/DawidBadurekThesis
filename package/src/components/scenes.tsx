import React, { FC, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { useCanvasContext } from '../contexts/canvas-context';
import { ParentContext } from '../contexts/parent-context';
import { useThreeObject } from '../hooks/useThreeObject';
import { BasicProps } from '../types/props';

export type MainSceneProps = BasicProps<THREE.Scene>;

export const MainScene: FC<MainSceneProps> = (props: MainSceneProps) => {
    const object = useThreeObject(THREE.Scene, props);
    const canvasContext = useCanvasContext();

    // TODO: add innerRef and animate functions
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
    }, [object, canvasContext?.setScene, canvasContext?.mainScene]);
    return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
};
