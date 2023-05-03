import React, { ForwardedRef, useContext, useLayoutEffect, useState } from 'react';
import { ParentContext } from '../contexts/parent-context';
import { OBJLoader as THREEOBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';
import { Object3DProps } from '../types';
import { handleForwardRef } from '../utils';

export type LoaderProps = Object3DProps<typeof THREE.Group, THREE.Group> & { url: string };
type OnLoadType = Awaited<ReturnType<typeof THREEOBJLoader.prototype.loadAsync>>;

export const OBJLoader = React.forwardRef(function OBJLoader(
    props: LoaderProps,
    ref: ForwardedRef<OnLoadType>,
) {
    const [object, setObject] = useState<OnLoadType | null>(null);

    const parent = useContext(ParentContext);

    useLayoutEffect(() => {
        const loader = new THREEOBJLoader();

        loader.load(
            props.url,
            (group) => {
                setObject(group);
            },
            undefined,
            (error: ErrorEvent) => {
                console.log(error);
            },
        );
    }, [props.url]);

    useLayoutEffect(() => {
        if (!object) {
            return;
        }

        parent?.add(object);

        return () => {
            parent?.remove(object);
        };
    }, [object, parent]);

    useLayoutEffect(() => {
        if (!object) {
            return;
        }

        return handleForwardRef(ref, object);
    }, [object, ref]);

    return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
});
