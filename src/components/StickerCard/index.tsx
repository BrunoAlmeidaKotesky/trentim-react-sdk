import { StickerCardContainer, StickerCardItem, CardItemWrapper } from "./styles";
import { CardHeader } from "./CardHeader";
import { IStickerCardProps } from "@models/interfaces/IStickerCardProps";
import { useStickerCardController } from "./useStickerCardController";
import CardSticker from "./CardSticker";
import { useMemo } from "react";

export function StickerCard<T extends any>(props: IStickerCardProps<T>) {
    const {
        addSticker, changeOrder, deleteSticker, updateSticker, stickersState
    } = useStickerCardController(props);

    const headerProps = useMemo(() => { return props.headerProps }, [props?.headerProps]);

    return (
        <StickerCardContainer className={props?.classNames?.root}>
            <StickerCardItem cardBgColor={props?.cardBgColor} className={props?.classNames?.rootFirstChild}>
                <CardHeader 
                    className={props?.classNames?.header} isEditModeEnabled={props.isEditModeEnabled}
                    onAddSticker={() => { addSticker(); }} {...headerProps} />
                <CardItemWrapper className={props?.classNames?.cardBodyWrapper}>
                    {stickersState?.length > 0 ? [...stickersState]?.sort((a, b) => a?.order - b?.order).map(sticker => (
                        <CardSticker
                            stickerClassName={props?.classNames?.cardStickerItem}
                            stickerBgColor={props?.stickerBgColor}
                            stickers={sticker}
                            key={sticker?.id}
                            isEditEnabled={props?.isEditModeEnabled}
                            onChange={updateSticker}
                            onDelete={deleteSticker}
                            onChangeOrder={changeOrder} />
                    )) : 
                    props.onNoItemsRender ? props.onNoItemsRender() : <span style={{ color: '#333' }}>No items</span>}
                </CardItemWrapper>
            </StickerCardItem>
        </StickerCardContainer>
    )
}