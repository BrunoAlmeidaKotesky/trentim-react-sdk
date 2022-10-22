import { CSSNumberFormat } from "@models/types/UtilityTypes";

export interface IStickerItem<T = any> {
    id: number | string;
    title: string;
    order?: number;
    data?: T;
    /**This field is for internal control, please do not change this property */
    readonly renderedOnce: boolean;
}

export interface ICardStickerProps<T = any> {
    renderedNow: boolean;
    isEditEnabled?: boolean;
    /**@default #feffb7 */
    stickerBgColor: string;
    sticker: IStickerItem<T>;
    stickerClassName?: string;
    onChange(item: IStickerItem<T>): void;
    onDelete(item: IStickerItem<T>): void;
    onChangeOrder(item: IStickerItem<T>, way: "up" | "down"): void;
}

export type CardClassNames = {
    root?: string;
    rootFirstChild?: string;
    header?: string;
    cardBodyWrapper?: string;
    cardStickerItem?: string;
}

export interface IStickerCardProps<StickerData> extends IStickerCardEvents<StickerData> {
    /**Extra class name to be applied alongside with the styled names */
    classNames?: CardClassNames;
    /**@default inherit */
    height?: CSSNumberFormat | 'inherit' | 'unset';
    /**@default inherit */
    width?: CSSNumberFormat | 'inherit' | 'unset';
    headerProps: ICardHeader;
    stickers: IStickerItem<StickerData>[];
    /**@default #fff */
    cardBgColor?: string;
    isEditModeEnabled: boolean;
    /**@default #feffb7 */
    stickerBgColor?: string;
}

export interface IStickerCardEvents<T> {
    /**This function will be called when the state of the items has been ordered */
    onStickerOrderChanged?: (stickers: IStickerItem<T>[], selectedSticker?: IStickerItem<string>) => void;
    /**This function will be called whenever a sticker item is being edited. */
    onStickerChanged?: (currentSticker: IStickerItem<T>) => void;
    
    /**This function will be called before the state of the stickers are changed.
     * 
     * It can be used to modify the sticker before it is added to the state.
     */
    onBeforeAddSticker?: (currentNewSticker: Omit<IStickerItem<T>, 'renderedOnce'>) => Omit<IStickerItem<T>, 'renderedOnce'>;
    /**This function will be called before the removal of a sticker item. */
    onBeforeDeleteSticker?: (sticker: IStickerItem<T>) => void;
    /**This function will be called after a sticker is added. */
    onStickerAdded?: (newStickers: IStickerItem<T>[], newIdx: number) => void;
    /**If not set, the default render is a 
     * ```tsx
        <span style={{ color: '#333' }}>No items</span>
     ```
     */
    onNoItemsRender?: () => JSX.Element;
}

export type ICardHeader = Omit<ICardHeaderProps, 'isEditModeEnabled' | 'className'| 'onAddSticker'>; 
export interface ICardHeaderProps {
    className?: string;
    backgroundColor: string;
    title: string;
    icon: string;
    addTitle: string;
    onAddSticker?: () => void;
    isEditModeEnabled: boolean;
}