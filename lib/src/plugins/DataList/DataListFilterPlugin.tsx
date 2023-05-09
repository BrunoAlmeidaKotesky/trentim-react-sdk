import type { ColumnKey } from '@models/types/Common';
import type { DataListPlugin } from "@models/interfaces/DataListStore";
//import type { ColumnKey } from "@models/types/Common";
import type { DataListStore } from "@models/interfaces/DataListStore";

export class DataListFilterPlugin<T> implements DataListPlugin<T> {
    public name: string = 'DataListFilterPlugin';
    public version: string = '1.0.0';
    private currentFilter: Map<ColumnKey<T>, {values: unknown[], order: number, name: string}> = new Map([]);

    public initialize(store: DataListStore<T>) {
        store.setTempRows('filtered', []);
        console.log("DataListFilterPlugin initialized");
        store.columns.map(col => {
            return {
                ...col,
                onColumnContextMenu: ()
            }
        })
    }

}