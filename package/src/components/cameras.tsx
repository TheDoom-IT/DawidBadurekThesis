import React from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types/props';

export type OrtographicCameraProps = Object3DProps<typeof THREE.OrthographicCamera, THREE.PerspectiveCamera>;
export type PerspectiveCameraProps = Object3DProps<typeof THREE.PerspectiveCamera, THREE.PerspectiveCamera>;

export const OrtographicCamera = (props: OrtographicCameraProps) => <></>
export const PerspectiveCamera = (props: PerspectiveCameraProps) => <></>
