import { SupportedChildren } from "./supported-child";

export type ObjectProps<P, C extends new (...params: any) => any, R> = P & {
    params?: ConstructorParameters<C>;
    innerRef?: React.ForwardedRef<R>;
    children?: SupportedChildren;
    animate?: (timestamp: number, ref: R) => void
}

export type MaterialProps<C extends new (...params: any) => any, R> = ObjectProps<{}, C, R>;
export type GeometryProps<C extends new (...params: any) => any, R> = ObjectProps<{}, C, R>;
export type LightProps<C extends new (...params: any) => any, R> = ObjectProps<{}, C, R>;
