import {
    AmbientLight,
    Canvas,
    DirectionalLight,
    MainScene,
    OrbitControls,
    PerspectiveCamera,
} from 'react-three-component';
import * as THREE from 'three';
import { Tracks } from '../schemas/tracks-schema';
import { TrackFragment } from './track-fragment';
import { SelectedSourceObject } from '../types/selected-source';
import { useState } from 'react';
import { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls';
import { Plane } from './plane';
import { CaloElement } from './calo-element';
import { useMemo } from 'react';

interface RendererProps {
    divId: string;
    tracks: Tracks;
    color: string;
    selectedSources: SelectedSourceObject;
    showMCalo: boolean;
}

export const Renderer = ({ divId, tracks, color, selectedSources, showMCalo }: RendererProps) => {
    const [controls, setControls] = useState<Controls | null>(null);

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
            <PerspectiveCamera position={[0, 30, 500]} />
            <MainScene innerRef={setScene}>
                <AmbientLight params={['white', 0.3]} />
                <DirectionalLight position={[0, 20, 10]} />
                <OrbitControls innerRef={(ref) => setControls(ref)} />
                <Plane />
                {selectedTracks.map((track) => {
                    return <TrackFragment key={track.index} track={track.track} />;
                })}
                {showMCalo &&
                    tracks.mCalo?.map((calo, index) => {
                        return <CaloElement key={index} calo={calo} />;
                    })}
            </MainScene>
        </Canvas>
    );
};
