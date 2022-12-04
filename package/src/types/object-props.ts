import { ReactElement, ReactFragment, ReactPortal } from "react";

export type SupportedChild = ReactElement | ReactFragment | ReactPortal | null | undefined;
export type SupportedChildren = SupportedChild | SupportedChild[]

export type ObjectProps<P, C extends new (...params: any) => any, R> = P & {
    params?: ConstructorParameters<C>;
    innerRef?: React.ForwardedRef<R>;
    children?: SupportedChildren;
    animate?: (timestamp: number, ref: React.ForwardedRef<R>) => void
}