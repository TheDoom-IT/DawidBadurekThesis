import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useLayoutEffect } from 'react';
import { useCanvasContext } from '../../contexts/canvas-context';
import { useDisposableObject } from '../../hooks/useDisposableObject';
export type EffectComposerProps = ParamsProps<typeof POST.EffectComposer, POST.EffectComposer>;

export const EffectComposer: FC<EffectComposerProps> = (props) => {
    const canvasContext = useCanvasContext();
    const composer = useDisposableObject(POST.EffectComposer, props.params, props.innerRef);

    useLayoutEffect(() => {
        if (
            !canvasContext?.renderer ||
            !composer ||
            !canvasContext?.renderer?.getContext()?.getContextAttributes()
        ) {
            return;
        }

        composer.setRenderer(canvasContext.renderer);
    }, [
        composer,
        canvasContext?.renderer,
        canvasContext?.renderer?.getContext()?.getContextAttributes(),
    ]);

    useLayoutEffect(() => {
        if (!composer || !canvasContext?.size || !composer.getRenderer()) {
            return;
        }

        composer.setSize(canvasContext.size.width, canvasContext.size.height, false);
    }, [
        composer,
        canvasContext?.size?.width,
        canvasContext?.size?.height,
        composer?.getRenderer(),
    ]);

    useLayoutEffect(() => {
        canvasContext?.setEffectComposer(composer);
    }, [composer, canvasContext?.setEffectComposer]);

    return <>{props.children}</>;
};
