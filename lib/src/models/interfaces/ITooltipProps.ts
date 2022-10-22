import type { TooltipDirectionValues } from "@models/types/Common";

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
    /**
     * @default false
     * 
     * @description
     * This property is set to `false` by default, due to a problem when the element encapsulating the `<Tooltip />` has `overflow: hidden`, 
     * which causes problems to display the `<Tooltip>` correctly, so this property sets the overflow of the first parent element as `auto`.
     * 
     * @note **Please note that by enabling this property, you may end up with undesired problems with the tooltip.**
     */
    enableParentOverflow?: boolean;
}

export type LeftTypes = {left: string, afterLeft: string};
type DirectionSetter = React.Dispatch<React.SetStateAction<LeftTypes>>;
export type TTDirectionMap = Map<TooltipDirectionValues, DirectionSetter>;