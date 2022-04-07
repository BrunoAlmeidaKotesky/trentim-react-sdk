import type { IColumn, IDetailsListProps } from "@fluentui/react/lib/DetailsList";
import type { ICardProps } from "./IInfoCardProps";
import type { IConfigurableHeader } from "./IListOptions";
import type { IDateConversionOptions } from './ICommon';
import type { ApplyCustomFilter, FilterComponent } from '../types/Common';
import type { Paths } from '../types/UtilityTypes';

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
//Make T extends an optional type, if not set, it will be the default Id: string | number;

export type BaseType = {
    /**It's recommended that the row object contains an unique identifier*/
    Id: string | number
};
export type IRow<T extends {} = BaseType> = T & BaseType & {
    [key: string]: any;
}

type DeepKey<T> = Paths<T>;
export type TColumn<T> = IColumn & {
    /**If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
   //Type of key should be either keyof T or DeepPath
    key: keyof T | DeepKey<T>;
    /**If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
    fieldName?: keyof T | DeepKey<T>;
    dateConversionOptions?: IDateConversionOptions;
    /**How should the filter on the filter panel be rendered */
    renderFilterAs?: FilterComponent;
    /**Use this if you don't want to display the column all it's rows, with this you can still use this column on for actions like filtering or grouping. 
     * @default false */
    hideColumn?: boolean;
}



export type IFluentDetailsListProps = Omit<IDetailsListProps, 'columns' | 'items' | 'onRenderItemColumn' | 'onRenderRow'| 'layoutMode' | 'onRenderDetailsHeader'>; 

export interface IGridListProps<T extends any> extends IGridHandler<T>, IGridViewStyles {
    /**Use this to overwrite the default props `IDetailListProps` from Microsoft's `@fluent-ui` */
    detailsListProps?: IFluentDetailsListProps;
    /**if `renderAs` is set to `card`, you need to provide the card props. */
    cardProps?: ICardProps;
    /**Configure the header behavior, such as to enable filter and other functionalities. */
    headerOptions: IConfigurableHeader;
    /**If the grid will be rendered as a list or as a collection of `<Card />` component */
    renderAs: 'list' | 'card';
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
    */
    columns: TColumn<T>[];
    /**The list of items to be displayed. If you intend to display a list like a tree/folder model, you need to use the `rowsAsNode` instead.*/
    rows?: IRow<T>[];
    /**The label to be displayed on the top of the filter Panel. */
    filterPanelTitle?: string;
    /**The label to be displayed on the top of the group Panel. */
    groupPanelTitle?: string;
    /**A list of keys from `IRow` to not be displayed on the top of the Panel when filtering.*/
    hiddenFilterKeys?: string[] | Array<keyof IRow<T>>;
    /**A list of keys from `IRow` to not be displayed on the top of the Panel when grouping.*/
    hiddenGroupKeys?: string[] | Array<keyof IRow<T>>;
    /** If set, this will be used to display when a group does not have any values to be grouped by. */
    emptyGroupLabel?: string; 
}

/**Represents all the functions that can be used. */
interface IGridHandler<T> {
    /**A custom event to be fired when a row is clicked or the card action button. */
    onItemClick?: (row: IRow<T>) => void;
    /**The same event from `IDetailsListProps` from `@fluent-ui` with generic types.
     * 
     * This is different from `onRenderCustomComponent`, since this method is applied to the default `onRenderItemColumn` from `DetailsList` and not on the entire component.
     */
    onRenderItemColumn?: <S>(item?: S, index?: number, column?: TColumn<S>) => React.ReactNode;
    /**If you want to totally overwrite the component that is being rendered, independent of the `renderAs` value, use this rendering function. 
     *
     * This element will be applied to each item `IRow`, not the entire component. */
    onRenderCustomComponent?: (item: IRow<T>) => React.ReactNode;
    /**If you want to overwrite the default filter algorithm that is applied to the filter panel, pass this callback.
     * 
     * This callback will be applied only to the filter algorithm of the panel, an not to the SearchBox for example, and it also doesn't changes the behavior of how the filter panel components are created.
     * 
     * This callback has an `IApplyCustomFilterParams` as it's parameter, which is the data that are **necessary** if want to apply the filter.
     * @returns `void`
    */
    applyCustomFilter?: ApplyCustomFilter;
}

interface IGridViewStyles {
    styles?: {
        root?: React.CSSProperties;
        contentContainer?: React.CSSProperties;
    }
}