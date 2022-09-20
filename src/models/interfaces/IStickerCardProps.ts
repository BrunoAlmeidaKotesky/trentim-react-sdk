import { CSSNumberFormat } from "../types/UtilityTypes";

export interface IStickerItem {
    id: number;
    title: string;
    order?: number;
}

export interface ICardStickerProps {
    isEditEnabled?: boolean;
    stickerBgColor: string;
    stickers: IStickerItem;
    stickerClassName?: string;
    onChange(item: IStickerItem): void;
    onDelete(item: IStickerItem): void;
    onChangeOrder(item: IStickerItem, way: "up" | "down"): void;
}

export type CardClassNames = {
    root?: string;
    rootFirstChild?: string;
    header?: string;
    cardBodyWrapper?: string;
    cardStickerItem?: string;
}
export interface IStickerCardProps {
    /**Extra class name to be applied alongside with the styled names */
    classNames?: CardClassNames;
    /**@default inherit */
    height?: CSSNumberFormat | 'inherit' | 'unset';
    /**@default inherit */
    width?: CSSNumberFormat | 'inherit' | 'unset';
    headerProps: ICardHeader;
    stickers: IStickerItem[];
    /**@default #fff */
    cardBgColor?: string;
    isEditModeEnabled: boolean;
    /**@default #feffb7 */
    stickerBgColor?: string;
    onStickersChanged(stickers: IStickerItem[]): void;  
    onNoItemsRender?: () => JSX.Element;
}

export type ICardHeader = Omit<ICardHeaderProps, 'isEditModeEnabled' | 'className'>; 
export interface ICardHeaderProps {
    className?: string;
    backgroundColor: string;
    title: string;
    icon: string;
    addTitle: string;
    onAddSticker?: () => void;
    isEditModeEnabled: boolean;
}