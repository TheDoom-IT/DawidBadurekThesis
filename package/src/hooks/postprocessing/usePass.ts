import { ForwardedRef, useLayoutEffect } from 'react';
import * as POST from 'postprocessing';
import { useDisposableObject } from '../useDisposableObject';
import { ParamsProps } from '../../types';
import { useCanvasContext } from '../../contexts/canvas-context';

export function usePass<C extends new (...params: any[]) => R, R extends POST.Pass>(
    constructor: C,
    props: ParamsProps<C, R>,
    ref: ForwardedRef<R>,
): R | null {
    const canvasContext = useCanvasContext();

    const pass = useDisposableObject(constructor, props.params, ref);

    useLayoutEffect(() => {
        if (!pass || !canvasContext?.size) {
            return;
        }

        pass.setSize(canvasContext.size.width, canvasContext.size.height);
    }, [pass, canvasContext?.size, canvasContext?.size?.width, canvasContext?.size?.height]);

    useLayoutEffect(() => {
        if (!canvasContext?.mainScene || !pass) {
            return;
        }

        pass.mainScene = canvasContext.mainScene;
    }, [canvasContext?.mainScene, pass]);

    useLayoutEffect(() => {
        if (!canvasContext?.camera || !pass) {
            return;
        }

        pass.mainCamera = canvasContext.camera;
    }, [canvasContext?.camera, pass]);

    const renderer = canvasContext?.effectComposer?.getRenderer();
    useLayoutEffect(() => {
        // Pass cannot be added when renderer is not created yet
        if (!pass || !canvasContext?.effectComposer || !renderer) {
            return;
        }

        canvasContext.effectComposer.addPass(pass);

        return () => {
            canvasContext.effectComposer?.removePass(pass);
        };
    }, [pass, canvasContext?.effectComposer, renderer]);

    return pass;
}
