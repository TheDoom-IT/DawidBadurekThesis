import React, { FC } from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types';
import { useCamera } from '../hooks/useCamera';

export function createThreeCamera<C extends new (...params: any[]) => R, R extends THREE.Camera>(
    constructor: C,
): FC<Object3DProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: Object3DProps<C, R>) => {
        useCamera(constructor, props);

        return <>{props.children}</>;
    };
}
