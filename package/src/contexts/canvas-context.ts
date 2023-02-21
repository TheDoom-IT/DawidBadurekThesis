import { createContext, useContext } from 'react';
import * as THREE from 'three';

export type CanvasContextType = {
    renderer: THREE.WebGLRenderer | null;
    mainScene: THREE.Scene | null;
    setScene: (scene: THREE.Scene) => void;
    camera: THREE.Camera | null;
    setCamera: (camera: THREE.Camera) => void;
} | null;

export const CanvasContext = createContext<CanvasContextType>(null);

export const useCanvasContext = () => useContext(CanvasContext);
