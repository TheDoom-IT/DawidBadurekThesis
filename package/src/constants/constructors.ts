import {
    OrtographicCamera,
    PerspectiveCamera,
    BoxGeometry,
    MeshStandardMaterial,
    MeshBasicMaterial,
    CapsuleGeometry,
    DirectionalLight, AmbientLight, Mesh, Points, PointsMaterial, BufferGeometry, Scene, Line, LineBasicMaterial
} from "../components";
import * as THREE from 'three';

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
}