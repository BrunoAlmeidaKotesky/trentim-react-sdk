import { CanvasCardContainer, CanvasCardItem, CardItemWrapper } from "./styles";
import { CardHeader } from "./CardHeader";
import { ICanvasCardProps } from "@models/interfaces/ICanvasCardProps";
import { useCanvasCardController } from "./useCanvasCardController";
import CardSticker from "./CardSticker";
import { useMemo } from "react";

export function CanvasCard(props: ICanvasCardProps) {
    const {
        addSticker, changeOrder, deleteSticker, updateSticker, stickersState
    } = useCanvasCardController(props);

    const headerProps = useMemo(() => {
        const { onAddSticker, ...headerProps } = props?.headerProps;
        return headerProps
    }, [props?.headerProps]);

    return (
        <CanvasCardContainer>
            <CanvasCardItem cardBgColor={props?.cardBgColor}>
                <CardHeader onAddSticker={() => {
                    addSticker();
                    props?.headerProps?.onAddSticker && props?.headerProps?.onAddSticker();
                }} {...headerProps} isEditModeEnabled={props.isEditModeEnabled} />
                <CardItemWrapper>
                    {stickersState?.length > 0 ? stickersState?.sort((a, b) => a.order - b.order).map(sticker => (
                        <CardSticker
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
            </CanvasCardItem>
        </CanvasCardContainer>
    )
}