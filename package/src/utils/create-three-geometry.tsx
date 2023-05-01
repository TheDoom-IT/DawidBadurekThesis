import React, { ForwardedRef, useEffect } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { useAnimation } from '../hooks/useAnimation';
import { GeometryProps } from '../types';
import * as THREE from 'three';
import { useDisposableObject } from '../hooks/useDisposableObject';

export function createThreeGeometry<
    C extends new (...params: any[]) => R,
    R extends THREE.BufferGeometry,
>(constructor: C) {
    //eslint-disable-next-line react/display-name
    return React.forwardRef<R, GeometryProps<C, R>>(
        (props: GeometryProps<C, R>, ref: ForwardedRef<R>) => {
            const parent = useParentContext();
            const object = useDisposableObject(constructor, props.params, ref);

            useAnimation(props.animate, object);

            useEffect(() => {
                if (!object) {
                    return;
                }

                if (parent && 'geometry' in parent) {
                    parent.geometry = object;

                    return () => {
                        // TODO: how to remove geometry from a parent
                        parent.geometry = null;
                    };
                }
            }, [parent, object]);

            return <>{props.children}</>;
        },
    );
}
