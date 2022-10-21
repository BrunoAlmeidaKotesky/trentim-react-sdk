import { createContext } from "react";
import type { IListOptionsProps } from "@models/interfaces/IListOptions";
import type { IPanelFilterProps } from '@models/interfaces/IPanelFilter';
import type { IGroupPanel } from '@models/interfaces/IGroupPanel';
import type { IRow } from "@models/interfaces/IGridView";

export const ListOptionsContext = createContext<IListOptionsProps<IRow>>({ 
    enableFilter: true, 
    enableSearch: true,
    customButtons: [], 
    setIsFilterPanelOpen: undefined, 
    searchBoxPlaceholder: '',
    defaultButtonsOrder: { group: 0, search: 1, filter: 2},
    setIsGroupPanelOpen: undefined,
    onClickSearchIcon: undefined
});

export const FilterPanelContext = createContext<IPanelFilterProps>({ 
    isOpen: false, 
    onApply: undefined, 
    onCancel: undefined, 
    onClose: undefined, 
    panelTitle: '',
    actualFilteredValues: new Map(),
    setActualFilteredValues: undefined,
    onOpen: undefined,
    dateValue: null,
    setFilterDate: undefined,
    filterOptionsMatrix: [],
    availableFilters: [],
    top: undefined,
    footer: undefined
});

export const GroupPanelContext = createContext<IGroupPanel>({
    isOpen: false, 
    onApply: undefined,
    onCancel: undefined,
    onClose: undefined,
    onOpen: undefined,
    panelTitle: '',
    options: [],
    selectedGroupKeys: null,
    setSelectedGroupKeys: undefined,
    top: undefined,
    footer: undefined
});