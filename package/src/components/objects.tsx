import { off } from 'process';
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ParentContext, useParentContext } from '../contexts/parent-context';
import { animation } from '../types';
import { Object3DProps } from '../types/props';

export type MeshProps = Object3DProps<typeof THREE.Mesh, THREE.Mesh>;
export type PointsProps = Object3DProps<typeof THREE.Points, THREE.Points>;
export type LineProps = Object3DProps<typeof THREE.Line, THREE.Line>;
export type LineLoopProps = Object3DProps<typeof THREE.LineLoop, THREE.LineLoop>;

export const Mesh: FC<MeshProps> = () => <></>;
export const Points: FC<PointsProps> = () => <></>;
export const Line: FC<LineProps> = () => <></>;
export const LineLoop: FC<LineLoopProps> = () => <></>;

export const MeshTest: FC<MeshProps> = createThreeObject(THREE.Mesh);

function createThreeObject<C extends new (...params: any) => R, R extends THREE.Object3D>(
    constructor: C,
): FC<Object3DProps<C, R>> {
    return (props: Object3DProps<C, R>) => {
        const [object, setObject] = useState<R | null>(null);
        const animationFrameId = useRef(0);
        const previousTimestamp = useRef<number | null>(null);
        const parent = useParentContext();

        const animate = (timestamp: number) => {
            if (!props.animate || !object) {
                return;
            }

            if (previousTimestamp.current === null) {
                previousTimestamp.current = timestamp;
            }
            const elapsed = timestamp - previousTimestamp.current;
            previousTimestamp.current = timestamp;

            props.animate(timestamp, elapsed, object);

            animationFrameId.current = requestAnimationFrame(animate);
        };

        useEffect(() => {
            setObject(new constructor(props.params));
        }, []);

        useEffect(() => {
            if (!object) {
                return;
            }
            if (props.position) {
                const [x, y, z] = props.position;
                object.position.set(x, y, z);
            }

            if (props.rotation) {
                const [x, y, z] = props.rotation;
                object.rotation.set(x, y, z);
            }
        }, [object, JSON.stringify(props.position), JSON.stringify(props.rotation)]);

        useEffect(() => {
            if (!object) {
                return;
            }

            parent?.add(object);

            return () => {
                parent?.remove(object);
            };
        }, [parent, object]);

        useLayoutEffect(() => {
            if (!props.animate) {
                return;
            }

            animationFrameId.current = requestAnimationFrame(animate);

            return () => {
                cancelAnimationFrame(animationFrameId.current);
                previousTimestamp.current = null;
            };
        }, [props.animate, object]);

        return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
    };
}

// TODO: probably remove it???
function createThreeObjectOld<C extends new (...params: any) => R, R extends THREE.Object3D>(
    constructor: C,
) {
    const createAndDispose = (
        setObject: React.Dispatch<React.SetStateAction<R | null>>,
        props: Object3DProps<C, R>,
    ) => {
        const object = new constructor(props.params);

        if (props.position) {
            const [x, y, z] = props.position;
            object.position.set(x, y, z);
        }

        if (props.rotation) {
            const [x, y, z] = props.rotation;
            object.rotation.set(x, y, z);
        }

        setObject(object);

        return () => {};
    };
    const attachToParent = (object: R, parent: ParentContext) => {
        parent?.add(object);
        return () => {
            parent?.remove(object);
        };
    };

    const createJSX = (object: R | null, props: Object3DProps<C, R>) => {
        return <ParentContext.Provider value={object}>{props.children}</ParentContext.Provider>;
    };

    return createThreeComponent<Object3DProps<C, R>, C, R>(
        createAndDispose,
        attachToParent,
        createJSX,
    );
}

function createThreeComponent<
    P extends {
        innerRef?: React.ForwardedRef<R>;
        children?: React.ReactNode;
        animate?: animation<R>;
        params?: ConstructorParameters<C>;
    },
    C extends new (...params: any) => R,
    R,
>(
    createAndDispose: (
        setObject: React.Dispatch<React.SetStateAction<R | null>>,
        props: P,
    ) => () => void,
    attachToParent: (object: R, parent: ParentContext) => () => void,
    createJSX: (object: R | null, props: P) => JSX.Element,
): FC<P> {
    return (props: P) => {
        const [object, setObject] = useState<R | null>(null);
        const parent = useParentContext();
        const animationFrameId = useRef(0);
        const previousTimestamp = useRef<number | null>(null);

        const animate = (timestamp: number) => {
            if (!props.animate || !object) {
                return;
            }

            if (previousTimestamp.current === null) {
                previousTimestamp.current = timestamp;
            }
            const elapsed = timestamp - previousTimestamp.current;
            previousTimestamp.current = timestamp;

            props.animate(timestamp, elapsed, object);

            animationFrameId.current = requestAnimationFrame(animate);
        };

        useEffect(() => {
            return createAndDispose(setObject, props);
        }, []);

        useEffect(() => {
            if (!object) {
                return;
            }

            return attachToParent(object, parent);
        }, [parent, object]);

        useLayoutEffect(() => {
            if (!props.animate) {
                return;
            }

            animationFrameId.current = requestAnimationFrame(animate);

            return () => {
                cancelAnimationFrame(animationFrameId.current);
                previousTimestamp.current = null;
            };
        }, [props.animate, object]);

        return createJSX(object, props);
    };
}
