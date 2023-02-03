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
    LineBasicMaterial
} from "../components";

export const mainParent = 'Canvas';

export const cameraChildren = [
    OrtographicCamera.name,
    PerspectiveCamera.name,
]

const bufferGeometryChild = BufferGeometry.name;
const meshGeometryChildren = [
    BoxGeometry.name,
    CapsuleGeometry.name,
]
export const geometryChildren = [
    bufferGeometryChild,
    ...meshGeometryChildren,
];


const lineMaterialChildren = [
    LineBasicMaterial.name,
]

const pointsMaterialChildren = [
    PointsMaterial.name,
]
const meshMaterialChildren = [
    MeshStandardMaterial.name,
    MeshBasicMaterial.name,
]
export const materialChildren = [
    ...pointsMaterialChildren,
    ...meshMaterialChildren,
    ...lineMaterialChildren,
];

export const lightChildren = [
    AmbientLight.name,
    DirectionalLight.name,
]

export const objectChildren = [
    Mesh.name,
    Points.name,
    Line.name,
]

export const sceneChild = Scene.name;

export const supportedChildren: { [key: string]: string[] } = {
    [mainParent]: [
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
    ],
    [Line.name]: [
        ...lineMaterialChildren,
        bufferGeometryChild
    ]
};