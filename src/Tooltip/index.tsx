import * as React from 'react';
import styled from 'styled-components';

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
    direction: TooltipDirection;
}

export enum TooltipDirection {
    BOTTOM_CENTER,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
    RIGHT,
    LEFT,
    TOP_LEFT,
    TOP_RIGHT,
    TOP,
}

const TooltipContentContainer = styled.span<{direction: TooltipDirection}>`
    //Delay the visibility of the tooltip by 1 second
    visibility: hidden;
    width: auto;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 6px;
    padding: 5px 8px;
    position: absolute;
    z-index: 1;
    top: 100%;
    margin-top: 12px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
    left: ${({direction}) => {
        switch (direction) {
            case TooltipDirection.BOTTOM_CENTER: return '50%';
            case TooltipDirection.BOTTOM_LEFT: return 'unset';
            case TooltipDirection.BOTTOM_RIGHT: return '100%';
            default: return '50%';
        }
    }};
    margin-left: -60px;
    opacity: 0;
    transition: opacity 1.2s;
    ::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent rgb(255, 255, 255) transparent;
    }
`;

const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${TooltipContentContainer} {
        display: block;
        visibility: visible;
        transition: opacity 1.2s;
        opacity: 1;
    }
`;

export function Tooltip(props: ITooltipProps) {
    const contentRef = React.useRef<HTMLSpanElement>(null);

    return (
        <TooltipWrapper
            className={`trsTooltipWrapper${props?.classKey ? `-${props.classKey}` : ''}`}>
            {props.children}
            <TooltipContentContainer
                direction={props.direction}
                ref={contentRef}>
                {props.content}
            </TooltipContentContainer>
        </TooltipWrapper>);
}