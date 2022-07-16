import styled from 'styled-components';
import type { ILifecycleProgressProps } from '@models/interfaces/ILifecycleProgressProps';

export const LifecycleRow = styled.div<Pick<ILifecycleProgressProps, 'containerHeight' | 'containerBgColor'>>`
    box-sizing: border-box;
    height: ${p => p?.containerHeight ?? '60px'};
    background: ${p => p?.containerBgColor ?? '#fff'};
    display: flex;
    width: 100%;
    align-items: end;
    margin: 0;
    ::before {
        display: table;
        line-height: 0;
        content: '';
    }
`;