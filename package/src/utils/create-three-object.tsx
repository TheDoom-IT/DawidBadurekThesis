import React, { FC } from 'react';
import { ParentContext } from '../contexts/parent-context';
import { useObject3D } from '../hooks/useObject3D';
import { Object3DProps } from '../types';

export function createThreeObject<C extends new (...params: any[]) => R, R extends THREE.Object3D>(
    constructor: C,
): FC<Object3DProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: Object3DProps<C, R>) => {
        const object = useObject3D(constructor, props);

        return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
    };
}
