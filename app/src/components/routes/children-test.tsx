import { useCallback, useState } from 'react';
import * as THREE from 'three';
import {
    Canvas,
    Mesh,
    PerspectiveCamera,
    AmbientLight,
    MainScene,
    MeshStandardMaterial,
    BoxGeometry,
    TorusGeometry,
} from 'react-three-component';
import '../../styles/shared.css';

export const ChildrenTest = () => {
    const [divId] = useState(new Date().getTime().toString());

    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState(0xffffff);

    const setScene = useCallback(
        (scene: THREE.Scene | null) => {
            if (scene) {
                scene.background = new THREE.Color(color);
            }
        },
        [color],
    );

    return (
        <div id={divId} className="my-box">
            <button onClick={() => setIsVisible(!isVisible)}>Remove/add children</button>
            <button onClick={() => setIndex(index + 1)}>Change children key</button>
            <button onClick={() => setColor(color - 10)}>Change children props</button>
            <Canvas>
                <PerspectiveCamera params={[75, 21 / 9, 1, 1000]} position={[0, 0, 5]} />
                <MainScene ref={setScene}>
                    <AmbientLight key={index} params={[color]}></AmbientLight>
                    <Mesh>
                        {isVisible && <MeshStandardMaterial params={[{ color: 'red' }]} />}
                        {<TorusGeometry />}
                        {isVisible && <BoxGeometry />}
                    </Mesh>
                </MainScene>
            </Canvas>
        </div>
    );
};
