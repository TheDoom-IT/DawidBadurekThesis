import { ParamsProps } from '../../../types';
import * as POST from 'postprocessing';
import React, { ForwardedRef } from 'react';
import { usePass } from '../../../hooks/postprocessing/usePass';

export type RenderPassProps = ParamsProps<typeof POST.RenderPass, POST.RenderPass>;

export const RenderPass = React.forwardRef<POST.RenderPass, RenderPassProps>(function RenderPass(
    props: RenderPassProps,
    ref: ForwardedRef<POST.RenderPass>,
) {
    usePass(POST.RenderPass, props, ref);

    return <>{props.children}</>;
});
