import { animation } from "./animation";
import { SupportedChildren } from "./supported-child";

export type MinimalProps<P, R> = P & {
    innerRef?: React.ForwardedRef<R>;
    children?: SupportedChildren;
    animate?: animation<R>;
}

export type GeneralProps<P, C extends new (...params: any) => any, R> = MinimalProps<P, R> & {
    params?: ConstructorParameters<C>;
}

export type MaterialProps<C extends new (...params: any) => any, R> = GeneralProps<{}, C, R>;
export type GeometryProps<C extends new (...params: any) => any, R> = GeneralProps<{}, C, R>;
export type Object3DProps<C extends new (...params: any) => any, R> = GeneralProps<{
    position?: [x: number, y: number, z: number],
    rotation?: [x: number, y: number, z: number],
}, C, R>;
