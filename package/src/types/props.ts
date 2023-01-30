import { SupportedChildren } from "./supported-child";

export type GeneralProps<P, C extends new (...params: any) => any, R> = P & {
    params?: ConstructorParameters<C>;
    innerRef?: React.ForwardedRef<R>;
    children?: SupportedChildren;
    animate?: (timestamp: number, elapsed: number, ref: R) => void
}

export type MaterialProps<C extends new (...params: any) => any, R> = GeneralProps<{}, C, R>;
export type GeometryProps<C extends new (...params: any) => any, R> = GeneralProps<{}, C, R>;
export type LightProps<C extends new (...params: any) => any, R> = GeneralProps<{}, C, R>;
export type ObjectProps<C extends new (...params: any) => any, R> = GeneralProps<{ position?: [x: number, y: number, z: number] }, C, R>;
