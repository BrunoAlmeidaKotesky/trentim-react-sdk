import type { IRow } from "@models/interfaces/IGridView";
import type { Dispatch, SetStateAction } from 'react';
import type { ICommonPanel, IPanelChildrenPosition } from "@models/interfaces/ICommonPanel";
import type { FilterComponent } from '@models/types/Common';
import type { RangeType } from "@helpers/enums";

export interface FilterOption {
    key: string | number;
    text: string; 
    data?: IRow; 
    selected?: boolean; 
    name?: string
    isDateComponent?: boolean;
};
export interface IAvailableFilters {
    key: string;
    name: string;
    options: FilterOption[];
    enableMultiple: boolean;
    renderAs: FilterComponent;
}

interface IDateSliderCtx {
    dateValue: Map<string, {fromDate: Date, toDate: Date}>;
    setFilterDate: Dispatch<SetStateAction<Map<string, {fromDate: Date, toDate: Date}>>>;
}

export interface IPanelFilterProps extends ICommonPanel<SelectedItemsMap>, IDateSliderCtx, IPanelChildrenPosition {
    setActualFilteredValues: Dispatch<SetStateAction<SelectedItemsMap>>;
    actualFilteredValues: SelectedItemsMap;
    filterOptionsMatrix: FilterOption[][];
    availableFilters: IAvailableFilters[];
}

type SelectedItemsValue = {rootItemKey: keyof IRow, itemKey: string | number, data: IRow, text: string, type?: RangeType, from?: Date, to?: Date};
export type SelectedItemsMap = Map<string, SelectedItemsValue>;
