import React, { FC } from 'react';
import { ParentContext } from '../contexts/parent-context';
import { useThreeObject } from '../hooks/useThreeObject';
import { Object3DProps } from '../types';

export function createThreeObject<C extends new (...params: any[]) => R, R extends THREE.Object3D>(
    constructor: C,
): FC<Object3DProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: Object3DProps<C, R>) => {
        const object = useThreeObject(constructor, props);

        return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
    };
}
