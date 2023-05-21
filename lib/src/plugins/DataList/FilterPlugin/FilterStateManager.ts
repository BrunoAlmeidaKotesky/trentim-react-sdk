import type { DataListStore, ValueOrFunc } from '@models/index';
import type { FilterPluginStore, WrappedFilterState, KeyWrapper, FilterPluginState } from './types';


export class FilterStateManager<T = unknown> {
    constructor(private getStore: () => DataListStore<T>) { }
    public setWrappedFilterStoreValue  = <K extends keyof WrappedFilterState, V extends WrappedFilterState[K][0]['value']>(
        key: K, value: ValueOrFunc<V>
    ): void => {
        const clickedKey = this.getStore().clickedColumnKey;
        const filterStore = this.getStore()?.getCustomStore<FilterPluginStore<unknown>>('DataListFilterPlugin');

        if (!filterStore) return;

        let valuesArray: KeyWrapper<V> | undefined = filterStore.getState()?.[key] as unknown as KeyWrapper<V>;

        if (valuesArray) {
            const valueObjectIndex = valuesArray.findIndex(obj => obj.key === clickedKey);
            let newValue: V;

            if (valueObjectIndex !== -1) {
                // If the object was found, update it
                newValue = typeof value === 'function' ? value(valuesArray[valueObjectIndex].value) : value;
                valuesArray[valueObjectIndex].value = newValue;
            } else {
                // If the object was not found, add it
                newValue = typeof value === 'function' ? value(undefined) : value;
                valuesArray.push({ key: clickedKey, value: newValue });
            }
        } else {
            const newValue = typeof value === 'function' ? value(undefined) : value;
            valuesArray = [{ key: clickedKey, value: newValue }];
        }

        filterStore.setState({ [key]: valuesArray } as unknown as FilterPluginState<unknown>);
    }

    public getWrappedFilterStoreValue  = <K extends keyof WrappedFilterState>(key: K): WrappedFilterState[K][0]['value'] | undefined => {
        const clickedKey = this.getStore().clickedColumnKey;
        const filterStore = this.getStore()?.getCustomStore<FilterPluginStore<unknown>>('DataListFilterPlugin');
        const valuesArray = filterStore?.getState()?.[key] as unknown as KeyWrapper<WrappedFilterState[K][0]['value']>;

        if (valuesArray) {
            const valueObject = valuesArray.find(obj => obj.key === clickedKey);
            return valueObject?.value;
        }

        return undefined;
    }

    public setPluginStateValue = <K extends keyof FilterPluginState<T>, V extends FilterPluginState<T>[K]>(
        key: K, value: ValueOrFunc<V>
    ): void => {
        const filterStore = this.getStore()?.getCustomStore<FilterPluginStore<T>>('DataListFilterPlugin');
    
        if (!filterStore) return;
        if(typeof value === 'function') {
            //@ts-ignore
            filterStore.setState({ [key]: value(filterStore.getState()[key]) } as unknown as Pick<FilterPluginState<T>, K>);
        }
        else 
            filterStore.setState({ [key]: value } as unknown as Pick<FilterPluginState<T>, K>);
    }
    
    public getPluginStateValue = <K extends keyof FilterPluginState<T>>(key: K): FilterPluginState<T>[K] | undefined => {
        const filterStore = this.getStore()?.getCustomStore<FilterPluginStore<T>>('DataListFilterPlugin');
        return filterStore?.getState()[key];
    }
    
}