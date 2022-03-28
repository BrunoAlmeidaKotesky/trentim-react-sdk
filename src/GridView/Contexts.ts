import { createContext } from "react";
import type { IListOptionsProps } from "../models/interfaces/IGridView";
import type { IPanelFilterProps } from '../models/interfaces/IPanelFilter';

export const ListOptionsContext = createContext<IListOptionsProps>({ 
    enableFilter: true, 
    enableSearch: true,
    enableCardView: true,
    customButtons: [], 
    setIsFilterPanelOpen: undefined, 
    searchBoxPlaceholder: '',
    setRenderAs: undefined, 
    defaultButtonsOrder: { group: 0, search: 1, filter: 2, card: 3 } 
});

export const FilterPaneContext = createContext<IPanelFilterProps>({ 
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