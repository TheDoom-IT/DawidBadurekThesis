import { useCallback, useEffect, useMemo } from 'react';
import { OBJLoader, Mesh, MeshStandardMaterial, TorusGeometry } from 'react-three-component';
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
    }, [controls, clippingPlanes]);

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
    }, [controls, clipRotationAsCamera, clippingPlanes, onControlsChange]);

    const updateShader = useCallback((shader: THREE.Shader) => {
        shader.vertexShader = 'varying vec3 vPosition;\n' + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
            '<fog_vertex>',
            '<fog_vertex>\nvPosition = mvPosition.xyz;',
        );

        shader.fragmentShader = 'varying vec3 vPosition;\n' + shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace(
            '<dithering_fragment>',
            '<dithering_fragment>\nvec4 clippingPlane = clippingPlanes[0];\n' +
                '    float distance = dot(vPosition, clippingPlane.xyz) + clippingPlane.w;\n' +
                '    if(abs(distance) < 5.0) {\n' +
                '        gl_FragColor = vec4(8.0, 0.8, 1, 1.0);\n' +
                '    }',
        );
    }, []);

    const initMaterial = useCallback(
        (material: THREE.MeshStandardMaterial | null) => {
            if (!material) {
                return;
            }

            material.onBeforeCompile = updateShader;
        },
        [updateShader],
    );

    const initModel = useCallback(
        (group: THREE.Group | null) => {
            if (!group) {
                return;
            }
            console.log(group);

            group.traverse((el) => {
                if ('material' in el && el.material instanceof THREE.Material) {
                    el.material.setValues({
                        side: THREE.DoubleSide,

                        clippingPlanes: clippingPlanes,
                        toneMapped: false,
                    });

                    el.material.onBeforeCompile = updateShader;
                }
            });
        },
        [clippingPlanes, updateShader],
    );

    return (
        <Mesh>
            <OBJLoader url={'model.obj'} ref={initModel} />
            {/*<TorusGeometry params={[250, 50, 16, 100]} />*/}
            <MeshStandardMaterial
                ref={initMaterial}
                params={[
                    {
                        side: THREE.DoubleSide,

                        color: 'green',

                        clippingPlanes: clippingPlanes,
                        toneMapped: false,
                    },
                ]}
            />
        </Mesh>
    );
};
