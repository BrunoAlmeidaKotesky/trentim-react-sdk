import { ComboBox, IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import { createPortal } from 'react-dom';
import { convertItemValue } from '@helpers/internalUtils';
import { useOuterClick } from '@hooks/useOuterClick';
import type { FilterAreaProps } from './types';

export function FilterBox<T>(props: FilterAreaProps<T>): JSX.Element {
    const currentFilteringKey = props.getStore().clickedColumnKey;
    const TARGET_SELECTOR = `div[data-item-key="${currentFilteringKey}"]` as const;

    const useOuterClickRef = useOuterClick<HTMLDivElement>({
        onOuterClick: () => props.getStore().setUnmountedPlugins('DataListFilterPlugin', true),
        cancellationFn: (e) => {
            if (e.target instanceof HTMLElement && e.target.closest(`span[id^="header"]`))
                return true;
            return false;
        }
    });

    const currentMap = props.filterMap.get(currentFilteringKey);
    const options = currentMap?.values?.map<IComboBoxOption>(v => {
        const text = convertItemValue(currentMap?.column?.transformations, v);
        return {
            key: `${currentFilteringKey} - ${text}`,
            text,
            useAriaLabelAsText: true,
            ariaLabel: text,
        };
    }) || [];

    const targetDom = document.querySelector(TARGET_SELECTOR);
    if (!targetDom) {
        if (currentFilteringKey)
            console.error(`DataListFilterPlugin: Could not find target element with selector ${TARGET_SELECTOR}`);
        return null;
    }

    const width = targetDom?.clientWidth || currentMap.column?.minWidth;
    const newDiv = document.createElement('div');
    newDiv.className = 'filterPluginContainer';
    const sibling = targetDom?.appendChild(newDiv);

    return createPortal(<div style={{ width: '100%', top: 40, zIndex: 999, position: 'absolute' }}>
        <div ref={useOuterClickRef} style={{ width, placeContent: 'center', display: 'grid' }} id={currentFilteringKey as string}>
            <ComboBox
                multiSelect
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