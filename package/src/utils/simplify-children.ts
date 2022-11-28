import React, { ReactElement, ReactFragment, ReactNode } from "react";
import * as ReactIs from "react-is";
import { SupportedChildren } from "../components";

export const simplifyChildren: (children: SupportedChildren) => Array<Exclude<ReactNode, boolean | null | undefined>> = (children: SupportedChildren) => {
    const array = React.Children.toArray(children);

    const simplifiedArray = array.map(child => {
        if (typeof child === 'string' || typeof child === 'number') {
            return null;
        }

        if (ReactIs.typeOf(child) === ReactIs.Fragment) {
            return React.Children.toArray((child as ReactElement).props.children);
        }

        if (ReactIs.typeOf(child) === ReactIs.Portal) {
            return null;
        }

        const element: ReactElement = child as ReactElement;

        if (element.props.children !== undefined) {
            const childrenArray = simplifyChildren(element.props.children);
            // element.props = { ...element.props, children: childrenArray };
            return {
                ...element,
                props: {
                    ...element.props,
                    children: childrenArray,
                }
            };
        }

        return element;
    }).filter(child => child !== null);

    return React.Children.toArray(simplifiedArray);
}