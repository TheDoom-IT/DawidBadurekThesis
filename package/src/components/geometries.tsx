import { GeometryProps } from '../types';
import * as THREE from 'three';
import { createThreeGeometry } from '../utils';

export type BoxGeometryProps = GeometryProps<typeof THREE.BoxGeometry, THREE.BoxGeometry>;
export type CapsuleGeometryProps = GeometryProps<
    typeof THREE.CapsuleGeometry,
    THREE.CapsuleGeometry
>;
export type TorusGeometryProps = GeometryProps<typeof THREE.TorusGeometry, THREE.TorusGeometry>;
export type CylinderGeometryProps = GeometryProps<
    typeof THREE.CylinderGeometry,
    THREE.CylinderGeometry
>;
export type SphereGeometryProps = GeometryProps<typeof THREE.SphereGeometry, THREE.SphereGeometry>;

export const BoxGeometry = createThreeGeometry(THREE.BoxGeometry);
export const CapsuleGeometry = createThreeGeometry(THREE.CapsuleGeometry);
export const TorusGeometry = createThreeGeometry(THREE.TorusGeometry);
export const CylinderGeometry = createThreeGeometry(THREE.CylinderGeometry);
export const SphereGeometry = createThreeGeometry(THREE.SphereGeometry);

export type BufferGeometryProps = GeometryProps<typeof THREE.BufferGeometry, THREE.BufferGeometry>;
export const BufferGeometry = createThreeGeometry(THREE.BufferGeometry);

export type PlaneGeometryProps = GeometryProps<typeof THREE.PlaneGeometry, THREE.PlaneGeometry>;
export const PlaneGeometry = createThreeGeometry(THREE.PlaneGeometry);
