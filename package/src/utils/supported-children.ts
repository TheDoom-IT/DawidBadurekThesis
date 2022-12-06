import {
    OrtographicCamera,
    PerspectiveCamera,
    BoxGeometry,
    MeshStandardMaterial,
    MeshBasicMaterial,
    CapsuleGeometry,
    DirectionalLight, AmbientLight
} from "../components";
import { Mesh } from "../components/Mesh";
import { Scene } from "../components/Scene";
import { MAIN_PARENT } from "../main-parent";
import * as THREE from 'three';

export const cameraChildren = [
    OrtographicCamera.name,
    PerspectiveCamera.name,
]
export const geometryChildren = [
    BoxGeometry.name,
    CapsuleGeometry.name,
];
export const materialChildren = [
    MeshStandardMaterial.name,
    MeshBasicMaterial.name,
];
export const lightChildren = [
    AmbientLight.name,
    DirectionalLight.name,
]

export const meshChild = Mesh.name;
export const sceneChild = Scene.name;

export const supportedChildren: { [key: string]: string[] } = {
    [MAIN_PARENT]: [
        ...cameraChildren,
        sceneChild,
    ],
    [PerspectiveCamera.name]: [],
    [OrtographicCamera.name]: [],
    [sceneChild]: [
        meshChild,
        ...lightChildren
    ],
    [meshChild]: [
        ...geometryChildren,
        ...materialChildren,
    ]
};

export const childContructor = {
    [OrtographicCamera.name]: THREE.OrthographicCamera,
    [PerspectiveCamera.name]: THREE.PerspectiveCamera,
    [sceneChild]: THREE.Scene,
    [meshChild]: THREE.Mesh,
    [BoxGeometry.name]: THREE.BoxGeometry,
    [CapsuleGeometry.name]: THREE.CapsuleGeometry,
    [MeshStandardMaterial.name]: THREE.MeshStandardMaterial,
    [MeshBasicMaterial.name]: THREE.MeshBasicMaterial,
    [DirectionalLight.name]: THREE.DirectionalLight,
    [AmbientLight.name]: THREE.AmbientLight,
}