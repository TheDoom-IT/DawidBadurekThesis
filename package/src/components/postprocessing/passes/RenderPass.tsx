import { ParamsProps } from '../../../types';
import * as POST from 'postprocessing';
import React, { ForwardedRef } from 'react';
import { usePass } from '../../../hooks/postprocessing/usePass';

export const RenderPass = React.forwardRef(function RenderPass(
    props: ParamsProps<typeof POST.RenderPass, POST.RenderPass>,
    ref: ForwardedRef<POST.RenderPass>,
) {
    usePass(POST.RenderPass, props, ref);

    return <>{props.children}</>;
});
