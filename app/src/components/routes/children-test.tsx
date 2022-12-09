import React, { useRef, useState } from "react";
import * as THREE from 'three';
import { createPortal } from "react-dom";
import { Canvas, Mesh, PerspectiveCamera, Scene, MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, CapsuleGeometry, DirectionalLight, AmbientLight } from "three-js-react-component";
import '../../styles/shared.css'

export const ChildrenTest = () => {
    const [divId] = useState(new Date().getTime().toString());

    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const portal = createPortal(<div></div>, document.createElement('div'));
    const rotateMeshAnimation = (timestamp: number, mesh: THREE.Mesh) => {
        mesh.rotation.x = timestamp / 1000;
        mesh.rotation.y = timestamp / 1000;
    };

    return (
        <div id={divId} className='my-box'>
            <button onClick={() => setIsVisible(!isVisible)}>Change children</button>
            <button onClick={() => setIndex(index + 1)}>Rerender</button>
            <Canvas divId={divId}>
                <PerspectiveCamera params={[75, 21 / 9, 1, 1000]} innerRef={(cameraRef) => {
                    if (cameraRef) {
                        cameraRef.position.z = 5;
                    }
                }} />
                <Scene params={[]} innerRef={(sceneRef) => {
                    if (sceneRef) {
                        sceneRef.background = new THREE.Color(0X444444);
                    }
                }} >
                    <AmbientLight></AmbientLight>
                    <DirectionalLight params={[0xffffff, 0.5]}></DirectionalLight>
                    <Mesh position={[-1, 0, 0]} animate={rotateMeshAnimation}>
                        <BoxGeometry params={[1, 1, 1]}></BoxGeometry>
                        <MeshBasicMaterial animate={(t: number, material: THREE.MeshBasicMaterial) => {
                            material.color.r = t * 0.1 % 255 / 255;
                        }} params={[{ color: new THREE.Color(0x111111) }]}></MeshBasicMaterial>
                    </Mesh>
                    <Mesh position={[1, 1, 1]} animate={rotateMeshAnimation}>
                        <CapsuleGeometry params={[0.5, 0.5, 30, 3]}></CapsuleGeometry>
                        <MeshStandardMaterial params={[{ color: new THREE.Color(0xffffff) }]}></MeshStandardMaterial>
                    </Mesh>
                </Scene>
            </Canvas>
        </div >
    )
}