import { ParamsProps } from '../../../types';
import * as POST from 'postprocessing';
import React, { ForwardedRef, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { EffectPassContext, EffectPassContextType } from '../../../contexts/effect-pass-context';
import { usePass } from '../../../hooks/postprocessing/usePass';

class CustomEffectPass extends POST.EffectPass {
    constructor(...params: ConstructorParameters<typeof POST.EffectPass>) {
        super(...params);
    }

    updateEffects(effects: POST.Effect[]) {
        this.setEffects(effects);
        this.recompile();
    }
}

export type EffectPassProps = ParamsProps<typeof POST.EffectPass, POST.EffectPass>;
export const EffectPass = React.forwardRef<POST.EffectPass, EffectPassProps>(function EffectPass(
    props: EffectPassProps,
    ref: ForwardedRef<POST.EffectPass>,
) {
    const pass = usePass(CustomEffectPass, props, ref) as CustomEffectPass | null;
    const [effects, setEffects] = useState<POST.Effect[]>([]);

    const addEffect = useCallback((effect: POST.Effect) => {
        setEffects((prev) => {
            const index = prev.findIndex((el) => el === effect);
            if (index === -1) {
                return [...prev, effect];
            }

            return [...prev];
        });
    }, []);

    const removeEffect = useCallback((effect: POST.Effect) => {
        setEffects((prev) => prev.filter((el) => el !== effect));
    }, []);

    const effectPassContext = useMemo<EffectPassContextType>(() => {
        return {
            effectPass: pass,
            addEffect,
            removeEffect,
        };
    }, [pass, addEffect, removeEffect]);

    useLayoutEffect(() => {
        if (!pass) {
            return;
        }

        pass.updateEffects(effects);
    }, [effects, pass]);

    return (
        <EffectPassContext.Provider value={effectPassContext}>
            {props.children}
        </EffectPassContext.Provider>
    );
});
