import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useEffect, useState } from 'react';
import { useEffectContext } from '../../contexts/effect-context';
import { useCanvasContext } from '../../contexts/canvas-context';
import { handleForwardRef } from '../../utils';

export type RenderPassProps = ParamsProps<typeof POST.RenderPass, POST.RenderPass>;

export const RenderPass: FC<RenderPassProps> = (props) => {
    const effectContext = useEffectContext();
    const canvasContext = useCanvasContext();
    const [pass, setPass] = useState<POST.RenderPass | null>(null);

    useEffect(() => {
        const pass = new POST.RenderPass(...(props.params || []));
        setPass(pass);

        const cleanRef = handleForwardRef(props.innerRef, pass);
        return () => {
            if (cleanRef) {
                cleanRef();
            }
            pass.dispose();
        };
    }, []);

    useEffect(() => {
        if (!pass || !canvasContext?.size) {
            return;
        }

        pass.setSize(canvasContext.size.width, canvasContext.size.height);
    }, [pass, canvasContext?.size]);

    useEffect(() => {
        if (!canvasContext?.mainScene || !pass) {
            return;
        }

        pass.mainScene = canvasContext.mainScene;
    }, [canvasContext?.mainScene, pass]);

    useEffect(() => {
        if (!canvasContext?.camera || !pass) {
            return;
        }

        pass.mainCamera = canvasContext.camera;
    }, [canvasContext?.camera, pass]);

    useEffect(() => {
        if (!pass || !effectContext || !effectContext?.getRenderer()) {
            return;
        }

        effectContext.addPass(pass);

        return () => {
            effectContext.removePass(pass);
        };
    }, [pass, effectContext, effectContext?.getRenderer()]);

    return <>{props.children}</>;
};
