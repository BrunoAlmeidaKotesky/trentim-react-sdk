import * as React from 'react';
import { lazy, useContext, useMemo, Suspense, useState } from 'react';
import { FilterPaneContext } from './GridView';
import type { IDropdownOption } from '@fluentui/react';
import type { IRow } from '../../models/interfaces/IGridView';
import type { FilterOption } from '../../models/interfaces/IPanelFilter';

export const PanelFilter = React.memo(() => {
    const { isOpen, onClose, availableFilters, panelTitle } = useContext(FilterPaneContext);
    const [FluentPanel, Dropdown] = useMemo(() => {
        const [actualFilteredValues, setActualFilteredValues] = useState<Map<keyof IRow, Map<string | number, FilterOption>>>(new Map());
        const Panel = lazy(() => import('@fluentui/react/lib/Panel').then(({ Panel }) => ({ default: Panel })));
        const DropDown = lazy(() => import('@fluentui/react/lib/Dropdown').then(({ Dropdown }) => ({ default: Dropdown })));
        return [Panel, DropDown];
    }, []);

    const onChange = (_, option: IDropdownOption<IRow>) => {
        //If the current option is selected and is not already on the actualFilteredValues map, add it
        //else if the current option is not select and all the other options are not select too, remove the key from the map
        if (option.selected && !actualFilteredValues.has(filter?.key as keyof IRow))
            actualFilteredValues.set(filter?.key as keyof IRow, new Map([[option.data.key, option.data]]));
        //If the current option is not selected and the actualFilteredValues map has the current filter key, remove it
        else if (!option.selected && actualFilteredValues.has(filter?.key as keyof IRow))
            actualFilteredValues.delete(filter?.key as keyof IRow);
        //If the current option is selected and the actualFilteredValues map has the current filter key, add it
        else if (option.selected && actualFilteredValues.has(filter?.key as keyof IRow))
            actualFilteredValues.get(filter?.key as keyof IRow)?.set(option.data.key, option.data);
        //If the current option is not selected and the actualFilteredValues map has the current filter key, remove it
        else if (!option.selected && actualFilteredValues.has(filter?.key as keyof IRow))
            actualFilteredValues.get(filter?.key as keyof IRow)?.delete(option.data.key);
        setActualFilteredValues(new Map(actualFilteredValues));
    }

    if (!isOpen)
        return null;
    return (
        <Suspense fallback={<div>...</div>}>
            <FluentPanel onDismiss={onClose} isOpen={isOpen}>
                <h2>{panelTitle}</h2>
                {availableFilters?.map(filter => {
                    const options = filter?.options?.map<IDropdownOption<IRow>>(({ key, text, data }) => {
                        return {
                            key,
                            text,
                            data
                        };
                    });
                    return (
                        <Dropdown
                            key={filter?.key} options={options}
                            multiSelect={filter?.enableMultiple} label={filter?.name}
                            onChange={} />
                    )
                })}
            </FluentPanel>
        </Suspense>
    );
});