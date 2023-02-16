import {
    BoxGeometryTest,
    BufferGeometry,
    Canvas,
    CanvasTest,
    MeshBasicMaterial,
    MeshBasicMaterialTest,
    MeshStandardMaterial,
    MeshStandardMaterialTest,
    MeshTest,
    PerspectiveCamera,
    Points,
    PointsMaterial,
    Scene,
} from 'three-js-react-component';
import * as THREE from 'three';
import { useRef } from 'react';

const testPoints = [
    [
        [2, 1.0, 1],
        [1, 1.2, 1],
        [1, 1.4, 1],
        [1, 1.6, 1],
    ],
    [
        [1, 2, 1],
        [1.2, 2, 1],
        [1.4, 2, 1],
        [1.6, 2, 1],
    ],
    [
        [1, 3, 2],
        [1.2, 3, 2],
        [1.4, 3, 2],
        [1.6, 3, 2],
    ],
];

export const AppTest = (props: { pointsNumber: number }) => {
    const pointsBuffer = useRef<THREE.BufferGeometry>();

    const divId = 'canvas-div';

    const setPosition = () => {
        const buffer = pointsBuffer.current;
        if (buffer == undefined) {
            return;
        }

        const vertices = new Float32Array(props.pointsNumber * 3).fill(1);

        buffer.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    };

    const initGeometry = (buffer: THREE.BufferGeometry | null) => {
        if (buffer == null) {
            return;
        }

        pointsBuffer.current = buffer;
        setPosition();
    };

    const animateGeometry = (
        timestamp: number,
        elapsed: number,
        geometry: THREE.BufferGeometry,
    ) => {
        const position = geometry.getAttribute('position');
        const seconds = Math.floor(timestamp / 1000);
        const previousSeconds = Math.floor((timestamp - elapsed) / 1000);
        if (seconds == previousSeconds) {
            return;
        }
        const index = seconds % testPoints[0].length;
        const itemsNumber = position.array.length / position.itemSize;

        for (let x = 0; x < itemsNumber; x++) {
            const toSet = testPoints[x][index];
            position.setXYZ(x, toSet[0], toSet[1], toSet[2]).needsUpdate = true;
        }
    };

    const pointsAnimatation = (t: number, e: number, points: THREE.Points) => {
        points.rotation.x += 0.01;
        points.rotation.y += 0.01;
    };

    return (
        <div className="my-box" id={divId}>
            <CanvasTest divId={divId}>
                <MeshTest
                    position={[1, 0, 0]}
                    rotation={[0, 2, 0]}
                    animate={(t: number, e: number, r: THREE.Mesh) => {
                        r.rotation.x += 0.01;
                    }}>
                    <BoxGeometryTest />
                    <MeshStandardMaterialTest />
                </MeshTest>
            </CanvasTest>
        </div>
    );
};
