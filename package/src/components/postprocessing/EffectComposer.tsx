import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useLayoutEffect } from 'react';
import { useCanvasContext } from '../../contexts/canvas-context';
import { useDisposableObject } from '../../hooks/useDisposableObject';
export type EffectComposerProps = ParamsProps<typeof POST.EffectComposer, POST.EffectComposer>;

export const EffectComposer: FC<EffectComposerProps> = (props) => {
    const canvasContext = useCanvasContext();
    const composer = useDisposableObject(POST.EffectComposer, props.params, props.innerRef);

    const contextAttributes = canvasContext?.renderer?.getContext()?.getContextAttributes();
    const composerRenderer = composer?.getRenderer();

    useLayoutEffect(() => {
        if (!canvasContext?.renderer || !composer || !contextAttributes) {
            return;
        }

        composer.setRenderer(canvasContext.renderer);
    }, [composer, canvasContext?.renderer, contextAttributes]);

    useLayoutEffect(() => {
        if (!composer || !canvasContext?.size || !composerRenderer) {
            return;
        }

        composer.setSize(canvasContext.size.width, canvasContext.size.height, false);
    }, [
        composer,
        canvasContext?.size,
        canvasContext?.size?.width,
        canvasContext?.size?.height,
        composerRenderer,
    ]);

    useLayoutEffect(() => {
        canvasContext?.setEffectComposer(composer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [composer, canvasContext?.setEffectComposer]);

    return <>{props.children}</>;
};
