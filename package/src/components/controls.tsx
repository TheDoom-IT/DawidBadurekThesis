import React, { ForwardedRef, useLayoutEffect, useState } from 'react';
import { useCanvasContext } from '../contexts/canvas-context';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { BasicProps } from '../types';
import { useAnimation } from '../hooks/useAnimation';
import { handleForwardRef } from '../utils';

export type OrbitControlsProps = BasicProps<ThreeOrbitControls>;

export const OrbitControls = React.forwardRef<ThreeOrbitControls, OrbitControlsProps>(
    function OrbitControls(props: OrbitControlsProps, ref: ForwardedRef<ThreeOrbitControls>) {
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

            return () => {
                controls.dispose();
            };
        }, [canvasContext?.camera, canvasContext?.renderer]);

        useLayoutEffect(() => {
            if (!object) {
                return;
            }

            return handleForwardRef(ref, object);
        }, [ref, object]);

        return <>{props.children}</>;
    },
);
