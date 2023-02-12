import { createContext, useContext } from 'react';
import * as THREE from 'three';

export type ParentContext = THREE.Object3D | null;
export const ParentContext = createContext<ParentContext>(null);

export const useParentContext = () => useContext(ParentContext);
