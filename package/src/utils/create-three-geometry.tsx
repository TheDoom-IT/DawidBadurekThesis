import React, { FC, useEffect, useState } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { useAnimation } from '../hooks/useAnimation';
import { GeometryProps } from '../types';
import { handleForwardRef } from './handle-forward-ref';
import * as THREE from 'three';

export function createThreeGeometry<
    C extends new (...params: any[]) => R,
    R extends THREE.BufferGeometry,
>(constructor: C): FC<GeometryProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: GeometryProps<C, R>) => {
        const [object, setObject] = useState<R | null>(null);
        useAnimation(props.animate, object);
        const parent = useParentContext();

        useEffect(() => {
            const newObject = new constructor(...(props.params ?? []));
            setObject(newObject);

            const cleanRef = handleForwardRef(props.innerRef, newObject);

            return () => {
                if (cleanRef) {
                    cleanRef();
                }
                newObject.dispose();
            };
        }, []);

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
