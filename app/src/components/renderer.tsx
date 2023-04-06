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
import { AnimationData } from '../types/animation-data';

const ANIMATION_LENGTH_MS = 3000;
const ANIMATION_STEP_LENGTH = 50;

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

    const animationData: AnimationData = useMemo(() => {
        const timeFields = tracks.mTracks.map((track) => track.time);
        const trackMinTime = Math.min(...timeFields);
        const trackMaxTime = Math.max(...timeFields);
        const trackTimeLength = trackMaxTime - trackMinTime;

        const animationsFinishTime = tracks.mTracks.map((track) => {
            const trackTimeInMs =
                ((track.time - trackMinTime) / trackTimeLength) * ANIMATION_LENGTH_MS;
            return trackTimeInMs + ANIMATION_STEP_LENGTH * track.count;
        });

        const maxFinishTime = Math.max(...animationsFinishTime, ANIMATION_LENGTH_MS);
        const extendedMaxTime =
            trackMaxTime +
            ((maxFinishTime - ANIMATION_LENGTH_MS) * trackMaxTime) / ANIMATION_LENGTH_MS;

        return {
            minTime: trackMinTime,
            maxTime: extendedMaxTime,
            trackTimeLength: trackTimeLength,
            animationLength: maxFinishTime,
            stepLength: ANIMATION_STEP_LENGTH,
        };
    }, [tracks]);

    return (
        <Canvas divId={divId}>
            <PerspectiveCamera position={[0, 30, 500]} />
            <MainScene innerRef={setScene}>
                <AmbientLight params={['white', 0.3]} />
                <DirectionalLight position={[0, 20, 10]} />
                <OrbitControls innerRef={(ref) => setControls(ref)} />
                <Plane />
                {selectedTracks.map((track) => {
                    return (
                        <TrackFragment
                            key={track.index}
                            track={track.track}
                            animationData={animationData}
                        />
                    );
                })}
                {showMCalo &&
                    tracks.mCalo?.map((calo, index) => {
                        return <CaloElement key={index} calo={calo} />;
                    })}
            </MainScene>
        </Canvas>
    );
};
