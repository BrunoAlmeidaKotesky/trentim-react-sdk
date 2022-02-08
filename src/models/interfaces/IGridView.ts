import { IButtonProps } from "@fluentui/react/lib/Button";
import type { IColumn, IDetailsListProps, IGroup } from "@fluentui/react/lib/DetailsList";

export interface IFileInfo {
    key: string;
    name: string;
    value: string;
    iconName: string;
    fileType: string;
};

export interface IRow {
    [key: string]: any;
    file?: IFileInfo;
}

export interface IGridListProps {
    detailsListProps?: IDetailsListProps;
    listOptions: Omit<IListOptionsProps, 'onSearchItems'>;
    listType: 'folder' | 'list';
    groups?: IGroup[];
    columns: IColumn[];
    rows: IRow[];
}

type CustomButtons = {props: IButtonProps, position?: number, className?: string, text: string}[];
export interface IListOptionsProps {
    enableFilter?: boolean;
    enableSearch?: boolean;
    enableGroupBy?: boolean;
    enableCardView?: boolean;
    searchKey?: string;
    onSearchItem?: (searchText: string, key: keyof IRow) => void;
    /**The group by keys array order depends on the position of the key.*/
    groupByKeys?: string[];
    customButtons?: CustomButtons;
}