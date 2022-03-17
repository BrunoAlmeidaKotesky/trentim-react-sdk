import { createContext } from "react";
import type { IListOptionsProps } from "../models/interfaces/IGridView";
import type { IPanelFilterProps } from '../models/interfaces/IPanelFilter';

export const ListOptionsContext = createContext<IListOptionsProps>({ enableFilter: true, enableSearch: true, customButtons: [], setIsFilterPanelOpen: undefined });
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