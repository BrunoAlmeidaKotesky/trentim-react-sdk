import { IButtonProps } from "@fluentui/react/lib/Button";
import type { IColumn, IDetailsListProps, IGroup } from "@fluentui/react/lib/DetailsList";
export interface INode extends IRow {
    items?: IRow[];
    children?: INode[];
}
/**It should represent any object with primitive data types.
 * Please use the `Id` property to uniquely identify the object, it helps to avoid duplicates and correctly apply the filter.
*/
export interface IRow {
    [key: string]: any;
    /**It's recommended that the row object contains an unique identifier*/
    Id: number | string;
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
declare type IConfigurabeHeader = Omit<IListOptionsProps, 'onSearchItem' | 'setIsFilterPanelOpen'>;
export interface IGridListProps<T extends any> {
    /**Use this to overwrite the default props `IDetailListProps` from Microsoft's `@fluent-ui` */
    detailsListProps?: IDetailsListProps;
    /**Configure the header behavior, such as to enable filter and other functionalities. */
    headerOptions: IConfigurabeHeader;
    groups?: IGroup[];
    listType: 'folder' | 'list' | 'file';
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
     * If set to true, the filter panel will be displayed, and all the automatic filters logic will be applied to the list.
     * @defaultvalue `true`
     **/
    enableFilter?: boolean;
    /**
     * If se to true, will display the searchbox, where the `searchKey` property should be used to define which key to filter by.
     * @defaultvalue `true` */
    enableSearch?: boolean;
    /**If `enableSearch` is set to `true`, you need to provide a primitive key from your `IRow[]` to be filtered. */
    searchKey?: string;
    onSearchItem?: (searchText: string, key: keyof IRow) => void;
    setIsFilterPanelOpen: (isOpen: boolean) => void;
    /**Use this property if you want to add more custom buttons on the header. The button will be the `@fluent-ui` `PrimaryButton`, but it's props can be changed
     * on the `props`.
    * @defaultvalue `[]`*/
    customButtons?: CustomButtons;
    defaultButtonsOrder?: {
        group: number;
        search: number;
        filter: number;
    };
}
export {};
