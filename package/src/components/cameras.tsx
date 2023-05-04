import * as THREE from 'three';
import { createThreeCamera } from '../utils';

export const OrtographicCamera = createThreeCamera<
    typeof THREE.OrthographicCamera,
    THREE.OrthographicCamera
>(THREE.OrthographicCamera);
export const PerspectiveCamera = createThreeCamera<
    typeof THREE.PerspectiveCamera,
    THREE.PerspectiveCamera
>(THREE.PerspectiveCamera);
