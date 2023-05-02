import { ForwardedRef, useLayoutEffect, useRef } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { Object3DProps } from '../types';
import { handleForwardRef } from '../utils';
import { useAnimation } from './useAnimation';
import * as THREE from 'three';

export function useObject3D<C extends new (...params: any[]) => R, R extends THREE.Object3D>(
    constructor: C,
    props: Object3DProps<C, R>,
    ref: ForwardedRef<R>,
): R {
    const object = useRef<R>(new constructor(...(props.params ?? [])));

    useAnimation(props.animate, object.current);
    const parent = useParentContext();

    useLayoutEffect(() => {
        return handleForwardRef(ref, object.current);
    }, [ref]);

    useLayoutEffect(() => {
        if (props.position) {
            const [x, y, z] = props.position;
            object.current.position.set(x, y, z);
        }

        if (props.rotation) {
            const [x, y, z] = props.rotation;
            object.current.rotation.set(x, y, z);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(props.position), JSON.stringify(props.rotation)]);

    useLayoutEffect(() => {
        const currObject = object.current;
        parent?.add(currObject);

        return () => {
            parent?.remove(currObject);
        };
    }, [parent]);

    return object.current;
}
