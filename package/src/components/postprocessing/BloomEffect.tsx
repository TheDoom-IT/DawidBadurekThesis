import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useEffect, useState } from 'react';
import { useEffectPassContext } from '../../contexts/effect-pass-context';
import { handleForwardRef } from '../../utils';

export type BloomEffectProps = ParamsProps<typeof POST.BloomEffect, POST.BloomEffect>;

export const BloomEffect: FC<BloomEffectProps> = (props) => {
    const effectPassContext = useEffectPassContext();

    const [effect, setEffect] = useState<POST.BloomEffect | null>(null);

    useEffect(() => {
        const effect = new POST.BloomEffect(...(props.params || []));
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
