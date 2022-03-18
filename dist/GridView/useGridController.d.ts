import type { IGridListProps, IListOptionsProps, IRow } from '../models/interfaces/IGridView';
import type { IPanelFilterProps } from '../models/interfaces/IPanelFilter';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
export declare function useGridController(props: IGridListProps<any>): {
    state: {
        actualRows: IRow[];
        cols: import("../models/interfaces/IGridView").TColumn<any>[];
        groups: IGroup[];
        panelConfig: IPanelFilterProps;
        isFilterPanelOpen: boolean;
        listConfig: IListOptionsProps;
    };
    handlers: {
        onRowClick: (item: IRow) => void;
    };
};
