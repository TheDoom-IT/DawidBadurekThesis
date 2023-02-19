import { createContext, useContext } from 'react';
import * as THREE from 'three';

export type CanvasContext = {
    renderer: THREE.WebGLRenderer | null;
    mainScene: THREE.Scene | null;
    setScene: (scene: THREE.Scene) => void;
    camera: THREE.Camera | null;
    setCamera: (camera: THREE.Camera) => void;
} | null;

export const CanvasContext = createContext<CanvasContext>(null);

export const useCanvasContext = () => useContext(CanvasContext);
