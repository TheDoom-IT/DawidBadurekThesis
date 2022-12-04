import React from 'react';
import * as THREE from 'three';
import { ObjectProps } from '../types/object-props';
import { handleForwardRef } from '../utils';

// export const Scene = React.forwardRef<THREE.Scene, {}>((props: {}, forwardRef: React.ForwardedRef<THREE.Scene>) => {

// })

export type SceneProps = ObjectProps<{}, typeof THREE.Scene, THREE.Scene>;

export const Scene = (props: SceneProps) => {
    return <></>
}