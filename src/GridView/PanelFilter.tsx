import * as React from 'react';
import { lazy, useContext, useMemo, Suspense, useState } from 'react';
import { FilterPaneContext } from './Contexts';
import type { FilterOption, SelectedItemsMap } from '../models/interfaces/IPanelFilter';

function PanelFilter() {
    const [actualFilteredValues, setActualFilteredValues] = useState<SelectedItemsMap>(new Map());
    const { isOpen, onClose, availableFilters, panelTitle, onCancel, onApply} = useContext(FilterPaneContext);
    const [FluentPanel, Dropdown, PrimaryButton, DefaultButton] = useMemo(() => {
        const Panel = lazy(() => import('@fluentui/react/lib/Panel').then(({ Panel }) => ({ default: Panel })));
        const DropDown = lazy(() => import('@fluentui/react/lib/Dropdown').then(({ Dropdown }) => ({ default: Dropdown })));
        const PrimaryButton = lazy(() => import('@fluentui/react/lib/Button').then(({ PrimaryButton }) => ({ default: PrimaryButton })));
        const DefaultButton = lazy(() => import('@fluentui/react/lib/Button').then(({ DefaultButton }) => ({ default: DefaultButton })));
        return [Panel, DropDown, PrimaryButton, DefaultButton];
    }, []);

    const onChange = (rootItemKey: string, option: FilterOption) => {
        //If the current option is selected and is not already on the actualFilteredValues map, add it
        //else if the current option is not select and all the other options are not select too, remove the key from the map
        const copyMap = new Map(actualFilteredValues);
        if (option.selected && !copyMap.has(option?.key as string)) {
            copyMap.set(option.key as string, { rootItemKey, itemKey: option.key, data: option?.data, text: option?.text });
        }
        else if (!option.selected && copyMap.has(option?.key as string)) {
            copyMap.delete(option?.key as string); 
        }
        setActualFilteredValues(copyMap);
    }

    if (!isOpen)
        return null;
    return (
        <Suspense fallback={<div>...</div>}>
            <FluentPanel 
                onRenderFooter={_ => (<div>
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
                        <Dropdown
                            key={filter?.key} options={options}
                            multiSelect={filter?.enableMultiple} label={filter?.name}
                            onChange={(_, opt) => onChange(filter?.key, opt)} />
                    </Suspense>);
                })}
            </FluentPanel>
        </Suspense>
    );
}

export default React.memo(PanelFilter);