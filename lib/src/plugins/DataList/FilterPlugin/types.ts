import type { TColumn } from '@models/interfaces/IDataList';
import type { DataListStore, ZustandSubscribe } from "@models/interfaces/DataListStore";
import type { ColumnKey } from '@models/types/Common';
import type { DateRangeSliderProps } from '@components/DateRangeSlider';

type FilterPluginDateSliderProps = Omit<
    DateRangeSliderProps, 
    'onSliderChange' | 'onDateValueChange'
>

type FilterAreaSliderProp<T> = {
    key: ColumnKey<T>;
    props: FilterPluginDateSliderProps;
};

export type FilterPluginConfig<T> = {
    /**Text to display when clicking on the column header menu */
    filterText?: string;
    /**Fields that won't be filtered */
    excludeColumns?: ColumnKey<T>[];
    dateRangeSliderConfig?: FilterAreaSliderProp<T>[];
}

export interface CurrentFiltering<T> {
    values: unknown[];
    column: TColumn<T>;
    show: boolean;
    dateRangeSliderConfig?: FilterAreaSliderProp<T>;
}

export interface FilterAreaProps<T> {
    getStore: () => DataListStore<T>;
    currentFiltering: CurrentFiltering<T>;
}

export type AddOrRemoveConfig<T> = Pick<
    DataListStore<T>,
    'clickedColumnKey' | 'headerMenuItems' | 'getStore' | 'setHeaderMenuItems'
>

export type FilterQueueValue<T> = {
    key: ColumnKey<T>;
    values: unknown[];
}

export type FilterPluginState<T> = {
    queue: FilterQueueValue<T>[];
    subscribe: ZustandSubscribe<FilterPluginStore<T>>;
}

export type FilterPluginStore<T> = FilterPluginState<T>;