import React from 'react';
import * as THREE from 'three';

export type OrtographicCameraParams = ConstructorParameters<typeof THREE.OrthographicCamera>;

export interface OrtographicCameraProps {
    params: OrtographicCameraParams;
}

export const OrtographicCamera = (props: OrtographicCameraProps) => {
    return <></>
}
