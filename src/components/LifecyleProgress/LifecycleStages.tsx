import styled, {css} from "styled-components";
import type {StageColumnComponent, StageBlockComponent, StageIndicatorComponent} from '@models/interfaces/ILifecycleProgressProps';

export const StagesColumn = styled.div.attrs<StageColumnComponent>(() => ({className: 'stage-column'}))<StageColumnComponent>`
    background: ${p => p?.containerBgColor ?? '#fff'};
    height: ${p => p?.rightColumnHeight ?? '73px'};
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: ${p=> p?.rightColPaddingBot ?? '0'};
    overflow-x: overlay;
    * {
        box-sizing: border-box;
    }
`;

const pseudoCss = (type: 'after'| 'before', ...content: string[]) => {
    const baseCss = css`
        content: "";
        height: 4px;
        width: 50%;
        position: absolute;
        top: -4px;
        ${type === 'after' ? 'right: 0;' : 'left: 0;'};
        ${content}
    `;
    if (type === 'after')
        return css`::after {
            ${baseCss}
        }`;
    return css`::before {
        ${baseCss}
    }`;
}

export const StageBlock = styled.div<StageBlockComponent>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: ${p => p?.stageHeight ?? '59px'};
    border-top: ${p => p?.stageBorderTop ?? '4px solid #e2e2e2'};
    position: relative;
    background-color: ${p => p?.stageBgColor ?? '#efefef'};
    width: 100%;
    min-width: ${p => p?.stageMinWidth ?? '200px'};
    ${p => !p?.isFirstColumn && pseudoCss('before', (p?.completed || p?.active) ? `background-color: ${p?.indicatorColor ?? '#00BCF2'}` : '')}
    ${p => !p?.isLastColumn && pseudoCss('after', p?.completed ? `background-color: ${p?.indicatorColor ?? '#00BCF2'}` : '')}
`;

const stageIndicatorBgColor = (completed: boolean, defaultColor: string) => {
    if(completed)
        return defaultColor || '#00BCF2';
    return '#fff';
}

export const StageIndicator = styled.span.attrs<StageIndicatorComponent>(() => ({className: 'indicator-circle'}))<StageIndicatorComponent>`
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: ${p => stageIndicatorBgColor(p?.completed, p?.indicatorColor)};
    border: ${p => (p?.completed) ? 'unset' : (p?.active) ? `4px solid ${p?.indicatorColor ?? '#00BCF2'}` : '4px solid #c4c4c4'};
    position: absolute;
    top: -14px;
    left: calc(50% - 14px);
    cursor: pointer;
    font-size: 1.3em;
    text-align: center;
    color: ${p => p.completed ? 'white' : 'inherit'};;
    z-index: 5;
    ${p => p?.active && css`
        ::after {
            content: "";
            height: 8px;
            width: 8px;
            border-radius: 8px;
            background-color: ${p?.indicatorColor ?? '#00BCF2'};
            position: absolute;
            top: calc(50% - 4px);
            left: calc(50% - 4px);
        }
    `}
`;