import { useCallback, useEffect, useMemo } from 'react';
import { Mesh, ShaderMaterial, SphereGeometry, TorusGeometry } from 'react-three-component';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from '../shaders/vertex-shader.glsl?raw';
import fragmentShader from '../shaders/fragment-shader.glsl?raw';
import glowFragment from '../shaders/glow-fragment.glsl?raw';

interface MachineModelProps {
    controls: OrbitControls | null;
    clipRotationAsCamera: boolean;
}

export const MachineModel = ({ controls, clipRotationAsCamera }: MachineModelProps) => {
    const clippingPlanes = useMemo(() => {
        return [new THREE.Plane(new THREE.Vector3(0, 0, 0), 0)];
    }, []);

    const onControlsChange = useCallback(() => {
        if (!controls) {
            return;
        }

        clippingPlanes[0].normal = controls.object.position.clone().negate().normalize();
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

    const initGlow = (mesh: THREE.Mesh | null) => {
        if (!mesh) {
            return;
        }

        mesh.scale.set(1.02, 1.02, 1.02);
    };

    return (
        <Mesh>
            <SphereGeometry params={[150, 32, 16]} />
            <TorusGeometry params={[250, 50, 16, 100]} />
            <ShaderMaterial
                params={[
                    {
                        side: THREE.DoubleSide,

                        clipping: true,
                        clippingPlanes: clippingPlanes,

                        fragmentShader: fragmentShader,
                        vertexShader: vertexShader,
                    },
                ]}
            />
            <Mesh innerRef={initGlow}>
                <SphereGeometry params={[150, 32, 16]} />
                <TorusGeometry params={[250, 50, 16, 100]} />
                <ShaderMaterial
                    params={[
                        {
                            side: THREE.BackSide,
                            blending: THREE.AdditiveBlending,

                            clipping: true,
                            clippingPlanes: clippingPlanes,

                            fragmentShader: glowFragment,
                            vertexShader: vertexShader,
                        },
                    ]}
                />
            </Mesh>
        </Mesh>
    );
};
