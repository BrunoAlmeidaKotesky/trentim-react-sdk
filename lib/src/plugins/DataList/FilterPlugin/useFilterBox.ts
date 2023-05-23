import type { IComboBoxProps } from '@fluentui/react/lib/ComboBox';
import { useOuterClick } from '@hooks/useOuterClick';
import { DateSliderValues, SLIDER_VALUES } from '@components/DateRangeSlider';
import type { FilterQueueValue, FilterAreaProps } from './types';
import { useEffect, useState } from 'react';
import { Draft, produce } from 'immer';
import type { ColumnKey } from '@models/index';
import { useFilterPluginStoreValues, useFilterPluginStore, stateSelector } from './store';

type QueueUpdate = (queue: FilterQueueValue[], filterIndex: number, value: string, clickedKey?: ColumnKey<unknown>) => FilterQueueValue<unknown>[];
export function useFilterBox<T>({getStore}: FilterAreaProps<T>) {
    const [state, forceUpdate] = useState(false);
    const {currentFiltering, setQueue, queue, setWrappedValue} = useFilterPluginStore(stateSelector);
    const { sliderValue, dateRange, selectedKeys, options } = useFilterPluginStoreValues(
        getStore().clickedColumnKey, 
        ['sliderValue', 'dateRange', 'selectedKeys', 'options']
    );

    const clickedKey = getStore().clickedColumnKey;
    const TARGET_SELECTOR = `div[data-item-key="${clickedKey}"]` as const;
    //Revisar essa parte
    const useOuterClickRef = useOuterClick<HTMLDivElement>({
        onOuterClick: () => getStore().setUnmountedPlugins('DataListFilterPlugin', true),
        cancellationFn: (e) => !!(e.target instanceof HTMLElement && e.target.closest(`span[id^="header"]`))
    });

    useEffect(() => {
        const sideLabels = currentFiltering?.dateRangeSliderConfig?.props?.sliderLabels;
        const renderAs = currentFiltering?.column?.transformations?.renderAs;
        if (
            renderAs === 'date' &&
            (!sideLabels || sideLabels?.length !== 4)
        )
            console.error('[TRS] - DataListFilterPlugin: Tried to render custom slider, but with none or fewer than 4 labels');
    }, []);

    const updateQueueWithSelectedOption: QueueUpdate = (queue, filterIndex, value, clickedKey) =>
        produce(queue, draft => {
            if (filterIndex !== -1) {
                if (!draft[filterIndex].values.includes(value))
                    draft[filterIndex].values.push(value);
            } else
                draft.push({ key: clickedKey as Draft<ColumnKey<unknown>>, values: [value] });
        });

    const removeFromQueue: QueueUpdate = (queue, filterIndex, optionKey) =>
        produce(queue, draft => {
            if (filterIndex !== -1) {
                const values = draft[filterIndex].values;
                const keyIndex = values.findIndex(i => i === optionKey);
                if (keyIndex !== -1) values.splice(keyIndex, 1);
                if (values.length === 0) draft.splice(filterIndex, 1);
            }
        });

    const onComboBoxChange: IComboBoxProps['onChange'] = (_e, opt) => {
        const clickedKey = getStore().clickedColumnKey as any;
        if (!clickedKey) return;

        const currentQueue = queue;
        const currentFilterIndex = currentQueue.findIndex(i => i.key === clickedKey);

        let newQueue: FilterQueueValue<unknown>[];
        if (opt.selected)
            newQueue = updateQueueWithSelectedOption(currentQueue, currentFilterIndex, opt.text, clickedKey);
        else
            newQueue = removeFromQueue(currentQueue, currentFilterIndex, opt.text);
        setQueue(newQueue);
        setWrappedValue(clickedKey, 'selectedKeys', (previousSelectedKeys) => {
            if (opt.selected) {
                // if the option is selected, add it to the list
                return [...(previousSelectedKeys || []), opt.key as any];
            } else {
                // if the option is unselected, remove it from the list
                return previousSelectedKeys.filter((key) => key !== opt.key);
            }
        });
        forceUpdate(!state);
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

        const stateIdx = queue.findIndex(i => i.key === clickedKey);
        if (stateIdx !== -1) {
            const newQueue = produce(queue, draft => {
                draft[stateIdx].values = [date.toISOString()];
                draft[stateIdx].metadata = {type: 'slider', sliderValue: value}
            });
            setQueue(newQueue);
        } else {
            const newQueue = produce(queue, draft => {
                draft.push({
                    key: clickedKey as Draft<ColumnKey<unknown>>,
                    values: [date.toISOString()],
                    metadata: {type: 'slider', sliderValue: value}
                });
            });
            setQueue(newQueue);
        }
        setWrappedValue(clickedKey, 'sliderValue', value);
    }

    const onDateValueChange = (value: { start: Date | null, end: Date | null }) => {
        if (value.start && value.end) {
            const start = value.start.toISOString();
            const end = value.end.toISOString();
            const stateIdx = queue.findIndex(i => i.key === clickedKey);
            if (stateIdx !== -1) {
                const newQueue = produce(queue, draft => {
                    draft[stateIdx].values = [start, end];
                    draft[stateIdx].metadata = {type: 'range'}
                });
                setQueue(newQueue);
            } else {
                const newQueue = produce(queue, draft => {
                    draft.push({
                        key: clickedKey as Draft<ColumnKey<unknown>>,
                        values: [start, end],
                        metadata: {type: 'range'}
                    });
                });
                setQueue(newQueue);
            }
        }
        setWrappedValue(clickedKey, 'dateRange', value);
    }

    const targetDom = document.querySelector(TARGET_SELECTOR);
    const width = targetDom?.clientWidth;
    const newDiv = document.createElement('div');
    newDiv.className = 'filterPluginContainer';
    const sibling = targetDom?.appendChild(newDiv);

    return {
        state: {
            width, sibling, targetDom, useOuterClickRef,
            sliderValue, dateRange, selectedKeys, options,
            currentFiltering
        },
        handlers: {
            onComboBoxChange,
            onSliderChange,
            onDateValueChange
        }
    }
}