import type { TColumn } from '@models/interfaces/IDataList';
import type { DataListStore, Updater, ZustandSubscribe } from "@models/interfaces/DataListStore";
import type { ColumnKey } from '@models/types/Common';
import type { DateDropdownValues, DateRangeDropdownProps } from '@components/DateRangeDropdown';
import type { IComboBoxOption } from '@fluentui/react/lib/ComboBox';

type FilterPluginDateSliderProps = Omit<
    DateRangeDropdownProps, 
    'onSliderChange' | 'onDateValueChange'| 'dateRange' | 'sliderValue'
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
    onFilterCleared?: () => void;
}

export interface CurrentFiltering<T> {
    values: unknown[];
    column: TColumn<T>;
    show: boolean;
    dateRangeSliderConfig?: FilterAreaSliderProp<T>;
}

export interface FilterAreaProps<T> {
    getStore: () => DataListStore<T>;
    onFilterCleared?: (allRows: T[]) => void;
}

export type AddOrRemoveConfig<T> = Pick<
    DataListStore<T>,
    'clickedColumnKey' | 'headerMenuItems' | 'getStore' | 'setHeaderMenuItems'
>

export type FilterQueueValue<M = any> = {
    key: ColumnKey<unknown>;
    values: unknown[];
    metadata?: M;
}

export type KeyWrapper<T> = {
    key: string | number | symbol;
    value: T;
}[];

export type WrappedFilterState = {
    selectedKeys: KeyWrapper<string[]>;
    dropdownValue: KeyWrapper<DateDropdownValues>;
    dateRange: KeyWrapper<{ start: Date | null, end: Date | null }>;
    options: KeyWrapper<IComboBoxOption[]>;
}

export interface FilterPluginState<T> extends WrappedFilterState {
    queue: FilterQueueValue<T>[];
    currentFiltering: CurrentFiltering<T>;
    applyFilter: boolean;
    showBreadcrumb: boolean;
}

export type FilterPluginActions = {
    subscribe: ZustandSubscribe<FilterPluginStore<any>>;
    setWrappedFilterStoreValue: <
        K extends keyof WrappedFilterState, 
        V extends WrappedFilterState[K][0]["value"]
    >(
        clickedColumnKey: ColumnKey<any>,
        key: K, 
        value: Updater<V>
    ) => void
    getWrappedFilterStoreValue: <
        K extends keyof WrappedFilterState
    >(  
        clickedColumnKey: ColumnKey<any>,
        key: K, 
    ) => WrappedFilterState[K][0]["value"]
    setQueue: <M = any>(queue: Updater<FilterQueueValue<M>[]>) => void;
    setApplyFilter: (value: boolean) => void;
    setShowBreadcrumb: (value: boolean) => void;
    setCurrentFiltering: (value: Updater<CurrentFiltering<any>>) => void;
    resetState: () => void;
}

export type FilterPluginStore<T> = FilterPluginState<T> & FilterPluginActions;

export type FilterRowConfig<T> = {
    filter: FilterQueueValue<{ type: 'date' }>, 
    row: T, 
    column: TColumn<any>
}