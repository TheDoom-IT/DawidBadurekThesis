import React, { FC, useEffect, useState } from 'react';
import { useParentContext } from '../contexts/parent-context';
import { useAnimation } from '../hooks/useAnimation';
import { MaterialProps } from '../types';
import { handleForwardRef } from './handle-forward-ref';

export function createThreeMaterial<
    C extends new (...params: any[]) => R,
    R extends THREE.Material,
>(constructor: C): FC<MaterialProps<C, R>> {
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

                return () => {
                    // TODO: how to remove material from a parent
                    // parent.material = null;
                };
            }
        }, [parent, object]);

        return <>{props.children}</>;
    };
}
