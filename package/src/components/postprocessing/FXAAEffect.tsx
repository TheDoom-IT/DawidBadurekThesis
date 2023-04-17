import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import React, { FC, useEffect, useState } from 'react';
import { useEffectPassContext } from '../../contexts/effect-pass-context';
import { handleForwardRef } from '../../utils';

export type FXAAEffectProps = ParamsProps<typeof POST.FXAAEffect, POST.FXAAEffect>;

export const FXAAEffect: FC<FXAAEffectProps> = (props) => {
    const effectPassContext = useEffectPassContext();

    const [effect, setEffect] = useState<POST.FXAAEffect | null>(null);

    useEffect(() => {
        const effect = new POST.FXAAEffect(...(props.params || []));
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
