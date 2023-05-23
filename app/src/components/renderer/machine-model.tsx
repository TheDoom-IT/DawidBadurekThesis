import { useCallback, useEffect, useRef, useState } from 'react';
import { OBJLoader } from 'react-three-component';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBColor } from 'react-color';
import { machineSettings } from '../../constants/machine-settings';

interface MachineModelProps {
    controls: OrbitControls | null;
    clipRotationAsCamera: boolean;
    glowStrength: number;
    glowColor: RGBColor;
}

export const MachineModel = ({
    controls,
    clipRotationAsCamera,
    glowStrength,
    glowColor,
}: MachineModelProps) => {
    const [group, setGroup] = useState<THREE.Group | null>(null);
    const { current: clippingPlanes } = useRef([new THREE.Plane(new THREE.Vector3(0, 0, 0), 0)]);

    const onControlsChange = useCallback(() => {
        if (!controls) {
            return;
        }

        clippingPlanes[0].normal = controls.object.position.clone().negate().normalize();

        const distance = controls.object.position.distanceTo(new THREE.Vector3(0, 0, 0));
        clippingPlanes[0].constant = distance / 7;
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

    const getColorAndOpacity = (elementFullName: string): { opacity: number; color: string } => {
        const elementName = elementFullName.split('_')[0];
        switch (elementName) {
            case 'PHOS':
                return machineSettings.PHOS;
            case 'RICH':
                return machineSettings.RICH;
            case 'ITSD':
                return machineSettings.ITSD;
            case 'TDGN':
                return machineSettings.TDGN;
            case 'B077':
                return machineSettings.B077;
        }

        if (elementName.match(/^I\dCC$/)) {
            return machineSettings.IdCC;
        } else if (elementName.match(/^I\dCU$/)) {
            return machineSettings.IdCU;
        } else if (elementName.startsWith('IPA')) {
            return machineSettings.IPA;
        } else if (elementName.startsWith('ICU')) {
            return machineSettings.ICUd;
        } else if (elementName.startsWith('ICC')) {
            return machineSettings.ICCd;
        } else if (elementName.startsWith('IHK')) {
            return machineSettings.IHK;
        } else if (elementName.startsWith('ISR')) {
            return machineSettings.ISR;
        } else if (elementName.startsWith('EPM')) {
            return machineSettings.EPM;
        }

        return {
            opacity: 0.5,
            color: '#000000',
        };
    };

    const updateShader = useCallback(
        (shader: THREE.Shader) => {
            shader.vertexShader = 'varying vec3 vPosition;\n' + shader.vertexShader;
            const vertexEndIndex = shader.vertexShader.lastIndexOf('}');
            shader.vertexShader =
                shader.vertexShader.slice(0, vertexEndIndex) +
                'vPosition = mvPosition.xyz;\n' +
                shader.vertexShader.slice(vertexEndIndex);

            shader.fragmentShader = 'varying vec3 vPosition;\n' + shader.fragmentShader;
            const index = shader.fragmentShader.lastIndexOf('}');
            const color = `${(glowColor.r / 255).toFixed(1)}, ${(glowColor.g / 255).toFixed(1)}, ${(
                glowColor.b / 255
            ).toFixed(1)}, ${(glowColor.a ?? 1).toFixed(1)}`;

            shader.fragmentShader =
                shader.fragmentShader.slice(0, index) +
                'vec4 clippingPlane = clippingPlanes[0];\n' +
                'float distance = dot(vPosition, clippingPlane.xyz) + clippingPlane.w;\n' +
                `if(abs(distance) < ${glowStrength.toFixed(1)}) {\n` +
                `gl_FragColor = vec4(${color});\n` +
                '}\n' +
                shader.fragmentShader.slice(index);
        },
        [glowStrength, glowColor],
    );

    useEffect(() => {
        if (!group) {
            return;
        }

        group.rotation.y = Math.PI;
        group.scale.set(0.6, 0.6, 0.6);

        group.traverse((el) => {
            if ('material' in el && el.material instanceof THREE.Material) {
                const colorAndOpacity = getColorAndOpacity(el.name);
                const material = new THREE.MeshStandardMaterial({
                    side: THREE.DoubleSide,

                    transparent: true,
                    opacity: colorAndOpacity.opacity,

                    clippingPlanes: clippingPlanes,

                    color: colorAndOpacity.color,
                });

                el.material.dispose();
                el.material = material;
            }
        });
    }, [group, clippingPlanes]);

    useEffect(() => {
        if (!group) {
            return;
        }

        group.traverse((el) => {
            if ('material' in el && el.material instanceof THREE.Material) {
                el.material.customProgramCacheKey = () =>
                    glowStrength.toString() + JSON.stringify(glowColor);
                el.material.onBeforeCompile = updateShader;
            }
        });
    }, [glowColor, glowStrength, group, updateShader]);

    // Model exported from https://root.cern.ch/js/latest/demo/tgeo_build.htm
    return <OBJLoader url={'model.obj'} ref={setGroup} />;
};
