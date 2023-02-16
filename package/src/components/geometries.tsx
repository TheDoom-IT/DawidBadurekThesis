import { GeometryProps } from '../types/props';
import React, { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useParentContext } from '../contexts/parent-context';

export type BoxGeometryProps = GeometryProps<typeof THREE.BoxGeometry, THREE.BoxGeometry>;
export type CapsuleGeometryProps = GeometryProps<
    typeof THREE.CapsuleGeometry,
    THREE.CapsuleGeometry
>;

export const BoxGeometry: FC<BoxGeometryProps> = () => <></>;
export const CapsuleGeometry: FC<CapsuleGeometryProps> = () => <></>;

export type BufferGeometryProps = GeometryProps<typeof THREE.BufferGeometry, THREE.BufferGeometry>;
export const BufferGeometry: FC<BufferGeometryProps> = () => <></>;

export type PlaneGeometryProps = GeometryProps<typeof THREE.PlaneGeometry, THREE.PlaneGeometry>;
export const PlaneGeometry: FC<PlaneGeometryProps> = () => <></>;

export const BoxGeometryTest = GeometryFC(THREE.BoxGeometry);
function GeometryFC<C extends new (...params: any) => THREE.BufferGeometry, R>(
    constructor: C,
): FC<GeometryProps<C, R>> {
    return (props: GeometryProps<C, R>) => {
        const [time] = useState(new Date().getTime());
        const [object, setObject] = useState<THREE.BufferGeometry | null>(null);
        const parent = useParentContext();

        useEffect(() => {
            setObject(new constructor(props.params));

            return () => {
                object?.dispose();
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
                console.log('parent removed');
                // TODO: how to remove material from a parent
                // parent?.remove(object.current!);
            };
        }, [parent, object]);

        return <>{props.children}</>;
    };
}
