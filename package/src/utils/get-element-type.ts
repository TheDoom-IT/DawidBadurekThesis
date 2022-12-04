import { JSXElementConstructor, ReactElement } from "react";

export const getElementType = (reactElement: ReactElement) => {
    if (typeof reactElement.type === 'function') {
        const typeFunction = reactElement.type as JSXElementConstructor<any>;
        return typeFunction.name;
    }

    return reactElement.type;
}