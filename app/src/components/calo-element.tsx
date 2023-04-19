import { CylinderGeometry, Mesh, MeshBasicMaterial } from 'react-three-component';
import { Calo } from '../schemas/tracks-schema';
import { useMemo } from 'react';
import * as THREE from 'three';

interface CaloElementProps {
    calo: Calo;
}

export const CaloElement = ({ calo }: CaloElementProps) => {
    const rotation = useMemo(() => {
        const euler = new THREE.Euler(0, calo.phi, calo.eta, 'XYZ');
        return new THREE.Vector3(0, -1, 0).applyEuler(euler);
    }, [calo]);

    const position = useMemo(() => {
        return rotation.clone().multiplyScalar(200 + calo.energy / 2);
    }, [rotation]);

    const caloRadius = 2;

    return (
        <Mesh
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}>
            <MeshBasicMaterial params={[{ color: 0x9ee682 }]} />
            <CylinderGeometry params={[caloRadius, caloRadius, calo.energy]} />
        </Mesh>
    );
};
