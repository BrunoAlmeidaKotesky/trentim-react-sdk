import type { IColumn, IDetailsListProps } from "@fluentui/react/lib/DetailsList";
import type { CSSProperties } from "react";
import type { IInfoCardProps, IRightColumn } from "./IInfoCardProps";
import type { IConfigurableHeader } from "./IListOptions";
import type { FilterComponent } from '../types/Common';

export interface IFileInfo {
    key: string;
    name: string;
    /**Any Extra value to hold on that object */
    value?: any;
    iconUrl: string;
    fileType: string;
};

/**It should represent any object with primitive data types. 
 * Please use the `Id` property to uniquely identify the object, it helps to avoid duplicates and correctly apply the filter.
*/
export interface IRow {
    [key: string]: any;
    /**It's recommended that the row object contains an unique identifier*/
    Id: number | string;
    /**If you are rendering the `GridView` as an tree view, you can use this property to display an additional column, automatically showing the file icon types. */
    file?: IFileInfo;
    
}

export type TColumn<T> = IColumn & {
    /**If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
    key: keyof T;
    /**If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
    fieldName?: keyof T;
    dateConversionOptions?: IDateConvertionOptions;
    /**How should the filter on the filter panel be rendered */
    renderFilterAs?: FilterComponent;
}

interface IDateConvertionOptions {
    /**If se to `true`, it will automatically convert the string ISO dates to your locale date. */
    shouldConvertToLocaleString?: boolean;
    locales?: string | string[];
    /**Use this if you want to overwrite the behavior of the default `Intl.DateTimeFormatOptions` applied. */
    formatOptions?: Intl.DateTimeFormatOptions;
}

type IGridCardRightCol = Pick<IRightColumn, 'containerStyle'> & {keys: {title: string, style?: CSSProperties}[]};
type ICardProps = Omit<IInfoCardProps, 'cardTitle' | 'cardSubtitle' | 'cardRightColInformation'> & {
    containerStyle?: CSSProperties;
    cardTitleKey: string;
    cardSubtitleKey?: string;
    rightColumn?: IGridCardRightCol;
}

export interface IGridListProps<T extends any> extends IGridHandler {
    /**Use this to overwrite the default props `IDetailListProps` from Microsoft's `@fluent-ui` */
    detailsListProps?: IDetailsListProps;
    /**if `renderAs` is set to `card`, you need to provide the card props. */
    cardProps?: ICardProps;
    /**Configure the header behavior, such as to enable filter and other functionalities. */
    headerOptions: IConfigurableHeader;
    /**If the grid will be rendered as a list or as a collection of `<Card />` component */
    renderAs: 'list' | 'card';
    autoFileDisplay?: boolean;
    /**The column model to be applied to the list.  
     * It extends the Microsoft `@fluent-ui` `IColumn` interface.
     * 
     * If you want to the values that are ISO dates to be automatically converted to locale strings, use the `dateConvertionOptions` property.
     * If you want to change the type of the component to be used on the filter panel, use the `renderFilterAs` property.
     * @example
     * ```ts
     * //Remember to fill the default `IColumn` interface required properties.
     * const columns: TColumn[] = [{
     *      key: 'file.name',
     *      fieldName: 'file.name',
     *      renderFilterAs: 'SearchBox',
     *      dateConversionOptions: {
     *          shouldConvertToLocaleString: true,
     *          locales: ['en-US']
     *      }
     *  }];
     * ```
    */
    columns: TColumn<T>[];
    /**The list of items to be displayed. If you intend to display a list like a tree/folder model, you need to use the `rowsAsNode` instead.*/
    rows?: IRow[];
    /**The label to be displayed on the top of the filter Panel. */
    filterPanelTitle?: string;
    /**The label to be displayed on the top of the group Panel. */
    groupPanelTitle?: string;
    /**A list of keys from `IRow` to not be displayed on the top of the Panel when filtering.*/
    hiddenFilterKeys?: string[] | Array<keyof IRow>;
    /**A list of keys from `IRow` to not be displayed on the top of the Panel when grouping.*/
    hiddenGroupKeys?: string[] | Array<keyof IRow>;
}

/**Represents all the functions that can be used. */
interface IGridHandler {
    /**A custom event to be fired when the row is clicked. */
    onRowClick?: (row: IRow) => void;
    /**The same event from `IDetialsListProps` from `@fluent-ui` with generic types.
     * 
     * This is different from `onRenderCustomComponent`, since this method is applied to the default `onRenderItemColumn` from `Detailslist` and not on the entire component.
     */
    onRenderItemColumn?: <S>(item?: S, index?: number, column?: TColumn<S>) => React.ReactNode;
    /**If you want to totally overwrite the component that is being rendered, independent of the `renderAs` value, use this rendering function. 
     *
     * This element will be applied to each item `IRow`, not the entire component. */
    onRenderCustomComponent?: (item: IRow) => React.ReactNode;
}