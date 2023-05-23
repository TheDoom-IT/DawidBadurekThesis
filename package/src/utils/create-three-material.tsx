import React, { ForwardedRef, useLayoutEffect } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { ParamsProps } from '../types';
import { useDisposableObject } from '../hooks/useDisposableObject';
import * as THREE from 'three';

export function createThreeMaterial<
    C extends new (...params: any[]) => R,
    R extends THREE.Material,
>(constructor: C) {
    //eslint-disable-next-line react/display-name
    return React.forwardRef<R, ParamsProps<C, R>>(
        (props: ParamsProps<C, R>, ref: ForwardedRef<R>) => {
            const object = useDisposableObject(constructor, props, ref);

            const parent = useParentContext();

            useLayoutEffect(() => {
                if (!object) {
                    return;
                }

                if (parent && 'material' in parent) {
                    const previousMaterial = parent.material;
                    parent.material = object;

                    return () => {
                        parent.material = previousMaterial;
                    };
                }
            }, [parent, object]);

            return <>{props.children}</>;
        },
    );
}
