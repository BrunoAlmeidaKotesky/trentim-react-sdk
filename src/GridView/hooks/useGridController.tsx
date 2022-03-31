import * as React from 'react';
import { useState, useEffect, useMemo, lazy } from 'react';
import type { IGridListProps, IRow } from '../../models/interfaces/IGridView';
import type { IListOptionsProps } from '../../models/interfaces/IListOptions';
import { Utils } from '../../helpers/Utils';
import type { FilterOption, IAvailableFilters, IPanelFilterProps, SelectedItemsMap } from '../../models/interfaces/IPanelFilter';
import { IGroupPanel } from '../../models/interfaces/IGroupPanel';

export function useGridController(props: IGridListProps<any>) {
    const [renderAs, setRenderAs] = useState<typeof props.renderAs>(props?.renderAs || 'list');
    const [shouldRenderCard, setShouldRenderCard] = useState(props?.renderAs === 'card');
    const [cols, setCols] = useState(props?.columns);
    const [actualFilteredValues, setActualFilteredValues] = useState<SelectedItemsMap>(new Map());
    const [selectedGroupKeys, setSelectedGroupKeys] = useState<Map<string, string>>(new Map());
    const [allRows, setAllRows] = useState(props?.rows);
    const [actualRows, setActualRows] = useState(props?.rows ?? []);
    const [currentFilteredRows, setCurFilteredRows] = useState<IRow[]>([]);
    const [isFilterPanelOpen, setIsFilterPanel] = useState(false);
    const [isGroupPanelOpen, setIsGroupPanel] = useState(false);

    useEffect(() => { setRenderAs(props?.renderAs); }, [props?.renderAs]);

    useEffect(() => {
        if(renderAs === 'card') {
            setShouldRenderCard(true);
            if(!props?.cardProps)
                console.error("[GridView] - You are using `renderAs: card`, but you are not passing cardProps. This will not work.");
        }
        else setShouldRenderCard(false);
    }, [renderAs]);

    const Card = useMemo(() => {
        if(!shouldRenderCard) return null;
        return lazy(() => import('../../Card/Card').then((module) => ({ default: module?.default })));
    }, [shouldRenderCard]);

    const CardsList = useMemo(() => {
        if(!Card)
            return [];
        
        return actualRows?.map(row => {
            const hasCustomCard = !!props?.onRenderCustomComponent;
            if(hasCustomCard)
                return props?.onRenderCustomComponent(row);
            const cProps = props?.cardProps;
            const cardTitle: string = Utils.getNestedObject(row, cProps?.cardTitleKey?.split('.')) || '';
            const cardSubtitle: string = Utils.getNestedObject(row, cProps?.cardSubtitleKey?.split('.')) || '';
            const rightCol = cProps?.rightColumn;
            return (
            <Card
                key={row?.Id}
                cardRightColInformation={rightCol?.keys && {
                    ...rightCol,
                    values: rightCol?.keys?.map(opt => ({
                        title: Utils.getNestedObject(row, opt?.title?.split('.') as any),
                        style: opt?.style ??  { fontSize: 16, marginBottom: 4, fontWeight: 600 }
                    }))
                }}
                onCardClick={e => {
                    onRowClick(row);
                    if(cProps?.onCardClick)
                        cProps?.onCardClick(e);
                }}
                cardTitle={cardTitle}
                cardSubtitle={cardSubtitle}
                {...props?.cardProps} />
            );
        })
    }, [Card, props?.cardProps, actualRows, renderAs, props?.onRenderCustomComponent]);

    useEffect(() => {
        if (props?.columns?.length) {
            const columns = props?.columns;
            const convertedColumns = columns.map(c => {
                if (c?.key?.includes('.') || c?.fieldName?.includes('.')) {
                    c.onRender = (item, _2) => {
                        const fieldValue: string = Utils.getNestedObject(item, c?.fieldName?.split('.'));
                        return <span>{fieldValue}</span>;
                    }

                    return c;
                } else if (c?.dateConversionOptions?.shouldConvertToLocaleString) {
                    c.onRender = (item, _2) => {
                        const fieldValue = Utils.convertIsoToLocaleString(item[c?.fieldName ?? c?.key], c?.dateConversionOptions?.locales, c?.dateConversionOptions?.formatOptions);
                        return <span>{fieldValue}</span>;
                    }
                }
                return c;
            })
            setCols(convertedColumns);
        }
    }, [props?.columns]);

    useEffect(() => {
        setActualRows(props?.rows);
        setAllRows(props?.rows)
    }, [props?.rows?.length]);

    const onRowClick = (item: IRow) => {
        if (props?.onRowClick)
            props?.onRowClick(item);
    }

    const filterFromColumns = (hiddenKeys: string[] | Array<keyof IRow>) => cols.filter(c => (!hiddenKeys?.includes(c?.key)));

    /**Generate the dropdowns of each available column and it's unique values */
    const buildFilters = (): IAvailableFilters[] => {
        const filters: IAvailableFilters[] = [];
        const columnsToFilter = filterFromColumns(props?.hiddenFilterKeys);
        for (let index = 0; index < columnsToFilter.length; index++) {
            const col = columnsToFilter[index];
            const renderAs = col?.renderFilterAs ?? 'Dropdown';
            const keys = col?.key?.split('.') ?? col.fieldName?.split('.'); 
            const options: FilterOption[] = allRows?.filter(d => d)?.map((data, idx) => {
                let stringObject = Utils.getNestedObject(data, keys)?.toString();
                if (col?.dateConversionOptions?.shouldConvertToLocaleString)
                    stringObject = Utils.convertIsoToLocaleString(stringObject, col?.dateConversionOptions?.locales, col?.dateConversionOptions?.formatOptions);
                return {
                    key: idx + "_" + col?.key,
                    text: stringObject,
                    data
                };
            });
            const uniqueOptions = options?.filter((obj, pos, arr) => arr.map(mapObj => mapObj?.text).indexOf(obj?.text) === pos);

            filters.push({
                key: col?.key,
                options: uniqueOptions,
                enableMultiple: true,
                name: col?.name,
                renderAs
            });
        }
        return filters;
    }

    const groupMaps = (selectedItems: SelectedItemsMap): Map<string, SelectedItemsMap> => {
        const mapsByKeyKind = new Map<string, SelectedItemsMap>();
        selectedItems.forEach((_, key, map) => {
            let keyName = key.split('_')[1];
            if(!keyName && !key.includes('_'))
                keyName = key;
            const doesNotHaveKey = !mapsByKeyKind.has(keyName);
            const sameMapsList = [...map].filter(d => d[0] === key);
            if(doesNotHaveKey) 
                mapsByKeyKind.set(keyName, new Map(sameMapsList));
            else {
                const thisKindMap = mapsByKeyKind.get(keyName);
                sameMapsList.forEach(d => thisKindMap?.set(d[0], d[1]));
            } 
        });
        return mapsByKeyKind;
    }

    /**Isso deve estar O log n */
    const onApplyFilter: IPanelFilterProps['onApply'] = (selectedItems) => {
        if(selectedItems.size === 0) {
            setActualRows(allRows);
            setCurFilteredRows([]);
            setIsFilterPanel(false);
            return;
        }
        let orFilterAggregation: IRow[] = currentFilteredRows;
        const groupedMaps = groupMaps(selectedItems);
        const onlyNecessaryKeysToVerify = cols.filter(c => groupedMaps.has(c?.key)).map(c => c?.key);
        //An filter algorithm that if the groupMap key is the same is an OR operation and if it's different is an AND operation
        let currentIdx = 0;
        for(const [mapKey, map] of groupedMaps.entries()) {
            orFilterAggregation
            currentIdx += 1;
            console.log(`${mapKey}/${map.size}`, currentIdx);
        }

        for (let idx = 0; idx < allRows?.length; idx++) {
            const row = allRows[idx];
            const deepKey = Utils.getDeepKeys(row);
            const filteredKeys = onlyNecessaryKeysToVerify.filter(k => deepKey.includes(k));
            for (const key of filteredKeys) {
                let realKey: string = key;
                const valueFromKey = Utils.getNestedObject(row, key?.split('.'));
                if(valueFromKey === undefined || valueFromKey === null) continue;
                if(groupedMaps.has(realKey)) {
                    const thisKeyMap = groupedMaps.get(realKey);
                    thisKeyMap.forEach((v) => {
                        const currentFilteredIds = orFilterAggregation.map(r => r?.Id);
                        const mapKeyWithDots = (v?.rootItemKey as string)?.split('.');
                        const valueFromMap = Utils.getNestedObject(v?.data, mapKeyWithDots);
                        if(!(currentFilteredIds.includes(row?.Id)) && valueFromKey === valueFromMap)
                            orFilterAggregation.push(row);
                    });
                }
            }
        }
        if (orFilterAggregation.length > 0) {
            setActualRows(orFilterAggregation)
            setCurFilteredRows(orFilterAggregation);
        } else { 
            setActualRows(allRows);
            setCurFilteredRows([]);
        }
        setIsFilterPanel(false);
    }

    const filterPanelConfig: IPanelFilterProps = {
        isOpen: isFilterPanelOpen,
        onApply: onApplyFilter,
        onCancel: () => { setIsFilterPanel(false); },
        onClose: () =>  { setIsFilterPanel(false); },
        onOpen: () => { setCurFilteredRows([]); },
        //The available filters are the ones that are defined in the `columns` prop, and the options are the rows that are defined in the `rows` prop according to the key
        availableFilters: buildFilters(),
        panelTitle: props?.filterPanelTitle ?? 'Filtrar',
        actualFilteredValues,
        setActualFilteredValues
    }

    const groupPanelConfig: IGroupPanel = {
        isOpen: isGroupPanelOpen,
        onCancel: () => { setIsGroupPanel(false); },
        onClose: () =>  { setIsGroupPanel(false); },
        onOpen: () => { setIsGroupPanel(true); },
        panelTitle: props?.groupPanelTitle ?? 'Agrupar',
        setSelectedGroupKeys,
        selectedGroupKeys,
        options: filterFromColumns(props?.hiddenGroupKeys)?.map(c => ({key: c?.key, text: c?.name})) ?? [],
        onApply: (groupMap) => {
            if(groupMap.size === 0) return;
            console.warn('Grouping is not implemented yet');
        }
    }

    const listConfig: IListOptionsProps = {
        onSearchItem: (text, keys) => {
            const filteredRows: IRow[] = []; 
            if(!text)
                filteredRows.push(...allRows);
            else {
                filteredRows.push(...allRows?.filter(item => {
                    const itemValues: string[] = [];
                    for (const key of keys) {
                        const value = Utils.getNestedObject(item, (key as string)?.split('.'));
                        if(value !== undefined && value !== null)
                            itemValues.push(value.toString());
                    }
                    const containsText = itemValues.some(v => v?.toLowerCase().includes(text?.toLowerCase()));
                    return containsText;
                }));
            } 
            setActualRows(filteredRows);
            setCurFilteredRows(filteredRows);
        },
        setRenderAs: () => {
            if(renderAs === 'card')
                return setRenderAs('list');
            setRenderAs('card');
        },
        setIsFilterPanelOpen: (value) => { setIsFilterPanel(value); },
        setIsGroupPanelOpen: (value) => { setIsGroupPanel(value); },
        enableSearch: props?.headerOptions?.enableSearch ?? true,
        enableFilter: props?.headerOptions?.enableFilter ?? true,
        enableCardView: props?.headerOptions?.enableCardView ?? false,
        ...props?.headerOptions
    }

    return {
        state: {
            actualRows,
            cols,
            filterPanelConfig,
            groupPanelConfig,
            isFilterPanelOpen,
            isGroupPanelOpen,
            listConfig,
            shouldRenderCard
        },
        handlers: {
            onRowClick,
        },
        JSX: {
            CardsList
        }
    }
}