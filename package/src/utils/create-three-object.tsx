import React, { ForwardedRef } from 'react';
import { ParentContext } from '../contexts/parent-context';
import { useObject3D } from '../hooks/useObject3D';
import { Object3DProps } from '../types';
import * as THREE from 'three';

export function createThreeObject<C extends new (...params: any[]) => R, R extends THREE.Object3D>(
    constructor: C,
) {
    //eslint-disable-next-line react/display-name
    return React.forwardRef<R, Object3DProps<C, R>>(
        (props: Object3DProps<C, R>, ref: ForwardedRef<R>) => {
            const object = useObject3D(constructor, props, ref);

            return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
        },
    );
}
