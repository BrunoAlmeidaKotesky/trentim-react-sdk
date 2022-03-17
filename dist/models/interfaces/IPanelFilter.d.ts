import type { IRow } from "./IGridView";
import type { Dispatch, SetStateAction } from 'react';
export declare type FilterOption = {
    key: string | number;
    text: string;
    data?: IRow;
    selected?: boolean;
    name?: string;
};
export interface IAvailableFilters {
    key: string;
    name: string;
    options: FilterOption[];
    enableMultiple: boolean;
    renderAs: 'Dropdown' | 'SearchBox';
}
export interface IPanelFilterProps {
    isOpen: boolean;
    availableFilters: IAvailableFilters[];
    onApply: (map: SelectedItemsMap) => void;
    onCancel: () => void;
    onClose: () => void;
    onOpen: () => void;
    panelTitle: string;
    setActualFilteredValues: Dispatch<SetStateAction<SelectedItemsMap>>;
    actualFilteredValues: SelectedItemsMap;
}
export declare type SelectedItemsMap = Map<string, {
    rootItemKey: keyof IRow;
    itemKey: string | number;
    data: IRow;
    text: string;
}>;
