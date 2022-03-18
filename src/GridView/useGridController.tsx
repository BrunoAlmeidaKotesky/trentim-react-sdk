import * as React from 'react';
import { useState, useEffect } from 'react';
import {classNames} from './styles';
import type { IGridListProps, IRow } from '../models/interfaces/IGridView';
import { Utils } from '../helpers/Utils';
import type { FilterOption, IAvailableFilters, IPanelFilterProps, SelectedItemsMap } from '../models/interfaces/IPanelFilter';
import type { IGroup } from '@fluentui/react/lib/DetailsList';

export function useGridController(props: IGridListProps<any>) {
    const [cols, setCols] = useState(props?.columns);
    const [actualFilteredValues, setActualFilteredValues] = useState<SelectedItemsMap>(new Map());
    const [allRows, setAllRows] = useState(props?.rows);
    const [actualRows, setActualRows] = useState(props?.rows ?? []);
    const [currentFilteredRows, setCurFilteredRows] = useState<IRow[]>([]);
    const [groups, setGroups] = useState(props?.groups);
    const [isFilterPanelOpen, setIsFilterPanel] = useState(false);

    useEffect(() => {
        if(props?.autoFileDisplay) {
            if((!props?.rowsAsNode) && props.renderAs !== 'tree') {
                console.warn("You are using `autoFileDisplay`, but you are not using rowsAsNode. This will not work.");
            }
        }
    }, [props?.autoFileDisplay, props?.rowsAsNode, props?.renderAs]);

    //Effects
    useEffect(() => {
        if (props?.columns?.length) {
            const columns = props?.columns;
            const convertedColumns = columns.map(c => {
                if (c?.key?.includes('.') || c?.fieldName?.includes('.')) {
                    c.onRender = (item, _2) => {
                        const fieldValue = Utils.findObjectByPath(item, c?.fieldName?.split('.')) as any ?? '-';
                        return <span>{fieldValue}</span>;
                    }

                    return c;
                } else if (c?.dateConvertionOptions?.shouldConvertToLocaleString) {
                    c.onRender = (item, _2) => {
                        const fieldValue = Utils.convertIsoToLocaleString(item[c?.fieldName ?? c?.key], c?.dateConvertionOptions?.locales, c?.dateConvertionOptions?.formatOptions);
                        return <span>{fieldValue}</span>;
                    }
                }
                return c;
            })
            setCols(convertedColumns);
        }
    }, [props?.columns]);

    useEffect(() => {
        if (props.renderAs === 'tree' && props?.autoFileDisplay)
            setCols([{
                key: 'file.iconUrl',
                name: 'ícone',
                className: classNames.fileIconCell,
                iconClassName: classNames.fileIconHeaderIcon,
                ariaLabel: 'Column operations for File type, Press to sort on File type',
                iconName: 'Page',
                isIconOnly: true,
                fieldName: 'file.iconUrl',
                minWidth: 16,
                maxWidth: 16,
                onRender: (item: IRow) => (<img src={item?.file?.iconUrl} className={classNames.fileIconImg} alt={`${item?.file?.fileType} file icon`} />),
            },
            {
                key: 'file.name',
                name: 'Nome',
                fieldName: 'file.name',
                minWidth: 210,
                maxWidth: 350,
                isRowHeader: true,
                isResizable: true,
                isSorted: true,
                isSortedDescending: false,
                sortAscendingAriaLabel: 'Sorted A to Z',
                sortDescendingAriaLabel: 'Sorted Z to A',
                onRender: (item: IRow) => (<span>{item?.file?.name}</span>),
                data: 'string',
                isPadded: true,
            }, ...cols]);
        else setCols(props?.columns);
    }, [props?.renderAs, props?.autoFileDisplay]);

    useEffect(() => {
        setActualRows(props?.rows);
        setAllRows(props?.rows)
    }, [props?.rows?.length]);

    useEffect(() => {
        if (props?.renderAs === 'tree' && props?.rowsAsNode) {
            const nodes = props.rowsAsNode;
            const items: IRow[] = [];
            const groups: IGroup[] = [];
            Utils.processNodes(nodes, groups, items, 0);
            setActualRows(items);
            setAllRows(items);
            setGroups(groups);
        }
    }, [props?.rowsAsNode, props?.renderAs]);

    const onRowClick = (item: IRow) => {
        if (props?.onRowClick)
            props?.onRowClick(item);
    }
    /**Generate the dropdowns of each availabe column and it's unique values */
    const buildFilters = (): IAvailableFilters[] => {
        const filters: IAvailableFilters[] = [];
        const columnsToFilter = cols.filter(c => (!props?.hiddenFilterKeys?.includes(c?.key)));
        for (let index = 0; index < columnsToFilter.length; index++) {
            const col = columnsToFilter[index];
            const renderAs = col?.renderFilterAs ?? 'Dropdown';
            const keys = col?.key?.split('.') ?? col.fieldName?.split('.'); 
            const options: FilterOption[] = allRows?.filter(d => d)?.map((data, idx) => {
                let stringObject = Utils.getNestedObject(data, keys)?.toString();
                if (col?.dateConvertionOptions?.shouldConvertToLocaleString)
                    stringObject = Utils.convertIsoToLocaleString(stringObject, col?.dateConvertionOptions?.locales, col?.dateConvertionOptions?.formatOptions);
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
            const keyName = key.split('_')[1];
            const doesntHaveKey = !mapsByKeyKind.has(keyName);
            const sameMapsList = [...map].filter(d => d[0] === key);
            if(doesntHaveKey) 
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
            return;
        }
        const groupedMaps = groupMaps(selectedItems);
        //const allGroupMapKeys = [...groupedMaps.keys()]?.flatMap(i => i?.split('.')) ?? [];
        const onlyNecessaryKeysToVerify = cols.filter(c => groupedMaps.has(c?.key)).map(c => c?.key);
        let orFilterAggregation: IRow[] = currentFilteredRows;
        for (let idx = 0; idx < allRows?.length; idx++) {
            const row = allRows[idx];
            const deepKey = Utils.getDeepKeys(row);
            const filteredKeys = onlyNecessaryKeysToVerify.filter(k => deepKey.includes(k));
            for (const key of filteredKeys) {
                let realKey: string = key;
                const valueFromKey = Utils.getNestedObject(row, key?.split('.'));
                if(valueFromKey === undefined ||valueFromKey === null) continue;
                if(groupedMaps.has(realKey)) {
                    const thisKeyMap = groupedMaps.get(realKey);
                    thisKeyMap.forEach((v) => {
                        const currentFilteredIds = orFilterAggregation.map(r => r?.Id);
                        const mapKeyWithDots = (v.rootItemKey as string)?.split('.');
                        const valueFromMap = Utils.getNestedObject(v.data, mapKeyWithDots);
                        if(!(currentFilteredIds.includes(row.Id)) && valueFromKey === valueFromMap)
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

    const panelConfig: IPanelFilterProps = {
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

    return {
        state: {
            actualRows,
            cols,
            groups,
            panelConfig,
            allRows,
            isFilterPanelOpen,
        },
        handlers: {
            onRowClick,
            setActualRows,
            setIsFilterPanel,
        }
    }
}