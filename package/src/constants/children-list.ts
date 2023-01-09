import {
    OrtographicCamera,
    PerspectiveCamera,
    BoxGeometry,
    MeshStandardMaterial,
    MeshBasicMaterial,
    CapsuleGeometry,
    DirectionalLight, AmbientLight, Mesh, Points, PointsMaterial, BufferGeometry
} from "../components";
import { Scene } from "../components/scenes";
import { MAIN_PARENT } from "./main-parent";
import * as THREE from 'three';

export const cameraChildren = [
    OrtographicCamera.name,
    PerspectiveCamera.name,
]

export const bufferGeometryChild = BufferGeometry.name;
export const meshGeometryChildren = [
    BoxGeometry.name,
    CapsuleGeometry.name,
]
export const geometryChildren = [
    bufferGeometryChild,
    ...meshGeometryChildren,
];



export const pointsMaterialChildren = [
    PointsMaterial.name,
]
export const meshMaterialChildren = [
    MeshStandardMaterial.name,
    MeshBasicMaterial.name,
]
export const materialChildren = [
    ...pointsMaterialChildren,
    ...meshMaterialChildren,
];

export const lightChildren = [
    AmbientLight.name,
    DirectionalLight.name,
]

export const objectChildren = [
    Mesh.name,
    Points.name,
]

export const sceneChild = Scene.name;

export const supportedChildren: { [key: string]: string[] } = {
    [MAIN_PARENT]: [
        ...cameraChildren,
        sceneChild,
    ],
    [PerspectiveCamera.name]: [],
    [OrtographicCamera.name]: [],
    [sceneChild]: [
        ...objectChildren,
        ...lightChildren
    ],
    [Mesh.name]: [
        ...geometryChildren,
        ...meshMaterialChildren,
    ],
    [Points.name]: [
        ...pointsMaterialChildren,
        bufferGeometryChild,
    ]
};

export const childContructor = {
    [OrtographicCamera.name]: THREE.OrthographicCamera,
    [PerspectiveCamera.name]: THREE.PerspectiveCamera,
    [Scene.name]: THREE.Scene,
    [Mesh.name]: THREE.Mesh,
    [Points.name]: THREE.Points,
    [BoxGeometry.name]: THREE.BoxGeometry,
    [CapsuleGeometry.name]: THREE.CapsuleGeometry,
    [BufferGeometry.name]: THREE.BufferGeometry,
    [MeshStandardMaterial.name]: THREE.MeshStandardMaterial,
    [MeshBasicMaterial.name]: THREE.MeshBasicMaterial,
    [PointsMaterial.name]: THREE.PointsMaterial,
    [DirectionalLight.name]: THREE.DirectionalLight,
    [AmbientLight.name]: THREE.AmbientLight,
}