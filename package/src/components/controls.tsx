import React, { useLayoutEffect, useState } from 'react';
import { useCanvasContext } from '../contexts/canvas-context';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { BasicProps } from '../types';
import { useAnimation } from '../hooks/useAnimation';
import { handleForwardRef } from '../utils';

export type OrbitControlsProps = BasicProps<ThreeOrbitControls>;

export const OrbitControls = (props: OrbitControlsProps) => {
    const [object, setObject] = useState<ThreeOrbitControls | null>(null);

    const canvasContext = useCanvasContext();
    useAnimation(props.animate, object);

    useLayoutEffect(() => {
        if (!canvasContext?.camera || !canvasContext?.renderer) {
            return;
        }

        const controls = new ThreeOrbitControls(
            canvasContext.camera,
            canvasContext.renderer.domElement,
        );

        setObject(controls);

        const cleanRef = handleForwardRef(props.innerRef, controls);

        return () => {
            if (cleanRef) {
                cleanRef();
            }
            controls.dispose();
        };
    }, [canvasContext?.camera, canvasContext?.renderer]);
    return <>{props.children}</>;
};