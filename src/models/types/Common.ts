import type { SelectedItemsMap } from "../interfaces/IPanelFilter";
import type { IRow, TColumn } from "../interfaces/IGridView";
import type { Dispatch, SetStateAction } from "react";
import type { IGroup } from "@fluentui/react/lib/DetailsList";
import type { Paths } from "../types/UtilityTypes";
import type { ReactNode } from "react";
import type { IButtonProps } from "@fluentui/react/lib/Button";

export type FilterComponent = 'Dropdown' | 'SearchBox' | 'DateSlider' | 'PeoplePicker';
export type KeyAndName = `${string};${string}`;
export type CancelActivation = 'cancel' | 'dismiss' | 'not-selected';

type ApplyFilterParams<T> = { allRows: IRow<T>[]; setActualRows: Dispatch<SetStateAction<IRow[]>>; setIsFilterPanel: Dispatch<SetStateAction<boolean>>; };
type OnItemsFiltered<T> = (filtered?: IRow<T>[]) => void;

type CustomFilterParams<T> = { applyCustomFilter?: ApplyCustomFilter<T>, onItemsFiltered?: OnItemsFiltered<T>, onFilterPanelCancel: (activatedBy: CancelActivation) => void };
export type ApplyFilter<T> = (params: ApplyFilterParams<T> & CustomFilterParams<T>) => (selectedItems: SelectedItemsMap) => void;

interface IGroupingParams {
    emptyGroupLabel: string;
    actualRows: IRow[];
    cols: TColumn<any>[];
    setGroups: Dispatch<SetStateAction<IGroup[]>>;
    setIsGroupPanel: Dispatch<SetStateAction<boolean>>;
    onItemsGrouped: (opt?: { selectedKey: string, setGroups: Dispatch<SetStateAction<IGroup[]>> }) => void;
    onGroupPanelCancel: (activatedBy: CancelActivation) => void;
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

/**This interface is used to represent objects that can be used to convert ISO string formats to a locale string from a date. */
export interface IDateConversionOptions {
    /**If se to `true`, it will automatically convert the string ISO dates to your locale date. */
    shouldConvertToLocaleString?: boolean;
    locales?: string | string[];
    /**Use this if you want to overwrite the behavior of the default `Intl.DateTimeFormatOptions` applied. */
    formatOptions?: Intl.DateTimeFormatOptions;
}

export type IPanelChildrenPosition = { footer?: ReactNode, top: ReactNode };

export type DeepKey4<T> = Paths<T, 4>;
export type ColumnKey<T> = keyof T | DeepKey4<T>;

export type ButtonTypes = 'PrimaryButton' | 'DefaultButton' | 'CustomButton';
export interface ICustomButtonConfig {
    /**How to render the button. 
     * 
     * If you want to use `CustomButton`, you will need to provide the `onRenderCustomButton` prop.
    */
    renderAs?: ButtonTypes;
    /**
     * Use this if you are using `renderAs` to `CustomButton`.
     */
    onRenderCustomButton?: (props?: IButtonProps) => ReactNode;
}