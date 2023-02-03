import React from 'react';
import * as THREE from 'three';
import { ObjectProps } from '../types/props';

export type MeshProps = ObjectProps<typeof THREE.Mesh, THREE.Mesh>;
export type PointsProps = ObjectProps<typeof THREE.Points, THREE.Points>;
export type LineProps = ObjectProps<typeof THREE.Line, THREE.Line>;

export const Mesh = (props: MeshProps) => <></>
export const Points = (props: PointsProps) => <></>
export const Line = (props: LineProps) => <></>