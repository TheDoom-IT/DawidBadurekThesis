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
import { AnimationData } from '../types/animation-data';

export interface TrackFragmentProps {
    track: Track;
    animationData: AnimationData;
}

const LINE_SEGMENTS = 5;

export const TrackFragment = ({ track, animationData }: TrackFragmentProps) => {
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

        buffer.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));
        buffer.setAttribute('color', new THREE.Float32BufferAttribute([1, 1, 1, 1], 4));
    };

    const setLine = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }
        const count = LINE_SEGMENTS > track.count ? track.count : LINE_SEGMENTS;

        const vertices: number[] = new Array(count * 2 * 3).fill(0);

        const colors: number[] = [];
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
            const color = ref.getAttribute('color');
            color.needsUpdate = true;
            position.needsUpdate = true;

            const time = timestamp % animationData.animationLength;
            const startTime =
                ((track.time - animationData.minTime) / animationData.trackTimeLength) *
                animationData.animationLength;

            if (time < startTime) {
                // invisible
                color.setW(0, 0);
                return;
            }

            const index = Math.floor((time - startTime) / animationData.stepLength);
            if (index >= track.count) {
                color.setW(0, 0);
                return;
            }

            // visible
            color.setW(0, 1);
            updatePosition(0, index, position, track);
        },
        [track],
    );

    const lineAnimation = useCallback(
        (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');
            position.needsUpdate = true;

            const time = timestamp % animationData.animationLength;
            const startTime =
                ((track.time - animationData.minTime) / animationData.trackTimeLength) *
                animationData.animationLength;

            if (time < startTime) {
                for (let x = 0; x < LINE_SEGMENTS; ++x) {
                    updatePosition(x * 2, 0, position, track);
                    updatePosition(x * 2 + 1, 0, position, track);
                }
                return;
            }

            const index = Math.floor((time - startTime) / animationData.stepLength);
            if (index >= track.count) {
                // TODO: finish the animation in a smooth way
                for (let x = 0; x < LINE_SEGMENTS; ++x) {
                    updatePosition(x * 2, 0, position, track);
                    updatePosition(x * 2 + 1, 0, position, track);
                }
                return;
            }

            for (let x = 0; x < LINE_SEGMENTS; ++x) {
                updatePosition(x * 2, index < x ? 0 : index - x, position, track);
                updatePosition(x * 2 + 1, index < x + 1 ? 0 : index - (x + 1), position, track);
            }
        },
        [track],
    );

    return (
        <>
            <LineSegments>
                <BufferGeometry animate={lineAnimation} innerRef={setLine} />
                <LineBasicMaterial params={[{ vertexColors: true, transparent: true }]} />
            </LineSegments>
            <Points>
                <BufferGeometry animate={pointsAnimation} innerRef={setPoints} />
                <PointsMaterial params={[{ vertexColors: true, transparent: true }]} />
            </Points>
        </>
    );
};
