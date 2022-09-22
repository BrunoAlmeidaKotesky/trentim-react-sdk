import styled from 'styled-components';
import type { InfoColumnComponent } from '@models/interfaces/ILifecycleProgressProps';

export const InformationColumn = styled.div.attrs<InfoColumnComponent>(() => ({className: 'info-column'}))<InfoColumnComponent>`
    background-color: ${p => p?.infoColumnBgColor ?? '#00BCF2'};
    color: ${p => p?.infoColumnTxtColor ?? '#fff'};
    display: flex;
    flex-direction: column;
    height: ${p => p?.leftColumnHeight ?? '59px'};
    margin-top: auto;
    padding-left: 14px;
    font-size: 14px;
    place-content: center;
`;