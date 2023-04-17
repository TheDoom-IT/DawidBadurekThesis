import { ParamsProps } from '../../types';
import * as POST from 'postprocessing';
import { FC } from 'react';
import { createEffect } from '../../utils/create-effect';

export type BloomEffectProps = ParamsProps<typeof POST.BloomEffect, POST.BloomEffect>;
export const BloomEffect: FC<BloomEffectProps> = createEffect(POST.BloomEffect);

export type FXAAEffectProps = ParamsProps<typeof POST.FXAAEffect, POST.FXAAEffect>;
export const FXAAEffect: FC<FXAAEffectProps> = createEffect(POST.FXAAEffect);

export type NoiseEffectProps = ParamsProps<typeof POST.NoiseEffect, POST.NoiseEffect>;
export const NoiseEffect: FC<NoiseEffectProps> = createEffect(POST.NoiseEffect);
