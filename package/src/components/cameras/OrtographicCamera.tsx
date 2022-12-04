import React from 'react';
import * as THREE from 'three';
import { ObjectProps } from '../../types/object-props';

export type OrtographicCameraProps = ObjectProps<{}, typeof THREE.OrthographicCamera, THREE.PerspectiveCamera>;

export const OrtographicCamera = (props: OrtographicCameraProps) => {
    return <></>
}
