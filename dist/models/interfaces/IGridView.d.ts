import { IButtonProps } from "@fluentui/react/lib/Button";
import type { IColumn, IDetailsListProps, IGroup } from "@fluentui/react/lib/DetailsList";
import { CSSProperties } from "react";
import { IInfoCardProps, IRightColumn } from "./IInfoCardProps";
declare type Children = INode & {
    key: string;
    title: string;
};
export interface INode {
    key: string;
    title: string;
    items?: IRow[];
    children?: Children[];
}
export interface IFileInfo {
    key: string;
    name: string;
    /**Any Extra value to hold on that object */
    value?: any;
    iconUrl: string;
    fileType: string;
}
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
export declare type TColumn<T> = IColumn & {
    /**If the desired value is from an nested object, provide the value with dots.
     * @example "file.name" will get the value from the file object.
    */
    key: keyof T;
    /**If the desired value is from an nested object, provide the value with dots.
     * @example "file.name" will get the value from the file object.
    */
    fieldName?: keyof T;
    dateConvertionOptions?: IDateConvertionOptions;
    /**How should the filter on the filter panel be rendered */
    renderFilterAs?: 'Dropdown' | 'SearchBox';
};
interface IDateConvertionOptions {
    /**If se to `true`, it will automatically convert the string ISO dates to your locale date. */
    shouldConvertToLocaleString?: boolean;
    locales?: string | string[];
    /**Use this if you want to overwrite the behavior of the default `Intl.DateTimeFormatOptions` applied. */
    formatOptions?: Intl.DateTimeFormatOptions;
}
declare type IConfigurableHeader = Omit<IListOptionsProps, 'onSearchItem' | 'setIsFilterPanelOpen' | 'setRenderAs'>;
declare type IGridCardRightCol = Pick<IRightColumn, 'containerStyle'> & {
    keys: {
        title: string;
        style?: CSSProperties;
    }[];
};
declare type ICardProps = Omit<IInfoCardProps, 'cardTitle' | 'cardSubtitle' | 'cardRightColInformation'> & {
    containerStyle?: CSSProperties;
    cardTitleKey: string;
    cardSubtitleKey?: string;
    rightColumn?: IGridCardRightCol;
};
export interface IGridListProps<T extends any> {
    /**Use this to overwrite the default props `IDetailListProps` from Microsoft's `@fluent-ui` */
    detailsListProps?: IDetailsListProps;
    /**if `renderAs` is set to `card`, you need to provide the card props. */
    cardProps?: ICardProps;
    /**Configure the header behavior, such as to enable filter and other functionalities. */
    headerOptions: IConfigurableHeader;
    groups?: IGroup[];
    renderAs: 'tree' | 'list' | 'card';
    /**If you set tis property to `true`, on your `rowAsNode` interface, the `items` property which is an
     * `IRow[]`, you need to provide a `file` property for each row, of the type `IFileInfo`, otherwise it won't work.
     * You can also do this render by yourself, changing the `onRender` of your `columns` */
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
     *      dateConvertionOptions: {
     *          shouldConvertToLocaleString: true,
     *          locales: ['en-US']
     *      }
     *  }];
     * ```
    */
    columns: TColumn<T>[];
    /**The list of items to be displayed. If you intend to display a list like a tree/folder model, you need to use the `rowsAsNode` instead.*/
    rows?: IRow[];
    /**If set, the columns will be displayed as tree view. */
    rowsAsNode?: INode[];
    /**A custom event to be fired when the row is clicked. */
    onRowClick?: (row: IRow) => void;
    onRenderItemColumn?: <S>(item?: S, index?: number, column?: TColumn<S>) => React.ReactNode;
    /**If you want to totally overwrite the component that is being rendered, independent of the `renderAs` value, use this rendering function.
     *
     *  This element will be applied to each item `IRow`, not the entire component. */
    onRenderCustomComponent?: (item: IRow) => React.ReactNode;
    /**The label to be displayed on the top of the Panel. */
    filterPanelTitle?: string;
    /**A list of keys from `IRow` to not be displayed on the top of the Panel.*/
    hiddenFilterKeys?: string[] | Array<keyof IRow>;
}
declare type CustomButtons = {
    props: IButtonProps;
    position?: number;
    className?: string;
    text: string;
}[];
export interface IListOptionsProps {
    /**
     * If set to `true`, the filter panel will be displayed, and all the automatic filters logic will be applied to the list.
     * @defaultvalue `true`
     **/
    enableFilter?: boolean;
    /**
     * If set to `true`, will display the searchbox, where the `searchKey` property should be used to define which key to filter by.
     * @defaultvalue `true` */
    enableSearch?: boolean;
    /**If set to `true` it will display an additional button on the header that changes the `renderAs` to `card` or `list` when clicked. */
    enableCardView?: boolean;
    /**If `enableSearch` is set to `true`, you need to provide a primitive array of keys from your `IRow[]` to be filtered. */
    searchKey?: string[];
    /**A placeholder text to the search box. */
    searchBoxPlaceholder?: string;
    onSearchItem?: (searchText: string, keys: Array<keyof IRow>) => void;
    setIsFilterPanelOpen: (isOpen: boolean) => void;
    setRenderAs: () => void;
    /**Use this property if you want to add more custom buttons on the header. The button will be the `@fluent-ui` `PrimaryButton`, but it's props can be changed
     * on the `props`.
    * @defaultvalue `[]`*/
    customButtons?: CustomButtons;
    /**The order of the default buttons. */
    defaultButtonsOrder?: {
        group: number;
        search: number;
        filter: number;
        card: number;
    };
}
export {};
