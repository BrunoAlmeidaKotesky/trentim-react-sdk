import type { DataListPlugin, ZustandSubscribe } from "@models/interfaces/DataListStore";
import type { DataListStore } from "@models/interfaces/DataListStore";
import type { AddOrRemoveConfig, CurrentFiltering, FilterPluginConfig, FilterPluginStore } from './types';
import { getDeepValue } from '@helpers/index';
import { FilterBox } from './FilterBox';
import { createStore } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export class FilterPlugin<T> implements DataListPlugin<T> {
    public name: string = 'DataListFilterPlugin';
    public version: string = '1.0.0';
    private currentFilter: CurrentFiltering<T> = null;
    constructor(private config?: FilterPluginConfig<T>) { }

    public registerStore = () => createStore<FilterPluginStore<T>>()(
        subscribeWithSelector(
            immer((set, get, {subscribe}) => ({
                queue: [],
                subscribe: subscribe as ZustandSubscribe<FilterPluginStore<T>>,
            }))
        )
    );

    public async initialize(getStore: () => DataListStore<T>) {
        const store = getStore();
        console.log("DataListFilterPlugin initialized");
        store.setHeaderMenuItems(items => {
            return [...items,
            {
                key: 'filter',
                text: this?.config?.filterText || 'Filter By',
                onClick: () => this.#onClickFilterOpt(getStore())
            }
            ];
        });
        return Promise.resolve();
    }

    onInitialized(getStore: () => DataListStore<T>): void {
        getStore().getCustomStore<FilterPluginStore<T>>('DataListFilterPlugin').getState().subscribe(state => state.queue, queue => {
            console.log(queue);
        });
        getStore().subscribe(state => state.clickedColumnKey, clickedColumnKey => {
            if (!clickedColumnKey) return;
            const store = getStore();
            this.#addOrRemoveFilterItem({
                clickedColumnKey,
                getStore,
                headerMenuItems: store.headerMenuItems,
                setHeaderMenuItems: store.setHeaderMenuItems,
            });
        });
    }

    #onClickFilterOpt(store: DataListStore<T>): void {
        const columnKey = store.clickedColumnKey;
        const column = store.columns.find(c => c.key === columnKey);
        if (!column) return;
        const values = [...new Set(
            store.rows
                .filter(r => {
                    const value = getDeepValue(r, columnKey as any);
                    if (value === undefined || value === null) return false;
                    return true;
                })
                .map(r => getDeepValue(r, columnKey as any))
        )];
        const dateRangeSliderConfig = this?.config?.dateRangeSliderConfig?.find(i => i.key === columnKey);
        this.currentFilter = { values, column, show: true, dateRangeSliderConfig };
        store.setUnmountedPlugins('DataListFilterPlugin', false);
    }

    #addOrRemoveFilterItem({
        clickedColumnKey, getStore,
        headerMenuItems, setHeaderMenuItems
    }: AddOrRemoveConfig<T>) {
        if (!clickedColumnKey) return;

        const filterItemIndex = headerMenuItems.findIndex(item => item.key === 'filter');
        let newHeaderMenuItems = [...headerMenuItems];

        if (this?.config?.excludeColumns?.includes(clickedColumnKey) && filterItemIndex !== -1) {
            newHeaderMenuItems = newHeaderMenuItems.filter((_, index) => index !== filterItemIndex);
        } else if (filterItemIndex === -1) {
            newHeaderMenuItems.push({
                key: 'filter',
                text: this?.config?.filterText || 'Filter By',
                onClick: () => this.#onClickFilterOpt(getStore())
            });
        }

        setHeaderMenuItems(() => newHeaderMenuItems);
    }

    public render = (getStore: () => DataListStore<T>) => (
        <FilterBox<T> getStore={getStore} currentFiltering={this.currentFilter} />
    )

    public unmount = (getStore: () => DataListStore<T>) => {
        getStore().setUnmountedPlugins('DataListFilterPlugin', true);
        document.querySelectorAll('.filterPluginContainer')?.forEach(e => e?.remove());
    }
}