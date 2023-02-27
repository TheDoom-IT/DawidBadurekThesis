import {
    BoxGeometry,
    Canvas,
    CapsuleGeometry,
    DirectionalLight,
    MainScene,
    Mesh,
    MeshStandardMaterial,
    OrbitControls,
    PerspectiveCamera,
} from 'react-three-component';
import * as THREE from 'three';

export const AppTest = () => {
    const divId = 'canvas-div';

    const meshAnimation = (ref: THREE.Mesh, timestamp: number, elapsed: number) => {
        ref.rotation.x += elapsed * 0.001;
        ref.rotation.z += elapsed * 0.001;
    };

    const initializeMainScene = (ref: THREE.Scene | null) => {
        if (ref) {
            ref.background = new THREE.Color(0xffffff);
        }
    };

    return (
        <div className="my-box" id={divId}>
            <Canvas divId={divId}>
                <PerspectiveCamera position={[0, 0, 5]} />
                <OrbitControls />
                <MainScene innerRef={initializeMainScene}>
                    <DirectionalLight params={[0xffffff, 1]} position={[-5, 0, 0]} />
                    <DirectionalLight params={[0xffffff, 0.8]} position={[5, 0, 3]} />
                    <Mesh position={[-1, 0, 0]} animate={meshAnimation}>
                        <BoxGeometry />
                        <MeshStandardMaterial params={[{ color: 0x47b9db }]} />
                    </Mesh>
                    <Mesh position={[1, 0, 0]} animate={meshAnimation}>
                        <CapsuleGeometry params={[0.5, 0.5, 10, 10]} />
                        <MeshStandardMaterial params={[{ color: 0xdb47b9 }]} />
                    </Mesh>
                </MainScene>
            </Canvas>
        </div>
    );
};
