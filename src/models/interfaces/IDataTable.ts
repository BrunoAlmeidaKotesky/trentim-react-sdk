import { IDatatableStyles } from "./IDatatableStyles";

/**Represents the columns of the table for the `<thead>` */
export interface IDatableColumns {
    /**The displayname of the column */
    title: string;
    /**The specific key of the selected object from the `rows` props*/
    keyName: string;
}

export interface ITableCustomEvents<T extends any> {
    eventName: string;
    objectKey: string;
    onEventAction: (event: T, rowRef?: HTMLTableRowElement) => void;
}

export interface IDatatableProps<T> {
    /**São os table headers, devem possuir exatamente os mesmos nome de objetos utilizados nas linhas */
    columns: IDatableColumns[];
    styles?: Partial<IDatatableStyles>;
    footer?: JSX.Element;
    classes?: {container: string};
    idName?: string;
    filters?: {filterKeys: string[]}
    /**these keys will not be renredered on the table, from `rows` array. */
    ignoreKeys?: string[];
    rows: T[];
    ref?: HTMLTableRowElement;
    customEvents?: ITableCustomEvents<T>[];
    tableCaption?: string;
}