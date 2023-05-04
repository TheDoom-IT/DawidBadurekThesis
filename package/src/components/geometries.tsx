import * as THREE from 'three';
import { createThreeGeometry } from '../utils';

export const BoxGeometry = createThreeGeometry<typeof THREE.BoxGeometry, THREE.BoxGeometry>(
    THREE.BoxGeometry,
);
export const CapsuleGeometry = createThreeGeometry<
    typeof THREE.CapsuleGeometry,
    THREE.CapsuleGeometry
>(THREE.CapsuleGeometry);
export const TorusGeometry = createThreeGeometry<typeof THREE.TorusGeometry, THREE.TorusGeometry>(
    THREE.TorusGeometry,
);
export const CylinderGeometry = createThreeGeometry<
    typeof THREE.CylinderGeometry,
    THREE.CylinderGeometry
>(THREE.CylinderGeometry);
export const SphereGeometry = createThreeGeometry<
    typeof THREE.SphereGeometry,
    THREE.SphereGeometry
>(THREE.SphereGeometry);

export const BufferGeometry = createThreeGeometry<
    typeof THREE.BufferGeometry,
    THREE.BufferGeometry
>(THREE.BufferGeometry);

export const PlaneGeometry = createThreeGeometry<typeof THREE.PlaneGeometry, THREE.PlaneGeometry>(
    THREE.PlaneGeometry,
);
