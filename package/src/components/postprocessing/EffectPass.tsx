import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { EffectPassContext, EffectPassContextType } from '../../contexts/effect-pass-context';
import { usePass } from '../../hooks/postprocessing/usePass';

export type EffectPassProps = ParamsProps<typeof POST.EffectPass, POST.EffectPass>;
export const EffectPass: FC<EffectPassProps> = (props) => {
    const pass = usePass(POST.EffectPass, props);

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

        // TODO: find a better way to set effects
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pass.setEffects(effects);
        pass.recompile();
    }, [effects, pass]);

    return (
        <EffectPassContext.Provider value={effectPassContext}>
            {props.children}
        </EffectPassContext.Provider>
    );
};
