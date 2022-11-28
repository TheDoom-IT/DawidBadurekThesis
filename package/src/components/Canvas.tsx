import React, { ForwardedRef, forwardRef, useEffect, useRef, useLayoutEffect, ReactElement, ReactFragment, ReactNode, ReactPortal } from 'react';
import * as THREE from 'three';
import { useEffectWithArray } from '../hooks/useEffectWithArray';
import { handleForwardRef, addTestScene } from '../utils';
import { simplifyChildren } from '../utils/simplify-children';

export type SupportedChild = ReactElement | ReactFragment | ReactPortal | null | undefined;
export type SupportedChildren = SupportedChild | SupportedChild[]

export interface CanvasProps {
    divId: string;
    children?: SupportedChildren
}

export const Canvas = forwardRef<THREE.WebGLRenderer, CanvasProps>((props: CanvasProps, forwardRef: ForwardedRef<THREE.WebGLRenderer>) => {
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const animationFrameId = useRef<number>(0);

    const findDiv = () => {
        const div = document.getElementById(props.divId);
        if (!div) {
            throw new Error(`Failed to find a div with id ${props.divId}!`);
        }
        return div;
    }

    // make canvas addaptive to the div size
    const resizeCanvasIfNeeded = () => {
        const div = findDiv();

        const { height, width } = div.getBoundingClientRect();
        const { height: canvasHeight, width: canvasWidth } = rendererRef.current!.domElement;

        if (height !== canvasHeight || width !== canvasWidth) {
            rendererRef.current!.setSize(width, height, false);
            // TODO: update camera here
        }
    }

    const animate = () => {
        resizeCanvasIfNeeded();

        // TODO: run other animations here

        animationFrameId.current = requestAnimationFrame(animate);
    }

    // create renderer, remove it on unmount
    useLayoutEffect(() => {
        rendererRef.current = new THREE.WebGLRenderer();
        animate();

        // TODO: remove it
        //add an animated cube for testing purposes
        const dispose = addTestScene(rendererRef.current);

        return () => {
            // TODO: remove it
            // dispose an animated cube created for test
            dispose();

            // stop animations
            cancelAnimationFrame(animationFrameId.current);

            rendererRef.current!.dispose();
            rendererRef.current!.forceContextLoss();
        }
    }, []);

    // append canvas to the DOM, remove it on unmount/div change
    useLayoutEffect(() => {
        const div = findDiv();
        div.appendChild(rendererRef.current!.domElement);

        return () => {
            div.removeChild(rendererRef.current!.domElement);
        }
    }, [props.divId]);

    // add children to the scene
    useLayoutEffect(() => {
        // console.log('children changed');
        // console.log(props.children);

        return () => {
            // console.log('children removed');
        }
    }, [props.children])

    console.log(React.Children.toArray(props.children));
    console.log(simplifyChildren(props.children));
    // useEffectWithArray(() => {
    // console.log('useEffectWithArray');
    // }, props.children);

    useEffect(() => {
        handleForwardRef(forwardRef, rendererRef.current!);
    }, [forwardRef]);
    return <></>
});
