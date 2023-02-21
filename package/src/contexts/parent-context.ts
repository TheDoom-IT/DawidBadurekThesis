import { createContext, useContext } from 'react';
import * as THREE from 'three';

export type ParentContextType = THREE.Object3D | null;
export const ParentContext = createContext<ParentContextType>(null);

export const useParentContext = () => useContext(ParentContext);
