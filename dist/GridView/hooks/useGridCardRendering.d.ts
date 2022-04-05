import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { IRow, ICardProps } from '../../models/interfaces/IGridView';
interface IGridCardHandler {
    renderAs: 'card' | 'list';
    enableGrouping: boolean;
    shouldRenderCard: boolean;
    actualRows: IRow[];
    cardProps: ICardProps;
    setShouldRenderCard: Dispatch<SetStateAction<boolean>>;
    setEnableGrouping: Dispatch<SetStateAction<boolean>>;
    onRenderCustomComponent: (item: IRow) => React.ReactNode;
    onItemClick: (item: IRow) => void;
}
export declare function useGridCardRendering({ renderAs, setEnableGrouping, setShouldRenderCard, enableGrouping, actualRows, shouldRenderCard, cardProps, onRenderCustomComponent, onItemClick }: IGridCardHandler): React.ReactNode[];
export {};
