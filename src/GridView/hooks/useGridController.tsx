import * as React from 'react';
import useRefCallback from '../../hooks/useRefWithCallback';
import { Utils } from '../../helpers/Utils';
import { useState, useEffect, useMemo } from 'react';
import { useGridCardRendering } from './useGridCardRendering';
import {GridViewFilter} from '../handlers/GridViewFilter';
import {GridViewGrouping} from '../handlers/GridViewGrouping';
import { IconClickCaller } from '../../helpers/enums';
import type { IGridListProps, IRow, TColumn } from '../../models/interfaces/IGridView';
import type { IListOptionsProps } from '../../models/interfaces/IListOptions';
import type { IPanelFilterProps, SelectedItemsMap } from '../../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../../models/interfaces/IGroupPanel';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { KeyAndName } from '../../models/types/Common';

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
    const [isFilterPanelOpen, setIsFilterPanel] = useState(false);
    const [isGroupPanelOpen, setIsGroupPanel] = useState(false);
    const [fromDate, setFromDate] = useState<Date>(null);
    const [toDate, setToDate] = useState(new Date());
    const [searchCb, currentSearchBoxItems] = useRefCallback<IRow[]>([]);

    useEffect(() => { setRenderAs(props?.renderAs); }, [props?.renderAs]);

    const onItemClick = (item: IRow) => !!props?.onItemClick && props?.onItemClick(item);
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

    const CardsList = useGridCardRendering({
        renderAs,
        actualRows,
        onItemClick,
        cardProps: props?.cardProps,
        enableGrouping,
        onRenderCustomComponent: props?.onRenderCustomComponent,
        setEnableGrouping,
        setShouldRenderCard,
        shouldRenderCard
    });

    useEffect(() => {
        if(!props?.columns?.length) return;
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
        });
        setCols(convertedColumns);
    }, [props?.columns]);

    useEffect(() => { setActualRows(props?.rows); setAllRows(props?.rows) }, [props?.rows?.length]);

    useEffect(() => {
        setCols(columns => [...columns.map(c => ({...c, onColumnClick: onColumnClick(actualRows)}))]);
    }, [actualRows?.length]);

    const memoizedAvailableFilter = useMemo(() => GridViewFilter.buildFilters(allRows, cols, props?.hiddenFilterKeys as string[]), [allRows?.length, cols?.length, props?.hiddenGroupKeys?.length]);

    const filterPanelConfig: IPanelFilterProps = {
        isOpen: isFilterPanelOpen,
        onApply: GridViewFilter.onApplyFilter({allRows, setActualRows, setIsFilterPanel, applyCustomFilter: props?.applyCustomFilter}),
        onCancel: () => { setIsFilterPanel(false); },
        onClose: () =>  { setIsFilterPanel(false); },
        availableFilters: memoizedAvailableFilter,
        panelTitle: props?.filterPanelTitle ?? 'Filtrar',
        actualFilteredValues,
        setActualFilteredValues,
        fromDate, toDate, setFromDate, setToDate
    }

    const groupPanelConfig: IGroupPanel = {
        isOpen: isGroupPanelOpen,
        onCancel: () => { setIsGroupPanel(false); },
        onClose: () =>  { setIsGroupPanel(false); },
        onOpen: () => { setIsGroupPanel(true); },
        panelTitle: props?.groupPanelTitle ?? 'Agrupar',
        setSelectedGroupKeys,
        selectedGroupKeys,
        options: GridViewFilter.filterFromColumns(props?.hiddenGroupKeys as string[], cols)?.map(c => ({key: c?.key, text: c?.name})) ?? [],
        onApply: GridViewGrouping.onApplyGrouping({
            actualRows,
            cols,
            emptyGroupLabel: props?.emptyGroupLabel,
            setIsGroupPanel,
            setGroups,
        })
    }

    const listConfig: IListOptionsProps = {
        ...props?.headerOptions,
        onSearchItemChange: GridViewFilter.onSearchItemChange({allRows, searchCb, setActualRows}),
        setRenderAs: () => renderAs === 'card' ? setRenderAs('list') : setRenderAs('card'),
        setIsFilterPanelOpen: (value) => { setIsFilterPanel(value); },
        setIsGroupPanelOpen: (value) => { setIsGroupPanel(value); },
        enableSearch: props?.headerOptions?.enableSearch ?? true,
        enableFilter: props?.headerOptions?.enableFilter ?? true,
        enableCardView: props?.headerOptions?.enableCardView ?? false,
        enableGrouping,
        onClickSearchIcon: (callerType, text, key) => {
            if(callerType === IconClickCaller.CLICK)
                return setActualRows(currentSearchBoxItems?.current);
            if(callerType === IconClickCaller.ENTER) {
                if(!text)
                    return setActualRows(allRows);
                const filteredItems = GridViewFilter.onSearchItemChange({allRows, searchCb, setActualRows})(text, key);
                searchCb(filteredItems);
                setActualRows(filteredItems);
            }
        }
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
        JSX: { CardsList }
    }
}