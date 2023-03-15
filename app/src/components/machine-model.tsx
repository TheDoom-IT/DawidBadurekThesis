import { useCallback, useEffect, useMemo } from 'react';
import { Mesh, ShaderMaterial, TorusGeometry } from 'react-three-component';
import * as THREE from 'three';
import { OrbitControls as Controls } from 'three/examples/jsm/controls/OrbitControls';

const vertexShader = `
varying vec3 vPosition;
#include <clipping_planes_pars_vertex>

void main()
{
    #include <begin_vertex>
    #include <project_vertex>

    vPosition = mvPosition.xyz;
    #include <clipping_planes_vertex>
}`;

const fragmentShader = `
varying vec3 vPosition;

#include <clipping_planes_pars_fragment>

void main()
{
    #include <clipping_planes_fragment>
    
    gl_FragColor = vec4(1.0, 0, 0, 1.0);

    #if NUM_CLIPPING_PLANES > 0
        vec4 clippingPlane = clippingPlanes[0];
        float distance = dot(vPosition, clippingPlane.xyz) + clippingPlane.w;
        if(abs(distance) < 10.0) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    #endif
}`;

interface MachineModelProps {
    controls: Controls | null;
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
            {/* <BoxGeometry params={[100, 100, 100]} /> */}
            <ShaderMaterial
                params={[
                    {
                        // color: 0x123456,
                        side: THREE.DoubleSide,

                        clipping: true,
                        clippingPlanes: clippingPlanes,

                        fragmentShader: fragmentShader,
                        vertexShader: vertexShader,
                    },
                ]}
            />
        </Mesh>
    );
};
