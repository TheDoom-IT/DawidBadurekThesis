import { useMemo } from 'react';
import {
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
    index: number;
    max: number;
}

const LINE_SEGMENTS = 5;
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

    const lineAnimation = useMemo(() => {
        return (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % props.track.count;
            for (let x = 0; x < LINE_SEGMENTS; ++x) {
                updatePosition(x, index < x ? 0 : index - x, position, props.track);
            }
            position.needsUpdate = true;
        };
    }, [props.track]);

    const pointsAnimation = useMemo(() => {
        return (ref: THREE.BufferGeometry, timestamp: number) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % props.track.count;
            updatePosition(0, index, position, props.track);
            position.needsUpdate = true;
        };
    }, [props.track]);

    const color = (0xffffff * props.index) / props.max;

    return (
        <>
            <Line>
                <BufferGeometry animate={lineAnimation} innerRef={setLine} />
                <LineBasicMaterial params={[{ color: color }]} />
            </Line>
            <Points>
                <BufferGeometry animate={pointsAnimation} innerRef={setPoints} />
                <PointsMaterial params={[{ color: color }]} />
            </Points>
        </>
    );
};
