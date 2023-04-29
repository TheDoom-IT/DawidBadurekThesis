import React from 'react';

export function handleForwardRef<T>(
    forwardRef: React.ForwardedRef<T> | undefined,
    value: T,
): void | (() => void) {
    if (forwardRef === undefined) {
        return;
    }

    if (typeof forwardRef === 'function') {
        forwardRef(value);
        return () => {
            forwardRef(null);
        };
    } else if (forwardRef) {
        forwardRef.current = value;
        return () => {
            forwardRef.current = null;
        };
    }
}
