import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode, IColumn, IGroup } from '@fluentui/react/lib/DetailsList';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { IGridListProps, INode, IRow } from '../../models/interfaces/IGridView';
import { ListOptions } from './ListOptions';
import { Utils } from '../../helpers/Utils';

export const GridContainerContext = createContext({});
export const GridView = (props: IGridListProps<any>) => {
    const classNames = mergeStyleSets({
        fileIconHeaderIcon: {
            padding: 0,
            fontSize: '16px',
        },
        fileIconCell: {
            textAlign: 'center',
            selectors: {
                '&:before': {
                    content: '.',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    height: '100%',
                    width: '0px',
                    visibility: 'hidden',
                },
            },
        },
        fileIconImg: {
            verticalAlign: 'middle',
            maxHeight: '16px',
            maxWidth: '16px',
        },
        controlWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        exampleToggle: {
            display: 'inline-block',
            marginBottom: '10px',
            marginRight: '30px',
        },
        selectionDetails: {
            marginBottom: '20px',
        },
    });

    const [cols, setCols] = useState(props?.columns);
    const [allItems, setAllItems] = useState(props?.rows);
    const [actualRows, setActualRows] = useState(props?.rows ?? []);
    const [groups, setGroups] = useState(props?.groups);

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
                } else if(c?.dateConvertionOptions?.shouldConvertToLocaleString) {
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
        setAllItems(props?.rows) 
    }, [props?.rows?.length]);

    useEffect(() => {
        if (props?.listType === 'folder' && props?.rowsAsNode) {
            const nodes = props.rowsAsNode;
            const items: IRow[] = [];
            const groups: IGroup[] = [];
            processNodes(nodes, groups, items, 0);
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
        const newItems = copyAndSort(actualRows, currColumn?.fieldName!, currColumn?.isSortedDescending);
        setCols(newColumns);
        setActualRows(newItems);
    };

    function copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
    }

    const processNodes = (nodeItems: INode[] | undefined, groups: IGroup[], items: IRow[], level: number): void => {
        // end of recursion
        if (!nodeItems || !nodeItems?.length)
            return;
        // processing current level of the tree
        nodeItems.forEach(nodeItem => {
            const newGroup: IGroup = {
                key: nodeItem.key,
                name: nodeItem.title,
                startIndex: items?.length,
                count: 0,
                children: [],
                level: level, // level is incremented on each call of the recursion
                data: nodeItem // storing initial INode instance in the group's data
            };

            groups.push(newGroup);
            if (nodeItem?.items && nodeItem?.items?.length) {

                // adding items to the flat array
                items.push(...nodeItem?.items);
            }

            // processing child nodes
            processNodes(nodeItem.children, newGroup.children!, items, level + 1);
            // current group count is a sum of group's leaf items and leaf items in all child nodes
            newGroup.count = items?.length - newGroup.startIndex;
        });
    }

    return (
        <div>
            <ListOptions onSearchItem={(text, key) => {
                const filteredRows = text ?
                    allItems?.filter(item => {
                        const isKeyInsideFileObj = item?.file ? Object.keys(item?.file)?.includes(key as unknown as string) : false;
                        const itemValue: string = isKeyInsideFileObj ? item?.file[key] : item?.[key];
                        console.log(key, itemValue)
                        return itemValue?.toLowerCase().includes(text.toLowerCase());
                    }) : allItems;
                setActualRows(filteredRows);
            }} {...props?.headerOptions} />
            <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0 }}>
                <DetailsList
                    {...props?.detailsListProps}
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
        </div>
    );
}