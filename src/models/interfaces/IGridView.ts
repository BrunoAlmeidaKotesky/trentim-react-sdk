import { IButtonProps } from "@fluentui/react/lib/Button";
import type { IColumn, IDetailsListProps, IGroup } from "@fluentui/react/lib/DetailsList";

export interface IFileInfo {
    key: string;
    name: string;
    /**Any Extra value to hold on that object */
    value?: any;
    iconUrl: string;
    fileType: string;
};

export interface INode extends IRow {
    items?: IRow[];
    children?: INode[];
}

export interface IRow {
    [key: string]: any;
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
    dateConvertionOptions?: IDateConvertionOptions;
}

interface IDateConvertionOptions {
    shouldConvertToLocaleString?: boolean;
    locales?: string | string[];
    formatOptions?: Intl.DateTimeFormatOptions;
}

export interface IGridListProps<T extends any> {
    detailsListProps?: IDetailsListProps;
    headerOptions: Omit<IListOptionsProps, 'onSearchItem'|'setIsFilterPanelOpen'>;
    groups?: IGroup[];
    listType: 'folder' | 'list' | 'file';
    columns: TColumn<T>[];
    rows?: IRow[];
    /**If set, the columns will be displayed as tree view*/
    rowsAsNode?: INode[];
    /** */
    onRowClick?: (row: IRow) => void;
    filterPanelTitle?: string;
}

type CustomButtons = {props: IButtonProps, position?: number, className?: string, text: string}[];

export interface IListOptionsProps {
    enableFilter?: boolean;
    enableSearch?: boolean;
    enableGroupBy?: boolean;
    enableCardView?: boolean;
    searchKey?: string;
    onSearchItem?: (searchText: string, key: keyof IRow) => void;
    setIsFilterPanelOpen: (isOpen: boolean) => void;
    customButtons?: CustomButtons;
}