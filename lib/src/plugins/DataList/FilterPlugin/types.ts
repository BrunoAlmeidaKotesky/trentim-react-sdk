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
export type CurrentFiltering<T> = { values: unknown[], column: TColumn<T>; }
export type FilterAreaProps<T> = {
    getStore: () => DataListStore<T>, 
    currentFiltering: CurrentFiltering<T>,
}

export type AddOrRemoveConfig<T> = Pick<
    DataListStore<T>, 
    'clickedColumnKey' | 'headerMenuItems' | 'getStore' | 'setHeaderMenuItems'
>;

export type FilterQueueValue<T> = {
    key: ColumnKey<T>;
    values: unknown[];
};
export type FilterQueue<T> = {
    queue: FilterQueueValue<T>[];
}