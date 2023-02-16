import React from 'react';
import { animation } from './animation';

export type BasicProps<C extends new (...params: any) => any, R> = {
    innerRef?: React.ForwardedRef<R>;
    children?: React.ReactNode;
    animate?: animation<R>;
    params?: ConstructorParameters<C>;
};

export type ExtendedProps<P, C extends new (...params: any) => any, R> = P & BasicProps<C, R>;

export type MaterialProps<C extends new (...params: any) => any, R> = BasicProps<C, R>;
export type GeometryProps<C extends new (...params: any) => any, R> = BasicProps<C, R>;
export type Object3DProps<C extends new (...params: any) => any, R> = ExtendedProps<
    {
        position?: [x: number, y: number, z: number];
        rotation?: [x: number, y: number, z: number];
    },
    C,
    R
>;
