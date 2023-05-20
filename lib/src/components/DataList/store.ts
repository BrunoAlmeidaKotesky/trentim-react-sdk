import { createStore, StoreApi, useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { subscribeWithSelector } from 'zustand/middleware';
import { useContext } from 'react';
import { DataListCtx } from './Context';
import { enableMapSet } from 'immer';
import { onClickSortItem } from '@helpers/internalUtils';
import type { ColumnKey } from '@models/types/Common';
import type { IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import type { TColumn } from '@models/interfaces/IDataList';
import type { DataListState, DataListStore, ZustandSubscribe } from '@models/interfaces/DataListStore';
import type { IDataListProps } from '@models/interfaces/IDataList';

enableMapSet();
export const createUseDataListStore = <T>(initialStore: Partial<DataListStore<T>>, props?: IDataListProps<T>) => {
    const DEFAULT_STATE: Omit<DataListState<T>, 'headerMenuItems'> = {
        rows: [],
        columns: [],
        tempRows: [],
        plugins: [],
        groups: [],
        clickedColumnKey: null,
        contextMenu: {
            visible: false,
            x: 0,
            y: 0
        },
        unmountedPlugins: new Map(),
        pluginStores: {}
    }

    return createStore<DataListStore<T>>()(subscribeWithSelector(immer(
        (set, get, api) => {
            return ({
                ...DEFAULT_STATE,
                headerMenuItems: [
                    {
                        key: 'sortAsc',
                        text: props?.columnMenuConfig?.sortAscText || 'Sort Ascending',
                        onClick: () => onClickSortItem(false, get, set)
                    },
                    {
                        key: 'sortDesc',
                        text: props?.columnMenuConfig?.sortDescText || 'Sort Descending',
                        onClick: () => onClickSortItem(true, get, set)
                    }
                ],
                ...initialStore as Partial<DataListStore<T>>,
                setRows: rows => set(state => {
                    if (typeof rows === 'function')
                        (state.rows as T[]) = rows(state.rows as T[]);
                    else
                        (state.rows as T[]) = rows;
                }),
                setTempRows: tempRows => set(state => {
                    if (typeof tempRows === 'function')
                        (state.tempRows as T[]) = tempRows(state.tempRows as T[]);
                    else
                        (state.tempRows as T[]) = tempRows;
                }),
                initializePlugin: async (plugin) => {
                    if (typeof plugin?.initialize === 'function') {
                        await plugin.initialize(() => get(), props);
                        if (typeof plugin?.registerStore === 'function') {
                            set(state => {
                                if (!state.pluginStores) {
                                    state.pluginStores = {};
                                }
                                state.pluginStores[plugin.name] = plugin.registerStore();
                            });
                        }
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
                setUnmountedPlugins: (pluginKey, value) => set(state => {
                    const newUnmountedPlugins = new Map(state.unmountedPlugins);
                    newUnmountedPlugins.set(pluginKey, value);
                    state.unmountedPlugins = newUnmountedPlugins;
                }),
                getStore: () => get(),
                getCustomStore: <S>(pluginKey: string): StoreApi<S> | undefined => {
                    const store = get().pluginStores?.[pluginKey] as StoreApi<S> | undefined;
                    if (!store) {
                        console.error('[TRS] - Plugin ${pluginKey} does not have a store registered or it has not been initialized yet.');
                    }
                    return store;
                },
                subscribe: api.subscribe as unknown as ZustandSubscribe<DataListStore<T>>
            })
        }
    )));
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