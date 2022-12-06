import React, {ReactElement} from "react";
import * as ReactIs from 'react-is';

export const validateChildType = (child: ReturnType<typeof React.Children.toArray>[number]) => {
    if (typeof child === 'string' || typeof child === 'number') {
        throw new Error(`Unsupported child type: ${typeof child}.`);
    }
    if (ReactIs.typeOf(child) === ReactIs.Portal) {
        throw new Error(`Unsupported child type: React.Portal.`);
    }

    if (ReactIs.typeOf(child) === ReactIs.Fragment) {
        throw new Error(`Unsupported child type: React.Fragment.`);
        // TODO: handle fragment???
    }

    return child as ReactElement;
}