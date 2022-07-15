import styled from 'styled-components';
import type { InfoColumnComponent } from '@/models/interfaces/ILifecycleProgressProps';

export const InformationColumn = styled.div<InfoColumnComponent>`
    background-color: ${p => p?.infoColumnBgColor ?? '#00BCF2'};
    color: ${p => p?.infoColumnTxtColor ?? '#fff'};
    position: relative;
    min-height: 1px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: ${p => p?.infoColumnMaxWidth ?? '200px'};
    width: 100%;
    height: ${p => p?.columnsHeight ?? '42px'};
    padding: 2px 0 0 8px;
`;