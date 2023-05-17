import type { TColumn } from '@models/interfaces/IDataList';
import type { DataListStore } from "@models/interfaces/DataListStore";
import type { ColumnKey } from '@models/types/Common';

export type FilterPluginConfig<T> = {
    /**Text to display when clicking on the column header menu */
    filterText?: string;
    /**Fields that won't be filtered */
    excludeColumns?: ColumnKey<T>[];
    /**@default `white` */
};
export type FilterMap<T> = Map<ColumnKey<T>, {values: unknown[], order: number, column: TColumn<T>;}>;
export type FilterAreaProps<T> = {
    getStore: () => DataListStore<T>, 
    filterMap: FilterMap<T>,
}

export type AddOrRemoveConfig<T> = Pick<
    DataListStore<T>, 
    'clickedColumnKey' | 'headerMenuItems' | 'getStore' | 'setHeaderMenuItems'
>;