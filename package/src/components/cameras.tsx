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

export const OrtographicCamera = createThreeCamera(THREE.OrthographicCamera);
export const PerspectiveCamera = createThreeCamera(THREE.PerspectiveCamera);
