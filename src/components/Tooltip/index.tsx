import * as React from 'react';
import {TooltipWrapper} from './TooltipWrapper';
import {TooltipContentContainer} from './TooltipContentContainer';
import {TooltipDirection, TooltipDirectionValues} from './constants';

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
     * @default TooltipDirection.BOTTOM_CENTER
     */
    direction: TooltipDirection | TooltipDirectionValues;
}

export function Tooltip(props: ITooltipProps) {

    return (
        <TooltipWrapper
            className={`trsTooltipWrapper${props?.classKey ? `-${props.classKey}` : ''}`}>
            {props.children}
            <TooltipContentContainer
                direction={props.direction as TooltipDirection}>
                {props.content}
            </TooltipContentContainer>
        </TooltipWrapper>);
}