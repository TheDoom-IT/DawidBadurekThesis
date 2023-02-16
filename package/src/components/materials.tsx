import * as THREE from 'three';
import React, { FC, useEffect, useRef, useState } from 'react';
import { MaterialProps } from '../types/props';
import { useParentContext } from '../contexts/parent-context';

export type MeshBasicMaterialProps = MaterialProps<
    typeof THREE.MeshBasicMaterial,
    THREE.MeshBasicMaterial
>;
export type MeshStandardMaterialProps = MaterialProps<
    typeof THREE.MeshStandardMaterial,
    THREE.MeshStandardMaterial
>;

export const MeshBasicMaterial: FC<MeshBasicMaterialProps> = () => <></>;
export const MeshStandardMaterial: FC<MeshStandardMaterialProps> = () => <></>;

export type PointsMaterialProps = MaterialProps<typeof THREE.PointsMaterial, THREE.PointsMaterial>;
export const PointsMaterial: FC<PointsMaterialProps> = () => <></>;

export type LineBasicMaterialProps = MaterialProps<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>;
export const LineBasicMaterial: FC<LineBasicMaterialProps> = () => <></>;

export const MeshStandardMaterialTest: FC<MeshStandardMaterialProps> = MaterialFC(
    THREE.MeshStandardMaterial,
);
export const MeshBasicMaterialTest: FC<MeshBasicMaterialProps> = MaterialFC(
    THREE.MeshBasicMaterial,
);

function MaterialFC<C extends new (...params: any) => THREE.Material, R>(
    constructor: C,
): FC<MaterialProps<C, R>> {
    return (props: MaterialProps<C, R>) => {
        const [object, setObject] = useState<THREE.Material | null>(null);
        const parent = useParentContext();

        useEffect(() => {
            setObject(new constructor(props.params));

            return () => {
                object?.dispose();
            };
        }, []);

        useEffect(() => {
            if (!object) {
                return;
            }

            if (parent && 'material' in parent) {
                parent.material = object;
            }

            return () => {
                console.log('material parent removed');
                // TODO: how to remove material from a parent
                // parent?.remove(object.current!);
            };
        }, [parent, object]);

        return <>{props.children}</>;
    };
}
