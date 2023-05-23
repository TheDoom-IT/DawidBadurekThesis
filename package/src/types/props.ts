import React from 'react';
import { Animation } from './animation';
import * as THREE from 'three';

export type BasicProps<R> = {
    children?: React.ReactNode;
    animate?: Animation<R>;
};

export type ParamsProps<C extends new (...params: any[]) => R, R> = BasicProps<R> & {
    params?: ConstructorParameters<C>;
};

export type Object3DProps<
    C extends new (...params: any[]) => R,
    R extends THREE.Object3D,
> = ParamsProps<C, R> & {
    position?: [x: number, y: number, z: number];
    rotation?: [x: number, y: number, z: number];
};
