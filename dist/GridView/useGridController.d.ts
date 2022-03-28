import * as React from 'react';
import type { IGridListProps, IRow } from '../models/interfaces/IGridView';
import type { IListOptionsProps } from '../models/interfaces/IListOptions';
import type { IPanelFilterProps } from '../models/interfaces/IPanelFilter';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
import { IGroupPanel } from '../models/interfaces/IGroupPanel';
export declare function useGridController(props: IGridListProps<any>): {
    state: {
        actualRows: IRow[];
        cols: import("../models/interfaces/IGridView").TColumn<any>[];
        groups: IGroup[];
        filterPanelConfig: IPanelFilterProps;
        groupPanelConfig: IGroupPanel;
        isFilterPanelOpen: boolean;
        isGroupPanelOpen: boolean;
        listConfig: IListOptionsProps;
        shouldRenderCard: boolean;
    };
    handlers: {
        onRowClick: (item: IRow) => void;
    };
    JSX: {
        CardsList: React.ReactNode[];
    };
};
