import { createContext, useContext } from 'react';
import * as THREE from 'three';

export type CanvasContext = {
    renderer: THREE.WebGLRenderer;
    mainScene: THREE.Scene;
    camera: THREE.Camera;
} | null;

export const CanvasContext = createContext<CanvasContext>(null);

export const useParentContext = () => useContext(CanvasContext);
