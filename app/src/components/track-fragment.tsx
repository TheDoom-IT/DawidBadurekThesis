import { useCallback } from 'react';
import {
    BufferGeometry,
    LineBasicMaterial,
    LineSegments,
    Points,
    PointsMaterial,
} from 'react-three-component';
import * as THREE from 'three';
import { Track } from '../schemas/tracks-schema';

export interface TrackFragmentProps {
    track: Track;
}

const LINE_SEGMENTS = 5;
const ANIMATION_SPEED = 500;

export const TrackFragment = ({ track }: TrackFragmentProps) => {
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

        const vertices: number[] = new Array(LINE_SEGMENTS * 2 * 3).fill(0);

        const colors: number[] = [];
        const count = LINE_SEGMENTS > track.count ? track.count : LINE_SEGMENTS;
        for (let x = 0; x < count; x++) {
            const color1 = 1 - x / count;
            const color2 = 1 - (x + 1) / count;
            colors.push(color1, color1, color1, color1, color2, color2, color2, color2);
        }

        buffer.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        buffer.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));
    };

    const pointsAnimation = useCallback(
        (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            updatePosition(0, index, position, track);
            position.needsUpdate = true;
        },
        [track],
    );

    const lineAnimation = useCallback(
        (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            for (let x = 0; x < LINE_SEGMENTS; ++x) {
                updatePosition(x * 2, index < x ? 0 : index - x, position, track);
                updatePosition(x * 2 + 1, index < x + 1 ? 0 : index - (x + 1), position, track);
            }
            position.needsUpdate = true;
        },
        [track],
    );

    return (
        <>
            <LineSegments>
                <BufferGeometry animate={lineAnimation} innerRef={setLine} />
                <LineBasicMaterial
                    params={[
                        {
                            vertexColors: true,
                            transparent: true,
                        },
                    ]}
                />
            </LineSegments>
            <Points>
                <BufferGeometry animate={pointsAnimation} innerRef={setPoints} />
                <PointsMaterial params={[{ color: 0xffffff }]} />
            </Points>
        </>
    );
};
