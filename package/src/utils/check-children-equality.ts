import React from "react";
import { validateChildType } from "./validate-child-type";

type ReactChildren = ReturnType<typeof React.Children.toArray>;

const checkChildEquality = (a: ReactChildren[number], b: ReactChildren[number]) => {
    const childA = validateChildType(a);
    const childB = validateChildType(b);

    if (childA.key !== childB.key || childA.type !== childB.type) {
        return false;
    }

    const childrenA = React.Children.toArray(childA.props.children);
    const childrenB = React.Children.toArray(childB.props.children);

    return checkChildrenEquality(childrenA, childrenB);

    //compare props
    return true;
}

export const checkChildrenEquality = (a: ReactChildren, b: ReactChildren): boolean => {
    if (a.length !== b.length) {
        return false;
    }

    return a.every((aChild, index) => {
        const bChild = b[index];
        return checkChildEquality(aChild, bChild);
    });
}