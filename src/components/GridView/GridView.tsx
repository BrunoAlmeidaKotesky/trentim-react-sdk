import { DetailsList, DetailsListLayoutMode, IColumn, IDetailsHeaderProps } from '@fluentui/react/lib/DetailsList';
import { ScrollablePane, ScrollbarVisibility } from '@fluentui/react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';
import React, { createContext, useState, useEffect, memo } from 'react';
import { IGridListProps, IRow } from '../../models/interfaces/IGridView';
import { ListOptions } from './ListOptions';

export const GridContainerContext = createContext({});
export const GridView = memo((props: IGridListProps) => {
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

    const onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
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
        if (props.listType === 'folder')
            setCols([{
                key: 'column1',
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
                onRender: (item: IRow) => (<img src={item?.file?.iconName} className={classNames.fileIconImg} alt={`${item?.file?.fileType} file icon`} />),
            },
            {
                key: 'column2',
                name: 'Name',
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

    return (
        <div>
            <ListOptions onSearchItem={(text, key) => {
                const filteredRows = text ? 
                    allItems?.filter(item => {
                        const itemValue = item?.[key] as string;
                        return itemValue?.toLowerCase()?.indexOf(text) > -1
                    }) : allItems;
                setActualRows(filteredRows);
            }} {...props?.listOptions} />
            <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0 }}>
                <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                    <DetailsList
                        items={actualRows}
                        columns={cols}
                        groups={props.groups}
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        onRenderDetailsHeader={onRenderDetailsHeader}
                        isHeaderVisible={true}
                        {...props}
                    />
                </ScrollablePane>
            </div>
        </div>
    );
});