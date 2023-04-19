import { FC } from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types/props';
import { createThreeObject } from '../utils';

export type MeshProps = Object3DProps<typeof THREE.Mesh, THREE.Mesh>;
export type PointsProps = Object3DProps<typeof THREE.Points, THREE.Points>;
export type LineProps = Object3DProps<typeof THREE.Line, THREE.Line>;
export type LineLoopProps = Object3DProps<typeof THREE.LineLoop, THREE.LineLoop>;
export type LineSegmentsProps = Object3DProps<typeof THREE.LineSegments, THREE.LineSegments>;
export type SceneProps = Object3DProps<typeof THREE.Scene, THREE.Scene>;

export const Scene: FC<SceneProps> = createThreeObject(THREE.Scene);
export const Mesh: FC<MeshProps> = createThreeObject(THREE.Mesh);
export const Points: FC<PointsProps> = createThreeObject(THREE.Points);
export const Line: FC<LineProps> = createThreeObject(THREE.Line);
export const LineLoop: FC<LineLoopProps> = createThreeObject(THREE.LineLoop);
export const LineSegments: FC<LineSegmentsProps> = createThreeObject(THREE.LineSegments);
