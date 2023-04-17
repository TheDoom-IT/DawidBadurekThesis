import React, { useEffect, useState } from 'react';
import { handleForwardRef } from '../utils';

export function useDisposableObject<C extends new (...params: any[]) => R, R extends object>(
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

            if ('dispose' in newObject && typeof newObject.dispose === 'function') {
                newObject.dispose();
            }
        };
    }, []);

    return object;
}
