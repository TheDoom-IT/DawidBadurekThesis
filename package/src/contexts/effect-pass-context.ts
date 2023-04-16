import { createContext, useContext } from 'react';
import * as POST from 'postprocessing';

export type EffectPassContextType = {
    effectPass: POST.EffectPass | null;
    addEffect: (effect: POST.Effect) => void;
    removeEffect: (effect: POST.Effect) => void;
} | null;
export const EffectPassContext = createContext<EffectPassContextType>(null);

export const useEffectPassContext = () => useContext(EffectPassContext);
