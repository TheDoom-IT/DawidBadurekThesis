import * as POST from 'postprocessing';
import { createEffect } from '../../utils/create-effect';

export const BloomEffect = createEffect<typeof POST.BloomEffect, POST.BloomEffect>(
    POST.BloomEffect,
);

export const FXAAEffect = createEffect<typeof POST.FXAAEffect, POST.FXAAEffect>(POST.FXAAEffect);

export const NoiseEffect = createEffect<typeof POST.NoiseEffect, POST.NoiseEffect>(
    POST.NoiseEffect,
);
