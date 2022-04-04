import * as React from 'react';
import { useState, useEffect, useMemo, lazy } from 'react';
import type { IGridListProps, IRow, TColumn } from '../../models/interfaces/IGridView';
import type { IListOptionsProps } from '../../models/interfaces/IListOptions';
import { Utils } from '../../helpers/Utils';
import type { FilterOption, IAvailableFilters, IPanelFilterProps, SelectedItemsMap } from '../../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../../models/interfaces/IGroupPanel';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { KeyAndName } from '../../models/types/Common';
import type { IInfoCardProps } from '../../models/interfaces/IInfoCardProps';

export function useGridController(props: IGridListProps<any>) {
    const [renderAs, setRenderAs] = useState<typeof props.renderAs>(props?.renderAs || 'list');
    const [shouldRenderCard, setShouldRenderCard] = useState(props?.renderAs === 'card');
    const [cols, setCols] = useState(props?.columns);
    const [groups, setGroups] = useState<IGroup[]>(undefined);
    const [enableGrouping, setEnableGrouping] = useState(props?.headerOptions?.enableGrouping ?? false);
    const [actualFilteredValues, setActualFilteredValues] = useState<SelectedItemsMap>(new Map());
    const [selectedGroupKeys, setSelectedGroupKeys] = useState<KeyAndName>(null);
    const [allRows, setAllRows] = useState(props?.rows);
    const [actualRows, setActualRows] = useState(props?.rows ?? []);
    const [currentFilteredRows, setCurFilteredRows] = useState<IRow[]>([]);
    const [isFilterPanelOpen, setIsFilterPanel] = useState(false);
    const [isGroupPanelOpen, setIsGroupPanel] = useState(false);

    useEffect(() => { setRenderAs(props?.renderAs); }, [props?.renderAs]);

    useEffect(() => {
        if(renderAs === 'card') {
            setShouldRenderCard(true);
            if(!props?.cardProps || Object?.keys(props?.cardProps)?.length === 0)
                console.error("[GridView] - You are using `renderAs: card`, but you are not passing cardProps. This will not work.");
            setEnableGrouping(false);
        }
        else {
            setShouldRenderCard(false);
            if(props?.headerOptions?.enableGrouping)
                setEnableGrouping(true);
        }
    }, [renderAs]);

    const Card = useMemo(() => {
        if(!shouldRenderCard) return null;
        return lazy(() => import('../../Card/Card').then((module) => ({ default: module?.default })));
    }, [shouldRenderCard]);

    const CardsList = useMemo(() => {
        if(!Card || renderAs === 'list')
            return [];
        
        return actualRows?.map(row => {
            const hasCustomCard = !!props?.onRenderCustomComponent;
            if(hasCustomCard)
                return props?.onRenderCustomComponent(row);
            const cProps = props?.cardProps;
            const cardTitle: string = Utils.getNestedObject(row, cProps?.cardTitleKey?.split('.')) || '';
            const cardSubtitle: string = Utils.getNestedObject(row, cProps?.cardSubtitleKey?.split('.')) || '';
            const rightCol = cProps?.rightColumn;
            const titleValue = Utils.getNestedObject(row, cProps?.circleIndicator?.title?.split('.') as any) as string;
            const circleIndicator = {
                ...cProps?.circleIndicator, 
                title: titleValue
            };
            const cardProps: IInfoCardProps = {
                ...cProps,
                cardTitle,
                cardSubtitle,
                cardRightColInformation: rightCol?.keys && {
                    ...rightCol,
                    values: rightCol?.keys?.map(opt => ({
                        title: Utils.getNestedObject(row, opt?.title?.split('.') as any),
                        style: opt?.style ??  { fontSize: 16, marginBottom: 4, fontWeight: 600 }
                    }))
                },
                circleIndicator,
                onClickDownButton: e => {
                    onItemClick(row);
                    if(cProps?.onCardClick)
                        cProps?.onCardClick(e);
                }
            }
            return (<Card key={row?.Id} {...cardProps} />);
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

    const onItemClick = (item: IRow) => {
        if (props?.onItemClick)
            props?.onItemClick(item);
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

    const onColumnClick = (currentRows: IRow[]) => (_: any, column: TColumn<any>): void => {
        if(!column) return;
        let isSortedDescending = column?.isSortedDescending;
        if (column?.isSorted) 
          isSortedDescending = !isSortedDescending;
    
        const sortedItems = Utils.copyAndSort(currentRows, column?.key, isSortedDescending);
        setActualRows(sortedItems);
        setCols(c => c.map(col => {
            col.isSorted = col.key === column?.key;
            if (col?.isSorted) 
              col.isSortedDescending = isSortedDescending;
            return col;
        }));
    }

    useEffect(() => {
        setCols(columns => {
            return columns?.map(c => {
                c.onColumnClick = onColumnClick(actualRows);
                return c;
            });
        });
    }, [actualRows?.length]);

    const onApplyFilter: IPanelFilterProps['onApply'] = (selectedItems) => {
        if(selectedItems.size === 0) {
            setActualRows(allRows);
            setCurFilteredRows([]);
            setIsFilterPanel(false);
            return;
        }
        const groupedMaps = groupMaps(selectedItems);
        let filteredRows: IRow[] = currentFilteredRows;
        for(const [mapKey, map] of groupedMaps.entries()) {
            const filterFrom = filteredRows?.length > 0 ? filteredRows : allRows;
            map?.forEach(value => {
                const ORrowsFromThisKey = filterFrom.filter(r => Utils.getNestedObject(r, mapKey.split('.')) === value?.text);
                if(ORrowsFromThisKey.length > 0 && !filteredRows?.map(r => r?.Id)?.includes(value?.data?.Id))
                    filteredRows.push(...ORrowsFromThisKey);
            });
        }
        const uniqueFilteredRows = filteredRows.filter((obj, pos, arr) => arr.map(mapObj => mapObj?.Id).indexOf(obj?.Id) === pos);
        if (uniqueFilteredRows.length > 0) {
            setActualRows(uniqueFilteredRows)
            setCurFilteredRows(uniqueFilteredRows);
        } else { 
            setActualRows(allRows);
            setCurFilteredRows([]);
        }
        setIsFilterPanel(false);
    }

    const onApplyGrouping = (keyAndName: KeyAndName) => {
        const defaultEmptyLabel = props?.emptyGroupLabel ?? 'Sem itens definidos';
        if(!keyAndName || keyAndName?.split(';')?.[0] === '@NONE') {
            setIsGroupPanel(false);
            return setGroups(undefined);
        }
        const groups: IGroup[] = [...actualRows]
        .sort((a, b) => (a?.Id as number )- (b?.Id as number))
        .reduce<IGroup[]>((acc, cur) => {
            const [key, name] = keyAndName?.split(';');
            let valueFromKey = Utils.getNestedObject(cur, key.split('.')) as string ?? defaultEmptyLabel;
            const isKeyADate = cols.find(i => i?.key === key)?.dateConversionOptions?.shouldConvertToLocaleString;
            if(isKeyADate)
                valueFromKey = Utils.convertIsoToLocaleString(valueFromKey, cols.find(i => i?.key === key)?.dateConversionOptions?.locales, cols.find(i => i?.key === key)?.dateConversionOptions?.formatOptions);
            const group: IGroup = {
                key: valueFromKey,
                name: `${name}: ${valueFromKey}`,
                startIndex: 0,
                count: 1,
            }
            if (acc.length === 0) {
                acc.push(group)
                return acc
            } else if (!acc?.map(i => i?.key).includes(valueFromKey)) {
                const count = acc?.filter(g => g?.key === valueFromKey).length;
                const startIndex = acc[acc.length - 1]?.startIndex + acc[acc.length - 1]?.count;
                acc.push({
                    key: valueFromKey,
                    name: `${name}: ${valueFromKey}`,
                    startIndex,
                    count
                });
            }
            const lastAcc = acc[acc.length - 1];
            if(lastAcc?.key === valueFromKey)
                acc[acc.length - 1].count++;
            return acc
        }, []);
        setGroups(groups);
        setIsGroupPanel(false);
    }

    const filterPanelConfig: IPanelFilterProps = {
        isOpen: isFilterPanelOpen,
        onApply: onApplyFilter,
        onCancel: () => { setIsFilterPanel(false); },
        onClose: () =>  { setIsFilterPanel(false); },
        onOpen: () => { setCurFilteredRows([]); },
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
        onApply: onApplyGrouping
    }

    const listConfig: IListOptionsProps = {
        ...props?.headerOptions,
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
        enableGrouping
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
            shouldRenderCard,
            groups
        },
        handlers: {
            onItemClick
        },
        JSX: {
            CardsList
        }
    }
}