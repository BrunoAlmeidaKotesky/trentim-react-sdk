import { IRow } from "./IGridView";

export type FilterOption = {key: string | number, text: string, data?: IRow, selected?: boolean;};
export interface IAvailableFilters {
    key: string;
    name: string;
    options: FilterOption[];
    enableMultiple: boolean;
}
export interface IPanelFilterProps {
    isOpen: boolean;
    availableFilters: IAvailableFilters[];
    onApply: (map: SelectedItemsMap) => void;
    onCancel: () => void;
    onClose: () => void;
    panelTitle: string;
    onNotifyFilterChange?: (map: SelectedItemsMap) => void;
}

export type SelectedItemsMap = Map<string, {rootItemKey: keyof IRow, itemKey: string | number, data: IRow, text: string}>;
