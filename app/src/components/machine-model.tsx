import { useCallback, useEffect, useMemo } from 'react';
import { Mesh, MeshStandardMaterial, TorusGeometry } from 'react-three-component';
import * as THREE from 'three';
import { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls';

interface MachineModelProps {
    controls: Controls | null;
    clipRotationAsCamera: boolean;
}

export const MachineModel = ({ controls, clipRotationAsCamera }: MachineModelProps) => {
    const clippingPlanes = useMemo(() => {
        return [new THREE.Plane(new THREE.Vector3(0, 0, -1), 0)];
    }, []);

    const onControlsChange = useCallback(() => {
        if (!controls) {
            return;
        }

        clippingPlanes[0].normal = controls.object.position.clone().normalize().negate();
    }, [controls]);

    useEffect(() => {
        if (!controls || !clipRotationAsCamera) {
            clippingPlanes[0].normal.set(0, 0, -1);
            return;
        }

        controls.addEventListener('change', onControlsChange);
        onControlsChange();

        return () => {
            controls.removeEventListener('change', onControlsChange);
        };
    }, [controls, clipRotationAsCamera, onControlsChange]);

    return (
        <Mesh>
            <TorusGeometry params={[250, 50, 16, 100]} />
            <MeshStandardMaterial
                params={[
                    {
                        color: 0x123456,
                        side: THREE.DoubleSide,

                        clippingPlanes: clippingPlanes,
                    },
                ]}
            />
        </Mesh>
    );
};
