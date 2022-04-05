import type { IRow, TColumn } from '../../models/interfaces/IGridView';
import type { ApplyFilter, SearchItem } from '../../models/types/Common';
import type { IAvailableFilters } from '../../models/interfaces/IPanelFilter';
export declare class GridViewFilter {
    static onApplyFilter: ApplyFilter;
    /**Generate the components of each available column and it's unique values */
    static buildFilters(allRows: IRow[], columns: TColumn<any>[], hiddenFields: string[]): IAvailableFilters[];
    static filterFromColumns: (hiddenKeys: string[], columns: TColumn<any>[]) => TColumn<any>[];
    static onSearchItem: SearchItem;
}
