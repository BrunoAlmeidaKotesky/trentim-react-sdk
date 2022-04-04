import * as React from 'react';
import type { IGridListProps, IRow, TColumn } from '../../models/interfaces/IGridView';
import type { IListOptionsProps } from '../../models/interfaces/IListOptions';
import type { IPanelFilterProps } from '../../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../../models/interfaces/IGroupPanel';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
export declare function useGridController(props: IGridListProps<any>): {
    state: {
        actualRows: IRow[];
        cols: TColumn<any>[];
        filterPanelConfig: IPanelFilterProps;
        groupPanelConfig: IGroupPanel;
        isFilterPanelOpen: boolean;
        isGroupPanelOpen: boolean;
        listConfig: IListOptionsProps;
        shouldRenderCard: boolean;
        groups: IGroup[];
    };
    handlers: {
        onRowClick: (item: IRow) => void;
    };
    JSX: {
        CardsList: React.ReactNode[];
    };
};
