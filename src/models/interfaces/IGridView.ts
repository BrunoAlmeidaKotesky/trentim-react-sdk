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

export interface IGridListProps {
    detailsListProps?: IDetailsListProps;
    headerOptions: Omit<IListOptionsProps, 'onSearchItem'>;
    groups?: IGroup[];
    listType: 'folder' | 'list' | 'file';
    columns: IColumn[];
    rows?: IRow[];
    /**If set, the columns will be displayed as tree view*/
    rowsAsNode?: INode[];
}

type CustomButtons = {props: IButtonProps, position?: number, className?: string, text: string}[];
export interface IListOptionsProps {
    enableFilter?: boolean;
    enableSearch?: boolean;
    enableGroupBy?: boolean;
    enableCardView?: boolean;
    searchKey?: string;
    onSearchItem?: (searchText: string, key: keyof IRow) => void;
    customButtons?: CustomButtons;
}