import * as React from 'react';
import { useState, useEffect } from 'react';
import { classNames } from './styles';
import type { IGridListProps, IRow } from '../models/interfaces/IGridView';
import { Utils } from '../helpers/Utils';
import type { FilterOption, IAvailableFilters, IPanelFilterProps, SelectedItemsMap } from '../models/interfaces/IPanelFilter';
import type { IColumn, IGroup } from '@fluentui/react/lib/DetailsList';

export function useGridController(props: IGridListProps<any>) {
    const [cols, setCols] = useState(props?.columns);
    const [allRows, setAllRows] = useState(props?.rows);
    const [actualRows, setActualRows] = useState(props?.rows ?? []);
    const [currentFilteredRows, setCurFilteredRows] = useState<IRow[]>([]);
    const [groups, setGroups] = useState(props?.groups);
    const [isFilterPanelOpen, setIsFilterPanel] = useState(false);

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
        if (props.listType === 'file' || props.listType === 'folder')
            setCols([{
                key: 'fileType',
                name: 'File Type',
                className: classNames.fileIconCell,
                iconClassName: classNames.fileIconHeaderIcon,
                ariaLabel: 'Column operations for File type, Press to sort on File type',
                iconName: 'Page',
                isIconOnly: true,
                fieldName: 'name',
                minWidth: 16,
                maxWidth: 16,
                onColumnClick,
                onRender: (item: IRow) => (<img src={item?.file?.iconUrl} className={classNames.fileIconImg} alt={`${item?.file?.fileType} file icon`} />),
            },
            {
                key: 'name',
                name: 'Nome',
                fieldName: 'name',
                minWidth: 210,
                maxWidth: 350,
                isRowHeader: true,
                isResizable: true,
                isSorted: true,
                isSortedDescending: false,
                sortAscendingAriaLabel: 'Sorted A to Z',
                sortDescendingAriaLabel: 'Sorted Z to A',
                onColumnClick,
                onRender: (item: IRow) => (<span>{item?.file?.name}</span>),
                data: 'string',
                isPadded: true,
            }, ...cols]);
        else setCols(props?.columns);
    }, [props?.listType]);

    useEffect(() => {
        setActualRows(props?.rows);
        setAllRows(props?.rows)
    }, [props?.rows?.length]);

    useEffect(() => {
        if (props?.listType === 'folder' && props?.rowsAsNode) {
            const nodes = props.rowsAsNode;
            const items: IRow[] = [];
            const groups: IGroup[] = [];
            Utils.processNodes(nodes, groups, items, 0);
            setActualRows(items);
            setGroups(groups);
        }
    }, [props?.rowsAsNode, props?.listType]);

    /**TO-DO: Implement this method to work with `INode[]` */
    const onColumnClick = (_: unknown, column: IColumn): void => {
        if (props?.rowsAsNode)
            return;
        const newColumns: IColumn[] = cols.slice();
        const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        const newItems = Utils.copyAndSort(actualRows, currColumn?.fieldName!, currColumn?.isSortedDescending);
        setCols(newColumns);
        setActualRows(newItems);
    };

    const onRowClick = (item: IRow) => {
        if (props?.onRowClick)
            props?.onRowClick(item);
    }
    /**Generate the dropdowns of each availabe column and it's unique values */
    const buildFilters = (): IAvailableFilters[] => {
        const filters: IAvailableFilters[] = [];
        for (let index = 0; index < cols.length; index++) {
            const col = cols[index];
            const keys = col?.key?.split('.') ?? col.fieldName?.split('.'); 
            const validRows = allRows?.every(r => {
                const obj = Utils.getNestedObject<string, any>(r, keys);
                return !!obj
            });
            if (validRows) {
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
                    name: col?.name
                });
            }
        }
        return filters;
    }

    const onApplyFilter: IPanelFilterProps['onApply'] = (selectedItems) => {
        if(selectedItems.size === 0) {
            setActualRows(allRows);
            setCurFilteredRows([]);
            return;
        }
        const mapsByKeyKind = new Map<string, SelectedItemsMap>();
        selectedItems.forEach((_, key, map) => {
            const keyName = key.split('_')[1];
            const doesntHaveKey = !mapsByKeyKind.has(keyName);
            const sameMapsList = [...map].filter(d => d[0] === key);
            if(doesntHaveKey) {
                mapsByKeyKind.set(keyName, new Map(sameMapsList));
            }
            else {
                const thisKindMap = mapsByKeyKind.get(keyName);
                sameMapsList.forEach(d => thisKindMap?.set(d[0], d[1]));
            } 
        });
        
        let andFilterAggregation: IRow[] = currentFilteredRows;
        for (let idx = 0; idx < allRows?.length; idx++) {
            const row = allRows[idx];
            for (const [key, _] of Object.entries(row)) {

                const sameKeyFromMap = [...selectedItems].filter((s) => {
                    const k = s[0];
                    return k.split("_")[1] === key;
                });
                if (sameKeyFromMap?.length > 0) {
                    sameKeyFromMap.forEach((_, idx) => {
                        const isSameValue = sameKeyFromMap[idx][1]['data'][key] === row[key];
                        if (isSameValue && !andFilterAggregation.map(r => r?.Id).includes(row?.Id)) {
                            andFilterAggregation = [...andFilterAggregation, row];
                        }
                    });

                }
            }
        }
        if (andFilterAggregation.length > 0) {
            setActualRows(andFilterAggregation)
            setCurFilteredRows(andFilterAggregation);
        } else { 
            setActualRows(allRows);
            setCurFilteredRows([]);
        }
    }

    const panelConfig: IPanelFilterProps = {
        isOpen: isFilterPanelOpen,
        onApply: onApplyFilter,
        onCancel: () => { setIsFilterPanel(false); setActualRows(allRows); setCurFilteredRows([])},
        onClose: () =>  { setIsFilterPanel(false); setActualRows(allRows); setCurFilteredRows([])},
        //The available filters are the ones that are defined in the `columns` prop, and the options are the rows that are defined in the `rows` prop according to the key
        availableFilters: buildFilters(),
        panelTitle: props?.filterPanelTitle ?? 'Filtrar',
    }

    return {
        state: {
            actualRows,
            cols,
            groups,
            panelConfig,
            allRows,
            isFilterPanelOpen
        },
        handlers: {
            onRowClick,
            setActualRows,
            setIsFilterPanel
        }
    }
}