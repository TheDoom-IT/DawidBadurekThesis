import * as THREE from 'three';
import { createThreeObject } from '../utils';

export const AmbientLight = createThreeObject<typeof THREE.AmbientLight, THREE.AmbientLight>(
    THREE.AmbientLight,
);
export const DirectionalLight = createThreeObject<
    typeof THREE.DirectionalLight,
    THREE.DirectionalLight
>(THREE.DirectionalLight);
