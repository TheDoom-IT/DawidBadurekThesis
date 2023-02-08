import React from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types/props';

export type MeshProps = Object3DProps<typeof THREE.Mesh, THREE.Mesh>;
export type PointsProps = Object3DProps<typeof THREE.Points, THREE.Points>;
export type LineProps = Object3DProps<typeof THREE.Line, THREE.Line>;

export const Mesh = (props: MeshProps) => <></>
export const Points = (props: PointsProps) => <></>
export const Line = (props: LineProps) => <></>