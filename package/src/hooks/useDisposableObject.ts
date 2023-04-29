import React, { useLayoutEffect, useState } from 'react';
import { handleForwardRef } from '../utils';
import { Disposable } from 'postprocessing';

export function useDisposableObject<C extends new (...params: any[]) => R, R extends Disposable>(
    constructor: C,
    params?: ConstructorParameters<C>,
    innerRef?: React.ForwardedRef<R>,
): R | null {
    const [object, setObject] = useState<R | null>(null);

    useLayoutEffect(() => {
        const newObject = new constructor(...(params || []));
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

        return handleForwardRef(innerRef, object);
    }, [innerRef, object]);
    return object;
}
