import React from 'react';

export function handleForwardRef<T>(forwardRef: React.ForwardedRef<T> | undefined, value: T) {
    if (forwardRef === undefined) {
        return;
    }

    if (typeof forwardRef === 'function') {
        forwardRef(value);
    } else if (forwardRef) {
        forwardRef.current = value;
    }
}