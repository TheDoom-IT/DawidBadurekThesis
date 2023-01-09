import React from 'react';
import * as THREE from 'three';
import { GeneralProps } from '../types/props';

export type SceneProps = GeneralProps<{}, typeof THREE.Scene, THREE.Scene>;

export const Scene = (props: SceneProps) => <></>
