import * as React from 'react';
import type { IGridListProps, IRow } from '../models/interfaces/IGridView';
import type { IPanelFilterProps } from '../models/interfaces/IPanelFilter';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
export declare function useGridController(props: IGridListProps<any>): {
    state: {
        actualRows: IRow[];
        cols: import("../models/interfaces/IGridView").TColumn<any>[];
        groups: IGroup[];
        panelConfig: IPanelFilterProps;
        allRows: IRow[];
        isFilterPanelOpen: boolean;
    };
    handlers: {
        onRowClick: (item: IRow) => void;
        setActualRows: React.Dispatch<React.SetStateAction<IRow[]>>;
        setIsFilterPanel: React.Dispatch<React.SetStateAction<boolean>>;
    };
};
