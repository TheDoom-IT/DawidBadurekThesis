import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import { createEffect } from '../../utils/create-effect';

export type BloomEffectProps = ParamsProps<typeof POST.BloomEffect, POST.BloomEffect>;
export const BloomEffect = createEffect<typeof POST.BloomEffect, POST.BloomEffect>(
    POST.BloomEffect,
);

export type FXAAEffectProps = ParamsProps<typeof POST.FXAAEffect, POST.FXAAEffect>;
export const FXAAEffect = createEffect<typeof POST.FXAAEffect, POST.FXAAEffect>(POST.FXAAEffect);

export type NoiseEffectProps = ParamsProps<typeof POST.NoiseEffect, POST.NoiseEffect>;
export const NoiseEffect = createEffect<typeof POST.NoiseEffect, POST.NoiseEffect>(
    POST.NoiseEffect,
);
