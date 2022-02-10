import { IRow } from "./IGridView";

export type FilterOption = {key: string | number, text: string, data?: IRow};
interface IAvailableFitlers {
    key: string;
    name: string;
    options: FilterOption[];
    enableMultiple: boolean;
    selected?: boolean;
}
export interface IPanelFilterProps {
    isOpen: boolean;
    availableFilters: IAvailableFitlers[];
    onApply: () => void;
    onCancel: () => void;
    onClose: () => void;
    panelTitle: string;
}