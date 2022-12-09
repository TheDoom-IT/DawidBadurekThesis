import React from 'react';
import * as THREE from 'three';
import { GeneralProps } from '../../types/props';

export type PerspectiveCameraProps = GeneralProps<{}, typeof THREE.PerspectiveCamera, THREE.PerspectiveCamera>;

export const PerspectiveCamera = (props: PerspectiveCameraProps) => <></>