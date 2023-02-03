import {
    AmbientLight,
    animation,
    BufferGeometry,
    Canvas,
    DirectionalLight,
    Line,
    LineBasicMaterial,
    PerspectiveCamera,
    Points,
    PointsMaterial,
    Scene
} from "three-js-react-component"
import * as THREE from 'three';
import { Track, Tracks } from "../schemas/tracks-schema";
import React, { useEffect, useState } from "react";

interface RendererProps {
    divId: string;
    tracks: Tracks;
    trackId: number;
}

const LINE_SEGMENTS = 10;
const ANIMATION_SPEED = 500;

export const Renderer = (props: RendererProps) => {
    const [track, setTrack] = useState<Track>();

    useEffect(() => {
        if (props.tracks.mTracks.length <= props.trackId) {
            console.warn('Invalid track id.');
            setTrack(undefined);
            return;
        }

        setTrack(props.tracks.mTracks[props.trackId]);
    }, [props.trackId]);

    const updatePosition = (attributeIndex: number, trackIndex: number, attribute: THREE.BufferAttribute | THREE.InterleavedBufferAttribute, track: Track) => {
        attribute.setXYZ(attributeIndex, track.mPolyX[trackIndex], track.mPolyY[trackIndex], track.mPolyZ[trackIndex]);
    }

    const setCamera = (camera: THREE.PerspectiveCamera | null) => {
        if (!camera) {
            return;
        }

        camera.position.z = 110;
        camera.position.y = 30;
    }

    const setScene = (scene: THREE.Scene | null) => {
        if (!scene) {
            return;
        }

        scene.background = new THREE.Color(0x74acff);
    }

    const setLight = (light: THREE.DirectionalLight | null) => {
        if (!light) {
            return;
        }

        light.position.z = 5;
        light.position.x = 3;
        light.position.y = 3;
    }

    const setCluter = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer || !track) {
            return;
        }

        const vertices = [];

        for (let x = 0; x < track.mClusters.length; x++) {
            vertices.push(track.mClusters[x].X, track.mClusters[x].Y, track.mClusters[x].Z);
        }
        buffer.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    }

    const setPoints = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }

        buffer.setFromPoints([new THREE.Vector3(0, 0, 0)]);
    }

    const setLine = (buffer: THREE.BufferGeometry | null) => {
        if (!buffer) {
            return;
        }

        const vertices = new Array(LINE_SEGMENTS).fill(new THREE.Vector3(0, 0, 0));
        buffer.setFromPoints(vertices);
    }

    const getLineAnimation = (track: Track): animation<THREE.BufferGeometry> => {
        return (timestamp: number, elapsed: number, ref: THREE.BufferGeometry) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            for (let x = 0; x < LINE_SEGMENTS; x++) {
                updatePosition(x, index < x ? index : index - x, position, track);
            }
            position.needsUpdate = true;
        }
    }

    const getPointsAnimation = (track: Track): animation<THREE.BufferGeometry> | undefined => {
        return (timestamp: number, elapsed: number, ref: THREE.BufferGeometry) => {
            const position = ref.getAttribute('position');

            const index = Math.floor(timestamp / ANIMATION_SPEED) % track.count;
            updatePosition(0, index, position, track);
            position.needsUpdate = true;
        }
    }

    return <Canvas divId={props.divId}>
        <PerspectiveCamera innerRef={setCamera} />
        <Scene innerRef={setScene}>
            <AmbientLight params={[0x111111, 0.1]} />
            <DirectionalLight innerRef={setLight} params={[0xffffff, 0.5]} />
            {
                props.tracks.mTracks.map((track, index) =>
                (
                    <React.Fragment key={index}>
                        <Line>
                            <BufferGeometry key={index} animate={getLineAnimation(track)} innerRef={setLine} />
                            <LineBasicMaterial params={[{ color: 0xffffff }]} />
                        </Line>
                        <Points>
                            <BufferGeometry animate={getPointsAnimation(track)} innerRef={setPoints} />
                            <PointsMaterial params={[{ color: 0xffffff }]} />
                        </Points>
                    </React.Fragment>
                ))
            }
        </Scene>
    </Canvas>
}