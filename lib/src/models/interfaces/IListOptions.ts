import type { IButtonProps } from "@fluentui/react/lib/Button";
import type { IconClickCaller } from "@helpers/enums";
import type { IGridClickActions, IRow } from "@models/interfaces/IGridView";
import type { ColumnKey, ICustomButtonConfig } from '@models/types/Common';
import type { ITextFieldProps } from "@fluentui/react/lib/TextField";

export interface ICustomButtons extends ICustomButtonConfig {
    /**Default `fluent-ui` Button props. */
    props: IButtonProps,
    /**The flex position of your button. */
    position?: number, 
    /**Custom class name. */
    className?: string,
    /**Text to display on the button. */
    text: string;
};

export interface IHeaderButtonProps extends Omit<Partial<IButtonProps>, 'onClick'> {}
export interface IHeaderTextFieldProps extends Omit<Partial<ITextFieldProps>, 'onBlur' | 'onFocus' | 'onKeyDown' | 'placeholder'> {}

export interface IOverridableGridOptions {
    /**Use this property if you want to overwrite some of the default `DefaultButton` `IButtonProps` properties of the filter button component. 
     *
     * Some properties cannot be overridden, and will be ignored. */
    filterButtonProps?: IHeaderButtonProps;
    /**Use this property if you want to overwrite some of the default `DefaultButton` `IButtonProps` properties of the group button component. 
     *
     * Some properties cannot be overridden, and will be ignored. */
    groupButtonProps?: IHeaderButtonProps;
    /**Use this property if you want to overwrite the some of the default `ITextFieldProps` from `TextField` component of the SearchBox. 
     * 
     * Some properties cannot be overridden, and will be ignored. */
    searchBoxProps?: IHeaderTextFieldProps;
}

export interface IListOptionsProps<T> extends Partial<IGridClickActions>, IOverridableGridOptions {
    /**
     * If set to `true`, the filter panel will be displayed, and all the automatic filters logic will be applied to the list.
     * @defaultvalue `true`
     **/
    enableFilter?: boolean;
    /**
     * If set to `true`, will display the searchbox, where the `searchKeys` property should be used to define which key to filter by. 
     * @defaultvalue `true` */
    enableSearch?: boolean;
    /**If set to `true`, the grouping panel will be displayed, and all the automatic grouping logic will be applied to the list.*/
    enableGrouping?: boolean;
    /**If `enableSearch` is set to `true`, you need to provide a primitive array of keys from your `IRow[]` to be filtered. */
    searchKeys?: Array<ColumnKey<T>>;
    /**A placeholder text to the search box. */
    searchBoxPlaceholder?: string;
    onSearchItemChange?: (searchText: string, keys: Array<keyof IRow>) => void;
    onClickSearchIcon?: (calledBy: IconClickCaller, searchText?: string, keys?: (keyof IRow)[]) => void;
    setIsFilterPanelOpen: (isOpen: boolean) => void;
    setIsGroupPanelOpen: (isOpen: boolean) => void;
    /**Use this property if you want to add more custom buttons on the header. The button will be the `@fluent-ui` `PrimaryButton`, but it's props can be changed
     * on the `props`.
    * @defaultvalue `[]`*/
    customButtons?: ICustomButtons[];
    /**The order of the default buttons. */
    defaultButtonsOrder?: {
        group: number;
        search: number;
        filter: number;
    }
    /**Use this property if you want use the available left space of the header elements, which is followed by the default buttons.*/
    leftHeaderSpace?: React.ReactNode;
    
}

export type IConfigurableHeader<T = any> = Omit<IListOptionsProps<T>, 
    'onSearchItemChange' | 'onClickSearchIcon' | 'setIsFilterPanelOpen' | 'setGroupBy' | 
    'setIsGroupPanelOpen' | 'onFilterIconClick' | 'onSearchBoxClick' | 'onGroupIconClick' | 'onGroupPanelCancel' | 'onFilterPanelCancel' >;