import { useCallback, useEffect, useMemo } from 'react';
import { Mesh, MeshStandardMaterial, TorusGeometry } from 'react-three-component';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

    return (
        <Mesh>
            <TorusGeometry params={[250, 50, 16, 100]} />
            <MeshStandardMaterial
                innerRef={(material) => {
                    if (!material) {
                        return;
                    }

                    material.onBeforeCompile = (shader) => {
                        shader.vertexShader = 'varying vec3 vPosition;\n' + shader.vertexShader;
                        shader.vertexShader = shader.vertexShader.replace(
                            '<fog_vertex>',
                            '<fog_vertex>\nvPosition = mvPosition.xyz;',
                        );

                        shader.fragmentShader = 'varying vec3 vPosition;\n' + shader.fragmentShader;
                        shader.fragmentShader = shader.fragmentShader.replace(
                            '<dithering_fragment>',
                            '<dithering_fragment>\nvec4 clippingPlane = clippingPlanes[0]; // clippingPlane is in the camera coordinates\n' +
                                '    float distance = dot(vPosition, clippingPlane.xyz) + clippingPlane.w;\n' +
                                '    if(abs(distance) < 10.0) {\n' +
                                '        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
                                '    }',
                        );
                    };
                }}
                params={[
                    {
                        side: THREE.DoubleSide,

                        color: 'green',

                        clippingPlanes: clippingPlanes,
                    },
                ]}
            />
        </Mesh>
    );
};
