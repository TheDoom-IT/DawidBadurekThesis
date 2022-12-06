import React, { ReactElement, ReactNode, useRef } from 'react';
import { useEffect } from "react"
import { isFragment } from 'react-is';
import { SupportedChild, SupportedChildren } from '../types/supported-child';

export const useEffectWithArray = (callback: () => void, children: ReactNode | ReactNode[]) => {
    const prevValue = useRef<ReturnType<typeof React.Children.toArray>>();
    const changeRef = useRef(false);

    const checkEqualityOfChild = (a: SupportedChild, b: SupportedChild) => {
        const isFirstFragment = isFragment(a);
        const isSecondFragment = isFragment(b);

        if (isFirstFragment && !isSecondFragment || !isFirstFragment && isSecondFragment) {
            return false;
        }

        if (isFirstFragment && isSecondFragment) {

        }

        if ((a as ReactElement)?.type !== (b as ReactElement)?.type) {
            return false;
        }

        //compare props
        return true;
    }

    const checkEqualityOfChildren = (a: SupportedChildren, b: SupportedChildren) => {
        const isFirstArray = Array.isArray(a);
        const isSecondArray = Array.isArray(b);

        if (isFirstArray && isSecondArray) {
            if (a.length !== b.length) {
                return false;
            }

            return a.every((aChild, index) => {
                const bChild = b[index];
                return checkEqualityOfChild(aChild, bChild);
            });
        }

        if (isFirstArray && !isSecondArray || !isFirstArray && isSecondArray) {
            return false;
        }

        return checkEqualityOfChild(a as SupportedChild, b as SupportedChild);
    }


    const areIdentical = true; //checkEqualityOfChildren(prevValue.current, children);

    if (!areIdentical) {
        // prevValue.current = children;
        changeRef.current = !changeRef.current;
    }

    console.log(areIdentical);
    console.log(changeRef.current);
    useEffect(() => {
        callback();
    }, [changeRef.current])
}