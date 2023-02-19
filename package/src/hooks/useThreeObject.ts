import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { Animation, Object3DProps } from '../types';
import { handleForwardRef } from '../utils';
import { useAnimation } from './useAnimation';

export function useThreeObject<C extends new (...params: any) => R, R extends THREE.Object3D>(
    constructor: C,
    props: Object3DProps<C, R>,
) {
    const [object, setObject] = useState<R | null>(null);
    useAnimation(props.animate, object);
    const parent = useParentContext();

    useEffect(() => {
        // TODO: how to handle change of params
        // @ts-ignore
        const newObject = new constructor(...(props.params ?? []));
        setObject(newObject);

        // TODO: how to handle change ref???
        // should i handle it?
        // it is useful only for creatiion of new object
        return handleForwardRef(props.innerRef, newObject);
    }, []);

    useEffect(() => {
        if (!object) {
            return;
        }

        if (props.position) {
            const [x, y, z] = props.position;
            object.position.set(x, y, z);
        } else {
            object.position.set(0, 0, 0);
        }

        if (props.rotation) {
            const [x, y, z] = props.rotation;
            object.rotation.set(x, y, z);
        } else {
            object.rotation.set(0, 0, 0);
        }
    }, [object, JSON.stringify(props.position), JSON.stringify(props.rotation)]);

    useEffect(() => {
        if (!object) {
            return;
        }

        parent?.add(object);

        return () => {
            parent?.remove(object);
        };
    }, [parent, object]);

    return object;
}
