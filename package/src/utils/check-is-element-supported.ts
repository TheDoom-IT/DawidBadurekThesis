import { supportedChildren } from "../constants/children-list";

export const checkIsElementSupported = (elementType: string, parent: string) => {
    if (!supportedChildren[parent]?.includes(elementType) === true) {
        throw new Error(`Unsupported child type: parent: ${parent}, child: ${elementType}.`);
    }
};