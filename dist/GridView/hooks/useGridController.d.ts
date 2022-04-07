import * as React from 'react';
import type { IGridListProps, IRow, TColumn, BaseType } from '../../models/interfaces/IGridView';
import type { IListOptionsProps } from '../../models/interfaces/IListOptions';
import type { IPanelFilterProps } from '../../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../../models/interfaces/IGroupPanel';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
/** TO-DO: Use `useReducer` with context for better code splitting. */
export declare function useGridController<T extends BaseType>(props: IGridListProps<T>): {
    state: {
        actualRows: IRow<T>[];
        visibleCols: TColumn<T>[];
        filterPanelConfig: IPanelFilterProps;
        groupPanelConfig: IGroupPanel;
        isFilterPanelOpen: boolean;
        isGroupPanelOpen: boolean;
        listConfig: IListOptionsProps;
        shouldRenderCard: boolean;
        groups: IGroup[];
    };
    handlers: {
        onItemClick: (item: IRow<T>) => void;
    };
    JSX: {
        CardsList: React.ReactNode[];
    };
};
