import { IAvailableFilters, SelectedItemsMap } from "../models/interfaces/IPanelFilter";
import { IRow, TColumn } from "../models/interfaces/IGridView";
/**Internal class to be used when using map data operations on the GridView component context as a whole. */
export declare class GridViewMapper {
    /**
     * Creates a new map collection with the first level keys being the real keys, and the values being the maps with selected maps (with key and values)
     * @example
     * ```ts
     * const selectedItemsMap = new Map([['0_User.Title', data], ['1_User.Title', data]]);
     * const groupedMap = GridViewMapper.groupMaps(selectedItemsMap);
     * //It'll be: key: 'User.Title', value: [Map([['0_User.Title', data], ['1_User.Title', data]])]
     * ```
     **/
    static groupMaps(selectedItems: SelectedItemsMap): Map<string, SelectedItemsMap>;
    static filterFromColumns: (hiddenKeys: string[], columns: TColumn<any>[]) => TColumn<any>[];
    /**Generate the components of each available column and it's unique values */
    static buildFilters(allRows: IRow[], columns: TColumn<any>[], hiddenFields: string[]): IAvailableFilters[];
}
