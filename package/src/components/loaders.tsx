import React, { useContext, useEffect, useState } from 'react';
import { ParentContext } from '../contexts/parent-context';
import { OBJLoader as THREEOBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { Object3DProps } from '../types';
import { handleForwardRef } from '../utils';

// interface OBJLoaderProps {
//     url: string;
// }

export type OBJLoaderProps = Object3DProps<typeof THREE.Group, THREE.Group> & { url: string };

export const OBJLoader = (props: OBJLoaderProps) => {
    const [object, setObject] = useState<THREE.Group | null>(null);

    const parent = useContext(ParentContext);

    useEffect(() => {
        // const loader = new THREEOBJLoader();
        const loader = new GLTFLoader();

        loader.load(
            props.url,
            (group: GLTF) => {
                setObject(group.scene);
                // TODO: should it be return???
                handleForwardRef(props.innerRef, group.scene);
            },
            undefined,
            (error: ErrorEvent) => {
                console.log(error);
            },
        );
    }, []);

    useEffect(() => {
        if (!object) {
            return;
        }

        parent?.add(object);

        return () => {
            parent?.remove(object);
        };
    }, [object, parent]);

    return <ParentContext.Provider value={object}>{/* {props.children} */}</ParentContext.Provider>;
};
