import type { TColumn } from '@models/interfaces/IDataList';
import type { DataListStore, ZustandSubscribe } from "@models/interfaces/DataListStore";
import type { ColumnKey } from '@models/types/Common';
import type { DateRangeSliderProps, DateSliderValues } from '@components/DateRangeSlider';
import type { IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import type { FilterStateManager } from './FilterStateManager';

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
    stateManager: FilterStateManager<T>;
}

export type AddOrRemoveConfig<T> = Pick<
    DataListStore<T>,
    'clickedColumnKey' | 'headerMenuItems' | 'getStore' | 'setHeaderMenuItems'
>

export type FilterQueueValue<T, M = any> = {
    key: ColumnKey<T>;
    values: unknown[];
    metadata?: M;
}

export type KeyWrapper<T> = {
    key: string | number | symbol;
    value: T;
}[];

export type WrappedFilterState = {
    selectedKeys: KeyWrapper<string[]>;
    sliderValue: KeyWrapper<DateSliderValues>;
    dateRange: KeyWrapper<{ start: Date | null, end: Date | null }>;
    options: KeyWrapper<IComboBoxOption[]>;
}
export interface FilterPluginState<T> extends WrappedFilterState {
    queue: FilterQueueValue<T>[];
    currentFiltering: CurrentFiltering<T>;
}

export type FilterPluginActions<T> = {
    subscribe: ZustandSubscribe<FilterPluginStore<T>>;
}

export type FilterPluginStore<T> = FilterPluginState<T> & FilterPluginActions<T>;