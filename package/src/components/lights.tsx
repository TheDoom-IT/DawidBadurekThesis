import * as THREE from 'three';
import { Object3DProps } from '../types';
import { createThreeObject } from '../utils';

export type AmbientLightProps = Object3DProps<typeof THREE.AmbientLight, THREE.AmbientLight>;
export type DirectionalLightProps = Object3DProps<
    typeof THREE.DirectionalLight,
    THREE.DirectionalLight
>;

export const AmbientLight = createThreeObject<typeof THREE.AmbientLight, THREE.AmbientLight>(
    THREE.AmbientLight,
);
export const DirectionalLight = createThreeObject<
    typeof THREE.DirectionalLight,
    THREE.DirectionalLight
>(THREE.DirectionalLight);
