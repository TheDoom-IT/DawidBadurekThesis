import * as THREE from 'three';
import { MaterialProps } from '../types';
import { createThreeMaterial } from '../utils';

export type MeshBasicMaterialProps = MaterialProps<
    typeof THREE.MeshBasicMaterial,
    THREE.MeshBasicMaterial
>;
export type MeshStandardMaterialProps = MaterialProps<
    typeof THREE.MeshStandardMaterial,
    THREE.MeshStandardMaterial
>;
export type ShaderMaterialProps = MaterialProps<typeof THREE.ShaderMaterial, THREE.ShaderMaterial>;

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

export type PointsMaterialProps = MaterialProps<typeof THREE.PointsMaterial, THREE.PointsMaterial>;
export const PointsMaterial = createThreeMaterial<
    typeof THREE.PointsMaterial,
    THREE.PointsMaterial
>(THREE.PointsMaterial);

export type LineBasicMaterialProps = MaterialProps<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>;
export const LineBasicMaterial = createThreeMaterial<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>(THREE.LineBasicMaterial);
