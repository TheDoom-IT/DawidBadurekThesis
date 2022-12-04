import React from 'react';
import * as THREE from 'three';
import { ObjectProps } from '../types/object-props';

export type MeshProps = ObjectProps<{}, typeof THREE.Mesh, THREE.Mesh>;

export const Mesh = (props: MeshProps) => {
    return <></>;
}