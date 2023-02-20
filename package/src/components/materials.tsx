import * as THREE from 'three';
import React, { FC, useEffect, useState } from 'react';
import { MaterialProps } from '../types/props';
import { useParentContext } from '../contexts/parent-context';
import { useAnimation } from '../hooks/useAnimation';
import { handleForwardRef } from '../utils';

export type MeshBasicMaterialProps = MaterialProps<
    typeof THREE.MeshBasicMaterial,
    THREE.MeshBasicMaterial
>;
export type MeshStandardMaterialProps = MaterialProps<
    typeof THREE.MeshStandardMaterial,
    THREE.MeshStandardMaterial
>;

export const MeshBasicMaterial: FC<MeshBasicMaterialProps> = createThreeMaterial(
    THREE.MeshBasicMaterial,
);
export const MeshStandardMaterial: FC<MeshStandardMaterialProps> = createThreeMaterial(
    THREE.MeshStandardMaterial,
);

export type PointsMaterialProps = MaterialProps<typeof THREE.PointsMaterial, THREE.PointsMaterial>;
export const PointsMaterial: FC<PointsMaterialProps> = createThreeMaterial(THREE.PointsMaterial);

export type LineBasicMaterialProps = MaterialProps<
    typeof THREE.LineBasicMaterial,
    THREE.LineBasicMaterial
>;
export const LineBasicMaterial: FC<LineBasicMaterialProps> = createThreeMaterial(
    THREE.LineBasicMaterial,
);

function createThreeMaterial<C extends new (...params: any[]) => R, R extends THREE.Material>(
    constructor: C,
): FC<MaterialProps<C, R>> {
    //eslint-disable-next-line react/display-name
    return (props: MaterialProps<C, R>) => {
        const [object, setObject] = useState<R | null>(null);
        useAnimation(props.animate, object);
        const parent = useParentContext();

        useEffect(() => {
            const newObject = new constructor(...(props.params ?? []));
            setObject(newObject);

            const cleanRef = handleForwardRef(props.innerRef, newObject);

            return () => {
                if (cleanRef) {
                    cleanRef();
                }
                newObject.dispose();
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
                // TODO: how to remove material from a parent
                // parent?.remove(object.current!);
            };
        }, [parent, object]);

        return <>{props.children}</>;
    };
}
