import * as THREE from 'three';
import { FC } from 'react';
import { Object3DProps } from '../types/props';
import { createThreeObject } from './objects';

export type AmbientLightProps = Object3DProps<typeof THREE.AmbientLight, THREE.AmbientLight>;
export type DirectionalLightProps = Object3DProps<
    typeof THREE.DirectionalLight,
    THREE.DirectionalLight
>;

export const AmbientLight: FC<AmbientLightProps> = createThreeObject(THREE.AmbientLight);
export const DirectionalLight: FC<DirectionalLightProps> = createThreeObject(
    THREE.DirectionalLight,
);
