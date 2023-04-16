import * as POST from 'postprocessing';
import * as THREE from 'three';
import { ParamsProps } from '../types';
import React, { FC, useEffect, useState } from 'react';
import { EffectContext, useEffectContext } from '../contexts/effect-context';
import { useCanvasContext } from '../contexts/canvas-context';
import { handleForwardRef } from '../utils';

const composer = new POST.EffectComposer();
// composer.setSize()
composer.setRenderer(new THREE.WebGLRenderer());
const renderPass = new POST.RenderPass();
renderPass.mainScene = new THREE.Scene();
renderPass.mainCamera = new THREE.PerspectiveCamera();
composer.addPass(renderPass);

const effectPass = new POST.EffectPass();
effectPass.mainCamera = new THREE.PerspectiveCamera();
// effectPass.composer.addPass(new EffectPass(camera, new BloomEffect()));

// BloomEffect
new POST.EffectPass(undefined, new POST.BloomEffect());

export type EffectComposerProps = ParamsProps<typeof POST.EffectComposer, POST.EffectComposer>;
export const EffectComposer: FC<EffectComposerProps> = (props) => {
    const canvasContext = useCanvasContext();
    const [composer, setComposer] = useState<POST.EffectComposer | null>(null);

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
        if (!canvasContext?.renderer || !composer) {
            return;
        }

        composer.setRenderer(canvasContext.renderer);
    }, [canvasContext?.renderer, composer]);

    return <EffectContext.Provider value={composer}>{props.children}</EffectContext.Provider>;
};

export type RenderPassProps = ParamsProps<typeof POST.RenderPass, POST.RenderPass>;

export const RenderPass: FC<RenderPassProps> = (props) => {
    const effectContext = useEffectContext();
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
        if (!pass || !effectContext) {
            return;
        }

        effectContext.addPass(pass);

        return () => {
            effectContext.removePass(pass);
        };
    }, [pass, effectContext]);
    return <div></div>;
};
