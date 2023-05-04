import { useCallback, useEffect, useMemo } from 'react';
import { OBJLoader } from 'react-three-component';
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

        const distance = controls.object.position.distanceTo(new THREE.Vector3(0, 0, 0));
        clippingPlanes[0].constant = distance / 5;
    }, [controls, clippingPlanes]);

    useEffect(() => {
        if (!controls || !clipRotationAsCamera) {
            clippingPlanes[0].normal.set(0, 0, -1);
            clippingPlanes[0].constant = 0;
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
        const vertexEndIndex = shader.vertexShader.lastIndexOf('}');
        shader.vertexShader =
            shader.vertexShader.slice(0, vertexEndIndex) +
            'vPosition = mvPosition.xyz;\n' +
            shader.vertexShader.slice(vertexEndIndex);

        shader.fragmentShader = 'varying vec3 vPosition;\n' + shader.fragmentShader;
        const index = shader.fragmentShader.lastIndexOf('}');
        shader.fragmentShader =
            shader.fragmentShader.slice(0, index) +
            'vec4 clippingPlane = clippingPlanes[0];\n' +
            '    float distance = dot(vPosition, clippingPlane.xyz) + clippingPlane.w;\n' +
            '    if(abs(distance) < 1.0) {\n' +
            '        gl_FragColor = vec4(8.0, 0.8, 1, 1.0);\n' +
            '    }\n' +
            shader.fragmentShader.slice(index);
    }, []);

    const initModel = useCallback(
        (group: THREE.Group | null) => {
            if (!group) {
                return;
            }

            group.rotation.y = Math.PI;
            group.scale.set(0.6, 0.6, 0.6);

            group.traverse((el) => {
                if ('material' in el && el.material instanceof THREE.Material) {
                    el.material.setValues({
                        side: THREE.DoubleSide,

                        transparent: true,
                        opacity: 0.5,

                        toneMapped: false,
                    });

                    if ('color' in el.material && el.material.color instanceof THREE.Color) {
                        el.material.color.set(0xffffff * Math.random());
                        el.material = el.material.clone() as THREE.Material;
                        (el.material as THREE.Material).onBeforeCompile = updateShader;
                        (el.material as THREE.Material).setValues({
                            clippingPlanes: clippingPlanes,
                        });
                    }
                }
            });
        },
        [clippingPlanes, updateShader],
    );

    // Model exported from https://root.cern.ch/js/latest/demo/tgeo_build.htm
    return <OBJLoader url={'model.obj'} ref={initModel} />;
};
