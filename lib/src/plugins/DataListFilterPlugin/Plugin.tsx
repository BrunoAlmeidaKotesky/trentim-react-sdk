import type { DataListPlugin } from "@models/interfaces/DataListStore";
import type { DataListStore } from "@models/interfaces/DataListStore";
import type { AddOrRemoveConfig, FilterPluginConfig } from './types';
import type { IComboBoxOption } from "@fluentui/react/lib/ComboBox";
import { convertItemValue } from '@helpers/internalUtils';
import { FilteringLogic } from './FilteringLogic';
import { filterPluginStore } from './filterStore';
import { getDeepValue } from '@helpers/index';
import { FilterWrapper } from './FilterComponents';

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
            }];
        });
        getStore().registerPluginStore('DataListFilterPlugin', filterPluginStore);
        return Promise.resolve();
    }

    public onInitialized(getStore: () => DataListStore<T>): void {
        filterPluginStore.subscribe(state => ({
            queue: state.queue, 
            applyFilter: state.applyFilter
        }), ({queue, applyFilter}) => {
            if(applyFilter)
                FilteringLogic.applyFilter(queue, getStore);
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
        filterPluginStore.getState().setApplyFilter(false);
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

    public render = (getStore: () => DataListStore<T>) => (<FilterWrapper<T> 
        onFilterCleared={this?.config?.onFilterCleared} getStore={getStore} 
        applyFilterText={this?.config?.applyFilterText}
        showTooltip={this?.config?.showTooltip ?? false} 
        tooltipContent={this?.config?.tooltipContent}/>)
}