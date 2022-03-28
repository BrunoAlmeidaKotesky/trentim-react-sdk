import type { IRow } from "./IGridView";
import type { Dispatch, SetStateAction } from 'react';
import { ICommonPanel } from "./ICommonPanel";
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
    renderAs: 'Dropdown' | 'SearchBox' | 'DateSlider';
}
export interface IPanelFilterProps extends ICommonPanel<SelectedItemsMap> {
    availableFilters: IAvailableFilters[];
    setActualFilteredValues: Dispatch<SetStateAction<SelectedItemsMap>>;
    actualFilteredValues: SelectedItemsMap;
}
export declare type SelectedItemsMap = Map<string, {
    rootItemKey: keyof IRow;
    itemKey: string | number;
    data: IRow;
    text: string;
}>;
