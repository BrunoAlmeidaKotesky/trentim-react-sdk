import type { ColumnKey } from '@models/types/Common';
import type { IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { IDataListProps, TColumn } from '@models/interfaces/IDataList';
import type { ReactNode } from 'react';
import type { Paths, SetValueByPath, TypeFrom } from '@models/types/UtilityTypes';

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
    onUnmount?: (getStore: () => DataListStore<T>) => void;
}

export type ContextMenuState = {
    x: number;
    y: number;
    visible: boolean;
}
export interface DataListState<T> {
    /**The initial rows that were passed to the DataList component */
    rows: T[];
    /**Use this state to store the rows information depending on your needs */
    tempRows: T[];
    headerMenuItems: IContextualMenuItem[];
    plugins: DataListPlugin<T>[];
    columns: TColumn<T>[];
    groups?: IGroup[];
    clickedColumnKey: ColumnKey<T>;
    contextMenu: ContextMenuState;
    /**You can access/read this value directly, **but** it's preferred to use the `getPluginDataMap`, since it has way better type safety.
     * 
     * Which could not be done with this property.
     */
    pluginsDataMap: Map<string, Record<string, unknown>>;
    unmountedPlugins: Map<string, boolean>;
}

export interface DataListActions<T> {
    /**Set the rows that will be displayed in the DataList */
    setRows: (data: ValueOrFunc<T[]>) => void;
    setColumns: (data: ValueOrFunc<TColumn<T>[]>) => void;
    setHeaderMenuItems: (data: CallbackSet<IContextualMenuItem[]>) => void;
    setTempRows: (data: ValueOrFunc<T[]>) => void;
    initializePlugin: (plugin: DataListPlugin<T>, props?: IDataListProps<T>) => void;
    setPlugins: (plugins: ValueOrFunc<DataListPlugin<T>[]>) => void;
    setContextMenu: (data: ValueOrFunc<ContextMenuState>) => void;
    /**
     * An action that sets a value in the plugin data map.
     * @typeParam R - A record type, defaulting to `Record<string, unknown>`. This is the shape of the data that will be stored in the map.
     * @param pluginKey - The unique key identifying the plugin. This is used as the key in the outer map.
     * @returns A function that takes a key and a value. The key is a string that identifies the specific piece of data within the plugin's map. The value is the data to be stored.
     * 
     * This action will first retrieve the map associated with the plugin using `pluginKey`. If such a map exists, it will update the value at the given key with the given value.
     * 
     * Note: This is a curried function, meaning that it returns a function when first called with `pluginKey`. This returned function is then called with the key and value.
     * 
     * @example
     * store.setPluginDataMap<MyRecord>('MyPlugin')('myKey', myValue);
     */
    setPluginDataMapValue: <R extends Record<string, unknown> = Record<string, unknown>>(pluginKey: string) => SetValueByPath<void, R>;
    /**
     * An action that retrieves a value from the plugin data map.
     * @typeParam T - A record type, defaulting to `Record<string, unknown>`. This is the shape of the data that will be retrieved from the map.
     * @param pluginKey - The unique key identifying the plugin. This is used as the key in the outer map.
     * @returns A function that takes a key. The key is a string that identifies the specific piece of data within the plugin's map.
     * 
     * This action will first retrieve the map associated with the plugin using `pluginKey`. If such a map exists, it will return the value at the given key.
     * 
     * Note: This is a curried function, meaning that it returns a function when first called with `pluginKey`. This returned function is then called with the key to retrieve the value.
     * 
     * @example
     * const myValue = store.getPluginDataMapValue<MyRecord>('MyPlugin')('myKey');
     */
    getPluginDataMapValue: <T extends Record<string, unknown>>(pluginKey: string) => (k: Paths<T, 4>) => TypeFrom<T>;
    onColumnClick: (ev: React.MouseEvent<HTMLElement>, column: TColumn<T>) => void;
    setUnmountedPlugins: (pluginKey: string, value: boolean) => void;
    getStore: () => DataListStore<T>;
    subscribe: ZustandSubscribe<DataListStore<T>>;
}

export type DataListStore<T> = DataListState<T> & DataListActions<T>;

export type ZustandSubscribe<T> = {
    <U>(selector: (state: T) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
        equalityFn?: (a: U, b: U) => boolean;
        fireImmediately?: boolean;
    }): () => void;
};