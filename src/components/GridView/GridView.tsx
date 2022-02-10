import * as React from 'react';
import { useState, useEffect } from 'react';
import {FilterPaneContext, ListOptionsContext} from './Contexts';
import { classNames } from './styles';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode, IColumn, IGroup } from '@fluentui/react/lib/DetailsList';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import { IGridListProps, IRow } from '../../models/interfaces/IGridView';
import { PanelFilter } from './PanelFilter';
import { IAvailableFitlers, IPanelFilterProps } from '../../models/interfaces/IPanelFilter';
import { ListOptions } from './ListOptions';
import { Utils } from '../../helpers/Utils';

export const GridView = (props: IGridListProps<any>) => {
    const [cols, setCols] = useState(props?.columns);
    const [allRows, setAllRows] = useState(props?.rows);
    const [actualRows, setActualRows] = useState(props?.rows ?? []);
    const [groups, setGroups] = useState(props?.groups);
    const [isFilterPanelOpen, setIsFilterPanel] = useState(false);

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

    const buildFilters = (): IAvailableFitlers[] => {
        const filters: IAvailableFitlers[] = [];
        for (let index = 0; index < cols.length; index++) {
            const c = cols[index];
            const validRows = allRows?.every(r => r[c?.fieldName ?? c?.key]);
            if(validRows) {
                const options = allRows?.filter(d => d)?.map((data, idx) => {
                    return {
                        key: idx + "_" + c?.key,
                        text: data?.[c?.key ?? c?.fieldName ?? c?.key]?.toString(),
                        data
                    };
                });
                //Remove duplicates from options checking if the text repeats.
                // const uniqueOptions = options?.filter((obj, pos, arr) => {
                //     return arr.map(mapObj => mapObj?.text).indexOf(obj?.text) === pos;
                // });               

                filters.push({
                    key: c?.key,
                    options,
                    enableMultiple: true,
                    name: c?.name
                });
            }
        }
        //Remove repeated values from filters, cehcking if the text inside the options is repeated
        

        return filters;
    }

    const panelConfig: IPanelFilterProps = {
        isOpen: isFilterPanelOpen,
        onApply: (selectedItems) => {
            //filter the rows according to the selected items, where the key is the rootItemKey
            const newFilteredRows: IRow[] = [];
            for (let idx = 0; idx < allRows?.length; idx++) {
                const row = allRows[idx];
                for (const [key, value] of Object.entries(row)) {
                    let stringfiedMapValue = null;
                    try {
                        stringfiedMapValue = JSON.stringify(selectedItems.get(`${idx}_${key}`)?.text);
                    } catch (e) {
                        console.error(`Error while stringifying the value of the map: ${e}`);
                    }
                    if(stringfiedMapValue === JSON.stringify(value)) {
                        //Only push if the row is not already in the newFilteredRows
                        if (!newFilteredRows.some(r => r?.Id === row?.Id)) {
                            newFilteredRows.push(row);
                            continue;
                        }
                    }
                }
            }
            if(newFilteredRows.length > 0)
                setActualRows(newFilteredRows);
            else setActualRows(allRows);
        },
        onCancel: () => { setIsFilterPanel(false); setActualRows(allRows); },
        onClose: () => setIsFilterPanel(false),
        //The available filters are the ones that are defined in the `columns` prop, and the options are the rows that are defined in the `rows` prop according to the key
        availableFilters: buildFilters(),
        panelTitle: props?.filterPanelTitle ?? 'Filtrar',
    }

    return (
        <FilterPaneContext.Provider value={panelConfig}>
            <ListOptionsContext.Provider value={{
                onSearchItem: (text, key) => {
                    const filteredRows = text ?
                        allRows?.filter(item => {
                            const isKeyInsideFileObj = item?.file ? Object.keys(item?.file)?.includes(key as unknown as string) : false;
                            const itemValue: string = isKeyInsideFileObj ? item?.file[key] : item?.[key];
                            console.log(key, itemValue)
                            return itemValue?.toLowerCase().includes(text.toLowerCase());
                        }) : allRows;
                    setActualRows(filteredRows);
                },
                setIsFilterPanelOpen: (value) => { setIsFilterPanel(value); },
                ...props?.headerOptions
            }}>
                <div>
                    <ListOptions />
                    <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0 }}>
                        <DetailsList
                            {...props?.detailsListProps}
                            onRenderRow={(p, defaultRender) => <div onClick={() => onRowClick(p?.item)}>{defaultRender({ ...p, styles: { root: { cursor: props?.onRowClick ? 'pointer' : 'default' } } })}</div>}
                            items={actualRows} columns={cols} groups={groups}
                            groupProps={{
                                isAllGroupsCollapsed: props?.groups ? props?.groups.filter(gr => !gr?.isCollapsed)?.length === 0 : true,
                                collapseAllVisibility: CollapseAllVisibility.visible,
                                onRenderHeader: (props, defaultRender) => {
                                    if (!props.group!.name)
                                        return <></>;
                                    return defaultRender(props);
                                }
                            }}
                            layoutMode={DetailsListLayoutMode.fixedColumns} isHeaderVisible={true}
                            onRenderDetailsHeader={(headerProps, defaultRender) => (
                                <Sticky key={headerProps?.key} stickyPosition={StickyPositionType.Header} stickyBackgroundColor="transparent">
                                    <div key={headerProps?.key}>{defaultRender!(headerProps)}</div>
                                </Sticky>)}
                            checkboxVisibility={props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden}
                        />
                    </div>
                    {isFilterPanelOpen && <PanelFilter />}
                </div>
            </ListOptionsContext.Provider>
        </FilterPaneContext.Provider>);
}