import { CylinderGeometry, Mesh, MeshBasicMaterial } from 'react-three-component';
import { Calo } from '../schemas/tracks-schema';
import * as THREE from 'three';
import { useCallback } from 'react';

interface CaloProps {
    calo: Calo;
}

export const CaloFragment = ({ calo }: CaloProps) => {
    calo.energy;
    calo.eta;
    calo.phi;

    const height = calo.energy;
    console.log(calo);
    const position = new THREE.Vector3().setFromSphericalCoords(
        100 + height / 2,
        calo.phi,
        calo.eta,
    );
    console.log('positions', position);
    const rotation = new THREE.Vector3().setFromSphericalCoords(100, calo.phi, calo.eta);

    const prepareMesh = useCallback((mesh: THREE.Mesh | null) => {
        if (!mesh) {
            return;
        }

        mesh.position.set(position.x, position.y, position.z);
        mesh.lookAt(0, 0, 0);
        mesh.rotation.x += Math.PI / 2;
    }, []);

    return (
        <Mesh position={[position.x, position.y, position.z]} innerRef={prepareMesh}>
            <MeshBasicMaterial params={[{ color: 'grey' }]} />
            <CylinderGeometry params={[1, 1, height]} />
        </Mesh>
    );
};
