import React from 'react';
import * as THREE from 'three';
import { GeneralProps } from '../../types/props';

export type OrtographicCameraProps = GeneralProps<{}, typeof THREE.OrthographicCamera, THREE.PerspectiveCamera>;

export const OrtographicCamera = (props: OrtographicCameraProps) => <></>
