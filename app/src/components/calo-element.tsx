import { CylinderGeometry, Mesh, MeshBasicMaterial } from 'react-three-component';
import { Calo } from '../schemas/tracks-schema';
import { useMemo } from 'react';
import * as THREE from 'three';

interface CaloElementProps {
    calo: Calo;
}

export const CaloElement = ({ calo }: CaloElementProps) => {
    const rotation = useMemo(() => {
        return new THREE.Vector3().setFromEuler(new THREE.Euler(0, calo.phi, calo.eta, 'XYZ'));
    }, [calo]);

    const position = useMemo(() => {
        return rotation
            .clone()
            .normalize()
            .multiplyScalar(30 + calo.energy / 2);
    }, [rotation]);

    return (
        <Mesh
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}>
            <MeshBasicMaterial params={[{ color: 0x9ee682 }]} />
            <CylinderGeometry params={[0.5, 0.5, calo.energy]} />
        </Mesh>
    );
};
