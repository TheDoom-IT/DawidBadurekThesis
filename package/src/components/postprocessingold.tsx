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
