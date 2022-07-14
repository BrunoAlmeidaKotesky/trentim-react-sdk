import styled from 'styled-components';
import { TooltipContentContainer } from './TooltipContentContainer';

export const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${TooltipContentContainer} {
        display: block;
        visibility: visible;
        transition: opacity 1.2s;
        opacity: 1;
    }
`;