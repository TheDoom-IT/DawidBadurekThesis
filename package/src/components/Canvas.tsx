import React, { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { handleForwardRef } from '../utils/handle-forward-ref';
import { initializeThree } from './util';

export interface CanvasProps {
    divRef: React.RefObject<HTMLDivElement>;
}

export const Canvas = forwardRef<THREE.WebGLRenderer, CanvasProps>((props: CanvasProps, forwardRef: ForwardedRef<THREE.WebGLRenderer>) => {
    const [renderer] = useState<THREE.WebGLRenderer>(() => new THREE.WebGLRenderer());
    const ready = useRef(false);

    const appendCanvas = () => {
        props.divRef.current?.appendChild(renderer.domElement);
    }

    useEffect(() => {
        handleForwardRef(forwardRef, renderer);
    }, [forwardRef]);

    useEffect(() => {
        appendCanvas();
        if (ready.current) {
            return;
        }
        const dispose = initializeThree(renderer);

        ready.current = true;
        return () => {
            console.log('finishing code');
            dispose();
            renderer.dispose();//???
            // renderer.forceContextLoss();
        }
    }, [props.divRef.current]);

    useEffect(() => {
        console.log('Canvas rerendered');
    });

    useEffect(() => {
        console.log('Initial render');
    }, []);

    return (
        // <div ref={ref => ref?.appendChild(renderer.domElement)}></div>
        <></>
    )
});
