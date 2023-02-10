import { ReactElement, ReactFragment, ReactPortal } from 'react';

export type SupportedChild = ReactElement | ReactFragment | ReactPortal | null | undefined;
export type SupportedChildren = SupportedChild | SupportedChild[];
