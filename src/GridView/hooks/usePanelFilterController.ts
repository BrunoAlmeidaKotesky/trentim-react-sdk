import { lazy, useContext, useMemo, useRef, useEffect } from 'react';
import { FilterPanelContext } from '../Contexts';
import type { FilterOption } from '../../models/interfaces/IPanelFilter';
import type { ITag } from '@fluentui/react/lib/Pickers';

export function usePanelFilterController() {
    const { isOpen, onClose, availableFilters, panelTitle, onCancel, onApply, actualFilteredValues, setActualFilteredValues, onOpen } = useContext(FilterPanelContext);
    const [FluentPanel, Dropdown, PrimaryButton, DefaultButton, TagPicker] = useMemo(() => {
        const Panel = lazy(() => import('@fluentui/react/lib/Panel').then(({ Panel }) => ({ default: Panel })));
        const DropDown = lazy(() => import('@fluentui/react/lib/Dropdown').then(({ Dropdown }) => ({ default: Dropdown })));
        const PrimaryButton = lazy(() => import('@fluentui/react/lib/Button').then(({ PrimaryButton }) => ({ default: PrimaryButton })));
        const DefaultButton = lazy(() => import('@fluentui/react/lib/Button').then(({ DefaultButton }) => ({ default: DefaultButton })));
        const TagPicker = lazy(() => import('@fluentui/react/lib/Pickers').then(({ TagPicker }) => ({ default: TagPicker })));
        return [Panel, DropDown, PrimaryButton, DefaultButton, TagPicker];
    }, []);
    const lastAddedTag = useRef<FilterOption>(null);

    const onAddOrRemoveToMap = (rootItemKey: string, option: FilterOption) => {
        //If the current option is selected and is not already on the actualFilteredValues map, add it
        //else if the current option is not select and all the other options are not select too, remove the key from the map
        const copyMap = new Map(actualFilteredValues);
        if (!option.key) return;
        if (option.selected && !copyMap.has(option?.key as string)) {
            copyMap.set(option.key as string, { rootItemKey, itemKey: option.key, data: option?.data, text: option?.text });
        }
        else if (!option.selected && copyMap.has(option?.key as string)) {
            copyMap.delete(option?.key as string);
        }
        setActualFilteredValues(copyMap);
    }

    useEffect(() => { if (onOpen) onOpen(); }, []);

    const listContainsTagList = (tag: FilterOption, tagList?: FilterOption[]) => {
        if (!tagList || !tagList.length || tagList.length === 0)
            return false;
        return tagList.some(compareTag => compareTag?.key === tag?.key);
    };

    const getDefaultDropdownSelectedKeys = () => {
        const selectedKeys: string[] = [];
        actualFilteredValues.forEach((_, k) => {
            selectedKeys.push(k);
        })
        return selectedKeys;
    }

    const getDefaultSelectedTag = (keyToFilter: string) => {
        const selectedTags: FilterOption[] = [];
        actualFilteredValues.forEach((d, k) => {
            const keyKind = k?.split('_')[1];
            if (keyKind === keyToFilter)
                selectedTags.push({
                    key: keyKind,
                    text: d?.text,
                    data: d?.data,
                    selected: true,
                    name: d?.text
                });
        })
        return selectedTags as unknown as ITag[];
    }
    return {
        state: {
            isOpen,
            actualFilteredValues,
            panelTitle,
            availableFilters,
            lastAddedTag,

        },
        handlers: {
            getDefaultDropdownSelectedKeys,
            getDefaultSelectedTag,
            listContainsTagList,
            onAddOrRemoveToMap,
            onClose,
            onCancel,
            onApply,
            onOpen,
            setActualFilteredValues
        },
        JSX: {
            FluentPanel,
            Dropdown,
            PrimaryButton,
            DefaultButton,
            TagPicker
        }
    }
}