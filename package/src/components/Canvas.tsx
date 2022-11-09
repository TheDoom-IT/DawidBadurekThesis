import React, { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { handleForwardRef } from '../utils/handle-forward-ref';
import { initializeThree } from './util';

export interface CanvasProps {
    divId: string;
}

function sleep(milliseconds: number) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

export const Canvas = forwardRef<THREE.WebGLRenderer, CanvasProps>((props: CanvasProps, forwardRef: ForwardedRef<THREE.WebGLRenderer>) => {
    // const [renderer] = useState<THREE.WebGLRenderer>(() => { console.log('State created'); return new THREE.WebGLRenderer() });
    // const [renderer] = useState<THREE.WebGLRenderer>(new THREE.WebGLRenderer());
    const rendererRef = useRef<THREE.WebGLRenderer>();

    useEffect(() => {
        console.log('Canvas: new');
        rendererRef.current = new THREE.WebGLRenderer();
        // requestAnimationFrame(animate);
        const dispose = initializeThree(rendererRef.current);

        // if (rendererRef.current.getContext().isContextLost()) {
        // console.log(rendererRef.current.getContext().getExtension('WEBGL_lose_context'));
        // rendererRef.current.getContext().getExtension('WEBGL_lose_context')?.restoreContext();
        // rendererRef.current.forceContextRestore();
        // }
        return () => {
            console.log('Canvas: removing');
            dispose();
            rendererRef.current?.dispose();
            rendererRef.current?.forceContextLoss();
            sleep(5000);
            // rendererRef.current.dispose();
            // rendererRef.current.forceContextLoss();
        }
    }, []);

    useEffect(() => {
        console.log('Div: new');

        const div = document.getElementById(props.divId);
        if (!div) {
            console.error('Failed to find a div!');
            return;
        }
        new Promise((res) => { setTimeout(res, 5000) }).then(() =>
            div.appendChild(rendererRef.current!.domElement));

        return () => {
            console.log('Div: removing');
            div.removeChild(rendererRef.current!.domElement);
            sleep(5000);
        }
    }, [props.divId]);

    const resizeCanvasIfNeeded = () => {
        const div = document.getElementById(props.divId);
        if (!div) {
            console.error('Failed to find a div!');
            return;
        }

        const { height, width } = div.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = rendererRef.current!.domElement;

        if (height !== canvasHeight || width !== canvasWidth) {
            rendererRef.current!.setSize(width, height, false);
            // TODO: update camera here
        }
    }

    const animate = () => {
        if (rendererRef.current!.getContext().isContextLost()) return;
        resizeCanvasIfNeeded();

        requestAnimationFrame(animate);
    }

    useEffect(() => {
        handleForwardRef(forwardRef, rendererRef.current!);
    }, [forwardRef]);

    return (
        <></>
    )
});
