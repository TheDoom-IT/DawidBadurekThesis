import { useCallback } from 'react';
import {
    BufferGeometry,
    LineBasicMaterial,
    LineSegments,
    Points,
    PointsMaterial,
} from 'react-three-component';
import * as THREE from 'three';
import { Track } from '../schemas/file-schema';
import { AnimationData } from '../types/animation-data';
import { ANIMATION_LENGTH_MS, LINE_SEGMENTS } from '../constants/animation';

export interface TrackFragmentProps {
    track: Track;
    animationData: AnimationData;
}

export const TrackFragment = ({ track, animationData }: TrackFragmentProps) => {
    const lineSegments = Math.min(LINE_SEGMENTS, track.count);

    const trackStartTime =
        ((track.time - animationData.minTimeTrack) / animationData.animationLengthTrack) *
        ANIMATION_LENGTH_MS;

    const updatePosition = useCallback(
        (
            attributeIndex: number,
            positionIndex: number,
            attribute: THREE.BufferAttribute | THREE.InterleavedBufferAttribute,
        ) => {
            attribute.setXYZ(
                attributeIndex,
                track.mPolyX[positionIndex],
                track.mPolyY[positionIndex],
                track.mPolyZ[positionIndex],
            );
        },
        [track],
    );

    const initPointsGeometry = useCallback((buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }

        buffer.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));
        buffer.setAttribute('color', new THREE.Float32BufferAttribute([1, 1, 1, 1], 4));
    }, []);

    const initLineGeometry = useCallback(
        (buffer: THREE.BufferGeometry | null) => {
            if (!buffer) {
                return;
            }

            const vertices: number[] = new Array(lineSegments * 2 * 3).fill(0);

            const colors: number[] = [];
            for (let x = 0; x < lineSegments; x++) {
                const color1 = 1 - x / lineSegments;
                const color2 = 1 - (x + 1) / lineSegments;
                colors.push(color1, color1, color1, color1, color2, color2, color2, color2);
            }

            buffer.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            buffer.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));
        },
        [lineSegments],
    );

    const pointsAnimation = useCallback(
        (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');
            const color = ref.getAttribute('color');
            color.needsUpdate = true;
            position.needsUpdate = true;

            const time = timestamp % animationData.extendedAnimationLengthMs;

            const index = Math.floor((time - trackStartTime) / animationData.stepLengthMs);

            if (time < trackStartTime || index >= track.count) {
                color.setW(0, 0); // transparent
                return;
            }

            // visible
            color.setW(0, 1);
            updatePosition(0, index, position);
        },
        [
            animationData.extendedAnimationLengthMs,
            animationData.stepLengthMs,
            track.count,
            trackStartTime,
            updatePosition,
        ],
    );

    const lineAnimation = useCallback(
        (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');
            position.needsUpdate = true;

            const time = timestamp % animationData.extendedAnimationLengthMs;

            const index = Math.floor((time - trackStartTime) / animationData.stepLengthMs);

            if (time < trackStartTime || index >= track.count + lineSegments) {
                for (let x = 0; x < lineSegments * 2; ++x) {
                    updatePosition(x, 0, position);
                }
                return;
            }

            if (index >= track.count) {
                // make smooth finish
                for (let x = 0; x < lineSegments; ++x) {
                    let index2 = index - (x + 1);
                    index2 = index2 < 0 || index2 >= track.count ? 0 : index2;
                    let index1 = index - x;
                    index1 = index1 < 0 || index1 >= track.count ? index2 : index1;

                    updatePosition(x * 2, index1, position);
                    updatePosition(x * 2 + 1, index2, position);
                }
                return;
            }

            for (let x = 0; x < lineSegments; ++x) {
                updatePosition(x * 2, index < x ? 0 : index - x, position);
                updatePosition(x * 2 + 1, index < x + 1 ? 0 : index - (x + 1), position);
            }
        },
        [
            lineSegments,
            animationData.extendedAnimationLengthMs,
            animationData.stepLengthMs,
            track.count,
            trackStartTime,
            updatePosition,
        ],
    );

    const setFrustumCulled = useCallback((ref: THREE.LineSegments | THREE.Points | null) => {
        if (!ref) {
            return;
        }

        ref.frustumCulled = false;
    }, []);

    const initPointsMaterial = useCallback((ref: THREE.PointsMaterial | null) => {
        if (!ref) {
            return;
        }

        ref.onBeforeCompile = (shader) => {
            const endIndex = shader.fragmentShader.lastIndexOf('}');
            shader.fragmentShader =
                shader.fragmentShader.slice(0, endIndex) +
                'if(vColor.w == 0.0) {discard;};' + //discard fully transparent pixels
                shader.fragmentShader.slice(endIndex);
        };
    }, []);

    return (
        <>
            <LineSegments ref={setFrustumCulled}>
                <BufferGeometry animate={lineAnimation} ref={initLineGeometry} />
                <LineBasicMaterial
                    params={[{ vertexColors: true, transparent: true, linewidth: 2 }]}
                />
            </LineSegments>
            <Points ref={setFrustumCulled}>
                <BufferGeometry animate={pointsAnimation} ref={initPointsGeometry} />
                <PointsMaterial
                    ref={initPointsMaterial}
                    params={[{ vertexColors: true, transparent: true, size: 2 }]}
                />
            </Points>
        </>
    );
};
