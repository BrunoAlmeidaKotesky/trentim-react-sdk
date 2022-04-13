import type { SelectedItemsMap } from "../interfaces/IPanelFilter";
import type { IRow, TColumn } from "../interfaces/IGridView";
import type { Dispatch, SetStateAction } from "react";
import type { IGroup } from "@fluentui/react/lib/DetailsList";

export type FilterComponent = 'Dropdown' | 'SearchBox' | 'DateSlider' | 'PeoplePicker';
export type KeyAndName = `${string};${string}`;

type ApplyFilterParams<T> = { allRows: IRow<T>[]; setActualRows: Dispatch<SetStateAction<IRow[]>>; setIsFilterPanel: Dispatch<SetStateAction<boolean>>; };
type OnItemsFiltered<T> = (filtered?: IRow<T>[]) => void;

type CustomFilterParams<T> = {applyCustomFilter?: ApplyCustomFilter<T>, onItemsFiltered?: OnItemsFiltered<T>};
export type ApplyFilter<T> = (params: ApplyFilterParams<T> & CustomFilterParams<T>) => (selectedItems: SelectedItemsMap) => void;

interface IGroupingParams {
    emptyGroupLabel: string;
    actualRows: IRow[];
    cols: TColumn<any>[];
    setGroups: Dispatch<SetStateAction<IGroup[]>>;
    setIsGroupPanel: Dispatch<SetStateAction<boolean>>;
    onItemsGrouped: (opt?: {selectedKey: string, setGroups: Dispatch<SetStateAction<IGroup[]>>}) => void;
}
export type ApplyGrouping = (paramns: IGroupingParams) => (keyAndName: KeyAndName) => void;

interface ISearchParams { 
    allRows: IRow[];
    setActualRows: Dispatch<SetStateAction<IRow[]>>;
    searchCb: (value: IRow[]) => void;
    onSearchBoxItemsFiltered: (filtered?: IRow[]) => void;
}
export type SearchItem = (params: ISearchParams) => (searchText: string, keys: (keyof IRow)[]) => IRow[];

interface IApplyCustomFilterParams<T> extends ApplyFilterParams<T> {
    /**The selected items `Map`, but already grouped in a collection of Maps, without the `index_` from the map key. */
    groupedMaps: Map<string, SelectedItemsMap>;
    /**All the selected items as an `Map`, it can be for example
     * @example 
     * Map([['0_User.Title', data], ['1_User.Title', data]])
     * ```
     */
    selectedItems: SelectedItemsMap;
};

export type ApplyCustomFilter<T> = (params: IApplyCustomFilterParams<T>) => void;