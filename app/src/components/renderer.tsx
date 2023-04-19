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
import { Plane } from './plane';
import { MachineModel } from './machine-model';
import { CaloElement } from './calo-element';
import { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls';
import { useMemo, useState } from 'react';
import { AnimationData } from '../types/animation-data';
import { ANIMATION_LENGTH_MS, ANIMATION_STEP_LENGTH, LINE_SEGMENTS } from '../constants/animation';
import { Postprocessing } from './postprocessing';

interface RendererProps {
    divId: string;
    tracks: Tracks;
    color: string;
    selectedSources: SelectedSourceObject;
    clipRotationAsCamera: boolean;
    showMCalo: boolean;
}

export const Renderer = ({
    divId,
    tracks,
    color,
    selectedSources,
    clipRotationAsCamera,
    showMCalo,
}: RendererProps) => {
    const [controls, setControls] = useState<Controls | null>(null);

    const setScene = (scene: THREE.Scene | null) => {
        if (!scene) {
            return;
        }

        scene.background = new THREE.Color(color);
    };

    const initRenderer = (renderer: THREE.WebGLRenderer | null) => {
        if (!renderer) {
            return;
        }

        renderer.localClippingEnabled = true;
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
        const trackTimeLength = Math.max(trackMaxTime - trackMinTime, 1);

        const animationsFinishTime = tracks.mTracks.map((track) => {
            const trackTimeInMs =
                ((track.time - trackMinTime) / trackTimeLength) * ANIMATION_LENGTH_MS;

            return (
                trackTimeInMs +
                ANIMATION_STEP_LENGTH * track.count +
                ANIMATION_STEP_LENGTH * LINE_SEGMENTS
            );
        });

        const maxFinishTime = Math.max(...animationsFinishTime, ANIMATION_LENGTH_MS);

        return {
            minTime: trackMinTime,
            trackTimeLength: trackTimeLength,
            extendedAnimationLength: maxFinishTime,
            stepLength: ANIMATION_STEP_LENGTH,
        };
    }, [tracks]);

    return (
        <Canvas
            divId={divId}
            params={[
                {
                    powerPreference: 'high-performance',
                    antialias: false,
                    stencil: false,
                    depth: false,
                },
            ]}
            innerRef={initRenderer}>
            <PerspectiveCamera position={[0, 30, 500]} />
            <MainScene innerRef={setScene}>
                <AmbientLight params={['white', 0.3]} />
                <DirectionalLight position={[0, 20, 10]} />
                <OrbitControls innerRef={(ref: Controls | null) => setControls(ref)} />
                <MachineModel controls={controls} clipRotationAsCamera={clipRotationAsCamera} />
                <Plane />
                {selectedTracks.map((track) => (
                    <TrackFragment
                        key={track.index}
                        track={track.track}
                        animationData={animationData}
                    />
                ))}
                {showMCalo &&
                    tracks.mCalo?.map((calo, index) => <CaloElement key={index} calo={calo} />)}
            </MainScene>
            <Postprocessing />
        </Canvas>
    );
};
