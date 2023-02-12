import React, { FC } from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types/props';

export type SceneProps = Object3DProps<typeof THREE.Scene>;

export const Scene: FC<SceneProps> = () => <></>;
