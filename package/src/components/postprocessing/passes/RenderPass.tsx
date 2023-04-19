import { ParamsProps } from '../../../types';
import * as POST from 'postprocessing';
import React, { FC } from 'react';
import { usePass } from '../../../hooks/postprocessing/usePass';

export type RenderPassProps = ParamsProps<typeof POST.RenderPass, POST.RenderPass>;

export const RenderPass: FC<RenderPassProps> = (props) => {
    usePass(POST.RenderPass, props);

    return <>{props.children}</>;
};
