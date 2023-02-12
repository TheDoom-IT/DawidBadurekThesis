import React, { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ParentContext, useParentContext } from '../contexts/parent-context';
import { Object3DProps } from '../types/props';

export type MeshProps = Object3DProps<typeof THREE.Mesh>;
export type PointsProps = Object3DProps<typeof THREE.Points>;
export type LineProps = Object3DProps<typeof THREE.Line>;
export type LineLoopProps = Object3DProps<typeof THREE.LineLoop>;

export const Mesh: FC<MeshProps> = () => <></>;
export const Points: FC<PointsProps> = () => <></>;
export const Line: FC<LineProps> = () => <></>;
export const LineLoop: FC<LineLoopProps> = () => <></>;

export const MeshTest: FC<MeshProps> = Object3DFC(THREE.Mesh);

function Object3DFC<C extends new (...params: any) => THREE.Object3D>(
    constructor: C,
): FC<Object3DProps<C>> {
    return (props: Object3DProps<C>) => {
        const object = useRef<THREE.Object3D | null>(null); // or useState???
        const parent = useParentContext();

        useEffect(() => {
            object.current = new constructor(props.params);
        }, []);

        useEffect(() => {
            if (props.position) {
                const [x, y, z] = props.position;
                object.current!.position.set(x, y, z);
            }

            if (props.rotation) {
                const [x, y, z] = props.rotation;
                object.current!.rotation.set(x, y, z);
            }

            parent?.add(object.current!);

            return () => {
                parent?.remove(object.current!);
            };
        }, [parent]);

        return (
            <ParentContext.Provider value={object.current}>{props.children}</ParentContext.Provider>
        );
    };
}
