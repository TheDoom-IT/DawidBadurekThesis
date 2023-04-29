import { createContext, useContext } from 'react';
import * as THREE from 'three';
import * as POST from 'postprocessing';

export type CanvasContextType = {
    renderer: THREE.WebGLRenderer | null;
    mainScene: THREE.Scene | null;
    setScene: (scene: THREE.Scene) => void;
    camera: THREE.Camera | null;
    setCamera: (camera: THREE.Camera) => void;
    setEffectComposer: (composer: POST.EffectComposer | null) => void;
    effectComposer: POST.EffectComposer | null;
    size: { width: number; height: number } | null;
} | null;

export const CanvasContext = createContext<CanvasContextType>(null);

export const useCanvasContext = () => useContext(CanvasContext);
