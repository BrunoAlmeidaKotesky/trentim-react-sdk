import type { IGroup } from "@fluentui/react/lib/GroupedList";
import type { IRow, TColumn } from "../interfaces/IGridView";
import type { Dispatch, SetStateAction } from "react";
import type { KeyAndName, CancelActivation } from '../types/Common';
import type { GroupOrder } from '../../helpers/enums';

export interface IGroupsItems {
    updatedItemsOrder: IRow[];
    groups: IGroup[];
}

export interface IGrouping {
    name: KeyAndName;
    order: GroupOrder;
}

export interface IApplyGroupingParams {
    emptyGroupLabel: string;
    setGroups: Dispatch<SetStateAction<IGroup[]>>;
    setIsGrouping: Dispatch<SetStateAction<{active: boolean, key: string}>>;
    setActualRows: Dispatch<SetStateAction<IRow[]>>;
    setIsGroupPanel: Dispatch<SetStateAction<boolean>>;
    onItemsGrouped: (opt?: { selectedKey: string, setGroups: Dispatch<SetStateAction<IGroup[]>> }) => void;
    onGroupPanelCancel: (activatedBy: CancelActivation) => void;
    items: IRow[];
    groupByFields: IGrouping[];
    level: number;
    startIndex: number;
    cols: TColumn<IRow>[];
}

export interface IGroupingParams extends Pick<IApplyGroupingParams, 'emptyGroupLabel' | 'groupByFields' | 'items' | 'level'| 'startIndex' | 'cols'> {}

export type BuildGroups = (params: IGroupingParams) => IGroupsItems;
export type ApplyGrouping = (params: IApplyGroupingParams) => void;