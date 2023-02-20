import React, { FC } from 'react';
import * as THREE from 'three';
import { ParentContext } from '../contexts/parent-context';
import { useThreeObject } from '../hooks/useThreeObject';
import { Object3DProps } from '../types/props';

export type MeshProps = Object3DProps<typeof THREE.Mesh, THREE.Mesh>;
export type PointsProps = Object3DProps<typeof THREE.Points, THREE.Points>;
export type LineProps = Object3DProps<typeof THREE.Line, THREE.Line>;
export type LineLoopProps = Object3DProps<typeof THREE.LineLoop, THREE.LineLoop>;
export type SceneProps = Object3DProps<typeof THREE.Scene, THREE.Scene>;

export const Scene: FC<SceneProps> = createThreeObject(THREE.Scene);
export const Mesh: FC<MeshProps> = createThreeObject(THREE.Mesh);
export const Points: FC<PointsProps> = createThreeObject(THREE.Points);
export const Line: FC<LineProps> = createThreeObject(THREE.Line);
export const LineLoop: FC<LineLoopProps> = createThreeObject(THREE.LineLoop);

export function createThreeObject<C extends new (...params: any[]) => R, R extends THREE.Object3D>(
    constructor: C,
): FC<Object3DProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: Object3DProps<C, R>) => {
        const object = useThreeObject(constructor, props);

        return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
    };
}
