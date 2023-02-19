import React, { FC, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { useCanvasContext } from '../contexts/canvas-context';
import { ParentContext } from '../contexts/parent-context';
import { useThreeObject } from '../hooks/useThreeObject';
import { BasicProps } from '../types/props';

export type MainSceneProps = BasicProps<typeof THREE.Scene, THREE.Scene>;

export const MainScene: FC<MainSceneProps> = (props: MainSceneProps) => {
    const object = useThreeObject(THREE.Scene, props);
    const canvasContext = useCanvasContext();

    useLayoutEffect(() => {
        if (!object || !canvasContext?.setScene) {
            return;
        }

        canvasContext.setScene(object);
    }, [object, canvasContext?.setScene]);
    return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
};
