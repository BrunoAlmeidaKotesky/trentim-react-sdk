import * as React from 'react';
import { IInfoCardProps } from '../models/interfaces/IInfoCardProps';
/**
 * A card component that can be used in `GridView` automatically if `renderAs` is set to `card`.
 *
 * @param props - IInfoCardProps
 * @returns JSX.Element
 */
declare const InfoCard: React.MemoExoticComponent<(props: IInfoCardProps) => JSX.Element>;
export default InfoCard;
