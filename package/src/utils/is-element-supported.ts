import { supportedChildren } from "./supported-children";

export const isElementSupported = (elementType: string, parent: string) => {
    if (!supportedChildren[parent]?.includes(elementType) === true) {
        throw new Error(`Unsupported child type: parent: ${parent}, child: ${elementType}.`);
    }
};