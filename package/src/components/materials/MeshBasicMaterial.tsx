import { ObjectProps } from "../../types/object-props"
import * as THREE from 'three';
import React from 'react';

export type MeshBasicMaterialProps = ObjectProps<{}, typeof THREE.MeshBasicMaterial, THREE.MeshBasicMaterial>

export const MeshBasicMaterial = (props: MeshBasicMaterialProps) => {
    return <></>
}