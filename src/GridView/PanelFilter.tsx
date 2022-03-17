import * as React from 'react';
import { lazy, useContext, useMemo, Suspense, useRef, useEffect } from 'react';
import { FilterPaneContext } from './Contexts';
import type { FilterOption } from '../models/interfaces/IPanelFilter';
import type { ITag } from '@fluentui/react/lib/Pickers';

function PanelFilter() {
    const { isOpen, onClose, availableFilters, panelTitle, onCancel, onApply, actualFilteredValues, setActualFilteredValues, onOpen } = useContext(FilterPaneContext);
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
        if(!option.key) return;
        if (option.selected && !copyMap.has(option?.key as string)) {
            copyMap.set(option.key as string, { rootItemKey, itemKey: option.key, data: option?.data, text: option?.text });
        }
        else if (!option.selected && copyMap.has(option?.key as string)) {
            copyMap.delete(option?.key as string); 
        }
        setActualFilteredValues(copyMap);
    }

    useEffect(() => { if(onOpen) onOpen();}, []);

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
            if(keyKind === keyToFilter) 
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

    if (!isOpen)
        return null;
    return (
        <Suspense fallback={<div>...</div>}>
            <FluentPanel 
                onRenderFooter={_ => (<div style={{padding: 20}}>
                    <Suspense fallback={'...'}>
                        <PrimaryButton onClick={() => onApply(actualFilteredValues)} styles={{root: {marginRight: 8}}}>
                            Aplicar
                        </PrimaryButton>
                    </Suspense>
                    <Suspense fallback={'...'}>
                        <DefaultButton onClick={onCancel}>Cancelar</DefaultButton>
                    </Suspense>
                  </div>)}
                isFooterAtBottom={true}
                onDismiss={onClose} isOpen={isOpen}>
                <h2>{panelTitle}</h2>
                {availableFilters?.map(filter => {
                    const options = filter?.options?.map<FilterOption>(({ key, text, data }) => {
                        return {
                            key,
                            text,
                            data
                        };
                    });
                    return (<Suspense fallback={'...'}>
                        {filter.renderAs === 'Dropdown' ? 
                        <Dropdown
                            defaultSelectedKeys={getDefaultDropdownSelectedKeys()}
                            key={filter?.key} options={options}
                            multiSelect={filter?.enableMultiple} label={filter?.name}
                            onChange={(_, opt) => onAddOrRemoveToMap(filter?.key, opt)} /> :
                        filter.renderAs === 'SearchBox' ? 
                        <div key={filter?.key + "-" + filter?.name}>
                        <label>{filter?.name}</label>
                        <TagPicker 
                            key={filter?.key}
                            getTextFromItem={item => item?.name}
                            defaultSelectedItems={getDefaultSelectedTag(filter.key)}
                            pickerSuggestionsProps={{
                                suggestionsHeaderText: "Sugestões",
                                noResultsFoundText: "Nenhum resultado encontrado",
                                loadingText: "Carregando..."
                            }}
                            pickerCalloutProps={{doNotLayer: true}}
                            onChange={(tags) => {
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
                            }}
                            onItemSelected={(selectedItem) => {
                                onAddOrRemoveToMap(filter?.key, {...selectedItem, selected: true} as unknown as FilterOption);
                                lastAddedTag.current = selectedItem as unknown as FilterOption;
                                return selectedItem;
                            }}
                            onResolveSuggestions={(currentFilter, tagList) => {
                                const result = currentFilter
                                ? options.filter(opt => 
                                    opt?.text?.toLowerCase().indexOf(currentFilter.toLowerCase()) === 0 
                                    && !listContainsTagList(opt, tagList as unknown as FilterOption[])).map(f => ({...f, name: f?.text})): [];
                                return result;
                            }} /></div> :
                        null}
                    </Suspense>);
                })}
            </FluentPanel>
        </Suspense>
    );
}

export default React.memo(PanelFilter);