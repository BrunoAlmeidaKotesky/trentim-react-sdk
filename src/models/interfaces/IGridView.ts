import type { IGridCardProps } from "./ICardProps";
import type { IPanelChildrenPosition } from './ICommonPanel';
import type { IConfigurableHeader } from "./IListOptions";
import type { ApplyCustomFilter, FilterComponent, CancelActivation, ColumnKey, IDateConversionOptions } from '../types/Common';
import type { Dispatch, SetStateAction } from "react";
import type { IColumn, IDetailsListProps, IGroup } from "@fluentui/react";

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

export type TColumn<T> = IColumn & {
    /**If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
   //Type of key should be either keyof T or DeepPath
    key: ColumnKey<T>;
    /**If the desired value is from an nested object, provide the value with dots. 
     * @example "file.name" will get the value from the file object.
    */
    fieldName?: ColumnKey<T>;
    dateConversionOptions?: IDateConversionOptions;
    /**How should the filter on the filter panel be rendered */
    renderFilterAs?: FilterComponent;
    /**Use this if you don't want to display the column all it's rows, with this you can still use this column on for actions like filtering or grouping. 
     * @default false */
    hideColumn?: boolean;
}

export type IFluentDetailsListProps = Omit<IDetailsListProps, 'columns' | 'items' | 'onRenderItemColumn' | 'onRenderRow'| 'layoutMode' | 'onRenderDetailsHeader'>; 

export interface IGridListProps<T extends any> extends IGridHandler<T> {
    /**Use this to overwrite the default props `IDetailListProps` from Microsoft's `@fluent-ui` */
    detailsListProps?: IFluentDetailsListProps;
    /**if `renderAs` is set to `card`, you need to provide the card props. */
    cardProps?: IGridCardProps;
    /**Configure the header behavior, such as to enable filter and other functionalities. */
    headerOptions: IConfigurableHeader<T>;
    /**If the grid will be rendered as a list or as a collection of `<Card />` component 
     * @default list
    */
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
    /**The list of items to be displayed.
     * 
     * The items should be of type `IRow<T>[]`, which means any parsable interface that contains an `Id` property.
    */
    rows: IRow<T>[];
    /**The label to be displayed on the top of the filter Panel. */
    filterPanelTitle?: string;
    /**The label to be displayed on the top of the group Panel. */
    groupPanelTitle?: string;
    /**A list of keys from `IRow` to not be displayed on the top of the Panel when filtering.*/
    hiddenFilterKeys?: string[] | Array<ColumnKey<T>>;
    /**A list of keys from `IRow` to not be displayed on the top of the Panel when grouping.*/
    hiddenGroupKeys?: string[] | Array<ColumnKey<T>>;
    /** If set, this will be used to display when a group does not have any values to be grouped by. */
    emptyGroupLabel?: string;
    /** If set, the `<DetailsList />` will be grouped by this key by default.
     * 
     * Even if the `enableGrouping` property is set to `false`, the `groupByKey` property will be used to group the items.
    */
    initialGroupedBy?: {key: ColumnKey<T>; name: string};
    /**
     * __@note This property is not in a stable release.__
     * 
     * Use this property if you want to call the Groping Algorithm when this dependency changes, this is related to `initialGroupedBy` property.
     * This means that the initial grouping will be called more than once, which can potentially cause an infinite loop if not handled correctly.
     */
    unstable_groupByDependencies?: any;
    /**Use this property if you want to render custom components inside grouping or filtering panel. 
     * 
     * `top` will be rendered on the top of the panel, `footer` will be rendered on the bottom of the panel.
    */
    panelChildren?: IPanelChildren;
    /**Custom styles to the component container and root. */
    styles?: IGridViewStyles;
}

export interface IPanelChildren {
    group?: IPanelChildrenPosition
    filter?: IPanelChildrenPosition
}

export interface IGridClickActions {
    /**A callback function that will be called when the filter button is clicked. 
    * 
    *This is **different** from `applyCustomFilter` property, which is a way to provide a custom filter algorithm when confirming. 
    *
    * Both the default algorithm or the custom will be executed **after** this callback.
    */
    onFilterIconClick?: () => void;
    /**A callback function that will be called when the search box is focused, it **will not** overwrite the default search behavior. */
    onSearchBoxClick?: (e?: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
    /**A callback function that will be called when the grouping button is clicked, it **will not** overwrite the default grouping behavior.*/
    onGroupIconClick?: () => void;
    /**A additional callback to be called either when the filter panel is cancelled by clicking on cancel button, close button or clicking on apply button
     * with no filter applied.
     */
    onFilterPanelCancel?: (activatedBy?: CancelActivation) => void;
    /**A additional callback to be called either when the group panel is cancelled by clicking on cancel button, close button or clicking on apply button 
     * with no grouping applied.
    */
    onGroupPanelCancel?: (activatedBy?: CancelActivation) => void;
}

/**Represents all the functions that can be used. */
export interface IGridHandler<T> extends IGridClickActions {
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
    applyCustomFilter?: ApplyCustomFilter<T>;
    /**A callback that will be called after the items were filtered on the panel.
     * 
     * @note It will not work if using `applyCustomFilter`, however you can use the same logic of this callback on the custom filter.
    */
    onItemsFiltered?: (filtered?: IRow<T>[]) => void;
    /**A callback that will be called after the items were grouped on the panel. 
     * 
     *You can also work with the key that was selected, and you have access to the group state setter.
    */
    onItemsGrouped?: (opt?: {selectedKey: string, setGroups: Dispatch<SetStateAction<IGroup[]>>}) => void;
    /**A callback that will be called after the items were filtered from the search box. */
    onSearchBoxItemsFiltered?: (filtered?: IRow<T>[]) => void;
}

export interface IGridViewStyles {
    /**The root <div> of the whole component, including the header and list/cards. */
    root?: React.CSSProperties;
    /**The container of the `<DetailsList />` or `<Card />` list. */
    contentContainer?: React.CSSProperties;
}