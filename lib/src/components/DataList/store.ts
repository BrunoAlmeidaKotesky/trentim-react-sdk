import type { DataListState, DataListStore, BaseDataListTempRowMapKeys } from '@models/interfaces/DataListStore';
import type { IDataListProps } from '@models/interfaces/IDataList';
import { createStore, useStore} from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useContext } from 'react';
import { DataListCtx } from './Context';
import { enableMapSet } from 'immer';
import type { TColumn } from '@models/interfaces/IDataList';
import { sortItems } from './utilities';
import type { ColumnKey } from '@models/types/Common';
import { IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';

enableMapSet();
export const createUseDataListStore = <T>(initialStore: Partial<DataListStore<T>>, props?: IDataListProps<T>) => {
    const DEFAULT_STATE: Omit<DataListState<T>, 'headerMenuItems'> = {
        rows: [],
        columns: [],
        tempRows: new Map<BaseDataListTempRowMapKeys, T[]>([
            ['allRows', []],
            ['filtered', []],
            ['grouped', []],
            ['search', []]
        ]),
        plugins: [],
        groups: [],
        clickedColumnKey: null,
        contextMenu: {
            visible: false,
            x: 0,
            y: 0
        }
    }

    return createStore<DataListStore<T>>()(immer((set, get) => ({
        ...DEFAULT_STATE,
        headerMenuItems: [
            {
                key: 'sortAsc',
                text: props?.columnMenuConfig?.sortAscText || 'Sort Ascending',
                onClick: (e, v) => {
                    console.log(e, v);
                    const column = get().clickedColumnKey;
                    const sortedItems = sortItems(get().rows, column, false);
                    set(state => {
                        (state.rows as T[]) = sortedItems;
                    });
                }
            },
            {
                key: 'sortDesc',
                text: props?.columnMenuConfig?.sortDescText || 'Sort Descending',
                onClick: (e, v) => {
                    console.log(e, v);
                    const column = get().clickedColumnKey;
                    const sortedItems = sortItems(get().rows, column, true);
                    set(state => {
                        (state.rows as T[]) = sortedItems;
                    });
                }
            }
        ],
        ...initialStore as Partial<DataListStore<T>>,
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
                plugin.initialize(() => get(), props);
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
        }),
        setContextMenu: contextMenu => set(state => {
            if (typeof contextMenu === 'function')
                state.contextMenu = contextMenu(state.contextMenu);
            else
                state.contextMenu = contextMenu;
        }),
        onColumnClick: (e: React.MouseEvent<HTMLElement>, column: TColumn<T>): void => {
            e.preventDefault();
            if (!column) return;
            set(state => {
                state.contextMenu = {
                    visible: true,
                    x: e.clientX,
                    y: e.clientY,
                };
                (state.clickedColumnKey as ColumnKey<T>) = column.key;
            });
        },
        setHeaderMenuItems: items => set(state => {
            (state.headerMenuItems as IContextualMenuItem[]) = items(state.headerMenuItems as IContextualMenuItem[]);
        }),
        getStore: () => get()
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