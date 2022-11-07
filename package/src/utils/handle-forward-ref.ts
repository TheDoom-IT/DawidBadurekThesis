import React from 'react';

export function handleForwardRef<T>(forwardRef: React.ForwardedRef<T>, value: T) {
    if (typeof forwardRef === 'function') {
        forwardRef(value);
    } else if (forwardRef) {
        forwardRef.current = value;
    }
}