import type { SelectedItemsMap } from "../interfaces/IPanelFilter";
import type { IRow, TColumn } from "../interfaces/IGridView";
import type { Dispatch, SetStateAction } from "react";
import type { IGroup } from "@fluentui/react/lib/DetailsList";
export declare type FilterComponent = 'Dropdown' | 'SearchBox' | 'DateSlider' | 'PeoplePicker';
export declare type KeyAndName = `${string};${string}`;
export declare type ApplyFilter = ({ allRows, setActualRows, setIsFilterPanel }: {
    allRows: IRow[];
    setActualRows: Dispatch<SetStateAction<IRow[]>>;
    setIsFilterPanel: Dispatch<SetStateAction<boolean>>;
}) => (selectedItems: SelectedItemsMap) => void;
interface IGroupingParams {
    emptyGroupLabel: string;
    actualRows: IRow[];
    cols: TColumn<any>[];
    setGroups: Dispatch<SetStateAction<IGroup[]>>;
    setIsGroupPanel: Dispatch<SetStateAction<boolean>>;
}
export declare type ApplyGrouping = ({ actualRows, cols, setGroups, setIsGroupPanel, emptyGroupLabel }: IGroupingParams) => (keyAndName: KeyAndName) => void;
export {};
