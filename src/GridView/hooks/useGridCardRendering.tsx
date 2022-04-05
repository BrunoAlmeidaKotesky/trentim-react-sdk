import * as React from 'react';
import { useEffect, Dispatch, SetStateAction, useMemo, lazy } from 'react';
import { Utils } from '../../helpers/Utils';
import { IRow, ICardProps } from '../../models/interfaces/IGridView';
import { IInfoCardProps } from '../../models/interfaces/IInfoCardProps';

interface IGridCardHandler {
    renderAs: 'card' | 'list';
    enableGrouping: boolean;
    shouldRenderCard: boolean;
    actualRows: IRow[];
    cardProps: ICardProps;
    setShouldRenderCard: Dispatch<SetStateAction<boolean>>;
    setEnableGrouping: Dispatch<SetStateAction<boolean>>;
    onRenderCustomComponent: (item: IRow) => React.ReactNode;
    onItemClick: (item: IRow) => void;
}
export function useGridCardRendering({
    renderAs, 
    setEnableGrouping, 
    setShouldRenderCard, 
    enableGrouping, 
    actualRows, 
    shouldRenderCard, 
    cardProps, 
    onRenderCustomComponent,
    onItemClick
}: IGridCardHandler) {
    useEffect(() => {
        if (renderAs === 'card') {
            setShouldRenderCard(true);
            if (!cardProps || Object?.keys(cardProps)?.length === 0)
                console.error("[GridView] - You are using `renderAs: card`, but you are not passing cardProps. This will not work.");
            return setEnableGrouping(false);
        }
        setShouldRenderCard(false);
        if (enableGrouping)
            setEnableGrouping(true);
    }, [renderAs]);

    const Card = useMemo(() => {
        if (!shouldRenderCard) return null;
        return lazy(() => import('../../Card/Card').then((module) => ({ default: module?.default })));
    }, [shouldRenderCard]);

    const CardsList = useMemo(() => {
        if (!Card || renderAs === 'list') return null;

        return actualRows?.map(row => {
            if (!!onRenderCustomComponent)
                return onRenderCustomComponent(row);
            let cardTitle: string = Utils.getNestedObject(row, cardProps?.cardTitleKey?.split('.')) || '';
            let cardSubtitle: string = Utils.getNestedObject(row, cardProps?.cardSubtitleKey?.split('.')) || '';
            if (cardProps?.titleDateConversionOptions?.shouldConvertToLocaleString)
                cardTitle = Utils.convertIsoToLocaleString(cardTitle, cardProps?.titleDateConversionOptions?.locales, cardProps?.titleDateConversionOptions?.formatOptions);
            if (cardProps?.subtitleDateConversionOptions?.shouldConvertToLocaleString)
                cardSubtitle = Utils.convertIsoToLocaleString(cardSubtitle, cardProps?.subtitleDateConversionOptions?.locales, cardProps?.subtitleDateConversionOptions?.formatOptions);
            const rightCol = cardProps?.rightColumn;
            const cIndicator = cardProps?.circleIndicator;
            let titleValue = Utils.getNestedObject(row, cIndicator?.title?.split('.') as any) as string;
            if (cIndicator?.dateConversionOptions?.shouldConvertToLocaleString)
                titleValue = Utils.convertIsoToLocaleString(titleValue, cIndicator?.dateConversionOptions?.locales, cIndicator?.dateConversionOptions?.formatOptions);
            const circleIndicator = {
                ...cIndicator,
                title: titleValue
            };
            const newCardProps: IInfoCardProps = {
                ...cardProps,
                cardTitle,
                cardSubtitle,
                cardRightColInformation: rightCol?.keys && {
                    ...rightCol,
                    values: rightCol?.keys?.map(opt => {
                        let title: string = Utils.getNestedObject(row, opt?.title?.split('.') as any);
                        if (opt?.dateConversionOptions?.shouldConvertToLocaleString)
                            title = Utils.convertIsoToLocaleString(title, opt?.dateConversionOptions?.locales, opt?.dateConversionOptions?.formatOptions);
                        return ({ title, style: opt?.style ?? { fontSize: 16, marginBottom: 4, fontWeight: 600 } });
                    })
                },
                circleIndicator,
                onClickDownButton: e => {
                    onItemClick(row);
                    if (cardProps?.onCardClick)
                        cardProps?.onCardClick(e);
                }
            }
            return (<Card key={row?.Id} {...newCardProps} />);
        })
    }, [Card, cardProps, actualRows, renderAs, onRenderCustomComponent]);

    return CardsList;
}