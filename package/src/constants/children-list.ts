import { OrbitControls } from '../components/controls';

export const mainParent = 'Canvas';

export const controlsChildren: string[] = [];

export const cameraChildren: string[] = [];

export const geometryChildren: string[] = [];

export const materialChildren: string[] = [];

const geometryMaterialChildren = [...geometryChildren, ...materialChildren];

export const lightChildren = [];

export const objectChildren = [];

export const sceneChild = '';

export const supportedChildren: { [key: string]: string[] } = {
    [mainParent]: [...cameraChildren, sceneChild, ...controlsChildren],
    [sceneChild]: [...objectChildren, ...lightChildren],
};
