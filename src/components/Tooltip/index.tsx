import * as React from 'react';
import {TooltipWrapper} from './TooltipWrapper';
import {TooltipContentContainer} from './TooltipContentContainer';
import type { TooltipDirectionValues } from '@models/types/Common';

export interface ITooltipProps {
    /**
     * Use this property to better track the class name of the component, since it's use `styled-components`.
     */
    classKey?: React.Key;
    children: React.ReactNode;
    /**
     * The content to display in the tooltip.
     */
    content: React.ReactNode;
    /**
     * @default 'bottom_center'
     */
    direction: TooltipDirectionValues;
}

/**
 * A component that displays a tooltip when the user hovers over an element.
 */
export function Tooltip(props: ITooltipProps) {

    return (
        <TooltipWrapper
            className={`trsTooltipWrapper${props?.classKey ? `-${props.classKey}` : ''}`}>
            {props.children}
            <TooltipContentContainer
                direction={props.direction}>
                {props.content}
            </TooltipContentContainer>
        </TooltipWrapper>);
}