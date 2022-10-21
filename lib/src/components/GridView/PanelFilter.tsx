import * as React from 'react';
import {Panel, PrimaryButton, DefaultButton, Dropdown, Label, TagPicker} from '@fluentui/react';
import {DateSlider} from './DateSlider';
import {PeoplePicker} from './PeoplePicker';
import {usePanelFilterController} from './hooks/usePanelFilterController';

function PanelFilter() {
    const {JSX, state, handlers} = usePanelFilterController();
    const {actualFilteredValues, panelTitle, isOpen, filterOptionsMatrix, availableFilters} = state;
    const { top, footer } = JSX;
    const { onClose, onCancel, getDefaultDropdownSelectedKeys, onAddOrRemoveToMap, 
            getDefaultSelectedTag, getDefaultSelectedSlider } = handlers;

    if (!isOpen) return null;
    return (
            <Panel 
                onRenderFooter={_ => (<>
                {!!footer ? footer : null}
                <div style={{padding: 20}}>
                    <PrimaryButton onClick={() => handlers.onApply(actualFilteredValues)} styles={{root: {marginRight: 8}}}>
                        Aplicar
                    </PrimaryButton>
                    <DefaultButton onClick={onCancel}>Cancelar</DefaultButton>
                  </div></>)}
                isFooterAtBottom={true}
                onDismiss={onClose} isOpen={isOpen}>
                {!!top ? top : null}
                <h2>{panelTitle}</h2>
                {availableFilters?.map((filter, idx) => {
                    return (<>
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
                            itemKey={filter?.key}
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
                    </>);
                })}
            </Panel>
    );
}

export default React.memo(PanelFilter);