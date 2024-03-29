import React, { ForwardedRef, useContext, useLayoutEffect, useState } from 'react';
import { ParentContext } from '../contexts/parent-context';
import { OBJLoader as THREEOBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { ParamsProps } from '../types';
import { handleForwardRef } from '../utils';

export type LoaderProps = ParamsProps<typeof THREEOBJLoader, THREEOBJLoader> & { url: string };
type OnLoadType = Parameters<Parameters<typeof THREEOBJLoader.prototype.load>[1]>[0];
export const OBJLoader = React.forwardRef(function OBJLoader(
    props: LoaderProps,
    ref: ForwardedRef<OnLoadType>,
) {
    const [object, setObject] = useState<OnLoadType | null>(null);

    const parent = useContext(ParentContext);

    useLayoutEffect(() => {
        const loader = new THREEOBJLoader(...(props.params ?? []));

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
