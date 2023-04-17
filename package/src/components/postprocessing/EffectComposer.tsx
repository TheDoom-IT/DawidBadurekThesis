import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useCanvasContext } from '../../contexts/canvas-context';
import { handleForwardRef } from '../../utils';
import { EffectContext } from '../../contexts/effect-context';

export type EffectComposerProps = ParamsProps<typeof POST.EffectComposer, POST.EffectComposer>;

export const EffectComposer: FC<EffectComposerProps> = (props) => {
    const canvasContext = useCanvasContext();
    const [composer, setComposer] = useState<POST.EffectComposer | null>(null);

    const setRenderer = useCallback(() => {
        if (!canvasContext?.renderer || !composer) {
            return;
        }

        composer.setRenderer(canvasContext.renderer);
    }, [composer, canvasContext?.renderer]);

    useEffect(() => {
        const effectComposer = new POST.EffectComposer(...(props.params || []));

        setComposer(effectComposer);

        const cleanRef = handleForwardRef(props.innerRef, effectComposer);

        return () => {
            if (cleanRef) {
                cleanRef();
            }
            effectComposer.dispose();
        };
    }, []);

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

    return <EffectContext.Provider value={composer}>{props.children}</EffectContext.Provider>;
};
