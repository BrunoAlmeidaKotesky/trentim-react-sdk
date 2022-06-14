import styled, { css } from "styled-components";
import { TooltipDirection } from './constants';

export const TooltipContentContainer = styled.span<{direction: TooltipDirection}>`
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
${({direction}) => {
    switch (direction) {
        case TooltipDirection.TOP_CENTER:
        case TooltipDirection.TOP_LEFT:
        case TooltipDirection.TOP_RIGHT:
            return css`
                bottom: 100%;
                margin-bottom: 12px;
                top: unset;
                margin-left: -60px;
            `;
        case TooltipDirection.BOTTOM_CENTER:
        case TooltipDirection.BOTTOM_LEFT:
        case TooltipDirection.BOTTOM_RIGHT:
            return css`
                top: 100%;
                bottom: unset;
                margin-top: 12px;
                margin-left: -60px;
            `;
        case TooltipDirection.RIGHT:
            return css`
                bottom: -100%;
                margin-left: 12px;
            `;
        case TooltipDirection.LEFT:
            return css`
                bottom: -100%;
                right: 100%;
                left: unset;
                margin-left: unset;
                margin-right: 12px;
            `;
    }
}}
box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px;
left: ${({direction}) => {
    switch (direction) {
        case TooltipDirection.BOTTOM_CENTER:
        case TooltipDirection.TOP_CENTER:
            return '50%';
        case TooltipDirection.BOTTOM_LEFT:
        case TooltipDirection.TOP_LEFT:
            return 'unset';
        case TooltipDirection.BOTTOM_RIGHT:
        case TooltipDirection.TOP_RIGHT:
        case TooltipDirection.RIGHT:
            return '100%';
        case TooltipDirection.LEFT:
            return 'calc(-110% - 10px)';
        default: return '50%';
    }
}};
opacity: 0;
transition: opacity 1.2s;
::after {
    content: "";
    position: absolute;
    ${({direction}) => {
        switch (direction) {
            case TooltipDirection.TOP_LEFT:
            case TooltipDirection.TOP_RIGHT:
            case TooltipDirection.TOP_CENTER:
                return css`
                    top: 100%;
                    bottom: unset;
                    left: 50%;
                    transform: rotate(180deg);
                `;
            case TooltipDirection.BOTTOM_CENTER:
            case TooltipDirection.BOTTOM_LEFT:
            case TooltipDirection.BOTTOM_RIGHT:
                return css`
                    bottom: 100%;
                    left: 50%;
                    top: unset;
                `;
            case TooltipDirection.RIGHT:
                return css`
                    top: 45%;
                    left: unset;
                    right: 100%;
                    transform: rotate(270deg);
                `;
            case TooltipDirection.LEFT:
                return css`
                    top: 45%;
                    left: 100%;
                    right: unset;
                    transform: rotate(90deg);
                `;
            
        }
    }}
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgb(255, 255, 255) transparent;
}`;