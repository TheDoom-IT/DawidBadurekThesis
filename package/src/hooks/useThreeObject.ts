import { useEffect, useState } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { Object3DProps } from '../types';
import { handleForwardRef } from '../utils';
import { useAnimation } from './useAnimation';

export function useThreeObject<C extends new (...params: any[]) => R, R extends THREE.Object3D>(
    constructor: C,
    props: Object3DProps<C, R>,
) {
    const [object, setObject] = useState<R | null>(null);
    useAnimation(props.animate, object);
    const parent = useParentContext();

    useEffect(() => {
        const newObject = new constructor(...(props.params ?? []));
        setObject(newObject);

        return handleForwardRef(props.innerRef, newObject);
    }, []);

    useEffect(() => {
        if (!object) {
            return;
        }

        if (props.position) {
            const [x, y, z] = props.position;
            object.position.set(x, y, z);
        }

        if (props.rotation) {
            const [x, y, z] = props.rotation;
            object.rotation.set(x, y, z);
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
