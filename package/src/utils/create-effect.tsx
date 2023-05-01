import { useEffectPassContext } from '../contexts/effect-pass-context';
import React, { ForwardedRef, useLayoutEffect } from 'react';
import * as POST from 'postprocessing';
import { ParamsProps } from '../types';
import { useDisposableObject } from '../hooks/useDisposableObject';

export function createEffect<C extends new (...params: any[]) => R, R extends POST.Effect>(
    constructor: C,
) {
    // eslint-disable-next-line react/display-name
    return React.forwardRef<R, ParamsProps<C, R>>(
        (props: ParamsProps<C, R>, ref: ForwardedRef<R>) => {
            const effectPassContext = useEffectPassContext();

            const effect = useDisposableObject(constructor, props, ref);

            useLayoutEffect(() => {
                if (!effect || !effectPassContext?.effectPass) {
                    return;
                }

                effectPassContext?.addEffect(effect);

                return () => {
                    effectPassContext?.removeEffect(effect);
                };
            }, [
                effect,
                effectPassContext,
                effectPassContext?.effectPass,
                effectPassContext?.addEffect,
                effectPassContext?.removeEffect,
            ]);

            return <>{props.children}</>;
        },
    );
}
