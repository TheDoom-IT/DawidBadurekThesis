import { AmbientLight, BoxGeometry, Canvas, DirectionalLight, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Scene } from "three-js-react-component"
import * as THREE from 'three';
import { animation } from "three-js-react-component/dist/types/types/animation";

interface RendererProps {
    divId: string;
}

export const Renderer = (props: RendererProps) => {
    const setCamera = (camera: THREE.PerspectiveCamera | null) => {
        if (!camera) {
            return;
        }

        camera.position.z = 5;
    }

    const setScene = (scene: THREE.Scene | null) => {
        if (!scene) {
            return;
        }

        scene.background = new THREE.Color(0x74acff);
    }

    const setLight = (light: THREE.DirectionalLight | null) => {
        if (!light) {
            return;
        }

        light.position.z = 5;
        light.position.x = 3;
        light.position.y = 3;
    }
    const meshAnimation: animation<THREE.Mesh> = ((timestamp: number, elapsed: number, ref: THREE.Mesh) => {
        const rotation = elapsed * 0.0005;
        ref.rotation.x += rotation;
        ref.rotation.y += rotation;
    });

    return <Canvas divId={props.divId}>
        <PerspectiveCamera innerRef={setCamera} />
        <Scene innerRef={setScene}>
            <AmbientLight params={[0x111111, 0.1]} />
            <DirectionalLight innerRef={setLight} params={[0xffffff, 0.5]} />
            <Mesh animate={meshAnimation}>
                <MeshStandardMaterial params={[{ color: 0x43aa45 }]} />
                <BoxGeometry />
            </Mesh>
        </Scene>
    </Canvas>
}