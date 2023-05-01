import { ForwardedRef, useLayoutEffect, useState } from 'react';
import { handleForwardRef } from '../utils';
import { Disposable } from 'postprocessing';
import { ParamsProps } from '../types';
import { useAnimation } from './useAnimation';

export function useDisposableObject<C extends new (...params: any[]) => R, R extends Disposable>(
    constructor: C,
    props: ParamsProps<C, R>,
    ref: ForwardedRef<R>,
): R | null {
    const [object, setObject] = useState<R | null>(null);

    useAnimation(props.animate, object);

    useLayoutEffect(() => {
        const newObject = new constructor(...(props.params || []));
        setObject(newObject);

        return () => {
            newObject.dispose();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useLayoutEffect(() => {
        if (!object) {
            return;
        }

        return handleForwardRef(ref, object);
    }, [ref, object]);
    return object;
}
