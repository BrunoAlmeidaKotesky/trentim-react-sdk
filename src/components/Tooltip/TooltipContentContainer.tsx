import styled, { css } from "styled-components";
import type { TooltipDirectionValues } from '@models/types/Common';

export const TooltipContentContainer = styled.span<{direction: TooltipDirectionValues}>`
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
        case 'top_center':
        case 'top_left':
        case 'top_right':
            return css`
                bottom: 100%;
                margin-bottom: 12px;
                top: unset;
                margin-left: -60px;
            `;
        case 'bottom_left':
        case 'bottom_center':
        case 'bottom_right':
            return css`
                top: 100%;
                bottom: unset;
                margin-top: 12px;
                margin-left: -60px;
            `;
        case 'right':
            return css`
                bottom: -100%;
                margin-left: 12px;
            `;
        case 'left':
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
        case 'bottom_center':
        case 'top_center':
            return '50%';
        case 'bottom_left':
        case 'top_left':
            return 'unset';
        case 'bottom_right':
        case 'top_right':
        case 'right':
            return '100%';
        case 'left':
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
            case 'top_left':
            case 'top_right':
            case 'top_center':
                return css`
                    top: 100%;
                    bottom: unset;
                    left: 50%;
                    transform: rotate(180deg);
                `;
            case 'bottom_center':
            case 'bottom_left':
            case 'bottom_right':
                return css`
                    bottom: 100%;
                    left: 50%;
                    top: unset;
                `;
            case 'right':
                return css`
                    top: 45%;
                    left: unset;
                    right: 100%;
                    transform: rotate(270deg);
                `;
            case 'left':
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