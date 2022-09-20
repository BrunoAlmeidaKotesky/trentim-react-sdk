import { ICanvasCardProps, IStickerItem } from "@models/interfaces/ICanvasCardProps";
import { useState, useEffect } from "react";

export function useCanvasCardController(props: ICanvasCardProps) {
    const [stickersState, setStickers] = useState<IStickerItem[]>(props?.stickers);
    useEffect(() => setStickers(props?.stickers), [props.stickers]);
    useEffect(() => {
        if (props?.onStickersChanged)
            props.onStickersChanged(stickersState);
    }, [stickersState?.length]);


    const deleteSticker = (sticker: IStickerItem) => {
        setStickers(stickersState?.filter((s) => s.id !== sticker?.id));
    }

    const addSticker = () => {
        const lastItem = stickersState?.length > 0 ? stickersState[stickersState?.length - 1] : null;
        let order = 1;
        if (lastItem)
            order = lastItem.order + 1;
        setStickers([...stickersState, {
                title: '',
                id: order,
                order
            }]
        );
    }

    const updateSticker = (sticker: IStickerItem) => {
        const modifiedStickers = stickersState.map(s => {
            if (s?.id === sticker?.id)
                s = sticker;
            return s;
        });
        setStickers(modifiedStickers);
    }

    const changeOrder = (selectedItem: IStickerItem, orderWay: "up" | "down") => {
        const stickers = [...stickersState];
        const findItem = stickers.find((x) => x?.id === selectedItem?.id);
        if (orderWay === "up") {
            const previousItem = stickers.find(i => i?.order === selectedItem?.order - 1);
            if (previousItem) {
                const previousOrder = previousItem.order;
                previousItem.order = selectedItem.order;
                findItem.order = previousOrder;
            }
        } else {
            const nextItem = stickers.find(i => i?.order === selectedItem?.order + 1);
            if (nextItem) {
                const nextOrder = nextItem.order;
                nextItem.order = selectedItem.order;
                findItem.order = nextOrder;
            }
        }
        setStickers(stickers.sort((a, b) => a?.order - b?.order));
    };

    return { deleteSticker, updateSticker, addSticker, changeOrder, stickersState }
}