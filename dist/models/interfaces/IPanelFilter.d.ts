import type { IRow } from "./IGridView";
import type { Dispatch, SetStateAction } from 'react';
import type { ICommonPanel } from "./ICommonPanel";
import type { FilterComponent } from '../types/Common';
export interface FilterOption {
    key: string | number;
    text: string;
    data?: IRow;
    selected?: boolean;
    name?: string;
    isDateComponent?: boolean;
}
export interface IAvailableFilters {
    key: string;
    name: string;
    options: FilterOption[];
    enableMultiple: boolean;
    renderAs: FilterComponent;
}
interface IDateSliderCtx {
    fromDate: Date;
    toDate: Date;
    setFromDate: Dispatch<SetStateAction<Date>>;
    setToDate: Dispatch<SetStateAction<Date>>;
}
export interface IPanelFilterProps extends ICommonPanel<SelectedItemsMap>, IDateSliderCtx {
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
export {};
