import { FC } from 'react';
import * as THREE from 'three';
import { Object3DProps } from '../types';
import { createThreeCamera } from '../utils';

export type OrtographicCameraProps = Object3DProps<
    typeof THREE.OrthographicCamera,
    THREE.OrthographicCamera
>;
export type PerspectiveCameraProps = Object3DProps<
    typeof THREE.PerspectiveCamera,
    THREE.PerspectiveCamera
>;

export const OrtographicCamera: FC<OrtographicCameraProps> = createThreeCamera(
    THREE.OrthographicCamera,
);
export const PerspectiveCamera: FC<PerspectiveCameraProps> = createThreeCamera(
    THREE.PerspectiveCamera,
);
