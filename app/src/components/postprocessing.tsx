import * as THREE from 'three';
import {
    BloomEffect,
    EffectComposer,
    EffectPass,
    FXAAEffect,
    RenderPass,
} from 'react-three-component';

export const Postprocessing = () => {
    return (
        <>
            <EffectComposer
                params={[
                    undefined,
                    {
                        frameBufferType: THREE.HalfFloatType,
                        // stencilBuffer removes graphic glitches
                        // https://github.com/pmndrs/postprocessing/issues/402
                        stencilBuffer: true,
                    },
                ]}>
                <RenderPass />
                <EffectPass>
                    <FXAAEffect />
                    <BloomEffect
                        params={[
                            {
                                luminanceThreshold: 1,
                                luminanceSmoothing: 0.5,
                                intensity: 1,
                                mipmapBlur: true,
                            },
                        ]}
                    />
                </EffectPass>
            </EffectComposer>
        </>
    );
};
