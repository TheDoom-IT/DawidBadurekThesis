import * as THREE from 'three';
import { Object3DProps } from '../types';
import { createThreeObject } from '../utils';

export type MeshProps = Object3DProps<typeof THREE.Mesh, THREE.Mesh>;
export type PointsProps = Object3DProps<typeof THREE.Points, THREE.Points>;
export type LineProps = Object3DProps<typeof THREE.Line, THREE.Line>;
export type LineLoopProps = Object3DProps<typeof THREE.LineLoop, THREE.LineLoop>;
export type LineSegmentsProps = Object3DProps<typeof THREE.LineSegments, THREE.LineSegments>;
export type SceneProps = Object3DProps<typeof THREE.Scene, THREE.Scene>;

export const Scene = createThreeObject(THREE.Scene);
export const Mesh = createThreeObject(THREE.Mesh);
export const Points = createThreeObject(THREE.Points);
export const Line = createThreeObject(THREE.Line);
export const LineLoop = createThreeObject(THREE.LineLoop);
export const LineSegments = createThreeObject(THREE.LineSegments);
