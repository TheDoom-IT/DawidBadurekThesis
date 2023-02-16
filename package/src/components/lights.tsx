import * as THREE from 'three';
import React, { FC } from 'react';
import { Object3DProps } from '../types/props';

export type AmbientLightProps = Object3DProps<typeof THREE.AmbientLight, THREE.AmbientLight>;
export type DirectionalLightProps = Object3DProps<
    typeof THREE.DirectionalLight,
    THREE.AmbientLight
>;

export const AmbientLight: FC<AmbientLightProps> = () => <></>;
export const DirectionalLight: FC<DirectionalLightProps> = () => <></>;
