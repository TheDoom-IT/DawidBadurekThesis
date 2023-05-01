import React, { ForwardedRef, useEffect } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { MaterialProps } from '../types';
import { useDisposableObject } from '../hooks/useDisposableObject';
import * as THREE from 'three';

export function createThreeMaterial<
    C extends new (...params: any[]) => R,
    R extends THREE.Material,
>(constructor: C) {
    //eslint-disable-next-line react/display-name
    return React.forwardRef<R, MaterialProps<C, R>>(
        (props: MaterialProps<C, R>, ref: ForwardedRef<R>) => {
            const object = useDisposableObject(constructor, props, ref);

            const parent = useParentContext();

            useEffect(() => {
                if (!object) {
                    return;
                }

                if (parent && 'material' in parent) {
                    parent.material = object;

                    return () => {
                        // TODO: how to remove material from a parent
                        // parent.material = null;
                    };
                }
            }, [parent, object]);

            return <>{props.children}</>;
        },
    );
}
