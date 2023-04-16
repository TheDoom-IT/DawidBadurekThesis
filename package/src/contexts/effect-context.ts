import { createContext, useContext } from 'react';
import { EffectComposer } from 'postprocessing';

export type EffectContextType = EffectComposer | null;
export const EffectContext = createContext<EffectContextType>(null);

export const useEffectContext = () => useContext(EffectContext);
