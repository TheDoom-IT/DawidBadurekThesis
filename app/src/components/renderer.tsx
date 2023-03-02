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
import { SelectedSource } from '../types/selected-source';

interface RendererProps {
    divId: string;
    tracks: Tracks;
    color: string;
    selectedSources: SelectedSource[];
}

export const Renderer = ({ divId, tracks, color, selectedSources }: RendererProps) => {
    const setScene = (scene: THREE.Scene | null) => {
        if (!scene) {
            return;
        }

        scene.background = new THREE.Color(color);
    };

    return (
        <Canvas divId={divId}>
            <PerspectiveCamera position={[0, 30, 110]} />
            <MainScene innerRef={setScene}>
                <AmbientLight />
                <Plane />
                {tracks.mTracks.map((track, index) => {
                    if (selectedSources[track.source]?.selected !== true) {
                        return null;
                    }

                    return (
                        <TrackFragment
                            key={index}
                            track={track}
                            index={index}
                            max={tracks.mTracks.length}
                        />
                    );
                })}
            </MainScene>
            <OrbitControls />
        </Canvas>
    );
};
