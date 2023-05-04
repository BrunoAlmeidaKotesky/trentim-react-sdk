import type { ColumnKey, IDateConversionOptions } from '@models/types/Common';
import type { IColumn, IDetailsListProps, IListProps } from "@fluentui/react";
import type { IDataListPlugin } from '@plugins/index';

export type TColumn<T> = IColumn & {
    /**If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
   //Type of key should be either keyof T or DeepPath
    key: ColumnKey<T>;
    /**
     * @deprecated - This property no longer needs to be provided, since it has no actual effect.
     * If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
    fieldName?: ColumnKey<T>;
    dateConversionOptions?: IDateConversionOptions;
    /**Use this if you don't want to display the column all it's rows, with this you can still use this column on for actions like filtering or grouping. 
     * @default false */
    hideColumn?: boolean;
}

export type IFluentDetailsListProps = Omit<
    IDetailsListProps, 
    'columns' | 'items' | 'onRenderItemColumn' | 'onRenderRow' | 'onShouldVirtualize'
>

export type SearchBoxProps<T> = {
    /**
     * If set to `true`, will display the searchbox, where the `searchKeys` property should be used to define which key to filter by. 
     * @default true */
    enableSearch?: boolean;
    searchKeys?: Array<ColumnKey<T>>;
    /**A placeholder text to the search box. */
    searchBoxPlaceholder?: string;
    onSearchItemChange?: (searchText: string, keys: Array<keyof T>) => void;
    onSearchBoxClick?: (e?: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
    onClickSearchIcon?: (searchText?: string, keys?: (keyof T)[]) => void;
}

/**Represents all the functions that can be used. */
export interface IDataListHandler<T> {
    /**A custom event to be fired when a row is clicked. */
    onItemClick?: (row: T) => void;
    /**The same event from `IDetailsListProps` from `@fluent-ui` with generic types.
     * 
     * This is different from `onRenderCustomRow`, since this method is applied to the default `onRenderItemColumn` from `DetailsList` and not on the entire component.
     */
    onRenderItemColumn?: (item?: T, index?: number, column?: TColumn<T>) => React.ReactNode;
    /**If you want to totally overwrite the component that is being rendered, independent of the `renderAs` value, use this rendering function. 
     *
     * This element will be applied to each item `IRow`, not the entire component. */
    onRenderCustomRow?: (item: T) => React.ReactNode;
    /**A callback that will be called after the items were filtered from the search box. */
    onSearchBoxItemsFiltered?: (filtered?: T[]) => void;
}

export interface IDataListStyles {
    /**The root <div> of the whole component, including the header and list. */
    root?: React.CSSProperties;
    /**The container of the `<DetailsList />` list. */
    contentContainer?: React.CSSProperties;
}


export interface IDataListProps<T extends any> 
    extends IDataListHandler<T>, SearchBoxProps<T> {
    /**
     * If a `maxHeight` is not set, the list will not be virtualized by default, even if you return `true` on this property.
     * We do that to ensure that, to ensure with no max height is se to the list, the @fluentui virtualization bug does not occur.
     */
    onShouldVirtualize?: IListProps['onShouldVirtualize'];
    /**Use this property to set a maximum height for the DetailsList.
     * 
     * Note that this is just a easier way to set the `detailsListProps={{styles: {root: {maxHeight: '...'}}}}` property.
     * 
     * When setting this property, the `onShouldVirtualize` will be by default set to `(() => true)`, 
     * you can overwrite it by setting the `onShouldVirtualize` property, but we do not recommend.
     **/
    maxHeight?: string | number;
    /**Use this to overwrite the default props `IDetailListProps` from Microsoft's `@fluent-ui` */
    detailsListProps?: IFluentDetailsListProps;
    /**Configure the header behavior, such as to enable filter and other functionalities. */
    /**The column model to be applied to the list.
     * It extends the Microsoft `@fluent-ui` `IColumn` interface.
     *
     * If you want to the values that are ISO dates to be automatically converted to locale strings, use the `dateConversionOptions` property.
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
     * 
     * @note - You can use a `key` names that are not present on your interface for rendering custom columns, you just need to cast it to some other type, such as `any`:
     * ```tsx
     * //Icon does not exist on my inferred interface, use hiddenGroupKeys and hiddenFilterKeys, so it won't be rendered on the filter panel or the group panel.
     * <DataList 
     *  hiddenGroupKeys={['Icon']} hiddenFilterKeys={['Icon']}  
     *  columns={[
            {key: 'Icon' as any, name: 'Nome Do Projeto', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'SearchBox'}]} />
     * ```
    */
    columns: TColumn<T>[];
    /**The list of items to be displayed.*/
    rows: T[];
    /**
     * Before v5 everything related to the row information was an `IRow<T>`,
     * which basically meant that the `IRow<T>` was the `T` itself, but with an required `{Id: string | number}` property.
     * 
     * Since v5, the `IRow<T>` is no longer required, and the `T` itself is used as the `IRow<T>`.
     * For that to work, you need to provide the `keyUniqueIdentifier` property, which will be used to identify each row.
     * 
     * This makes easier to use, since you don't need to create a new object with the `Id` property 
     * and use your own, and make it easier for plugin developers to create their own plugins.
     */
    keyUniqueIdentifier: keyof T;
    /**Custom styles to the component container and root. */
    styles?: IDataListStyles;
    plugins?: IDataListPlugin<T>[];
}