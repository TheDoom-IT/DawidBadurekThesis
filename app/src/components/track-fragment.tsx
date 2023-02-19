import React from 'react';
import {
    Animation,
    BufferGeometry,
    Line,
    LineBasicMaterial,
    Points,
    PointsMaterial,
} from 'three-js-react-component';
import * as THREE from 'three';
import { Track } from '../schemas/tracks-schema';

export interface TrackFragmentProps {
    track: Track;
}

const LINE_SEGMENTS = 10;
const ANIMATION_SPEED = 500;

export const TrackFragment = (props: TrackFragmentProps) => {
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

        const vertices = new Array(LINE_SEGMENTS).fill(new THREE.Vector3(0, 0, 0));
        buffer.setFromPoints(vertices);
    };

    const getLineAnimation = (track: Track): Animation<THREE.BufferGeometry> => {
        return (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            for (let x = 0; x < LINE_SEGMENTS; x++) {
                updatePosition(x, index < x ? index : index - x, position, track);
            }
            position.needsUpdate = true;
        };
    };

    const getPointsAnimation = (track: Track): Animation<THREE.BufferGeometry> | undefined => {
        return (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            updatePosition(0, index, position, track);
            position.needsUpdate = true;
        };
    };

    return (
        <React.Fragment>
            <Line>
                <BufferGeometry animate={getLineAnimation(props.track)} innerRef={setLine} />
                <LineBasicMaterial params={[{ color: 0xffffff }]} />
            </Line>
            <Points>
                <BufferGeometry animate={getPointsAnimation(props.track)} innerRef={setPoints} />
                <PointsMaterial params={[{ color: 0xffffff }]} />
            </Points>
        </React.Fragment>
    );
};
