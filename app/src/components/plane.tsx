import { LineLoop, Mesh, MeshStandardMaterial, PlaneGeometry } from 'react-three-component';
import * as THREE from 'three';
import React from 'react';

export const Plane = React.memo(function Plane() {
    return (
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
    );
});
