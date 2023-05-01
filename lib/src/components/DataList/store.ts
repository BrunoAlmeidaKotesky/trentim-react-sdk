import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { BaseType, IRow, TColumn } from '@models/interfaces/IDataList';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { DataListPlugin, IDataListPlugin } from '../../plugins/DataList/DataListPlugin';

export type CallbackSet<T> = (data: T) => T;
export type ValueOrFunc<T> = T | CallbackSet<T>;
export interface DataListState<T extends BaseType> {
    /**The initial rows that were passed to the DataList component */
    rows: IRow<T>[];
    /**Use this state to store the rows information depending on your needs */
    tempRows: Map<string, IRow<T>[]>;
    plugins: IDataListPlugin<T>[];
    columns: TColumn<T>[];
    groups?: IGroup[];
}

export interface DataListActions<T extends BaseType> {
    /**Set the rows that will be displayed in the DataList */
    setRows: (data: ValueOrFunc<IRow<T>[]>) => void;
    setColumns: (data: ValueOrFunc<TColumn<T>[]>) => void;
    setTempRows: (key: string, rows: IRow<T>[]) => void;
    getTempRows: (key: string) => IRow<T>[];
    addPlugin: (plugin: IDataListPlugin<T>) => void;
    initializePlugin: (plugin: IDataListPlugin<T>) => void;
    setPlugins: (plugins: ValueOrFunc<IDataListPlugin[]>) => void;
}

export type DataListStore<T extends BaseType = BaseType> = DataListState<T> & DataListActions<T>;

export const useDataListStore = create<DataListStore>()(immer((set, get) => ({
    rows: [],
    tempRows: new Map(),
    columns: [],
    groups: [],
    plugins: [],
    setRows: rows => set(state => {
        if (typeof rows === 'function')
            state.rows = rows(state.rows);
        else
            state.rows = rows;
    }),
    setTempRows: (key, rows) => set(state => {
        state.tempRows.set(key, rows);
    }),
    getTempRows: key => get().tempRows.get(key) ?? [],
    addPlugin: (plugin) => {
        if (plugin instanceof DataListPlugin) {
            set((state) => ({ plugins: [...state.plugins, plugin] }));
            get().initializePlugin(plugin);
        } else {
            console.error('[TRS] - O objeto fornecido não é uma instância da classe BasicPlugin.');
        }
    },
    initializePlugin: (plugin) => {
        if (typeof plugin.initialize === 'function') {
            plugin.initialize(get());
        } else {
            console.error(`[TRS] - Plugin ${plugin.name} não implementa a interface correta.`);
        }
    },
    setColumns: columns => set(state => {
        if (typeof columns === 'function')
            state.columns = columns(state.columns);
        else
            state.columns = columns;
    }),
    setPlugins: plugins => set(state => {
        if (typeof plugins === 'function')
            state.plugins = plugins(state.plugins);
        else
            state.plugins = plugins;
    })
})));