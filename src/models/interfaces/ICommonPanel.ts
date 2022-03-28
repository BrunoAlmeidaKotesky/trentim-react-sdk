
export interface ICommonPanel<T = any> {
    isOpen: boolean;
    onApply: (map: T) => void;
    onCancel: () => void;
    onClose: () => void;
    onOpen: () => void;
    panelTitle: string;
}