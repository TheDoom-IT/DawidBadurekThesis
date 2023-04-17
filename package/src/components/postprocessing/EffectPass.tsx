import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useEffectContext } from '../../contexts/effect-context';
import { useCanvasContext } from '../../contexts/canvas-context';
import { EffectPassContext, EffectPassContextType } from '../../contexts/effect-pass-context';
import { handleForwardRef } from '../../utils';

export type EffectPassProps = ParamsProps<typeof POST.EffectPass, POST.EffectPass>;
export const EffectPass: FC<EffectPassProps> = (props) => {
    const effectContext = useEffectContext();
    const canvasContext = useCanvasContext();
    const [pass, setPass] = useState<POST.EffectPass | null>(null);
    const [effects, setEffects] = useState<POST.Effect[]>([]);

    const addEffect = useCallback(
        (effect: POST.Effect) => {
            const index = effects.findIndex((el) => el === effect);
            if (index === -1) {
                setEffects([...effects, effect]);
            }
        },
        [effects],
    );

    const removeEffect = useCallback(
        (effect: POST.Effect) => {
            const newEffects = effects.filter((el) => el !== effect);
            setEffects(newEffects);
        },
        [effects],
    );

    const effectPassContext = useMemo<EffectPassContextType>(() => {
        return {
            effectPass: pass,
            addEffect,
            removeEffect,
        };
    }, [pass, addEffect, removeEffect]);

    useEffect(() => {
        const pass = new POST.EffectPass(...(props.params || []));
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
        if (!pass) {
            return;
        }

        // TODO: find a better way to set effects
        // @ts-ignore
        pass.setEffects(effects);
        // pass.dispose();
        // @ts-ignore
        pass.updateMaterial();
        pass.recompile();
    }, [effects, pass]);

    useEffect(() => {
        if (!pass || !effectContext || !effectContext?.getRenderer()) {
            return;
        }

        effectContext.addPass(pass);

        return () => {
            effectContext.removePass(pass);
        };
    }, [pass, effectContext, effectContext?.getRenderer()]);

    useEffect(() => {
        if (!pass || !canvasContext?.camera) {
            return;
        }

        pass.mainCamera = canvasContext.camera;
    }, [pass, canvasContext?.camera]);

    return (
        <EffectPassContext.Provider value={effectPassContext}>
            {props.children}
        </EffectPassContext.Provider>
    );
};
