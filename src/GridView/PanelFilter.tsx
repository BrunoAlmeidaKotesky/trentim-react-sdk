import * as React from 'react';
import DateSlider from '../DateSlider';
import {usePanelFilterController} from './hooks/usePanelFilterController';
import type { FilterOption } from '../models/interfaces/IPanelFilter';

function PanelFilter() {
    const {JSX, state, handlers} = usePanelFilterController();
    const {actualFilteredValues, panelTitle, availableFilters, isOpen, lastAddedTag} = state;
    const {FluentPanel, PrimaryButton, Dropdown, TagPicker, DefaultButton} = JSX;
    const {onClose, onCancel, getDefaultDropdownSelectedKeys, onAddOrRemoveToMap, getDefaultSelectedTag, setActualFilteredValues, listContainsTagList} = handlers;

    if (!isOpen) return null;
    return (
        <React.Suspense fallback={<div>...</div>}>
            <FluentPanel 
                onRenderFooter={_ => (<div style={{padding: 20}}>
                    <React.Suspense fallback={'...'}>
                        <PrimaryButton onClick={() => handlers.onApply(actualFilteredValues)} styles={{root: {marginRight: 8}}}>
                            Aplicar
                        </PrimaryButton>
                    </React.Suspense>
                    <React.Suspense fallback={'...'}>
                        <DefaultButton onClick={onCancel}>Cancelar</DefaultButton>
                    </React.Suspense>
                  </div>)}
                isFooterAtBottom={true}
                onDismiss={onClose} isOpen={isOpen}>
                <h2>{panelTitle}</h2>
                {availableFilters?.map((filter, idx) => {
                    const options = filter?.options
                    .filter(i => (i?.text !== null && i?.text !== undefined))
                    .map<FilterOption>(({ key, text, data }) => ({
                        key,
                        text,
                        data
                    }));
                    return (<React.Suspense fallback={'...'}>
                        {(filter.renderAs === 'Dropdown') ? 
                        <Dropdown
                            defaultSelectedKeys={getDefaultDropdownSelectedKeys()}
                            key={filter?.key + "-" + idx} options={options}
                            multiSelect={filter?.enableMultiple} label={filter?.name}
                            onChange={(_, opt) => onAddOrRemoveToMap(filter?.key, opt)} /> :
                        (filter.renderAs === 'SearchBox') ?
                        <div key={filter?.key + "-" + filter?.name + "-" + idx}>
                        <label>{filter?.name}</label>
                        <TagPicker 
                            key={filter?.key + "-" + idx}
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
                        (filter.renderAs === 'DateSlider') ?
                        <DateSlider
                            onChange={(d) => console.log(d)}
                            key={filter?.key + "-" + idx}
                            label={filter?.name}/> : null
                        }
                    </React.Suspense>);
                })}
            </FluentPanel>
        </React.Suspense>
    );
}

export default React.memo(PanelFilter);