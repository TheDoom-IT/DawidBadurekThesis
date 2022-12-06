import * as THREE from 'three';
import React from 'react';
import { MaterialProps } from '../types/props';

export type MeshBasicMaterialProps = MaterialProps<typeof THREE.MeshBasicMaterial, THREE.MeshBasicMaterial>
export type MeshStandardMaterialProps = MaterialProps<typeof THREE.MeshStandardMaterial, THREE.MeshStandardMaterial>

export const MeshBasicMaterial = (props: MeshBasicMaterialProps) => <></>
export const MeshStandardMaterial = (props: MeshStandardMaterialProps) => <></>