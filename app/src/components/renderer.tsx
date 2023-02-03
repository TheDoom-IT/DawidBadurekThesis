import {
    AmbientLight,
    BoxGeometry,
    BufferGeometry,
    Canvas,
    DirectionalLight,
    Line,
    LineBasicMaterial,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    Points,
    PointsMaterial,
    Scene
} from "three-js-react-component"
import * as THREE from 'three';
import { animation } from "three-js-react-component/dist/types/types/animation";
import { Tracks } from "../schemas/tracks-schema";

interface RendererProps {
    divId: string;
    tracks: Tracks;
    trackId: number;
}

export const Renderer = (props: RendererProps) => {
    const setCamera = (camera: THREE.PerspectiveCamera | null) => {
        if (!camera) {
            return;
        }

        camera.position.z = 110;
        camera.position.y = 30;
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

    const setPoints = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }

        if (props.trackId >= props.tracks.mTracks.length) {
            return;
        }

        const track = props.tracks.mTracks[props.trackId];
        const vertices = [];
        for (let x = 0; x < track.count; x++) {
            vertices.push(track.mPolyX[x], track.mPolyY[x], track.mPolyZ[x]);
        }

        buffer.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    }

    const setCluter = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }

        if (props.trackId >= props.tracks.mTracks.length) {
            return;
        }
        const track = props.tracks.mTracks[props.trackId];
        const vertices = [];

        for (let x = 0; x < track.mClusters.length; x++) {
            vertices.push(track.mClusters[x].X, track.mClusters[x].Y, track.mClusters[x].Z);
        }
        buffer.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    }

    const setLine = (buffer: THREE.BufferGeometry | null) => {
        if(!buffer) {
            return;
        }

        const vertices = [0,0,0, 100,100,100];
        buffer.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    }

    return <Canvas divId={props.divId}>
        <PerspectiveCamera innerRef={setCamera} />
        <Scene innerRef={setScene}>
            <AmbientLight params={[0x111111, 0.1]} />
            <DirectionalLight innerRef={setLight} params={[0xffffff, 0.5]} />
            <Mesh animate={meshAnimation}>
                <MeshStandardMaterial params={[{ color: 0x43aa45 }]} />
            </Mesh>
            <Line>
                <BufferGeometry innerRef={setLine}/>
                <LineBasicMaterial params={[{color: 0xffffff}]}/>
            </Line>
            <Points>
                <BufferGeometry innerRef={setPoints} />
                <PointsMaterial params={[{ color: 0xffffff }]} />
            </Points>
            <Points>
                <BufferGeometry innerRef={setCluter} />
                <PointsMaterial params={[{ color: 0x000000, size: 2 }]} />
            </Points>
        </Scene>
    </Canvas>
}