import React, { FC } from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types/props';

export type OrtographicCameraProps = Object3DProps<typeof THREE.OrthographicCamera>;
export type PerspectiveCameraProps = Object3DProps<typeof THREE.PerspectiveCamera>;

export const OrtographicCamera: FC<OrtographicCameraProps> = () => <></>;
export const PerspectiveCamera: FC<PerspectiveCameraProps> = () => <></>;
