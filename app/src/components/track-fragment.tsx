import { useCallback, useMemo } from 'react';
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
import { ANIMATION_LENGTH_MS, LINE_SEGMENTS } from '../constants/animation';

export interface TrackFragmentProps {
    track: Track;
    animationData: AnimationData;
}

export const TrackFragment = ({ track, animationData }: TrackFragmentProps) => {
    const trackStartTime = useMemo(() => {
        return (
            ((track.time - animationData.minTime) / animationData.trackTimeLength) *
            ANIMATION_LENGTH_MS
        );
    }, [track, animationData]);

    const updatePosition = useCallback(
        (
            attributeIndex: number,
            trackIndex: number,
            attribute: THREE.BufferAttribute | THREE.InterleavedBufferAttribute,
        ) => {
            attribute.setXYZ(
                attributeIndex,
                track.mPolyX[trackIndex],
                track.mPolyY[trackIndex],
                track.mPolyZ[trackIndex],
            );
        },
        [track],
    );

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

        const count = Math.min(LINE_SEGMENTS, track.count);

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

            const time = timestamp % animationData.extendedAnimationLength;

            const index = Math.floor((time - trackStartTime) / animationData.stepLength);

            if (time < trackStartTime || index >= track.count) {
                color.setW(0, 0); // transparent
                return;
            }

            // visible
            color.setW(0, 1);
            updatePosition(0, index, position);
        },
        [track, updatePosition],
    );

    const lineAnimation = useCallback(
        (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');
            position.needsUpdate = true;

            const time = timestamp % animationData.extendedAnimationLength;

            const index = Math.floor((time - trackStartTime) / animationData.stepLength);

            if (time < trackStartTime || index >= track.count + LINE_SEGMENTS) {
                for (let x = 0; x < LINE_SEGMENTS * 2; ++x) {
                    updatePosition(x, 0, position);
                }
                return;
            }

            if (index >= track.count) {
                // make smooth finish
                for (let x = 0; x < LINE_SEGMENTS; ++x) {
                    let trackIndex2 = index - (x + 1);
                    trackIndex2 = trackIndex2 < 0 || trackIndex2 >= track.count ? 0 : trackIndex2;
                    let trackIndex1 = index - x;
                    trackIndex1 =
                        trackIndex1 < 0 || trackIndex1 >= track.count ? trackIndex2 : trackIndex1;

                    updatePosition(x * 2, trackIndex1, position);
                    updatePosition(x * 2 + 1, trackIndex2, position);
                }
                return;
            }

            for (let x = 0; x < LINE_SEGMENTS; ++x) {
                updatePosition(x * 2, index < x ? 0 : index - x, position);
                updatePosition(x * 2 + 1, index < x + 1 ? 0 : index - (x + 1), position);
            }
        },
        [track, updatePosition],
    );

    const setFrustumCulled = useCallback((ref: THREE.LineSegments | THREE.Points | null) => {
        if (!ref) {
            return;
        }

        ref.frustumCulled = false;
    }, []);

    return (
        <>
            <LineSegments innerRef={setFrustumCulled}>
                <BufferGeometry animate={lineAnimation} innerRef={setLine} />
                <LineBasicMaterial params={[{ vertexColors: true, transparent: true }]} />
            </LineSegments>
            <Points innerRef={setFrustumCulled}>
                <BufferGeometry animate={pointsAnimation} innerRef={setPoints} />
                <PointsMaterial params={[{ vertexColors: true, transparent: true }]} />
            </Points>
        </>
    );
};
