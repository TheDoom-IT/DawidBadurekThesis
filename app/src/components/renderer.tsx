import {
    AmbientLight,
    Canvas,
    LineLoop,
    MainScene,
    Mesh,
    MeshStandardMaterial,
    OrbitControls,
    PerspectiveCamera,
    PlaneGeometry,
} from 'three-js-react-component';
import * as THREE from 'three';
import { Tracks } from '../schemas/tracks-schema';
import { TrackFragment } from './track-fragment';

interface RendererProps {
    divId: string;
    tracks: Tracks;
}

export const Renderer = (props: RendererProps) => {
    const setScene = (scene: THREE.Scene | null) => {
        if (!scene) {
            return;
        }

        scene.background = new THREE.Color(0x74acff);
    };

    return (
        <Canvas divId={props.divId}>
            <PerspectiveCamera position={[0, 30, 110]} />
            <MainScene innerRef={setScene}>
                <AmbientLight />
                <Mesh rotation={[Math.PI / 2, 0, 0]}>
                    <PlaneGeometry params={[100, 100]} />
                    <MeshStandardMaterial
                        params={[
                            {
                                color: 0xffff00,
                                opacity: 0.2,
                                transparent: true,
                                side: THREE.DoubleSide,
                            },
                        ]}
                    />
                    <LineLoop>
                        <PlaneGeometry params={[100, 100]} />
                    </LineLoop>
                </Mesh>
                {props.tracks.mTracks.map((track, index) => (
                    <TrackFragment key={index} track={track} />
                ))}
            </MainScene>
            <OrbitControls />
        </Canvas>
    );
};
