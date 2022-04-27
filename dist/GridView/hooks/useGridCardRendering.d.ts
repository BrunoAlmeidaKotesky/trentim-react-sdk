import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { IRow } from '../../models/interfaces/IGridView';
import { IGridCardProps } from '../../models/interfaces/ICardProps';
interface IGridCardHandler {
    renderAs: 'card' | 'list';
    enableGrouping: boolean;
    shouldRenderCard: boolean;
    actualRows: IRow[];
    cardProps: IGridCardProps;
    setShouldRenderCard: Dispatch<SetStateAction<boolean>>;
    setEnableGrouping: Dispatch<SetStateAction<boolean>>;
    onRenderCustomComponent: (item: IRow) => React.ReactNode;
    onItemClick: (item: IRow) => void;
}
export declare function useGridCardRendering({ renderAs, setEnableGrouping, setShouldRenderCard, enableGrouping, actualRows, shouldRenderCard, cardProps, onRenderCustomComponent, onItemClick }: IGridCardHandler): React.ReactNode[];
export {};
