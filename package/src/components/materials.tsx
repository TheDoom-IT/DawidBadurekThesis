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

export const MeshBasicMaterial = createThreeMaterial(THREE.MeshBasicMaterial);
export const MeshStandardMaterial = createThreeMaterial(THREE.MeshStandardMaterial);
export const ShaderMaterial = createThreeMaterial(THREE.ShaderMaterial);

export type PointsMaterialProps = MaterialProps<typeof THREE.PointsMaterial, THREE.PointsMaterial>;
export const PointsMaterial = createThreeMaterial(THREE.PointsMaterial);

export type LineBasicMaterialProps = MaterialProps<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>;
export const LineBasicMaterial = createThreeMaterial(THREE.LineBasicMaterial);
