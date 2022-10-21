import { IStickerCardProps, IStickerItem } from "@models/interfaces/IStickerCardProps";
import { useState, useEffect, useCallback } from "react";

export function useStickerCardController<T extends any>(props: IStickerCardProps<T>) {
    const [stickersState, setStickers] = useState<IStickerItem[]>(props?.stickers);
    useEffect(() => setStickers(props?.stickers), [props.stickers]);

    const deleteSticker = useCallback((sticker: IStickerItem) => {
        setStickers(stickersState?.filter((s) => {
            const isNotEqual = s.id !== sticker.id;
            if(!isNotEqual && props?.onBeforeDeleteSticker)
                props.onBeforeDeleteSticker(s);
            return isNotEqual;
        }));
    }, [stickersState, props?.onBeforeDeleteSticker]);

    const addSticker = useCallback(() => {
        const lastItem = stickersState?.length > 0 ? stickersState[stickersState?.length - 1] : null;
        let order = 1;
        if (lastItem)
            order = lastItem.order + 1;
        let newSticker: IStickerItem<T> = {
            id: order,
            title: null,
            order,
            data: null,
            renderedOnce: true
        }
        if(props?.onBeforeAddSticker)
            newSticker = {...props.onBeforeAddSticker(newSticker), renderedOnce: true};
        const newStickers = [...stickersState, newSticker];
        setStickers(newStickers);
        if(props?.onStickerAdded)
            props.onStickerAdded(newStickers, newStickers?.length === 1 ? 0 : newStickers?.length - 1);
    }, [stickersState, props?.onStickerAdded, props?.onBeforeAddSticker]);

    const updateSticker = useCallback((sticker: IStickerItem) => {
        const modifiedStickers = stickersState.map(s => {
            if (s?.id === sticker?.id) {
                s = sticker;
                if(props?.onStickerChanged && (sticker?.title !== null && sticker?.title !== undefined))
                    props.onStickerChanged(s);
            }
            return s;
        });
        setStickers(modifiedStickers);
    }, [stickersState, props?.onStickerChanged]);

    const changeOrder = useCallback((selectedItem: IStickerItem, orderWay: "up" | "down") => {
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
        const sorted = [...stickers].sort((a, b) => a?.order - b?.order);
        setStickers(sorted);
        if(props?.onStickerOrderChanged)
            props.onStickerOrderChanged(sorted, selectedItem);
    }, [stickersState, props?.onStickerOrderChanged]);

    return { deleteSticker, updateSticker, addSticker, changeOrder, stickersState }
}