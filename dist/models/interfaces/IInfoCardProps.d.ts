import type { CSSProperties } from 'react';
import type { BaseButton } from '@fluentui/react/lib/Button';
import type { IDateConversionOptions } from './ICommon';
export declare type CircleIndicator = {
    title: string;
    color?: string;
};
export interface IRightColumn {
    /**The style to be applied on the root container of the card(s). */
    containerStyle?: CSSProperties;
    /**All the possible values to be set on the right side of the card. */
    values: {
        title: string;
        style: CSSProperties;
    }[];
}
export interface IInfoCardProps {
    /**An option to the footer of the card. */
    circleIndicator?: CircleIndicator;
    /**The title of the card. */
    cardTitle: string;
    /**The subtitle of the card. */
    cardSubtitle?: string;
    width?: string;
    /**@default '150px' */
    height?: string;
    cardRightColInformation?: IRightColumn;
    /** The possible icons names are available on OfficeUiIcons.
     * @external https://uifabricicons.azurewebsites.net/
     * @default 'Page'
     */
    iconName?: string;
    /**An event to be triggered when the user clicks the right down action button. */
    onClickDownButton?: (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | BaseButton | HTMLSpanElement, MouseEvent>) => void;
    /**An event to be triggered when the user clicks on the card. */
    onCardClick?: (e?: any) => void | Promise<void>;
    /**Set this if you want the card to set to `true` or `false` the user selection.
     * @default
     * ```css
     * .card {
     *      user-select: none;
     *  }
     *```
     */
    enableUserSelect?: boolean;
}
declare type IGridCardRightCol = Pick<IRightColumn, 'containerStyle'> & {
    keys: {
        title: string;
        style?: CSSProperties;
        dateConversionOptions?: IDateConversionOptions;
    }[];
};
export declare type ICardProps = Omit<IInfoCardProps, 'cardTitle' | 'cardSubtitle' | 'cardRightColInformation' | ''> & {
    /**The style to be applied on the root container of the card(s). */
    containerStyle?: CSSProperties;
    /**A key from your `IRow` to be used on the title. */
    cardTitleKey: string;
    /**A key from your `IRow` to be used on the subtitle. */
    cardSubtitleKey?: string;
    /**Use this if you want to apply an automatic date conversion from ISO strings to a localized string. */
    titleDateConversionOptions?: IDateConversionOptions;
    /**Use this if you want to apply an automatic date conversion from ISO strings to a localized string. */
    subtitleDateConversionOptions?: IDateConversionOptions;
    /**All the possible values to be set on the right side of the card. */
    rightColumn?: IGridCardRightCol;
    /**All the possible values to be set on the right side of the card. With the option to set an `IDateConversionOptions` to _dateConversionOptions_ */
    circleIndicator: CircleIndicator & {
        dateConversionOptions?: IDateConversionOptions;
    };
};
export {};
