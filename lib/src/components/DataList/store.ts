import type { DataListState, DataListStore } from '@models/interfaces/DataListStore';
import { createStore, useStore} from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { DataListPlugin } from '@plugins/DataList/DataListPlugin';
import type { BaseType } from '@models/interfaces/IDataList';
import { useContext } from 'react';
import { DataListCtx } from './Context';
import { enableMapSet } from 'immer';

enableMapSet();
export const createUseDataListStore = <T>(initialProps?: Partial<DataListStore>) => {
    const DEFAULT_STATE: DataListState<BaseType> = {
        rows: [],
        columns: [],
        tempRows: new Map(),
        plugins: [],
        groups: []
    }

    return createStore<DataListStore>()(immer((set, get) => ({
        ...DEFAULT_STATE,
        ...initialProps,
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
                console.error('[TRS] - The given plugin is not an instance of DataListPlugin.');
            }
        },
        initializePlugin: (plugin) => {
            if (typeof plugin.initialize === 'function') {
                plugin.initialize(get());
            } else {
                console.error(`
                [TRS] - Plugin ${plugin.name} does not implement the initialize method.\r\n 
                This method is required to initialize the plugin`);
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
}



export function useDataListContext<T>(
  selector: (state: DataListStore<BaseType>) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(DataListCtx);
  if (!store) throw new Error('Missing DataListCtx.Provider in the tree')
  //@ts-ignore
  return useStore(store, selector, equalityFn)
}