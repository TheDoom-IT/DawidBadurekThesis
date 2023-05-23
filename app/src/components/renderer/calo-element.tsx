import { CylinderGeometry, Mesh, MeshBasicMaterial } from 'react-three-component';
import { Calo } from '../../schemas/file-schema';
import { useMemo } from 'react';
import * as THREE from 'three';

interface CaloElementProps {
    calo: Calo;
}

const CALO_RADIUS = 300;
const CYLINDER_RADIUS = 2;

export const CaloElement = ({ calo }: CaloElementProps) => {
    const rotation = useMemo(() => {
        // or calo.eta, calo.phi, 0 ???
        const euler = new THREE.Euler(0, calo.phi, calo.eta, 'XYZ');
        return new THREE.Vector3(0, -1, 0).applyEuler(euler);
    }, [calo]);

    const position = useMemo(() => {
        return rotation.clone().multiplyScalar(CALO_RADIUS + calo.energy / 2);
    }, [rotation, calo.energy]);

    return (
        <Mesh
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}>
            <MeshBasicMaterial params={[{ color: 0x9ee682 }]} />
            <CylinderGeometry params={[CYLINDER_RADIUS, CYLINDER_RADIUS, calo.energy]} />
        </Mesh>
    );
};
