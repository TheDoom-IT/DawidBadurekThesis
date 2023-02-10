import * as THREE from 'three';
import React, { FC } from 'react';
import { MaterialProps } from '../types/props';

export type MeshBasicMaterialProps = MaterialProps<
    typeof THREE.MeshBasicMaterial,
    THREE.MeshBasicMaterial
>;
export type MeshStandardMaterialProps = MaterialProps<
    typeof THREE.MeshStandardMaterial,
    THREE.MeshStandardMaterial
>;

export const MeshBasicMaterial: FC<MeshBasicMaterialProps> = () => <></>;
export const MeshStandardMaterial: FC<MeshStandardMaterialProps> = () => <></>;

export type PointsMaterialProps = MaterialProps<typeof THREE.PointsMaterial, THREE.PointsMaterial>;
export const PointsMaterial: FC<PointsMaterialProps> = () => <></>;

export type LineBasicMaterialProps = MaterialProps<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>;
export const LineBasicMaterial: FC<LineBasicMaterialProps> = () => <></>;
