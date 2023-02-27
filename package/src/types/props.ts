import React from 'react';
import { Animation } from './animation';

export type BasicProps<R> = {
    innerRef?: React.ForwardedRef<R>;
    children?: React.ReactNode;
    animate?: Animation<R>;
};

export type ParamsProps<C extends new (...params: any[]) => R, R> = BasicProps<R> & {
    params?: ConstructorParameters<C>;
};

export type ExtendedProps<P, C extends new (...params: any[]) => R, R> = P & ParamsProps<C, R>;

export type MaterialProps<C extends new (...params: any[]) => R, R> = ParamsProps<C, R>;
export type GeometryProps<C extends new (...params: any[]) => R, R> = ParamsProps<C, R>;
export type Object3DProps<C extends new (...params: any[]) => R, R> = ExtendedProps<
    {
        position?: [x: number, y: number, z: number];
        rotation?: [x: number, y: number, z: number];
    },
    C,
    R
>;
