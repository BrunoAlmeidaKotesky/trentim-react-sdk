import styled from 'styled-components';
import type { LifeCycleContainer } from '@models/interfaces/ILifecycleProgressProps';

export const LifecycleContainer = styled.div.attrs<LifeCycleContainer>(() => ({
    className: 'lifecycle-container',
}))<LifeCycleContainer>`
    box-sizing: border-box;
    background: ${p => p?.containerBgColor ?? '#fff'};
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: ${p => p?.infoColumnWidth ? `${p?.infoColumnWidth} minmax(${p?.stageMinWidth || '160px'}, 1fr)` : '200px minmax(160px, 1fr)'};
    grid-gap: 0;
    gap: 0;
    overflow: hidden;
    align-content: end;
    align-items: end;
    position: relative;
`;