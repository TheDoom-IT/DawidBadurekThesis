import * as THREE from 'three';
import React from 'react';
import { Object3DProps } from '../types/props';

export type AmbientLightProps = Object3DProps<typeof THREE.AmbientLight, THREE.AmbientLight>
export type DirectionalLightProps = Object3DProps<typeof THREE.DirectionalLight, THREE.DirectionalLight>

export const AmbientLight = (props: AmbientLightProps) => <></>
export const DirectionalLight = (props: DirectionalLightProps) => <></>
