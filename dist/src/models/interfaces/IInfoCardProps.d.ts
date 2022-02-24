import { CSSProperties } from 'react';
import type { BaseButton } from '@fluentui/react/lib/Button';
declare type CircleIndicator = {
    title: string;
    color: string;
};
interface IRightColumn {
    containerStyle?: CSSProperties;
    values: {
        title: string;
        style: CSSProperties;
    }[];
}
export interface IInfoCardProps {
    circleIndicator?: CircleIndicator;
    cardTitle: string;
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
    onClickDownButton?: (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | BaseButton | HTMLSpanElement, MouseEvent>) => void;
    onCardClick?: (e?: any) => void | Promise<void>;
    enableUserSelect?: boolean;
}
export {};
