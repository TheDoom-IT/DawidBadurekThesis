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
import { CaloElement } from './calo-element';
import { useMemo } from 'react';

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

    const selectedTracks = useMemo(() => {
        return tracks.mTracks
            .map((track, index) => ({
                track,
                index,
            }))
            .filter((track) => selectedSources[track.track.source]?.selected === true);
    }, [selectedSources, tracks]);

    return (
        <Canvas divId={divId}>
            <PerspectiveCamera position={[0, 30, 110]} />
            <MainScene innerRef={setScene}>
                <AmbientLight />
                <Plane />
                {selectedTracks.map((track) => {
                    return <TrackFragment key={track.index} track={track.track} />;
                })}
                {tracks.mCalo?.map((calo, index) => {
                    return <CaloElement key={index} calo={calo} />;
                })}
            </MainScene>
            <OrbitControls />
        </Canvas>
    );
};
