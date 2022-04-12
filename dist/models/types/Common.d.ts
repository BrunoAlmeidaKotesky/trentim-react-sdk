import type { SelectedItemsMap } from "../interfaces/IPanelFilter";
import type { IRow, TColumn } from "../interfaces/IGridView";
import type { Dispatch, SetStateAction } from "react";
import type { IGroup } from "@fluentui/react/lib/DetailsList";
export declare type FilterComponent = 'Dropdown' | 'SearchBox' | 'DateSlider' | 'PeoplePicker';
export declare type KeyAndName = `${string};${string}`;
declare type ApplyFilterParams<T> = {
    allRows: IRow<T>[];
    setActualRows: Dispatch<SetStateAction<IRow[]>>;
    setIsFilterPanel: Dispatch<SetStateAction<boolean>>;
};
declare type OnItemsFiltered<T> = (filtered?: IRow<T>[]) => void;
declare type CustomFilterParams<T> = {
    applyCustomFilter?: ApplyCustomFilter<T>;
    onItemsFiltered?: OnItemsFiltered<T>;
};
export declare type ApplyFilter<T> = (params: ApplyFilterParams<T> & CustomFilterParams<T>) => (selectedItems: SelectedItemsMap) => void;
interface IGroupingParams {
    emptyGroupLabel: string;
    actualRows: IRow[];
    cols: TColumn<any>[];
    setGroups: Dispatch<SetStateAction<IGroup[]>>;
    setIsGroupPanel: Dispatch<SetStateAction<boolean>>;
    onItemsGrouped: () => void;
}
export declare type ApplyGrouping = (paramns: IGroupingParams) => (keyAndName: KeyAndName) => void;
interface ISearchParams {
    allRows: IRow[];
    setActualRows: Dispatch<SetStateAction<IRow[]>>;
    searchCb: (value: IRow[]) => void;
    onSearchBoxItemsFiltered: (filtered?: IRow[]) => void;
}
export declare type SearchItem = (params: ISearchParams) => (searchText: string, keys: (keyof IRow)[]) => IRow[];
interface IApplyCustomFilterParams<T> extends ApplyFilterParams<T> {
    /**The selected items `Map`, but already grouped in a collection of Maps, without the `index_` from the map key. */
    groupedMaps: Map<string, SelectedItemsMap>;
    /**All the selected items as an `Map`, it can be for example
     * @example
     * Map([['0_User.Title', data], ['1_User.Title', data]])
     * ```
     */
    selectedItems: SelectedItemsMap;
}
export declare type ApplyCustomFilter<T> = (params: IApplyCustomFilterParams<T>) => void;
export {};
