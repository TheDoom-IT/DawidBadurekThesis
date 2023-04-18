import React, { FC, useEffect } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { useAnimation } from '../hooks/useAnimation';
import { GeometryProps } from '../types';
import * as THREE from 'three';
import { useDisposableObject } from '../hooks/useDisposableObject';

export function createThreeGeometry<
    C extends new (...params: any[]) => R,
    R extends THREE.BufferGeometry,
>(constructor: C): FC<GeometryProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: GeometryProps<C, R>) => {
        const parent = useParentContext();
        const object = useDisposableObject(constructor, props.params, props.innerRef);

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
    };
}
