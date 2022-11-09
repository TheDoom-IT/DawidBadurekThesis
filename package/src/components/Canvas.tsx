import React, { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { handleForwardRef } from '../utils/handle-forward-ref';
import { initializeThree } from './util';

export interface CanvasProps {
    divRef: React.RefObject<HTMLDivElement>;
}

export const Canvas = forwardRef<THREE.WebGLRenderer, CanvasProps>((props: CanvasProps, forwardRef: ForwardedRef<THREE.WebGLRenderer>) => {
    const [renderer] = useState<THREE.WebGLRenderer>(() => { console.log('State created'); return new THREE.WebGLRenderer() });
    const isInitialized = useRef(false);

    const appendCanvas = () => {
        props.divRef.current?.appendChild(renderer.domElement);
    }

    const removeCanvas = () => {
        props.divRef.current?.removeChild(renderer.domElement);
    }

    const resizeCanvasIfNeeded = () => {
        if (props.divRef.current === null) return;

        const { height, width } = props.divRef.current?.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = renderer.domElement;

        if (height !== canvasHeight || width !== canvasWidth) {
            renderer.setSize(width, height, false);
            renderer.domElement.width = width;
            renderer.domElement.height = height;
            // TODO: update camera here
        }
    }

    const animate = () => {
        resizeCanvasIfNeeded();

        requestAnimationFrame(animate);
    }

    useEffect(() => {
        handleForwardRef(forwardRef, renderer);
    }, [forwardRef]);

    useEffect(() => {
        console.log('Div: new');
        appendCanvas();

        isInitialized.current = true;
        return () => {
            console.log('Div: removing');
            removeCanvas();
            isInitialized.current = false;

        }
    }, [props.divRef.current]);

    // TODO: removeCanvas and renderer when removed
    useEffect(() => {
        console.log('Canvas: new');
        animate();
        // const frameId = requestAnimationFrame(animate);
        const dispose = initializeThree(renderer);

        if (renderer.getContext().isContextLost()) {
            renderer.forceContextRestore();
        }
        return () => {
            console.log('Canvas: removing');
            // cancelAnimationFrame(frameId);
            dispose();
            // removeCanvas();
            renderer.dispose();
            renderer.forceContextLoss();
        }
    }, []);

    return (
        <></>
    )
});
