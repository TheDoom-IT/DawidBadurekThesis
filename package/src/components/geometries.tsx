import { GeometryProps } from '../types/props';
import React, { FC, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useParentContext } from '../contexts/parent-context';
import { useAnimation } from '../hooks/useAnimation';
import { handleForwardRef } from '../utils';

export type BoxGeometryProps = GeometryProps<typeof THREE.BoxGeometry, THREE.BoxGeometry>;
export type CapsuleGeometryProps = GeometryProps<
    typeof THREE.CapsuleGeometry,
    THREE.CapsuleGeometry
>;

export const BoxGeometry: FC<BoxGeometryProps> = createThreeGeometry(THREE.BoxGeometry);
export const CapsuleGeometry: FC<CapsuleGeometryProps> = createThreeGeometry(THREE.CapsuleGeometry);

export type BufferGeometryProps = GeometryProps<typeof THREE.BufferGeometry, THREE.BufferGeometry>;
export const BufferGeometry: FC<BufferGeometryProps> = createThreeGeometry(THREE.BufferGeometry);

export type PlaneGeometryProps = GeometryProps<typeof THREE.PlaneGeometry, THREE.PlaneGeometry>;
export const PlaneGeometry: FC<PlaneGeometryProps> = createThreeGeometry(THREE.PlaneGeometry);

export const BoxGeometryTest = createThreeGeometry(THREE.BoxGeometry);

function createThreeGeometry<C extends new (...params: any[]) => R, R extends THREE.BufferGeometry>(
    constructor: C,
): FC<GeometryProps<C, R>> {
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
            }

            return () => {
                // TODO: how to remove material from a parent
                // parent?.remove(object.current!);
            };
        }, [parent, object]);

        return <>{props.children}</>;
    };
}
const params: ConstructorParameters<typeof THREE.Object3D> = [];
new THREE.BoxGeometry(...params);
