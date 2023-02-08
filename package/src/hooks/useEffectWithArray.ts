import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import { checkChildrenEquality } from '../utils/check-children-equality';

export const useLayoutEffectWithChildren = (callback: () => void, children: ReactNode | ReactNode[]) => {
    const prevValue = useRef<ReturnType<typeof React.Children.toArray>>(React.Children.toArray(children));

    const newValue = React.Children.toArray(children);

    const areIdentical = checkChildrenEquality(prevValue.current, newValue);
    if (!areIdentical) {
        prevValue.current = newValue;
    }

    useLayoutEffect(() => {
        return callback();
    }, [prevValue.current])
}