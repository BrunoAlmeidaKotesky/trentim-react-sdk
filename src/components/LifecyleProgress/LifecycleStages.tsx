import styled, {css} from "styled-components";
import type {StageColumnComponent, StageBlockComponent, StageIndicatorComponent} from '@models/interfaces/ILifecycleProgressProps';

export const StagesColumn = styled.div<StageColumnComponent>`
    display: grid;
    grid-template-columns: ${p => p?.gridTemplateColumn ?? 'repeat(auto-fit, minmax(200px, 1fr))'};
    background: #efefef;
    height: ${p => p?.columnsHeight ?? '46px'};
    width: 100%;
`;

const pseudoCss = (type: 'after'| 'before', ...content: string[]) => {
    const baseCss = css`
        content: "";
        height: 4px;
        width: 50%;
        position: absolute;
        top: -4px;
        ${content}
    `;
    if (type === 'after')
        return css`::after {right: 0; ${baseCss}}`;
    return css`::before {left: 0; ${baseCss}}`;
}

export const StageBlock = styled.div<StageBlockComponent>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: ${p => p?.columnsHeight ?? '46px'};
    border-top: ${p => p?.stageBorderTop ?? '4px solid #e2e2e2'};
    position: relative;
    background-color: ${p => p?.stageBgColor ?? '#efefef'};
    width: 100%;
    ${p => !p?.isFirstColumn && pseudoCss('before', (p?.completed || p?.active) ? `background-color: ${p?.indicatorColor ?? '#00BCF2'}` : '')}
    ${p => !p?.isLastColumn && pseudoCss('after', p?.completed ? `background-color: ${p?.indicatorColor ?? '#00BCF2'}` : '')}
`;

const stageIndicatorBgColor = (completed: boolean, defaultColor: string) => {
    if(completed)
        return defaultColor || '#00BCF2';
    return '#fff';
}

export const StageIndicator = styled.span<StageIndicatorComponent>`
    width: ${p => (p?.active || (!p?.active && !p?.completed)) ? '20px' : '24px'};
    height: ${p => (p?.active || (!p?.active && !p?.completed)) ? '20px' : '24px'};
    border-radius: 24px;
    background-color: ${p => stageIndicatorBgColor(p?.completed, p?.indicatorColor)};
    border: ${p => (p?.completed) ? 'unset' : (p?.active) ? `4px solid ${p?.indicatorColor ?? '#00BCF2'}` : '4px solid #c4c4c4'};
    position: absolute;
    top: -14px;
    left: calc(50% - 14px);
    cursor: pointer;
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