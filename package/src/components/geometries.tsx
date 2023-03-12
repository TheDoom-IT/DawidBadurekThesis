import { GeometryProps } from '../types/props';
import { FC } from 'react';
import * as THREE from 'three';
import { createThreeGeometry } from '../utils/create-three-geometry';

export type BoxGeometryProps = GeometryProps<typeof THREE.BoxGeometry, THREE.BoxGeometry>;
export type CapsuleGeometryProps = GeometryProps<
    typeof THREE.CapsuleGeometry,
    THREE.CapsuleGeometry
>;
export type TorusGeometryProps = GeometryProps<typeof THREE.TorusGeometry, THREE.TorusGeometry>;

export const BoxGeometry: FC<BoxGeometryProps> = createThreeGeometry(THREE.BoxGeometry);
export const CapsuleGeometry: FC<CapsuleGeometryProps> = createThreeGeometry(THREE.CapsuleGeometry);
export const TorusGeometry: FC<TorusGeometryProps> = createThreeGeometry(THREE.TorusGeometry);

export type BufferGeometryProps = GeometryProps<typeof THREE.BufferGeometry, THREE.BufferGeometry>;
export const BufferGeometry: FC<BufferGeometryProps> = createThreeGeometry(THREE.BufferGeometry);

export type PlaneGeometryProps = GeometryProps<typeof THREE.PlaneGeometry, THREE.PlaneGeometry>;
export const PlaneGeometry: FC<PlaneGeometryProps> = createThreeGeometry(THREE.PlaneGeometry);
