import React from 'react';

export function handleForwardRef<T>(
    forwardRef: React.ForwardedRef<T>,
    value: T,
): void | (() => void) {
    if (!forwardRef) {
        return;
    }

    if (typeof forwardRef === 'function') {
        forwardRef(value);
        return () => {
            forwardRef(null);
        };
    } else {
        forwardRef.current = value;
        return () => {
            forwardRef.current = null;
        };
    }
}
