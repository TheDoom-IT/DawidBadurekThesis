import React from 'react';
import * as THREE from 'three';
import { ObjectProps } from '../types/props';

export type MeshProps = ObjectProps<{
    position?: [x: number, y: number, z: number]
}, typeof THREE.Mesh, THREE.Mesh>;



export const Mesh = (props: MeshProps) => <></>