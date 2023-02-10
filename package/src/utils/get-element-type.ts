import { ReactElement } from 'react';

export const getElementType = (reactElement: ReactElement) => {
    if (typeof reactElement.type === 'function') {
        const typeFunction = reactElement.type;
        return typeFunction.name;
    }

    return reactElement.type;
};
