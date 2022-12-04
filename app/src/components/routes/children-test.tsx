import React, { useRef, useState } from "react";
import * as THREE from 'three';
import { createPortal } from "react-dom";
import { Canvas, Mesh, PerspectiveCamera, Scene, MeshStandardMaterial, BoxGeometry, MeshBasicMaterial } from "three-js-react-component";
import '../../styles/shared.css'

export const ChildrenTest = () => {
    const [divId] = useState(new Date().getTime().toString());

    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const portal = createPortal(<div></div>, document.createElement('div'));

    return (
        <div id={divId} className='my-box'>
            <button onClick={() => setIsVisible(!isVisible)}>Change children</button>
            <button onClick={() => setIndex(index + 1)}>Rerender</button>
            <Canvas divId={divId}>
                <PerspectiveCamera params={[75, 21 / 9, 1, 1000]} innerRef={(cameraRef) => {
                    if (cameraRef) {
                        cameraRef.position.z = 2;
                    }
                }} />
                <Scene params={[]} innerRef={(sceneRef) => {
                    if (sceneRef) {
                        sceneRef.background = new THREE.Color(0X444444);
                    }
                }} >
                    <Mesh animate={(timestamp: number, mesh: THREE.Mesh) => {
                        mesh.rotation.x = timestamp / 1000;
                        mesh.rotation.y = timestamp / 1000;
                    }}>
                        <BoxGeometry params={[1, 1, 1]}></BoxGeometry>
                        <MeshBasicMaterial animate={(t: number, material: THREE.MeshStandardMaterial) => {
                            material.color.r = t * 0.1 % 255 / 255;
                        }} params={[{ color: new THREE.Color(0x111111) }]}></MeshBasicMaterial>
                    </Mesh>
                </Scene>
            </Canvas>
        </div>
    )
}