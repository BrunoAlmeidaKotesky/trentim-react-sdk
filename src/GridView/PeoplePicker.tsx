import * as React from 'react';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { CompactPeoplePicker, IBasePickerSuggestionsProps, ValidationState } from '@fluentui/react/lib/Pickers';

const suggestionProps: IBasePickerSuggestionsProps = {
    suggestionsHeaderText: 'Pessoas sugeridas',
    mostRecentlyUsedHeaderText: 'Pessoas mais recentes',
    noResultsFoundText: 'Nenhum resultado encontrado',
    loadingText: 'Carregando',
    showRemoveButtons: true,
    suggestionsAvailableAlertText: 'Sugestões disponíveis',
    suggestionsContainerAriaLabel: 'Pessoas sugeridas',
};

interface IPeoplePickerProps {
    label: string;
    people: IPersonaProps[];
    onChangePeople: (items: IPersonaProps[]) => void;
    defaultSelectedItems?: IPersonaProps[];
}

export const PeoplePicker = (props: IPeoplePickerProps) => {
    const [peopleList, setPeopleList] = React.useState<IPersonaProps[]>(props.people);
    const picker = React.useRef(null);

    const onFilterChanged = (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number): IPersonaProps[] | Promise<IPersonaProps[]> => {
        if (!filterText)
            return [];
        let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);
        filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
        filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
        return filteredPersonas;
    };

    const filterPersonasByText = (filterText: string)=> peopleList.filter(item => doesTextStartWith(item.text as string, filterText));
    
    const onRemoveSuggestion = (item: IPersonaProps): void => {
        const indexPeopleList: number = peopleList.indexOf(item);
        if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = peopleList
                .slice(0, indexPeopleList)
                .concat(peopleList.slice(indexPeopleList + 1));
            setPeopleList(newPeople);
        }
    };

    return (
        <div>
            <label>{props.label}</label>
            <CompactPeoplePicker
                onResolveSuggestions={onFilterChanged}
                getTextFromItem={getTextFromItem}
                pickerSuggestionsProps={suggestionProps}
                defaultSelectedItems={props?.defaultSelectedItems}
                onChange={props?.onChangePeople}
                className={'ms-PeoplePicker'}
                onRemoveSuggestion={onRemoveSuggestion}
                onValidateInput={validateInput}
                componentRef={picker}
                resolveDelay={300}
            />
        </div>
    );
};

const doesTextStartWith = (text: string, filter: string) => text?.toLowerCase()?.indexOf(filter?.toLowerCase()) === 0;

const removeDuplicates = (personas: IPersonaProps[], possibleDupes: IPersonaProps[]) => personas.filter(persona => !listContainsPersona(persona, possibleDupes));

function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
    if (!personas || !personas.length || personas.length === 0) 
        return false;
    return personas.filter(item => item?.text === persona?.text)?.length > 0;
}

const getTextFromItem = (persona: IPersonaProps) => persona?.text;

function validateInput(input: string): ValidationState {
    if (input.indexOf('@') !== -1) 
        return ValidationState.valid;
    else if (input.length > 1) 
        return ValidationState.warning;
    return ValidationState.invalid;
}