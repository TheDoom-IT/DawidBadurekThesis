import React from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types/props';

export type SceneProps = Object3DProps<typeof THREE.Scene, THREE.Scene>;

export const Scene = (props: SceneProps) => <></>
