import React from 'react';
import * as THREE from 'three';

type PerspectiveCameraParams = ConstructorParameters<typeof THREE.PerspectiveCamera>;

export interface PerspectiveCameraProps {
    params: PerspectiveCameraParams;
}

export const PerspectiveCamera = (props: PerspectiveCameraProps) => {
    return <></>
}