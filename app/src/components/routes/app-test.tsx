import {
    BoxGeometry,
    Canvas,
    DirectionalLight,
    MainScene,
    Mesh,
    MeshStandardMaterial,
    OrbitControls,
    PerspectiveCamera,
} from 'three-js-react-component';
import * as THREE from 'three';
import { useMemo } from 'react';

export const AppTest = () => {
    const divId = 'canvas-div';

    const meshAnimation = useMemo(() => {
        return (r: THREE.Mesh) => {
            r.rotation.x += 0.01;
        };
    }, []);

    return (
        <div className="my-box" id={divId}>
            <Canvas divId={divId}>
                <PerspectiveCamera position={[0, 0, 5]} />
                <OrbitControls />
                <MainScene>
                    <DirectionalLight params={[0xffffff, 0.1]} position={[-2, 0, -5]} />
                    <DirectionalLight params={[0xffffff, 0.5]} position={[5, 0, 3]} />
                    <Mesh rotation={[0, 2, 0]} animate={meshAnimation}>
                        <BoxGeometry />
                        <MeshStandardMaterial params={[{ color: 0xffffff }]} />
                    </Mesh>
                </MainScene>
            </Canvas>
        </div>
    );
};
