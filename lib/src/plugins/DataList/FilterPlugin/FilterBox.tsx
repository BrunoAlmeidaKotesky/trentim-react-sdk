import { ComboBox, IComboBoxOption, IComboBoxProps } from '@fluentui/react/lib/ComboBox';
import { createPortal } from 'react-dom';
import { convertItemValue } from '@helpers/internalUtils';
import { useOuterClick } from '@hooks/useOuterClick';
import type { FilterAreaProps, FilterQueueValue, FilterQueue } from './types';
import { useCallback, useMemo } from 'react';
import { Draft, produce } from 'immer';
import type { ColumnKey } from '@models/index';

type QueueUpdate<T> = (queue: FilterQueueValue<T>[], filterIndex: number, value: string, clickedKey?: ColumnKey<T>) => FilterQueueValue<T>[];
export function FilterBox<T>({ currentFiltering, getStore }: FilterAreaProps<T>): JSX.Element {
    const clickedKey = getStore().clickedColumnKey;
    const TARGET_SELECTOR = `div[data-item-key="${clickedKey}"]` as const;

    const useOuterClickRef = useOuterClick<HTMLDivElement>({
        onOuterClick: () => getStore().setUnmountedPlugins('DataListFilterPlugin', true),
        cancellationFn: (e) => !!(e.target instanceof HTMLElement && e.target.closest(`span[id^="header"]`))
    });

    const options = useMemo(() => currentFiltering?.values?.map<IComboBoxOption>(v => {
        const text = convertItemValue(currentFiltering?.column?.transformations, v);
        return {
            key: `${getStore().clickedColumnKey} - ${text}`,
            text,
            useAriaLabelAsText: true,
            ariaLabel: text,
            data: getStore().clickedColumnKey
        };
    }) || [], [
        currentFiltering?.values,
        currentFiltering?.column
    ]);

    const getQueue = useCallback((): FilterQueueValue<T>[] => {
        return getStore().pluginsDataMap.get('DataListFilterPlugin')?.queue as FilterQueueValue<T>[];
    }, [getStore]);

    const getSelectedKeys = (): string[] => {
        return getQueue().map(i => i?.values?.map(v => `${i.key} - ${v}`))?.flat();
    }

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

        getStore().setPluginDataMapValue<FilterQueue<T>>('DataListFilterPlugin')('queue', newQueue);
        console.log(getQueue());
    }

    const targetDom = document.querySelector(TARGET_SELECTOR);
    if (!targetDom) {
        if (getStore().clickedColumnKey)
            console.error(`DataListFilterPlugin: Could not find target element with selector ${TARGET_SELECTOR}`);
        return null;
    }

    const width = targetDom?.clientWidth || currentFiltering?.column?.minWidth;
    const newDiv = document.createElement('div');
    newDiv.className = 'filterPluginContainer';
    const sibling = targetDom?.appendChild(newDiv);

    return createPortal(
        <div style={{ width: '100%', top: 40, zIndex: 999, position: 'absolute' }}>
            <div ref={useOuterClickRef} style={{ width, placeContent: 'center', display: 'grid' }} id={getStore().clickedColumnKey as string}>
                <ComboBox
                    multiSelect
                    selectedKey={getSelectedKeys()}
                    onChange={onComboBoxChange}
                    styles={{
                        root: { maxWidth: width },
                        callout: { minWidth: 100, maxHeight: '320px!important', scroll: 'auto' }
                    }}
                    options={options} autoComplete="on" />
            </div>
        </div>,
        sibling
    );
}