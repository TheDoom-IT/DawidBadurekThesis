import { animation } from "./animation";
import { SupportedChildren } from "./supported-child";

export type GeneralProps<P, C extends new (...params: any) => any, R> = P & {
    params?: ConstructorParameters<C>;
    innerRef?: React.ForwardedRef<R>;
    children?: SupportedChildren;
    animate?: animation<R>;
}

export type MaterialProps<C extends new (...params: any) => any, R> = GeneralProps<{}, C, R>;
export type GeometryProps<C extends new (...params: any) => any, R> = GeneralProps<{}, C, R>;
export type Object3DProps<C extends new (...params: any) => any, R> = GeneralProps<{ position?: [x: number, y: number, z: number] }, C, R>;
