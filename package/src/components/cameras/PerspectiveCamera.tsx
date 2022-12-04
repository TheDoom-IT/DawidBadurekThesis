import React from 'react';
import * as THREE from 'three';
import { ObjectProps } from '../../types/object-props';

export type PerspectiveCameraProps = ObjectProps<{}, typeof THREE.PerspectiveCamera, THREE.PerspectiveCamera>;

export const PerspectiveCamera = (props: PerspectiveCameraProps) => {
    return <></>
}