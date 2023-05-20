import { VirtualizedComboBox, IComboBoxOption, IComboBoxProps } from '@fluentui/react/lib/ComboBox';
import { createPortal } from 'react-dom';
import { convertItemValue } from '@helpers/internalUtils';
import { useOuterClick } from '@hooks/useOuterClick';
import { DateRangeSlider, DateSliderValues, SLIDER_VALUES } from '@components/DateRangeSlider';
import type { FilterAreaProps, FilterQueueValue, FilterPluginStore } from './types';
import { useCallback, useMemo, ReactNode, useEffect, useState } from 'react';
import { Draft, produce } from 'immer';
import type { ColumnKey } from '@models/index';

const BoxShadow = ({ children }: { children: ReactNode }) => (
    <div style={{
        fontWeight: 600, fontSize: 16, boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        borderRadius: 2, background: 'white', zIndex: 999999, padding: 12
    }}>{children}</div>
)

type QueueUpdate<T> = (queue: FilterQueueValue<T>[], filterIndex: number, value: string, clickedKey?: ColumnKey<T>) => FilterQueueValue<T>[];
export function FilterBox<T>({ currentFiltering, getStore }: FilterAreaProps<T>): JSX.Element {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [sliderValue, setSliderValue] = useState<DateSliderValues>(SLIDER_VALUES.WEEK);
    const [dateRange, setDateRange] = useState({ start: null, end: null });
    const clickedKey = getStore().clickedColumnKey;
    const TARGET_SELECTOR = `div[data-item-key="${clickedKey}"]` as const;

    const useOuterClickRef = useOuterClick<HTMLDivElement>({
        onOuterClick: () => getStore().setUnmountedPlugins('DataListFilterPlugin', true),
        cancellationFn: (e) => !!(e.target instanceof HTMLElement && e.target.closest(`span[id^="header"]`))
    });

    const options = useMemo(() => currentFiltering?.values?.map<IComboBoxOption>(v => {
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
    }) || [], [
        currentFiltering?.values,
        currentFiltering?.column
    ]);

    useEffect(() => {
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

    const getSelectedKeys = useCallback((): string[] => {
        return getQueue().map(i => i?.values?.map(v => `${i.key} - ${v}`))?.flat();
    }, [getQueue]);

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
        setSelectedKeys(getSelectedKeys());
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
            });
            setQueue(newQueue);
        } else {
            const newQueue = produce(queue, draft => {
                draft.push({ key: clickedKey as Draft<ColumnKey<T>>, values: [date.toISOString()] });
            });
            setQueue(newQueue);
        }
        setSliderValue(value);
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
                });
                setQueue(newQueue);
            } else {
                const newQueue = produce(queue, draft => {
                    draft.push({ key: clickedKey as Draft<ColumnKey<T>>, values: [start, end] });
                });
                setQueue(newQueue);
            }
        }
        setDateRange(value);
    }

    const targetDom = document.querySelector(TARGET_SELECTOR);
    if (!currentFiltering?.show || !targetDom) {
        if (clickedKey)
            console.error(`[TRS] - DataListFilterPlugin: Could not find target element with selector ${TARGET_SELECTOR}`);
        return null;
    }

    const width = targetDom?.clientWidth || currentFiltering?.column?.minWidth;
    const newDiv = document.createElement('div');
    newDiv.className = 'filterPluginContainer';
    const sibling = targetDom?.appendChild(newDiv);

    return createPortal(
        <div style={{ width: '100%', top: 40, zIndex: 999, position: 'absolute' }}>
            <div ref={useOuterClickRef} style={{ width, placeContent: 'center', display: 'grid' }} id={getStore().clickedColumnKey as string}>
                {(currentFiltering?.column?.transformations?.renderAs === 'date') ?
                    <BoxShadow>
                        <div style={{ width, backgroundColor: 'white', padding: 8 }}>
                            <DateRangeSlider
                                {...currentFiltering?.dateRangeSliderConfig?.props}
                                sliderValue={sliderValue} dateRange={dateRange}
                                onDateValueChange={onDateValueChange}
                                onSliderChange={onSliderChange}
                            />
                        </div>
                    </BoxShadow> :
                    <BoxShadow>
                        <VirtualizedComboBox
                            multiSelect
                            selectedKey={selectedKeys}
                            onChange={onComboBoxChange}
                            dropdownMaxWidth={300}
                            styles={{
                                root: { maxWidth: width },
                                callout: { minWidth: 100, maxHeight: '320px!important', scroll: 'auto' }
                            }}
                            options={options} autoComplete="on" />
                    </BoxShadow>
                }
            </div>
        </div>,
        sibling
    );
}