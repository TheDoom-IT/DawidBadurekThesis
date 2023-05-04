import * as THREE from 'three';
import { createThreeMaterial } from '../utils';

export const MeshBasicMaterial = createThreeMaterial<
    typeof THREE.MeshBasicMaterial,
    THREE.MeshBasicMaterial
>(THREE.MeshBasicMaterial);
export const MeshStandardMaterial = createThreeMaterial<
    typeof THREE.MeshStandardMaterial,
    THREE.MeshStandardMaterial
>(THREE.MeshStandardMaterial);
export const ShaderMaterial = createThreeMaterial<
    typeof THREE.ShaderMaterial,
    THREE.ShaderMaterial
>(THREE.ShaderMaterial);

export const PointsMaterial = createThreeMaterial<
    typeof THREE.PointsMaterial,
    THREE.PointsMaterial
>(THREE.PointsMaterial);

export const LineBasicMaterial = createThreeMaterial<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>(THREE.LineBasicMaterial);

export const MeshPhongMaterial = createThreeMaterial<
    typeof THREE.MeshPhongMaterial,
    THREE.MeshPhongMaterial
>(THREE.MeshPhongMaterial);
