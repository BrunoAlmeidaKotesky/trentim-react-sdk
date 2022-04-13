import * as React from 'react';
import {DateSlider} from './DateSlider';
import {PeoplePicker} from './PeoplePicker';
import {usePanelFilterController} from './hooks/usePanelFilterController';

function PanelFilter() {
    const {JSX, state, handlers} = usePanelFilterController();
    const {actualFilteredValues, panelTitle, isOpen, filterOptionsMatrix, availableFilters} = state;
    const {FluentPanel, PrimaryButton, Dropdown, TagPicker, DefaultButton, Label} = JSX;
    const { onClose, onCancel, getDefaultDropdownSelectedKeys, onAddOrRemoveToMap, 
            getDefaultSelectedTag, getDefaultSelectedSlider } = handlers;

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
                    return (<React.Suspense key={filter?.key + "-" + idx} fallback={'...'}>
                        {(filter.renderAs === 'Dropdown') ? 
                        <Dropdown
                            defaultSelectedKeys={getDefaultDropdownSelectedKeys()}
                            key={filter?.key + "-" + idx} options={filterOptionsMatrix[idx]}
                            multiSelect={filter?.enableMultiple} label={filter?.name}
                            onChange={(_, opt) => onAddOrRemoveToMap(filter?.key, opt)} /> :
                        (filter.renderAs === 'SearchBox') ?
                        <div key={filter?.key + "-" + filter?.name + "-" + idx}>
                        <Label>{filter?.name}</Label>
                        <TagPicker 
                            key={filter?.key + "-" + idx}
                            getTextFromItem={item => item?.name}
                            defaultSelectedItems={getDefaultSelectedTag(filter.key)}
                            pickerSuggestionsProps={{
                                suggestionsHeaderText: "Sugestões",
                                noResultsFoundText: "Nenhum resultado encontrado",
                                loadingText: "Carregando..."
                            }}
                            pickerCalloutProps={{
                                doNotLayer: true,
                                style: {overflowY: 'auto'},
                                styles: {root: {position: 'relative'}}
                            }}
                            onChange={handlers.onChangeTags(filterOptionsMatrix[idx])}
                            onItemSelected={handlers.onTagSelected(filter?.key)}
                            onResolveSuggestions={handlers.onResolveTagSuggestion(filterOptionsMatrix[idx])} /></div> :
                        (filter.renderAs === 'DateSlider') ?
                        <DateSlider
                            defaultSliderValue={getDefaultSelectedSlider(filter?.key)}
                            onRecordDateRange={handlers.onRecordDateChange(filter?.key)}
                            key={filter?.key + "-" + idx}
                            label={filter?.name}/> :
                        (filter?.renderAs === 'PeoplePicker') ?
                        <div>
                        <Label key={filter?.key + "-" + filter?.name + "-" + idx}>{filter?.name}</Label>
                        <PeoplePicker
                            label={''}
                            key={filter?.key + "-" + idx}
                            people={filterOptionsMatrix[idx]}
                            defaultSelectedItems={handlers.getDefaultSelectedPeople(filter?.key)}
                            onChangePeople={handlers.onChangePeople(filter?.key)} /> 
                        </div> : null
                        }
                    </React.Suspense>);
                })}
            </FluentPanel>
        </React.Suspense>
    );
}

export default React.memo(PanelFilter);