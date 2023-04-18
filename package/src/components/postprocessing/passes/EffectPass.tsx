import { ParamsProps } from '../../../types';
import * as POST from 'postprocessing';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
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
export const EffectPass: FC<EffectPassProps> = (props) => {
    const pass = usePass(CustomEffectPass, props) as CustomEffectPass | null;
    const [effects, setEffects] = useState<POST.Effect[]>([]);

    const addEffect = useCallback((effect: POST.Effect) => {
        setEffects((prev) => {
            const index = effects.findIndex((el) => el === effect);
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

    useEffect(() => {
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
};
