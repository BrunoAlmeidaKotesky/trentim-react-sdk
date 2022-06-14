import * as React from 'react';
import { TooltipDirection, TooltipDirectionValues } from './constants';
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
export declare function Tooltip(props: ITooltipProps): JSX.Element;
