import * as THREE from 'three';
import { createThreeObject } from '../utils';

export const Scene = createThreeObject<typeof THREE.Scene, THREE.Scene>(THREE.Scene);
export const Mesh = createThreeObject<typeof THREE.Mesh, THREE.Mesh>(THREE.Mesh);
export const Points = createThreeObject<typeof THREE.Points, THREE.Points>(THREE.Points);
export const Line = createThreeObject<typeof THREE.Line, THREE.Line>(THREE.Line);
export const LineLoop = createThreeObject<typeof THREE.LineLoop, THREE.LineLoop>(THREE.LineLoop);
export const LineSegments = createThreeObject<typeof THREE.LineSegments, THREE.LineSegments>(
    THREE.LineSegments,
);
