import React, { FC } from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types/props';

export type MeshProps = Object3DProps<typeof THREE.Mesh, THREE.Mesh>;
export type PointsProps = Object3DProps<typeof THREE.Points, THREE.Points>;
export type LineProps = Object3DProps<typeof THREE.Line, THREE.Line>;
export type LineLoopProps = Object3DProps<typeof THREE.LineLoop, THREE.LineLoop>;

export const Mesh: FC<MeshProps> = () => <></>;
export const Points: FC<PointsProps> = () => <></>;
export const Line: FC<LineProps> = () => <></>;
export const LineLoop: FC<LineLoopProps> = () => <></>;
