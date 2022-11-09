import React, { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { handleForwardRef } from '../utils/handle-forward-ref';
import { initializeThree } from './util';

export interface CanvasProps {
    divId: string;
}

export const Canvas = forwardRef<THREE.WebGLRenderer, CanvasProps>((props: CanvasProps, forwardRef: ForwardedRef<THREE.WebGLRenderer>) => {
    const [renderer] = useState<THREE.WebGLRenderer>(() => { console.log('State created'); return new THREE.WebGLRenderer() });
    // const [renderer] = useState<THREE.WebGLRenderer>(new THREE.WebGLRenderer());

    useEffect(() => {
        console.log('Div: new');
        const div = document.getElementById(props.divId);
        if (!div) {
            console.error('Failed to find a div!');
            return;
        }
        div.appendChild(renderer.domElement);

        return () => {
            console.log('Div: removing');
            div.removeChild(renderer.domElement);
        }
    }, [props.divId]);

    const resizeCanvasIfNeeded = () => {
        const div = document.getElementById(props.divId);
        if (!div) {
            console.error('Failed to find a div!');
            return;
        }

        const { height, width } = div.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = renderer.domElement;

        if (height !== canvasHeight || width !== canvasWidth) {
            renderer.setSize(width, height, false);
            // TODO: update camera here
        }
    }

    const animate = () => {
        if (renderer.getContext().isContextLost()) return;
        resizeCanvasIfNeeded();

        requestAnimationFrame(animate);
    }

    useEffect(() => {
        handleForwardRef(forwardRef, renderer);
    }, [forwardRef]);

    useEffect(() => {
        console.log('Canvas: new');
        // requestAnimationFrame(animate);
        const dispose = initializeThree(renderer);

        if (renderer.getContext().isContextLost()) {
            console.log(renderer.getContext().getExtension('WEBGL_lose_context'));
            renderer.getContext().getExtension('WEBGL_lose_context')?.restoreContext();
            renderer.forceContextRestore();
        }
        return () => {
            console.log('Canvas: removing');
            dispose();
            renderer.dispose();
            // renderer.forceContextLoss();
        }
    }, []);

    return (
        <></>
    )
});
