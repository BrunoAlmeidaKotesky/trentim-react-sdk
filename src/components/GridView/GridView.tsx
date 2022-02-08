import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode, IColumn, IDetailsHeaderProps, IGroup } from '@fluentui/react/lib/DetailsList';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';
import { IGridListProps, INode, IRow } from '../../models/interfaces/IGridView';
import { ListOptions } from './ListOptions';

export const GridContainerContext = createContext({});
export const GridView = (props: IGridListProps) => {
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
    const [actualRows, setActualRows] = useState(props?.rows);

    useEffect(() => { setAllItems(props?.rows) }, [props?.rows?.length]);

    const onColumnClick = (_: unknown, column: IColumn): void => {
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
        const newItems = _copyAndSort(actualRows, currColumn.fieldName!, currColumn.isSortedDescending);
        setCols(newColumns);
        setActualRows(newItems);
    };

    function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
    }

    useEffect(() => {
        if (props.listType === 'file')
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

    const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (headerProps, defaultRender) => {
        return (
            <Sticky stickyPosition={StickyPositionType.Header} stickyBackgroundColor="transparent">
                <div>{defaultRender!(headerProps)}</div>
            </Sticky>
        );
    };

    const processNodes = (nodeItems: INode[] | undefined, groups: IGroup[], items: IRow[], level: number): void => {
        // end of recursion
        if (!nodeItems || !nodeItems?.length)
            return;
        // processing current level of the tree
        nodeItems.forEach(nodeItem => {
            const newGroup: IGroup = {
                key: nodeItem.key,
                name: nodeItem.title,
                startIndex: items.length,
                count: 0,
                children: [],
                level: level, // level is incremented on each call of the recursion
                data: nodeItem // storing initial INode instance in the group's data
            };

            groups.push(newGroup);
            if (nodeItem.items && nodeItem.items.length) {

                // adding items to the flat array
                items.push(...nodeItem.items);
            }

            // processing child nodes
            processNodes(nodeItem.children, newGroup.children!, items, level + 1);
            // current group count is a sum of group's leaf items and leaf items in all child nodes
            newGroup.count = items.length - newGroup.startIndex;
        });
    }

    return (
        <div>
            <ListOptions onSearchItem={(text, key) => {
                const filteredRows = text ?
                    allItems?.filter(item => {
                        const isKeyInsideFileObj = Object.keys(item?.file)?.includes(key as unknown as string);
                        const itemValue: string = isKeyInsideFileObj ? item?.file[key] : item?.[key];
                        console.log(key, itemValue)
                        return itemValue?.toLowerCase().includes(text.toLowerCase());
                    }) : allItems;
                setActualRows(filteredRows);
            }} {...props?.headerOptions} />
            <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0 }}>
                <DetailsList
                    {...props?.detailsListProps, {
                        items: actualRows,
                        columns: cols,
                        groups: props.groups,
                        groupProps: {
                            isAllGroupsCollapsed: props?.groups ? props?.groups.filter(gr => !gr?.isCollapsed)?.length === 0 : true,
                            collapseAllVisibility: CollapseAllVisibility.visible,
                            onRenderHeader: (props, defaultRender) => {
                                if (!props.group!.name)
                                    return <></>;
                                return defaultRender(props);
                            }
                        },
                        layoutMode: DetailsListLayoutMode.fixedColumns,
                        onRenderDetailsHeader: onRenderDetailsHeader,
                        isHeaderVisible: true,
                        checkboxVisibility: props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden,
                    }}
                />
            </div>
        </div>
    );
}