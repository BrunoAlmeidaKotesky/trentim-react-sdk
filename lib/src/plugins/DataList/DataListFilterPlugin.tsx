import type { ColumnKey } from '@models/types/Common';
import type { DataListPlugin } from "@models/interfaces/DataListStore";
//import type { ColumnKey } from "@models/types/Common";
import type { DataListStore } from "@models/interfaces/DataListStore";
import { getDeepKeys, getDeepValue } from '@helpers/index';
export class FilterPlugin<T> implements DataListPlugin<T> {
    public name: string = 'DataListFilterPlugin';
    public version: string = '1.0.0';
    private currentFilter: Map<ColumnKey<T>, {values: unknown[], order: number, name: string}> = new Map([]);

    public initialize(getStore: () => DataListStore<T>) {
        const store = getStore();
        store.setTempRows('filtered', []);
        console.log("FilterPlugin initialized");
        store.setHeaderMenuItems(items => {
            return [...items, 
                {
                    key: 'filter',
                    text: 'Filter',
                    onClick: () => {
                        const store = getStore();
                        const columnKey = store.clickedColumnKey;
                        const column = store.columns.find(c => c.key === columnKey);
                        if(!column) return;
                        const order = this.currentFilter.has(columnKey) ? this.currentFilter.get(columnKey)!.order : 0;
                        const valuesToShow = store.rows.filter(r => {
                            const value = getDeepValue(r, columnKey as any);
                            if(value === undefined || value === null) return false;
                            return true;
                        }).map(r => 
                            getDeepValue(r, columnKey  as any)
                        );
                        this.currentFilter.set(columnKey, {values: valuesToShow, order, name: column.name});
                        console.log(this.currentFilter);
                    }
                }
            ];
        });
    }

}