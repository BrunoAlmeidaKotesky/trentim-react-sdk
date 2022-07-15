import styled, {css} from "styled-components";
import type {StageColumnComponent, StageBlockComponent, StageIndicatorComponent} from '@models/interfaces/ILifecycleProgressProps';

export const StagesColumn = styled.div<StageColumnComponent>`
    display: grid;
    grid-template-columns: ${p => p?.gridTemplateColumn ?? 'repeat(auto-fit, minmax(200px, 1fr))'};
    background: #efefef;
    height: ${p => p?.columnsHeight ?? '42px'};
    width: 100%;
`;

const pseudoCss = (type: 'after'| 'before', ...content: string[]) => {
    const baseCss = css`
        content: "";
        height: 4px;
        width: 50%;
        position: absolute;
        right: 0;
        top: -4px;
        ${content}
    `;
    if (type === 'after')
        return css`::after { ${baseCss} }`;
    return css`::before { ${baseCss} }`;
}

export const StageBlock = styled.div<StageBlockComponent>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: ${p => p?.columnsHeight ?? '42px'};
    border-top: ${p => p?.stageBorderTop ?? '4px solid #e2e2e2'};
    position: relative;
    background-color: ${p => p?.stageBgColor ?? '#fff'};
    width: 100%;
    ${p => !p?.isFirstColumn && pseudoCss('before', 'border-left: 4px solid #e2e2e2')}
    ${p => !p?.isLastColumn && pseudoCss('after', p?.stageBorderTop ?? '4px solid #e2e2e2')}
`;

export const StageIndicator = styled.span<StageIndicatorComponent>`
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: ${p =>p?.active ? p?.indicatorColor ?? '#00BCF2' : '#fff'};
    border: 4px solid ${p =>p?.active ? p?.indicatorColor ?? '#00BCF2' : '#c4c4c4'};
    position: absolute;
    top: -14px;
    left: calc(50% - 14px);
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