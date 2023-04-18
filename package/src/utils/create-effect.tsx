import { useEffectPassContext } from '../contexts/effect-pass-context';
import React, { useEffect } from 'react';
import * as POST from 'postprocessing';
import { ParamsProps } from '../types';
import { useDisposableObject } from '../hooks/useDisposableObject';

export function createEffect<C extends new (...params: any[]) => R, R extends POST.Effect>(
    constructor: C,
) {
    // eslint-disable-next-line react/display-name
    return (props: ParamsProps<C, R>) => {
        const effectPassContext = useEffectPassContext();

        const effect = useDisposableObject(constructor, props.params, props.innerRef);

        useEffect(() => {
            if (!effect || !effectPassContext?.effectPass) {
                return;
            }

            effectPassContext?.addEffect(effect);

            return () => {
                effectPassContext?.removeEffect(effect);
            };
        }, [effect, effectPassContext?.effectPass]);

        return <>{props.children}</>;
    };
}
