import React from 'react';
import * as THREE from 'three';
import { GeneralProps } from '../types/props';

export type OrtographicCameraProps = GeneralProps<{}, typeof THREE.OrthographicCamera, THREE.PerspectiveCamera>;
export type PerspectiveCameraProps = GeneralProps<{}, typeof THREE.PerspectiveCamera, THREE.PerspectiveCamera>;

export const OrtographicCamera = (props: OrtographicCameraProps) => <></>
export const PerspectiveCamera = (props: PerspectiveCameraProps) => <></>
