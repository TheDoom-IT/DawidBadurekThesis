import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useCallback, useEffect } from 'react';
import { useCanvasContext } from '../../contexts/canvas-context';
import { useDisposableObject } from '../../hooks/useDisposableObject';
export type EffectComposerProps = ParamsProps<typeof POST.EffectComposer, POST.EffectComposer>;

export const EffectComposer: FC<EffectComposerProps> = (props) => {
    const canvasContext = useCanvasContext();
    const composer = useDisposableObject(POST.EffectComposer, props.params, props.innerRef);

    const setRenderer = useCallback(() => {
        if (!canvasContext?.renderer || !composer) {
            return;
        }

        composer.setRenderer(canvasContext.renderer);
    }, [composer, canvasContext?.renderer]);

    useEffect(() => {
        if (!composer || !canvasContext?.size || !composer.getRenderer()) {
            return;
        }

        composer.setSize(canvasContext.size.width, canvasContext.size.height, false);
    }, [composer, canvasContext?.size]);

    useEffect(() => {
        canvasContext?.setEffectComposer(composer);
    }, [composer]);

    useEffect(() => {
        setRenderer();
    }, [setRenderer]);

    return <>{props.children}</>;
};
