import { lazy, useContext, useMemo, useRef, useEffect } from 'react';
import { FilterPanelContext } from '../Contexts';
import { RangeType } from '../../helpers/enums';
import type { FilterOption } from '../../models/interfaces/IPanelFilter';
import type { ITag } from '@fluentui/react/lib/Pickers';
import type { IPersonaProps } from '@fluentui/react/lib/Persona';

export function usePanelFilterController() {
    const { isOpen, onClose, panelTitle, onCancel, onApply, actualFilteredValues, setActualFilteredValues, onOpen, filterOptionsMatrix, availableFilters } = useContext(FilterPanelContext);
    const [FluentPanel, Dropdown, PrimaryButton, DefaultButton, TagPicker, Label] = useMemo(() => {
        const Panel = lazy(() => import('@fluentui/react/lib/Panel').then(({ Panel }) => ({ default: Panel })));
        const DropDown = lazy(() => import('@fluentui/react/lib/Dropdown').then(({ Dropdown }) => ({ default: Dropdown })));
        const PrimaryButton = lazy(() => import('@fluentui/react/lib/Button').then(({ PrimaryButton }) => ({ default: PrimaryButton })));
        const DefaultButton = lazy(() => import('@fluentui/react/lib/Button').then(({ DefaultButton }) => ({ default: DefaultButton })));
        const TagPicker = lazy(() => import('@fluentui/react/lib/Pickers').then(({ TagPicker }) => ({ default: TagPicker })));
        const Label = lazy(() => import('@fluentui/react/lib/Label').then(({ Label }) => ({ default: Label })));
        return [Panel, DropDown, PrimaryButton, DefaultButton, TagPicker, Label];
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
        else if(option.selected && copyMap.has(option?.key as string) && option?.isDateComponent) {
            copyMap.set(option.key as string, { rootItemKey, itemKey: option.key, data: option?.data, text: option?.text });
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

    const getDefaultSelectedSlider = (keyToFilter: string): RangeType => {
        const mapWithSameKey = [...actualFilteredValues]?.find(([key]) => key === keyToFilter);
        const mapWithSameKeyValue = mapWithSameKey?.[1]?.data;
        if(mapWithSameKeyValue) 
            return mapWithSameKeyValue?.type;
        return RangeType.NONE;
    }

    const getDefaultSelectedPeople = (keyToFilter: string): IPersonaProps[] => {
        const mapWithSameKey = [...actualFilteredValues]?.filter(([key]) => {
            const keyKind = key?.split('_')[1];
            return keyKind === keyToFilter
        });
        if(mapWithSameKey?.length > 0) {
            const people = mapWithSameKey?.map(([_, value]) => value as IPersonaProps);
            return people;
        }
        return [];
    }

    const onChangeTags = (options: FilterOption[]) => (tags: ITag[]) => {
        const copyMap = new Map(actualFilteredValues);
        if(tags.length === 0) {
            options.forEach(opt => {
                if(copyMap.has(opt?.key as string))
                    copyMap.delete(opt?.key as string);
            });
        } else if(!(tags?.map(i => i?.key).includes(lastAddedTag?.current?.key))) {
            copyMap.delete(lastAddedTag?.current?.key as string);
            lastAddedTag.current = null; 
        }
        setActualFilteredValues(copyMap);
    }

    const onTagSelected = (key: string) =>(selectedItem: ITag) => {
        onAddOrRemoveToMap(key, {...selectedItem, selected: true} as unknown as FilterOption);
        lastAddedTag.current = selectedItem as unknown as FilterOption;
        return selectedItem;
    }

    const onResolveTagSuggestion = (options: FilterOption[]) => (currentFilter: string, tagList: ITag[], ) => {
        const result = currentFilter
        ? options.filter(opt => 
            opt?.text?.toLowerCase().indexOf(currentFilter.toLowerCase()) === 0 
            && !listContainsTagList(opt, tagList as unknown as FilterOption[])).map(f => ({...f, name: f?.text})): [];
        return result;
    }

    const onRecordDateChange = (key: string) => (from: Date, to: Date, type: RangeType) => {
        if(from && to && type !== RangeType.NONE)
            onAddOrRemoveToMap(key, {
                key: key,
                text: `${from?.toISOString()} - ${to?.toISOString()}`,
                data: { from, to, type },
                selected: true,
                isDateComponent: true,
                name: `${from?.toISOString()} - ${to?.toISOString()}`
            } as unknown as FilterOption);
        else {
            const copyMap = new Map(actualFilteredValues);
            copyMap.delete(key);
            setActualFilteredValues(copyMap);
        }
    }

    const onChangePeople = (key: string) => (items: IPersonaProps[]) => {
        const copyMap = new Map(actualFilteredValues);
        if(items.length === 0) {
            actualFilteredValues?.forEach((_, k) => {
                if(k?.split('_')?.[1] === key)
                    copyMap.delete(k);
            });
            setActualFilteredValues(copyMap);
        } 
        else {
            items.forEach(i => {
                onAddOrRemoveToMap(key, {
                    key: i?.key,
                    text: i?.text,
                    data: i?.['data'],
                    selected: true,
                    isDateComponent: false,
                    name: i?.text
                } as unknown as FilterOption);
            });
        }
    }

    return {
        state: {
            isOpen,
            actualFilteredValues,
            panelTitle,
            filterOptionsMatrix,
            availableFilters
        },
        handlers: {
            getDefaultDropdownSelectedKeys,
            getDefaultSelectedTag,
            getDefaultSelectedSlider,
            getDefaultSelectedPeople,
            onAddOrRemoveToMap,
            onClose,
            onCancel,
            onApply,
            onOpen,
            setActualFilteredValues,
            onChangeTags,
            onTagSelected,
            onResolveTagSuggestion,
            onRecordDateChange,
            onChangePeople
        },
        JSX: {
            FluentPanel,
            Dropdown,
            PrimaryButton,
            DefaultButton,
            TagPicker,
            Label
        }
    }
}