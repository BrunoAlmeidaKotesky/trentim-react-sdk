
export interface IStickerItem {
    id: number;
    title: string;
    order?: number;
}

export interface ICardStickerProps {
    isEditEnabled?: boolean;
    stickerBgColor: string;
    stickers: IStickerItem;
    onChange(item: IStickerItem): void;
    onDelete(item: IStickerItem): void;
    onChangeOrder(item: IStickerItem, way: "up" | "down"): void;
}

export interface ICanvasCardProps {
    headerProps: Omit<ICardHeaderProps, 'isEditModeEnabled'>;
    stickers: IStickerItem[];
    /**@default #fff */
    cardBgColor?: string;
    isEditModeEnabled: boolean;
    /**@default #feffb7 */
    stickerBgColor?: string;
    onStickersChanged(stickers: IStickerItem[]): void;  
    onNoItemsRender?: () => JSX.Element;
}

export interface ICardHeaderProps {
    backgroundColor: string;
    title: string;
    icon: string;
    addTitle: string;
    onAddSticker: () => void;
    isEditModeEnabled: boolean;
}