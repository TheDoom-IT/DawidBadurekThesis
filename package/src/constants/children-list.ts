import {
    OrtographicCamera,
    PerspectiveCamera,
    BoxGeometry,
    MeshStandardMaterial,
    MeshBasicMaterial,
    CapsuleGeometry,
    Scene,
    DirectionalLight,
    AmbientLight,
    Mesh,
    Points,
    PointsMaterial,
    BufferGeometry,
    Line,
    LineBasicMaterial,
    PlaneGeometry,
} from '../components';
import { OrbitControls } from '../components/controls';

export const mainParent = 'Canvas';

export const controlsChildren = [OrbitControls.name];

export const cameraChildren = [OrtographicCamera.name, PerspectiveCamera.name];

export const geometryChildren = [
    BoxGeometry.name,
    CapsuleGeometry.name,
    PlaneGeometry.name,
    BufferGeometry.name,
];

export const materialChildren = [
    MeshStandardMaterial.name,
    MeshBasicMaterial.name,
    PointsMaterial.name,
    LineBasicMaterial.name,
];

const geometryMaterialChildren = [...geometryChildren, ...materialChildren];

export const lightChildren = [AmbientLight.name, DirectionalLight.name];

export const objectChildren = [Mesh.name, Points.name, Line.name];

export const sceneChild = Scene.name;

export const supportedChildren: { [key: string]: string[] } = {
    [mainParent]: [...cameraChildren, sceneChild, ...controlsChildren],
    [PerspectiveCamera.name]: [],
    [OrtographicCamera.name]: [],
    [sceneChild]: [...objectChildren, ...lightChildren],
    [Mesh.name]: [...geometryMaterialChildren, ...objectChildren],
    [Points.name]: [...geometryMaterialChildren, ...objectChildren],
    [Line.name]: [...geometryMaterialChildren, ...objectChildren],
};
