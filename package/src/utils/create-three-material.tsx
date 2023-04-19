import React, { FC, useEffect } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { useAnimation } from '../hooks/useAnimation';
import { MaterialProps } from '../types';
import { useDisposableObject } from '../hooks/useDisposableObject';
import * as THREE from 'three';

export function createThreeMaterial<
    C extends new (...params: any[]) => R,
    R extends THREE.Material,
>(constructor: C): FC<MaterialProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: MaterialProps<C, R>) => {
        const object = useDisposableObject(constructor, props.params, props.innerRef);

        useAnimation(props.animate, object);
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
    };
}
