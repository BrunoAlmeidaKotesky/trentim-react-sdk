import type { IComboBoxProps } from '@fluentui/react/lib/ComboBox';
import { useOuterClick } from '@hooks/useOuterClick';
import { DateSliderValues, SLIDER_VALUES } from '@components/DateRangeSlider';
import type { FilterQueueValue, FilterPluginStore, FilterAreaProps } from './types';
import { useCallback, useEffect } from 'react';
import { Draft, produce } from 'immer';
import type { ColumnKey } from '@models/index';

type QueueUpdate<T> = (queue: FilterQueueValue<T>[], filterIndex: number, value: string, clickedKey?: ColumnKey<T>) => FilterQueueValue<T>[];
export function useFilterBox<T>({getStore, stateManager}: FilterAreaProps<T>) {
    const clickedKey = getStore().clickedColumnKey;
    const TARGET_SELECTOR = `div[data-item-key="${clickedKey}"]` as const;

    const useOuterClickRef = useOuterClick<HTMLDivElement>({
        onOuterClick: () => getStore().setUnmountedPlugins('DataListFilterPlugin', true),
        cancellationFn: (e) => !!(e.target instanceof HTMLElement && e.target.closest(`span[id^="header"]`))
    });

    useEffect(() => {
        const currentFiltering = getStore().getCustomStore<FilterPluginStore<T>>('DataListFilterPlugin')?.getState()?.currentFiltering;
        const sideLabels = currentFiltering?.dateRangeSliderConfig?.props?.sliderLabels;
        const renderAs = currentFiltering?.column?.transformations?.renderAs;
        if (
            renderAs === 'date' &&
            (!sideLabels || sideLabels?.length !== 4)
        )
            console.error('[TRS] - DataListFilterPlugin: Tried to render custom slider, but with none or fewer than 4 labels');
    }, []);

    const getQueue = useCallback((): FilterQueueValue<T>[] => {
        const filterStore = getStore().getCustomStore<FilterPluginStore<T>>('DataListFilterPlugin');
        return filterStore?.getState()?.queue || [];
    }, [getStore]);

    const setQueue = useCallback((queue: FilterQueueValue<T>[]) => {
        const filterStore = getStore().getCustomStore<FilterPluginStore<T>>('DataListFilterPlugin');
        if (filterStore)
            filterStore.setState({ queue });
        else
            console.error('[TRS] - DataListFilterPlugin: Could not find custom store');
    }, [getStore]);

    const updateQueueWithSelectedOption: QueueUpdate<T> = (queue, filterIndex, value, clickedKey) =>
        produce(queue, draft => {
            if (filterIndex !== -1) {
                draft[filterIndex].values.push(value);
            } else {
                draft.push({ key: clickedKey as Draft<ColumnKey<T>>, values: [value] });
            }
        });

    const removeFromQueue: QueueUpdate<T> = (queue, filterIndex, optionKey) =>
        produce(queue, draft => {
            if (filterIndex !== -1) {
                const values = draft[filterIndex].values;
                const keyIndex = values.findIndex(i => i === optionKey);
                if (keyIndex !== -1) values.splice(keyIndex, 1);
                if (values.length === 0) draft.splice(filterIndex, 1);
            }
        });

    const onComboBoxChange: IComboBoxProps['onChange'] = (_e, opt) => {
        const clickedKey = getStore().clickedColumnKey
        if (!clickedKey) return;

        const currentQueue = getQueue();
        const currentFilterIndex = currentQueue.findIndex(i => i.key === clickedKey);

        let newQueue: FilterQueueValue<T>[];
        if (opt.selected)
            newQueue = updateQueueWithSelectedOption(currentQueue, currentFilterIndex, opt.text, clickedKey);
        else
            newQueue = removeFromQueue(currentQueue, currentFilterIndex, opt.text);
        setQueue(newQueue);
        stateManager.setWrappedFilterStoreValue('selectedKeys', (previousSelectedKeys) => {
            if(previousSelectedKeys?.length)
                return [...previousSelectedKeys, opt.key as any]
            return [opt.key as any];
        });
    }

    const onSliderChange = (value: DateSliderValues) => {
        const date = new Date();
        switch (value) {
            case SLIDER_VALUES.WEEK:
                date.setDate(date.getDate() - 7);
                break;
            case SLIDER_VALUES.MONTH:
                date.setMonth(date.getMonth() - 1);
                break;
            case SLIDER_VALUES.YEAR:
                date.setFullYear(date.getFullYear() - 1);
                break;
        }

        const queue = getQueue();
        const stateIdx = queue.findIndex(i => i.key === clickedKey);
        if (stateIdx !== -1) {
            const newQueue = produce(queue, draft => {
                draft[stateIdx].values = [date.toISOString()];
                draft[stateIdx].metadata = 'slider';
            });
            setQueue(newQueue);
        } else {
            const newQueue = produce(queue, draft => {
                draft.push({
                    key: clickedKey as Draft<ColumnKey<T>>,
                    values: [date.toISOString()],
                    metadata: 'slider'
                });
            });
            setQueue(newQueue);
        }
        stateManager.setWrappedFilterStoreValue('sliderValue', value);
    }

    const onDateValueChange = (value: { start: Date | null, end: Date | null }) => {
        if (value.start && value.end) {
            const start = value.start.toISOString();
            const end = value.end.toISOString();
            const queue = getQueue();
            const stateIdx = queue.findIndex(i => i.key === clickedKey);
            if (stateIdx !== -1) {
                const newQueue = produce(queue, draft => {
                    draft[stateIdx].values = [start, end];
                    draft[stateIdx].metadata = 'date';
                });
                setQueue(newQueue);
            } else {
                const newQueue = produce(queue, draft => {
                    draft.push({
                        key: clickedKey as Draft<ColumnKey<T>>,
                        values: [start, end],
                        metadata: 'date'
                    });
                });
                setQueue(newQueue);
            }
        }
        stateManager.setWrappedFilterStoreValue('dateRange', value);
    }

    const targetDom = document.querySelector(TARGET_SELECTOR);
    const width = targetDom?.clientWidth;
    const newDiv = document.createElement('div');
    newDiv.className = 'filterPluginContainer';
    const sibling = targetDom?.appendChild(newDiv);

    return {
        state: {
            width, sibling, targetDom, useOuterClickRef
        },
        handlers: {
            onComboBoxChange,
            onSliderChange,
            onDateValueChange
        }
    }
}