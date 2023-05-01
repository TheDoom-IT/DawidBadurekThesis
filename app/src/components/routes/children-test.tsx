import { useState } from 'react';
import * as THREE from 'three';
import { Canvas, Mesh, PerspectiveCamera, Scene, AmbientLight } from 'react-three-component';
import '../../styles/shared.css';

export const ChildrenTest = () => {
    const [divId] = useState(new Date().getTime().toString());

    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState(0xffffff);

    const setScene = (scene: THREE.Scene | null) => {
        if (scene) {
            scene.background = new THREE.Color(0x444444);
        }
    };

    const setCamera = (camera: THREE.PerspectiveCamera | null) => {
        if (camera) {
            camera.position.z = 5;
        }
    };

    return (
        <div id={divId} className="my-box">
            <button onClick={() => setIsVisible(!isVisible)}>Remove/add children</button>
            <button onClick={() => setIndex(index + 1)}>Change children key</button>
            <button onClick={() => setColor(color - 1)}>Change children props</button>
            <Canvas>
                <>
                    <PerspectiveCamera params={[75, 21 / 9, 1, 1000]} ref={setCamera} />
                </>
                <Scene ref={setScene}>
                    <AmbientLight key={index} params={[color]}></AmbientLight>
                    {isVisible && <Mesh />}
                </Scene>
            </Canvas>
        </div>
    );
};
