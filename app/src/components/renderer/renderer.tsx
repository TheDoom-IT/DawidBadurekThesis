import {
    AmbientLight,
    Canvas,
    DirectionalLight,
    MainScene,
    OrbitControls,
    PerspectiveCamera,
} from 'react-three-component';
import * as THREE from 'three';
import { File } from '../../schemas/file-schema';
import { SelectedSourceObject } from '../../types/selected-source';
import { MachineModel } from './machine-model';
import { CaloElement } from './calo-element';
import { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls';
import { useCallback, useMemo, useState } from 'react';
import { AnimationData } from '../../types/animation-data';
import {
    ANIMATION_LENGTH_MS,
    ANIMATION_STEP_LENGTH_MS,
    LINE_SEGMENTS,
} from '../../constants/animation';
import { Postprocessing } from './postprocessing';
import { TrackFragment } from './track-fragment';
import { RGBColor } from 'react-color';

interface RendererProps {
    file: File;
    color: string;
    selectedSources: SelectedSourceObject;
    clipRotationAsCamera: boolean;
    showMCalo: boolean;
    glowStrength: number;
    glowColor: RGBColor;
}

export const Renderer = ({
    file,
    color,
    selectedSources,
    clipRotationAsCamera,
    showMCalo,
    glowStrength,
    glowColor,
}: RendererProps) => {
    const [controls, setControls] = useState<Controls | null>(null);

    const initScene = useCallback(
        (scene: THREE.Scene | null) => {
            if (!scene) {
                return;
            }

            scene.background = new THREE.Color(color);
            scene.scale.set(0.5, 0.5, 0.5);
        },
        [color],
    );

    const initRenderer = useCallback((renderer: THREE.WebGLRenderer | null) => {
        if (!renderer) {
            return;
        }

        renderer.localClippingEnabled = true;
    }, []);

    const selectedTracks = useMemo(() => {
        return file.mTracks
            .map((track, index) => ({
                track,
                index,
            }))
            .filter((track) => selectedSources[track.track.source]?.selected === true);
    }, [selectedSources, file]);

    const animationData: AnimationData = useMemo(() => {
        const timeFields = file.mTracks.map((track) => track.time);
        const trackMinTime = Math.min(...timeFields);
        const trackMaxTime = Math.max(...timeFields);
        const trackTimeLength = Math.max(trackMaxTime - trackMinTime, 1);

        const animationsFinishTime = file.mTracks.map((track) => {
            const trackTimeInMs =
                ((track.time - trackMinTime) / trackTimeLength) * ANIMATION_LENGTH_MS;

            const lineSegments = Math.min(LINE_SEGMENTS, track.count);
            return (
                trackTimeInMs +
                ANIMATION_STEP_LENGTH_MS * track.count +
                ANIMATION_STEP_LENGTH_MS * lineSegments
            );
        });

        const maxFinishTime = Math.max(...animationsFinishTime, ANIMATION_LENGTH_MS);

        return {
            minTimeTrack: trackMinTime,
            animationLengthTrack: trackTimeLength,
            extendedAnimationLengthMs: maxFinishTime,
        };
    }, [file]);

    return (
        <Canvas
            params={[
                {
                    powerPreference: 'high-performance',
                    antialias: false,
                    stencil: false,
                    depth: false,
                },
            ]}
            ref={initRenderer}>
            <PerspectiveCamera position={[0, 0, 400]} />
            <MainScene ref={initScene}>
                <AmbientLight params={['white', 0.3]} />
                <DirectionalLight position={[0, 500, 0]} />
                <OrbitControls ref={setControls} />
                <MachineModel
                    controls={controls}
                    clipRotationAsCamera={clipRotationAsCamera}
                    glowStrength={glowStrength}
                    glowColor={glowColor}
                />
                {selectedTracks.map((track) => (
                    <TrackFragment
                        key={track.index}
                        track={track.track}
                        animationData={animationData}
                    />
                ))}
                {showMCalo &&
                    file.mCalo?.map((calo, index) => <CaloElement key={index} calo={calo} />)}
            </MainScene>
            <Postprocessing />
        </Canvas>
    );
};
