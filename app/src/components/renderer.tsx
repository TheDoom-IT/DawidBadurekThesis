import {
    AmbientLight,
    animation,
    BufferGeometry,
    Canvas,
    Line,
    LineBasicMaterial,
    LineLoop,
    Mesh,
    MeshStandardMaterial,
    OrbitControls,
    PerspectiveCamera,
    PlaneGeometry,
    Points,
    PointsMaterial,
    Scene,
} from 'react-three-component';
import * as THREE from 'three';
import { Track, Tracks } from '../schemas/tracks-schema';
import React from 'react';

interface RendererProps {
    divId: string;
    tracks: Tracks;
}

const LINE_SEGMENTS = 10;
const ANIMATION_SPEED = 500;

export const Renderer = (props: RendererProps) => {
    const updatePosition = (
        attributeIndex: number,
        trackIndex: number,
        attribute: THREE.BufferAttribute | THREE.InterleavedBufferAttribute,
        track: Track,
    ) => {
        attribute.setXYZ(
            attributeIndex,
            track.mPolyX[trackIndex],
            track.mPolyY[trackIndex],
            track.mPolyZ[trackIndex],
        );
    };

    const setScene = (scene: THREE.Scene | null) => {
        if (!scene) {
            return;
        }

        scene.background = new THREE.Color(0x74acff);
    };

    const setPoints = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }

        buffer.setFromPoints([new THREE.Vector3(0, 0, 0)]);
    };

    const setLine = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }

        const vertices = new Array(LINE_SEGMENTS).fill(new THREE.Vector3(0, 0, 0));
        buffer.setFromPoints(vertices);
    };

    const getLineAnimation = (track: Track): animation<THREE.BufferGeometry> => {
        return (timestamp: number, elapsed: number, ref: THREE.BufferGeometry) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            for (let x = 0; x < LINE_SEGMENTS; x++) {
                updatePosition(x, index < x ? index : index - x, position, track);
            }
            position.needsUpdate = true;
        };
    };

    const getPointsAnimation = (track: Track): animation<THREE.BufferGeometry> | undefined => {
        return (timestamp: number, elapsed: number, ref: THREE.BufferGeometry) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            updatePosition(0, index, position, track);
            position.needsUpdate = true;
        };
    };

    return (
        <Canvas divId={props.divId}>
            <OrbitControls />
            <PerspectiveCamera position={[0, 30, 110]} />
            <Scene innerRef={setScene}>
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
                    <React.Fragment key={index}>
                        <Line>
                            <BufferGeometry
                                key={index}
                                animate={getLineAnimation(track)}
                                innerRef={setLine}
                            />
                            <LineBasicMaterial params={[{ color: 0xffffff }]} />
                        </Line>
                        <Points>
                            <BufferGeometry
                                animate={getPointsAnimation(track)}
                                innerRef={setPoints}
                            />
                            <PointsMaterial params={[{ color: 0xffffff }]} />
                        </Points>
                    </React.Fragment>
                ))}
            </Scene>
        </Canvas>
    );
};
