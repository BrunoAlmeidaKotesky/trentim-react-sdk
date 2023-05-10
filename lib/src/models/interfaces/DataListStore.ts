import type { ColumnKey } from '@models/types/Common';
import type { IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { IDataListProps, TColumn } from '@models/interfaces/IDataList';
import type { ReactNode } from 'react';

export type BaseDataListTempRowMapKeys = 'filtered' | 'grouped' | 'allRows' | 'search';
export type CallbackSet<T> = (data: T) => T;
export type ValueOrFunc<T> = T | CallbackSet<T>;

/** Use this interface to implement the actual plugin to be instantiated and passed to the DataList's plugin array */
export interface DataListPlugin<T> {
    /**The name  identifier of the plugin */
    name: string;
    /**You can use this property to specify the version of the plugin */
    version?: string;
    /** Mandatory method to implement, which does something (whatever you want) when the plugin initializes. 
     * 
     * `initialProps` is the props passed to the DataList component when the plugin was first initialized,
     * it does not change when the DataList props change.
    */
    initialize(getStore: () => DataListStore<T>, initialProps?: IDataListProps<T>): void;
    /** Method that renders something within the DataList plugins area div 
     * 
     * `initialProps` is the props passed to the DataList component when the plugin was first initialized,
     * **it does not guarantee** that the props will be the same when the DataList props change.
    */
    render?: (getStore: () => DataListStore<T>, initialProps?: IDataListProps<T>) => ReactNode;
}

export type ContextMenuState = {
    x: number;
    y: number;
    visible: boolean;
}
export interface DataListState<T, S extends string = string> {
    /**The initial rows that were passed to the DataList component */
    rows: T[];
    /**Use this state to store the rows information depending on your needs */
    tempRows: Map<BaseDataListTempRowMapKeys | S, T[]>;
    headerMenuItems: IContextualMenuItem[];
    plugins: DataListPlugin<T>[];
    columns: TColumn<T>[];
    groups?: IGroup[];
    clickedColumnKey: ColumnKey<T>;
    contextMenu: ContextMenuState;
}

export interface DataListActions<T> {
    /**Set the rows that will be displayed in the DataList */
    setRows: (data: ValueOrFunc<T[]>) => void;
    setColumns: (data: ValueOrFunc<TColumn<T>[]>) => void;
    setHeaderMenuItems: (data: CallbackSet<IContextualMenuItem[]>) => void;
    setTempRows: <S extends BaseDataListTempRowMapKeys>(key: S, rows: T[]) => void;
    getTempRows: <S extends BaseDataListTempRowMapKeys>(key: S) => T[];
    initializePlugin: (plugin: DataListPlugin<T>, props?: IDataListProps<T>) => void;
    setPlugins: (plugins: ValueOrFunc<DataListPlugin<T>[]>) => void;
    setContextMenu: (data: ValueOrFunc<ContextMenuState>) => void;
    onColumnClick: (ev: React.MouseEvent<HTMLElement>, column: TColumn<T>) => void;
    getStore: () => DataListStore<T>;
    subscribe: ZustandSubscribe<DataListStore<T>>;
}

export type DataListStore<T> = DataListState<T> & DataListActions<T>;

export type ZustandSubscribe<T> = {
    <U>(selector: (state: DataListStore<T>) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
        equalityFn?: (a: U, b: U) => boolean;
        fireImmediately?: boolean;
    }): () => void;
};