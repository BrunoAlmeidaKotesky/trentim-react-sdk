import * as React from 'react';
import {useRefWithCallback} from '../../hooks/useRefWithCallback';
import { Utils } from '../../helpers/Utils';
import { useState, useEffect, useMemo } from 'react';
import { useGridCardRendering } from './useGridCardRendering';
import {GridViewFilter} from '../handlers/GridViewFilter';
import {GridViewGrouping} from '../handlers/GridViewGrouping';
import {GridViewMapper} from '../handlers/GridViewMapper';
import { IconClickCaller, GroupOrder } from '../../helpers/enums';
import type { IGridListProps, IRow, TColumn, BaseType } from '../../models/interfaces/IGridView';
import type { IListOptionsProps } from '../../models/interfaces/IListOptions';
import type { IAvailableFilters, IPanelFilterProps, SelectedItemsMap } from '../../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../../models/interfaces/IGroupPanel';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { KeyAndName } from '../../models/types/Common';

/** TO-DO: Use `useReducer` with context for better code splitting. */
export function useGridController<T extends BaseType>(props: IGridListProps<T>) {
    const [renderAs, setRenderAs] = useState<typeof props.renderAs>(props?.renderAs || 'list');
    const [shouldRenderCard, setShouldRenderCard] = useState(props?.renderAs === 'card');
    const [cols, setCols] = useState(props?.columns);
    const [groups, setGroups] = useState<IGroup[]>(undefined);
    const [enableGrouping, setEnableGrouping] = useState(props?.headerOptions?.enableGrouping ?? false);
    const [actualFilteredValues, setActualFilteredValues] = useState<SelectedItemsMap>(new Map());
    const [selectedGroupKeys, setSelectedGroupKeys] = useState<KeyAndName>(null);
    const [allRows, setAllRows] = useState(props?.rows);
    const [actualRows, setActualRows] = useState<IRow<T>[]>(props?.rows ?? []);
    const [isFilterPanelOpen, setIsFilterPanel] = useState(false);
    const [isGroupPanelOpen, setIsGroupPanel] = useState(false);
    const [dateValue, setFilterDate] = useState<Map<string, {fromDate: Date, toDate: Date}>>(null);
    const [searchCb, currentSearchBoxItems] = useRefWithCallback<IRow[]>([]);
    const [memoizedAvailableFilter, setAvailableFilters] = useState<IAvailableFilters[]>([]);

    const visibleCols = useMemo(() => cols?.filter(c => !c?.hideColumn), [cols]);
    useEffect(() => { setRenderAs(props?.renderAs); }, [props?.renderAs]);

    const onItemClick = (item: IRow<T>) => !!props?.onItemClick && props?.onItemClick(item);
    const onColumnClick = (currentRows: IRow<T>[]) => (_: any, column: TColumn<T>): void => {
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
        enableGrouping: props?.headerOptions?.enableGrouping,
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

    useEffect(() => {
        if(!props?.initialGroupedBy?.key) return;
        const fieldName: KeyAndName = `${props?.initialGroupedBy?.key};${props?.initialGroupedBy?.name}`;
        GridViewGrouping.onApplyGrouping({
            emptyGroupLabel: props?.emptyGroupLabel,
            setIsGroupPanel,
            setGroups,
            onItemsGrouped: props?.onItemsGrouped,
            onGroupPanelCancel: props?.onGroupPanelCancel,
            items: actualRows,
            groupByFields: [{name: fieldName, order: GroupOrder.ascending}],
            setActualRows,
            level: 0,
            startIndex: 0,
            cols
        });
    }, [props?.initialGroupedBy]);

    useEffect(() => { setActualRows(props?.rows); setAllRows(props?.rows) }, [props?.rows]);
    useEffect(() => {
        setCols(columns => [...columns.map(c => ({...c, onColumnClick: onColumnClick(actualRows)}))]);
    }, [actualRows?.length]);

    useEffect(() => {
        setAvailableFilters([...GridViewFilter.buildFilters(allRows, cols, props?.hiddenFilterKeys as string[])]);   
    }, [allRows?.length, cols?.length, props?.hiddenGroupKeys?.length]);

    const filterOptionsMatrix = useMemo(() => memoizedAvailableFilter.map(f => GridViewMapper.mapFilterOptions(f?.options)), [memoizedAvailableFilter]);

    const filterPanelConfig: IPanelFilterProps = {
        isOpen: isFilterPanelOpen,
        onApply: GridViewFilter.onApplyFilter({
            allRows, 
            setActualRows, 
            setIsFilterPanel, 
            applyCustomFilter: props?.applyCustomFilter, 
            onItemsFiltered: props?.onItemsFiltered,
            onFilterPanelCancel: props?.onFilterPanelCancel
        }),
        onCancel: () => { 
            setIsFilterPanel(false);
            if(props?.onFilterPanelCancel) 
                props?.onFilterPanelCancel('cancel');
        },
        onClose: () =>  { 
            setIsFilterPanel(false); 
            if(props?.onFilterPanelCancel)
                props?.onFilterPanelCancel('dismiss');
        },
        panelTitle: props?.filterPanelTitle ?? 'Filtrar',
        actualFilteredValues,
        setActualFilteredValues,
        dateValue, setFilterDate,
        filterOptionsMatrix,
        availableFilters: memoizedAvailableFilter,
        top: props?.panelChildren?.filter?.top,
        footer: props?.panelChildren?.filter?.footer
    }

    const groupPanelConfig: IGroupPanel = {
        isOpen: isGroupPanelOpen,
        onCancel: () => { 
            setIsGroupPanel(false);
            if(props?.onGroupPanelCancel)
                props?.onGroupPanelCancel('cancel');
        },
        onClose: () =>  { 
            setIsGroupPanel(false); 
            if(props?.onGroupPanelCancel)
                props?.onGroupPanelCancel('dismiss');
        },
        onOpen: () => { setIsGroupPanel(true); },
        panelTitle: props?.groupPanelTitle ?? 'Agrupar',
        setSelectedGroupKeys,
        selectedGroupKeys,
        options: GridViewFilter.filterFromColumns(props?.hiddenGroupKeys as string[], cols)?.map(c => ({key: c?.key, text: c?.name})) ?? [],
        onApply: (selectedKeys: KeyAndName) => GridViewGrouping.onApplyGrouping({
            emptyGroupLabel: props?.emptyGroupLabel,
            setIsGroupPanel,
            setGroups,
            onItemsGrouped: props?.onItemsGrouped,
            onGroupPanelCancel: props?.onGroupPanelCancel,
            items: actualRows,
            setActualRows,
            groupByFields: [{name: selectedKeys, order: GroupOrder.ascending}],
            level: 0,
            startIndex: 0,
            cols
        }),
        top: props?.panelChildren?.group?.top,
        footer: props?.panelChildren?.group?.footer
    }

    const listConfig: IListOptionsProps<any> = {
        ...props?.headerOptions,
        onSearchItemChange: GridViewFilter.onSearchItemChange({allRows, searchCb, setActualRows, onSearchBoxItemsFiltered: props?.onSearchBoxItemsFiltered}),
        setRenderAs: () => renderAs === 'card' ? setRenderAs('list') : setRenderAs('card'),
        setIsFilterPanelOpen: (value) => { setIsFilterPanel(value); },
        setIsGroupPanelOpen: (value) => { setIsGroupPanel(value); },
        enableSearch: props?.headerOptions?.enableSearch ?? true,
        enableFilter: props?.headerOptions?.enableFilter ?? true,
        enableCardView: props?.headerOptions?.enableCardView ?? false,
        enableGrouping,
        onClickSearchIcon: (callerType, text, key) => {
            if(callerType === IconClickCaller.CLICK)
                return setActualRows(currentSearchBoxItems?.current as IRow<T>[]);
            if(callerType === IconClickCaller.ENTER) {
                if(!text)
                    return setActualRows(allRows);
                const filteredItems = GridViewFilter.onSearchItemChange({allRows, searchCb, setActualRows, onSearchBoxItemsFiltered: props?.onSearchBoxItemsFiltered})(text, key);
                searchCb(filteredItems);
                setActualRows(filteredItems as IRow<T>[]);
            }
        },
        onFilterIconClick: props?.onFilterIconClick,
        onGroupIconClick: props?.onGroupIconClick,
        onSearchBoxClick: props?.onSearchBoxClick,
        cardButtonProps: props?.headerOptions?.cardButtonProps,
        filterButtonProps: props?.headerOptions?.filterButtonProps,
        groupButtonProps: props?.headerOptions?.groupButtonProps,
        searchBoxProps: props?.headerOptions?.searchBoxProps,
    }

    return {
        state: {
            actualRows,
            visibleCols,
            filterPanelConfig,
            groupPanelConfig,
            isFilterPanelOpen,
            isGroupPanelOpen,
            listConfig,
            shouldRenderCard,
            groups
        },
        handlers: { onItemClick },
        JSX: { CardsList }
    }
}