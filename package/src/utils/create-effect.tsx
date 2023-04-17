import { useEffectPassContext } from '../contexts/effect-pass-context';
import React, { useEffect, useState } from 'react';
import * as POST from 'postprocessing';
import { handleForwardRef } from './handle-forward-ref';
import { ParamsProps } from '../types';

export function createEffect<C extends new (...params: any[]) => R, R extends POST.Effect>(
    constructor: C,
) {
    // eslint-disable-next-line react/display-name
    return (props: ParamsProps<C, R>) => {
        const effectPassContext = useEffectPassContext();

        const [effect, setEffect] = useState<R | null>(null);

        useEffect(() => {
            const effect = new constructor(...(props.params || []));
            setEffect(effect);

            const cleanRef = handleForwardRef(props.innerRef, effect);
            return () => {
                if (cleanRef) {
                    cleanRef();
                }
                effect.dispose();
            };
        }, []);

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
