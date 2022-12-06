import React from 'react';
import * as THREE from 'three';
import { ObjectProps } from '../types/props';

export type SceneProps = ObjectProps<{}, typeof THREE.Scene, THREE.Scene>;

export const Scene = (props: SceneProps) => <></>
