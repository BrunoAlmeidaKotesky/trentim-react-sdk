import type { DataListState, DataListStore } from '@models/interfaces/DataListStore';
import { createStore, useStore} from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useContext } from 'react';
import { DataListCtx } from './Context';
import { enableMapSet } from 'immer';
import { TColumn } from '@models/interfaces/IDataList';

enableMapSet();
export const createUseDataListStore = <T>(initialProps?: Partial<DataListStore<T>>) => {
    const DEFAULT_STATE: DataListState<T> = {
        rows: [],
        columns: [],
        tempRows: new Map([
            ['allRows', []],
            ['filtered', []],
            ['grouped', []]
        ]),
        plugins: [],
        groups: []
    }

    return createStore<DataListStore<T>>()(immer((set, get) => ({
        ...DEFAULT_STATE,
        ...initialProps as Partial<DataListStore<T>>,
        setRows: rows => set(state => {
            if (typeof rows === 'function')
                (state.rows as T[]) = rows(state.rows as T[]);
            else
                (state.rows as T[]) = rows;
        }),
        setTempRows: (key, rows) => set(state => {
            //@ts-ignore
            state.tempRows.set(key, rows);
        }),
        getTempRows: key => get().tempRows.get(key) ?? [],
        initializePlugin: (plugin) => {
            if (typeof plugin?.initialize === 'function') {
                plugin.initialize(get());
            } else {
                console.error(`
                [TRS] - Plugin ${plugin.name} does not implement the initialize method.\r\n 
                This method is required to initialize the plugin`);
            }
        },
        setColumns: columns => set(state => {
            if (typeof columns === 'function')
                (state.columns as TColumn<T>[]) = columns(state.columns as TColumn<T>[]);
            else
                (state.columns as TColumn<T>[]) = columns;
        }),
        setPlugins: plugins => set(state => {
            if (typeof plugins === 'function')
                state.plugins = plugins(state.plugins);
            else
                state.plugins = plugins;
        })
    })));
}



export function useDataListContext<T, S>(
  selector: (state: DataListStore<T>) => S,
  equalityFn?: (left: T, right: T) => boolean
): S {
  const store = useContext(DataListCtx);
  if (!store) throw new Error('Missing DataListCtx.Provider in the tree')
  //@ts-ignore
  return useStore(store, selector, equalityFn)
}