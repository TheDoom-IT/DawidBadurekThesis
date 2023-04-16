import { BloomEffect, EffectComposer, EffectPass, RenderPass } from 'postprocessing';
import * as THREE from 'three';

const composer = new EffectComposer();
// composer.setSize()
composer.setRenderer(new THREE.WebGLRenderer());
const renderPass = new RenderPass();
renderPass.mainScene = new THREE.Scene();
renderPass.mainCamera = new THREE.PerspectiveCamera();
composer.addPass(renderPass);

const effectPass = new EffectPass();
effectPass.mainCamera = new THREE.PerspectiveCamera();
// effectPass.composer.addPass(new EffectPass(camera, new BloomEffect()));

// BloomEffect
new EffectPass(undefined, new BloomEffect());
