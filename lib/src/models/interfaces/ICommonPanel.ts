import type { ReactNode } from "react";

export interface ICommonPanel<T = any> {
    isOpen: boolean;
    onApply: (mapOrKey: T) => void;
    onCancel: () => void;
    onClose: () => void;
    onOpen?: () => void;
    panelTitle: string;
}

export type IPanelChildrenPosition = {footer?: ReactNode, top: ReactNode};