import type { DataListPlugin } from "@models/interfaces/DataListStore";
import type { DataListStore } from "@models/interfaces/DataListStore";
import type { AddOrRemoveConfig, FilterPluginConfig, FilterQueueValue, FilterRowConfig } from './types';
import { getDeepValue } from '@helpers/index';
import { FilterBox } from './FilterBox';
import { IComboBoxOption } from "@fluentui/react/lib/ComboBox";
import { convertItemValue } from '@helpers/internalUtils';
import { filterPluginStore } from './store';
import type { TColumn } from "@models/index";
import type { DateSliderValues } from "@components/DateRangeSlider";

export class FilterPlugin<T> implements DataListPlugin<T> {
    public name: string = 'DataListFilterPlugin';
    public version: string = '1.0.0';
    constructor(private config?: FilterPluginConfig<T>) { }

    public async initialize(getStore: () => DataListStore<T>) {
        const store = getStore();
        console.log("DataListFilterPlugin initialized");
        store.setHeaderMenuItems(items => {
            return [...items,
            {
                key: 'filter',
                text: this?.config?.filterText || 'Filter By',
                onClick: () => this.#onClickFilterOpt(getStore)
            }
            ];
        });
        getStore().registerPluginStore('DataListFilterPlugin', filterPluginStore);
        return Promise.resolve();
    }

    public onInitialized(getStore: () => DataListStore<T>): void {
        filterPluginStore.subscribe(state => state.queue, queue => {
            this.applyFilter(queue, getStore);
        });
        filterPluginStore.subscribe(state => state.currentFiltering, currentFiltering => {
            const options = currentFiltering?.values?.map<IComboBoxOption>(v => {
                if (currentFiltering?.column?.transformations?.renderAs !== 'date') {
                    const text = convertItemValue(currentFiltering?.column?.transformations, v);
                    return {
                        key: `${getStore().clickedColumnKey} - ${text}`,
                        text,
                        useAriaLabelAsText: true,
                        ariaLabel: text,
                        data: getStore().clickedColumnKey
                    };
                }
            }) || [];
            if (options.length > 0)
                filterPluginStore.getState().setWrappedFilterStoreValue(getStore().clickedColumnKey, 'options', options);
        });
        getStore()
            .subscribe(state => state.clickedColumnKey, clickedColumnKey => {
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

    #onClickFilterOpt(getStore: () => DataListStore<T>): void {
        const store = getStore();
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
        filterPluginStore.setState({
            currentFiltering: {
                values,
                column,
                show: true,
                dateRangeSliderConfig
            }
        });
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
                onClick: () => this.#onClickFilterOpt(getStore)
            });
        }

        setHeaderMenuItems(() => newHeaderMenuItems);
    }

    public render = (getStore: () => DataListStore<T>) => (<FilterBox<T> getStore={getStore} />)

    public unmount = (getStore: () => DataListStore<T>) => {
        getStore().setUnmountedPlugins('DataListFilterPlugin', true);
        document.querySelectorAll('.filterPluginContainer')?.forEach(e => e?.remove());
    }

    public applyFilter(queue: FilterQueueValue<{ type: 'slider' | 'range', sliderValue?: DateSliderValues }>[], getStore: () => DataListStore<T>) {
        let rows = [...getStore().rows];

        if (queue.length === 0) {
            rows = [...getStore().allRows];
            getStore().setRows(rows);
            return;
        }

        const columns = getStore().columns;

        for (const filter of queue) {
            const column: TColumn<any> = columns.find(column => column.key === filter.key);

            if (!column) continue;

            if (filter?.metadata?.type === 'slider') {
                const preDate = filter?.values?.[0] as string;
                const sliderValue = new Date(preDate);
                rows = rows.filter(row => {
                    //@ts-ignore
                    const currentValue = new Date(getDeepValue(row, column.key));
                    // Filtro para valores depois do valor do slider
                    return currentValue >= sliderValue;
                });
            } else if (filter?.metadata?.type === 'range') {
                const rangeStart = new Date(filter.values[0] as string);
                const rangeEnd = new Date(filter.values[1] as string);
                rows = rows.filter(row => {
                    //@ts-ignore
                    const currentValue = new Date(getDeepValue(row, column.key));
                    // Filtro para valores dentro do range
                    return currentValue >= rangeStart && currentValue <= rangeEnd;
                });
            } else {
                rows = rows.filter(row => this.filerRow({ filter, row, column }, getStore));
            }
        }
        getStore().setRows(rows);
    }

    private filerRow({ column, filter, row }: FilterRowConfig<any>, getStore: () => DataListStore<T>): unknown {
        let filterValues = filter.values;
        const transformations = column?.transformations;
        if (transformations?.renderAs)
            filterValues = this.findOriginalValue(getStore, filter);
        //@ts-ignore
        return filterValues.includes(getDeepValue(row, column.key));
    }

    private findOriginalValue(getStore: () => DataListStore<T>, filter: FilterQueueValue<any>): unknown[] {
        const originalRowValues = getStore().originalRowValues;
        const foundItem = originalRowValues?.find(originalRow => originalRow?.key === filter.key);
        const originalValues = foundItem?.values
            ?.filter(value => filter?.values
                ?.includes(value?.transformedValue))
            ?.map(v => v?.oldValue);
        return originalValues;
    }
}