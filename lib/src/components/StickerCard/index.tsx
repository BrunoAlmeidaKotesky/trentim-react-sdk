
import styles from "@components/StickerCard/StickerCard.module.scss";
import { CardHeader } from "@components/StickerCard/CardHeader";
import { IStickerCardProps } from "@models/interfaces/IStickerCardProps";
import { useStickerCardController } from "@components/StickerCard/useStickerCardController";
import CardSticker from "@components/StickerCard/CardSticker";
import { useEffect, useMemo } from "react";

export function StickerCard<T extends any>(props: IStickerCardProps<T>) {
    useEffect(() => {
        const root = document.documentElement;
        root?.style?.setProperty('--sticker-card-item-bgcolor', props?.cardBgColor ?? '#fff');
    }, [props.cardBgColor]);
    const {
        addSticker, changeOrder, deleteSticker, updateSticker, stickersState
    } = useStickerCardController(props);

    const headerProps = useMemo(() => { return props.headerProps }, [props?.headerProps]);

    return (
        <div className={`${styles.stickerCardContainer} ${props?.classNames?.root}`}>
            <div className={`${styles.stickerCardItem} ${props?.classNames?.rootFirstChild}`}>
                <CardHeader 
                    className={props?.classNames?.header} isEditModeEnabled={props.isEditModeEnabled}
                    onAddSticker={() => { addSticker(); }} {...headerProps} />
                <div className={`${styles.cardItemStickerWrapper} ${props?.classNames?.cardBodyWrapper}`}>
                    {stickersState?.length > 0 ? [...stickersState]?.sort((a, b) => a?.order - b?.order).map(sticker => (
                        <CardSticker
                            stickerClassName={props?.classNames?.cardStickerItem}
                            stickerBgColor={props?.stickerBgColor}
                            sticker={sticker}
                            styles={styles}
                            renderedNow={sticker.renderedOnce}
                            key={sticker?.id}
                            isEditEnabled={props?.isEditModeEnabled}
                            onChange={updateSticker}
                            onDelete={deleteSticker}
                            onChangeOrder={changeOrder} />
                    )) : 
                    props.onNoItemsRender ? props.onNoItemsRender() : <span style={{ color: '#333' }}>No items</span>}
                </div>
            </div>
        </div>
    )
}