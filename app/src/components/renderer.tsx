import {
    AmbientLight,
    Canvas,
    MainScene,
    OrbitControls,
    PerspectiveCamera,
} from 'react-three-component';
import * as THREE from 'three';
import { Tracks } from '../schemas/tracks-schema';
import { TrackFragment } from './track-fragment';
import { Plane } from './plane';

interface RendererProps {
    divId: string;
    tracks: Tracks;
    color: string;
}

export const Renderer = (props: RendererProps) => {
    const setScene = (scene: THREE.Scene | null) => {
        if (!scene) {
            return;
        }

        scene.background = new THREE.Color(props.color);
    };

    return (
        <Canvas divId={props.divId}>
            <PerspectiveCamera position={[0, 30, 110]} />
            <MainScene innerRef={setScene}>
                <AmbientLight />
                <Plane />
                {props.tracks.mTracks.map((track, index) => (
                    <TrackFragment
                        key={index}
                        track={track}
                        index={index}
                        max={props.tracks.mTracks.length}
                    />
                ))}
            </MainScene>
            <OrbitControls />
        </Canvas>
    );
};
