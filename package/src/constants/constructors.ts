import {
    OrtographicCamera,
    PerspectiveCamera,
    BoxGeometry,
    MeshStandardMaterial,
    MeshBasicMaterial,
    CapsuleGeometry,
    DirectionalLight,
    AmbientLight,
    Mesh,
    Points,
    PointsMaterial,
    BufferGeometry,
    Scene,
    Line,
    LineBasicMaterial,
    PlaneGeometry,
} from '../components';
import * as THREE from 'three';
import { OrbitControls } from '../components/controls';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const constructors = {
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
    [Line.name]: THREE.Line,
    [LineBasicMaterial.name]: THREE.LineBasicMaterial,
    [PlaneGeometry.name]: THREE.PlaneGeometry,
};

export const controlsConstructor = {
    [OrbitControls.name]: (camera: THREE.Camera, element?: HTMLElement) =>
        new ThreeOrbitControls(camera, element),
};
