import { createStore, useStore } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Updater, ZustandSubscribe } from "@models/interfaces/DataListStore";
import type { FilterPluginStore, KeyWrapper, WrappedFilterState } from './types';
import type { ColumnKey } from '@models/types/Common';

export function getWrappedFilterStoreValueHelper<K extends keyof WrappedFilterState>(
    valuesArray: KeyWrapper<WrappedFilterState[K][0]['value']> | undefined,
    clickedColumnKey: ColumnKey<any>
): WrappedFilterState[K][0]['value'] | undefined {
    if (valuesArray) {
        const valueObject = valuesArray?.find(obj => obj?.key === clickedColumnKey);
        return valueObject?.value;
    }

    return undefined;
}

export const filterPluginStore = createStore<FilterPluginStore<any>>()(
    subscribeWithSelector(
        immer((set, get, { subscribe }) => ({
            currentFiltering: null,
            queue: [],
            dateRange: null,
            options: null,
            applyFilter: false,
            selectedKeys: null,
            showBreadcrumb: false,
            dropdownValue: null,
            setCurrentFiltering: value => set(state => {
                //@ts-ignore
                state.currentFiltering = typeof value === 'function'? value(state.currentFiltering) : value;
            }),
            setShowBreadcrumb: value => set(state => { state.showBreadcrumb = value }),
            setQueue: queue => set(state => {
                if (typeof queue === 'function')
                    state.queue = queue(state.queue);
                else
                    state.queue = queue;
            }),
            subscribe: subscribe as ZustandSubscribe<FilterPluginStore<unknown>>,
            getWrappedFilterStoreValue: <K extends keyof WrappedFilterState>(
                clickedColumnKey: string,
                key: K,
            ): WrappedFilterState[K][0]['value'] | undefined => {
                const valuesArray = get()[key] as unknown as KeyWrapper<WrappedFilterState[K][0]['value']>;
                return getWrappedFilterStoreValueHelper(valuesArray, clickedColumnKey);
            },
            setApplyFilter: value => set(state => { state.applyFilter = value }),
            setWrappedFilterStoreValue: <K extends keyof WrappedFilterState, V extends WrappedFilterState[K][0]['value']>(
                clickedColumnKey: string,
                key: K,
                value: Updater<V>
            ) => {
                //@ts-ignore
                set((state: FilterPluginStore<unknown>) => {
                    let valuesArray: KeyWrapper<V> | undefined = state[key] as unknown as KeyWrapper<V>;
            
                    if (valuesArray) {
                        const valueObjectIndex = valuesArray.findIndex(obj => obj.key === clickedColumnKey);
                        let newValue: V;
            
                        if (valueObjectIndex !== -1) {
                            // If the object was found, update it
                            newValue = typeof value === 'function' ? value(valuesArray[valueObjectIndex].value) : value;
                            valuesArray[valueObjectIndex].value = newValue;
                        } else {
                            // If the object was not found, add it
                            newValue = typeof value === 'function' ? value(undefined) : value;
                            valuesArray.push({ key: clickedColumnKey, value: newValue });
                        }
                    } else {
                        const newValue = typeof value === 'function' ? value(undefined) : value;
                        valuesArray = [{ key: clickedColumnKey, value: newValue }];
                    }
                    //@ts-ignore
                    state[key] = valuesArray as unknown as WrappedFilterState[K];
                });
            },
        }))
    )
);

export function useFilterPluginStore<S>(selector: (state: FilterPluginStore<unknown>) => S): S {
    return useStore(filterPluginStore, selector);
}

type WrappedFilterValue<K extends keyof WrappedFilterState> = WrappedFilterState[K][0]['value'];
type FilterStoreValues<K extends keyof WrappedFilterState> = {
    [P in K]: WrappedFilterValue<P> | undefined;
};
export const useFilterPluginStoreValues = <K extends keyof WrappedFilterState>(
    clickedColumnKey: ColumnKey<any>,
    keys: K[],
): FilterStoreValues<K> => {
    return useFilterPluginStore(state => {
        const values: Partial<FilterStoreValues<K>> = {};

        for (let key of keys) {
            values[key] = getWrappedFilterStoreValueHelper(state[key] as unknown as KeyWrapper<WrappedFilterValue<K>>, clickedColumnKey);
        }

        return values as FilterStoreValues<K>;
    });
};

export const stateSelector = (state: FilterPluginStore<any>) => ({
    currentFiltering: state.currentFiltering,
    setQueue: state.setQueue,
    queue: state.queue,
    setWrappedValue: state.setWrappedFilterStoreValue,
    applyFilter: state.applyFilter,
    setApplyFilter: state.setApplyFilter,
    setShowBreadcrumb: state.setShowBreadcrumb,
    setCurrentFiltering: state.setCurrentFiltering
})