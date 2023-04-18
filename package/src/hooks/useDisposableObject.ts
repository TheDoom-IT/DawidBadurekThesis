import React, { useEffect, useState } from 'react';
import { handleForwardRef } from '../utils';
import { Disposable } from 'postprocessing';

export function useDisposableObject<C extends new (...params: any[]) => R, R extends Disposable>(
    constructor: C,
    params?: ConstructorParameters<C>,
    innerRef?: React.ForwardedRef<R>,
): R | null {
    const [object, setObject] = useState<R | null>(null);

    useEffect(() => {
        const newObject = new constructor(...(params || []));
        setObject(newObject);

        const cleanRef = handleForwardRef(innerRef, newObject);
        return () => {
            if (cleanRef) {
                cleanRef();
            }

            newObject.dispose();
        };
    }, []);

    return object;
}
