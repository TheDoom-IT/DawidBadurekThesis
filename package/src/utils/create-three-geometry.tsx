import React, { ForwardedRef, useLayoutEffect } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { ParamsProps } from '../types';
import * as THREE from 'three';
import { useDisposableObject } from '../hooks/useDisposableObject';

export function createThreeGeometry<
    C extends new (...params: any[]) => R,
    R extends THREE.BufferGeometry,
>(constructor: C) {
    //eslint-disable-next-line react/display-name
    return React.forwardRef<R, ParamsProps<C, R>>(
        (props: ParamsProps<C, R>, ref: ForwardedRef<R>) => {
            const parent = useParentContext();
            const object = useDisposableObject(constructor, props, ref);

            useLayoutEffect(() => {
                if (!object) {
                    return;
                }

                if (parent && 'geometry' in parent) {
                    const previousGeometry = parent.geometry;
                    parent.geometry = object;

                    return () => {
                        parent.geometry = previousGeometry;
                    };
                }
            }, [parent, object]);

            return <>{props.children}</>;
        },
    );
}
