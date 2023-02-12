import * as THREE from 'three';
import React, { FC, useEffect, useRef } from 'react';
import { MaterialProps } from '../types/props';
import { useParentContext } from '../contexts/parent-context';

export type MeshBasicMaterialProps = MaterialProps<typeof THREE.MeshBasicMaterial>;
export type MeshStandardMaterialProps = MaterialProps<typeof THREE.MeshStandardMaterial>;

export const MeshBasicMaterial: FC<MeshBasicMaterialProps> = () => <></>;
export const MeshStandardMaterial: FC<MeshStandardMaterialProps> = () => <></>;

export type PointsMaterialProps = MaterialProps<typeof THREE.PointsMaterial>;
export const PointsMaterial: FC<PointsMaterialProps> = () => <></>;

export type LineBasicMaterialProps = MaterialProps<typeof THREE.LineBasicMaterial>;
export const LineBasicMaterial: FC<LineBasicMaterialProps> = () => <></>;

export const MeshBasicMaterialTest: FC<MeshBasicMaterialProps> = MaterialFC(
    THREE.MeshBasicMaterial,
);

function MaterialFC<C extends new (...params: any) => THREE.Material>(
    constructor: C,
): FC<MaterialProps<C>> {
    return (props: MaterialProps<C>) => {
        const object = useRef<THREE.Material | null>(null);
        const parent = useParentContext();

        useEffect(() => {
            object.current = new constructor(props.params);

            return () => {
                object.current?.dispose();
            };
        }, []);

        useEffect(() => {
            if (parent && 'material' in parent) {
                parent.material = object.current;
            }

            return () => {
                // TODO: how to remove material from a parent
                // parent?.remove(object.current!);
            };
        }, [parent]);

        return <>{props.children}</>;
    };
}
