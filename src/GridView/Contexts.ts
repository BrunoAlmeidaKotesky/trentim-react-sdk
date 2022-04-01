import { createContext } from "react";
import type { IListOptionsProps } from "../models/interfaces/IListOptions";
import type { IPanelFilterProps } from '../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../models/interfaces/IGroupPanel';

export const ListOptionsContext = createContext<IListOptionsProps>({ 
    enableFilter: true, 
    enableSearch: true,
    enableCardView: true,
    customButtons: [], 
    setIsFilterPanelOpen: undefined, 
    searchBoxPlaceholder: '',
    setRenderAs: undefined, 
    defaultButtonsOrder: { group: 0, search: 1, filter: 2, card: 3 },
    setIsGroupPanelOpen: undefined
});

export const FilterPanelContext = createContext<IPanelFilterProps>({ 
    isOpen: false, 
    onApply: undefined, 
    availableFilters: [], 
    onCancel: undefined, 
    onClose: undefined, 
    panelTitle: '',
    actualFilteredValues: new Map(),
    setActualFilteredValues: undefined,
    onOpen: undefined
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
    setSelectedGroupKeys: undefined
});