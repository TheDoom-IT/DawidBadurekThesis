import React from 'react';
import { animation } from './animation';

export type BasicProps<C extends new (...params: any) => any> = {
    innerRef?: React.ForwardedRef<InstanceType<C>>;
    children?: React.ReactNode;
    animate?: animation<InstanceType<C>>;
    params?: ConstructorParameters<C>;
};

export type ExtendedProps<P, C extends new (...params: any) => any> = P & BasicProps<C>;

export type MaterialProps<C extends new (...params: any) => any> = BasicProps<C>;
export type GeometryProps<C extends new (...params: any) => any> = BasicProps<C>;
export type Object3DProps<C extends new (...params: any) => any> = ExtendedProps<
    {
        position?: [x: number, y: number, z: number];
        rotation?: [x: number, y: number, z: number];
    },
    C
>;
