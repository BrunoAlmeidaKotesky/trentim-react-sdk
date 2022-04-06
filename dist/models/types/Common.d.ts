import type { SelectedItemsMap } from "../interfaces/IPanelFilter";
import type { IRow, TColumn } from "../interfaces/IGridView";
import type { Dispatch, SetStateAction } from "react";
import type { IGroup } from "@fluentui/react/lib/DetailsList";
export declare type FilterComponent = 'Dropdown' | 'SearchBox' | 'DateSlider' | 'PeoplePicker';
export declare type KeyAndName = `${string};${string}`;
declare type ApplyFilterParams = {
    allRows: IRow[];
    setActualRows: Dispatch<SetStateAction<IRow[]>>;
    setIsFilterPanel: Dispatch<SetStateAction<boolean>>;
};
export declare type ApplyFilter = ({ allRows, setActualRows, setIsFilterPanel, applyCustomFilter }: ApplyFilterParams & {
    applyCustomFilter?: ApplyCustomFilter;
}) => (selectedItems: SelectedItemsMap) => void;
interface IGroupingParams {
    emptyGroupLabel: string;
    actualRows: IRow[];
    cols: TColumn<any>[];
    setGroups: Dispatch<SetStateAction<IGroup[]>>;
    setIsGroupPanel: Dispatch<SetStateAction<boolean>>;
}
export declare type ApplyGrouping = ({ actualRows, cols, setGroups, setIsGroupPanel, emptyGroupLabel }: IGroupingParams) => (keyAndName: KeyAndName) => void;
declare type ISearchParams = {
    allRows: IRow[];
    setActualRows: Dispatch<SetStateAction<IRow[]>>;
    searchCb: (value: IRow[]) => void;
};
export declare type SearchItem = ({ allRows, searchCb, setActualRows }: ISearchParams) => (searchText: string, keys: (keyof IRow)[]) => IRow[];
interface IApplyCustomFilterParams extends ApplyFilterParams {
    /**The selected items `Map`, but already grouped in a collection of Maps, without the `index_` from the map key. */
    groupedMaps: Map<string, SelectedItemsMap>;
    /**All the selected items as an `Map`, it can be for example
     * @example
     * ```ts
     * Map([['0_User.Title', data], ['1_User.Title', data]])
     * ```
     */
    selectedItems: SelectedItemsMap;
}
export declare type ApplyCustomFilter = (params: IApplyCustomFilterParams) => void;
export {};
