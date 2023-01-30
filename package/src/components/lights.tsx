import * as THREE from 'three';
import React from 'react';
import {LightProps} from '../types/props';

export type AmbientLightProps = LightProps<typeof THREE.AmbientLight, THREE.AmbientLight>
export type DirectionalLightProps = LightProps<typeof THREE.DirectionalLight, THREE.DirectionalLight>

export const AmbientLight = (props: AmbientLightProps) => <></>
export const DirectionalLight = (props: DirectionalLightProps) => <></>
