import type { IButtonProps } from "@fluentui/react/lib/Button";
import type { IRow } from "./IGridView";

type CustomButtons = { props: IButtonProps, position?: number, className?: string, text: string }[];
export interface IListOptionsProps {
    /**
     * If set to `true`, the filter panel will be displayed, and all the automatic filters logic will be applied to the list.
     * @defaultvalue `true`
     **/
    enableFilter?: boolean;
    /**
     * If set to `true`, will display the searchbox, where the `searchKeys` property should be used to define which key to filter by. 
     * @defaultvalue `true` */
    enableSearch?: boolean;
    /**If set to `true` it will display an additional button on the header that changes the `renderAs` to `card` or `list` when clicked. */
    enableCardView?: boolean;
    /**If set to `true`, the grouping panel will be displayed, and all the automatic grouping logic will be applied to the list.*/
    enableGrouping?: boolean;
    /**If `enableSearch` is set to `true`, you need to provide a primitive array of keys from your `IRow[]` to be filtered. */
    searchKeys?: string[];
    /**A placeholder text to the search box. */
    searchBoxPlaceholder?: string;
    onSearchItem?: (searchText: string, keys: Array<keyof IRow>) => void;
    setIsFilterPanelOpen: (isOpen: boolean) => void;
    setIsGroupPanelOpen: (isOpen: boolean) => void;
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
    }
}

export type IConfigurableHeader = Omit<IListOptionsProps, 'onSearchItem' | 'setIsFilterPanelOpen' | 'setRenderAs' | 'setGroupBy'| 'setIsGroupPanelOpen'>;