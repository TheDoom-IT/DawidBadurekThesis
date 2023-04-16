import * as POST from 'postprocessing';
import { ParamsProps } from '../types';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { EffectContext, useEffectContext } from '../contexts/effect-context';
import { useCanvasContext } from '../contexts/canvas-context';
import { handleForwardRef } from '../utils';
import {
    EffectPassContext,
    EffectPassContextType,
    useEffectPassContext,
} from '../contexts/effect-pass-context';

// const composer = new POST.EffectComposer();
// // composer.setSize()
// composer.setRenderer(new THREE.WebGLRenderer());
// const renderPass = new POST.RenderPass();
// renderPass.mainScene = new THREE.Scene();
// renderPass.mainCamera = new THREE.PerspectiveCamera();
// composer.addPass(renderPass);
//
// const effectPass = new POST.EffectPass();
// effectPass.mainCamera = new THREE.PerspectiveCamera();
// // effectPass.composer.addPass(new EffectPass(camera, new BloomEffect()));
//
// // BloomEffect
// new POST.EffectPass(undefined, new POST.BloomEffect());

export type EffectComposerProps = ParamsProps<typeof POST.EffectComposer, POST.EffectComposer>;
export const EffectComposer: FC<EffectComposerProps> = (props) => {
    const canvasContext = useCanvasContext();
    const [composer, setComposer] = useState<POST.EffectComposer | null>(null);
    console.log(composer);
    const setRenderer = useCallback(() => {
        if (!canvasContext?.renderer || !composer) {
            return;
        }

        composer.setRenderer(canvasContext.renderer);
    }, [composer, canvasContext?.renderer]);

    useEffect(() => {
        const effectComposer = new POST.EffectComposer(...(props.params || []));

        setComposer(effectComposer);

        const cleanRef = handleForwardRef(props.innerRef, effectComposer);

        return () => {
            if (cleanRef) {
                cleanRef();
            }
            effectComposer.dispose();
        };
    }, []);

    useEffect(() => {
        if (!composer || !canvasContext?.size || !composer.getRenderer()) {
            return;
        }

        composer.setSize(canvasContext.size.width, canvasContext.size.height, false);
    }, [composer, canvasContext?.size]);

    useEffect(() => {
        canvasContext?.setEffectComposer(composer);
    }, [composer]);

    useEffect(() => {
        setRenderer();
    }, [setRenderer]);

    return <EffectContext.Provider value={composer}>{props.children}</EffectContext.Provider>;
};

export type RenderPassProps = ParamsProps<typeof POST.RenderPass, POST.RenderPass>;

export const RenderPass: FC<RenderPassProps> = (props) => {
    const effectContext = useEffectContext();
    const canvasContext = useCanvasContext();
    const [pass, setPass] = useState<POST.RenderPass | null>(null);

    useEffect(() => {
        const pass = new POST.RenderPass(...(props.params || []));
        setPass(pass);

        const cleanRef = handleForwardRef(props.innerRef, pass);
        return () => {
            if (cleanRef) {
                cleanRef();
            }
            pass.dispose();
        };
    }, []);

    useEffect(() => {
        if (!pass || !canvasContext?.size) {
            return;
        }

        pass.setSize(canvasContext.size.width, canvasContext.size.height);
    }, [pass, canvasContext?.size]);

    useEffect(() => {
        if (!canvasContext?.mainScene || !pass) {
            return;
        }

        pass.mainScene = canvasContext.mainScene;
    }, [canvasContext?.mainScene, pass]);

    useEffect(() => {
        if (!canvasContext?.camera || !pass) {
            return;
        }

        pass.mainCamera = canvasContext.camera;
    }, [canvasContext?.camera, pass]);

    useEffect(() => {
        if (!pass || !effectContext || !effectContext?.getRenderer()) {
            return;
        }

        effectContext.addPass(pass);

        return () => {
            effectContext.removePass(pass);
        };
    }, [pass, effectContext, effectContext?.getRenderer()]);

    return <>{props.children}</>;
};

export type EffectPassProps = ParamsProps<typeof POST.EffectPass, POST.EffectPass>;
export const EffectPass: FC<EffectPassProps> = (props) => {
    const effectContext = useEffectContext();
    const canvasContext = useCanvasContext();
    const [pass, setPass] = useState<POST.EffectPass | null>(null);
    const [effects, setEffects] = useState<POST.Effect[]>([]);

    const addEffect = useCallback(
        (effect: POST.Effect) => {
            const index = effects.findIndex((el) => el === effect);
            if (index === -1) {
                setEffects([...effects, effect]);
            }
        },
        [effects],
    );

    const removeEffect = useCallback(
        (effect: POST.Effect) => {
            const newEffects = effects.filter((el) => el !== effect);
            setEffects(newEffects);
        },
        [effects],
    );

    const effectPassContext = useMemo<EffectPassContextType>(() => {
        return {
            effectPass: pass,
            addEffect,
            removeEffect,
        };
    }, [pass, addEffect, removeEffect]);

    useEffect(() => {
        const pass = new POST.EffectPass(...(props.params || []));
        setPass(pass);

        const cleanRef = handleForwardRef(props.innerRef, pass);
        return () => {
            if (cleanRef) {
                cleanRef();
            }
            pass.dispose();
        };
    }, []);

    useEffect(() => {
        if (!pass || !canvasContext?.size) {
            return;
        }

        pass.setSize(canvasContext.size.width, canvasContext.size.height);
    }, [pass, canvasContext?.size]);

    useEffect(() => {
        if (!pass) {
            return;
        }

        // TODO: find a better way to set effects
        // @ts-ignore
        pass.setEffects(effects);
        // pass.dispose();
        // @ts-ignore
        pass.updateMaterial();
        pass.recompile();
    }, [effects, pass]);

    useEffect(() => {
        if (!pass || !canvasContext?.camera) {
            return;
        }

        pass.mainCamera = canvasContext.camera;
    }, [pass, canvasContext?.camera]);

    useEffect(() => {
        if (!pass || !effectContext || !effectContext?.getRenderer()) {
            return;
        }

        effectContext.addPass(pass);

        return () => {
            effectContext.removePass(pass);
        };
    }, [pass, effectContext, effectContext?.getRenderer()]);

    return (
        <EffectPassContext.Provider value={effectPassContext}>
            {props.children}
        </EffectPassContext.Provider>
    );
};

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
