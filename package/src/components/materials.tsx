import * as THREE from 'three';
import { FC } from 'react';
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

export const MeshBasicMaterial: FC<MeshBasicMaterialProps> = createThreeMaterial(
    THREE.MeshBasicMaterial,
);
export const MeshStandardMaterial: FC<MeshStandardMaterialProps> = createThreeMaterial(
    THREE.MeshStandardMaterial,
);
export const ShaderMaterial: FC<ShaderMaterialProps> = createThreeMaterial(THREE.ShaderMaterial);

export type PointsMaterialProps = MaterialProps<typeof THREE.PointsMaterial, THREE.PointsMaterial>;
export const PointsMaterial: FC<PointsMaterialProps> = createThreeMaterial(THREE.PointsMaterial);

export type LineBasicMaterialProps = MaterialProps<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>;
export const LineBasicMaterial: FC<LineBasicMaterialProps> = createThreeMaterial(
    THREE.LineBasicMaterial,
);
