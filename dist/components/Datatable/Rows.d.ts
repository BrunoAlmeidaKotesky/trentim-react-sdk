import { IDatableColumns, ITableCustomEvents } from '../../models/interfaces/IDataTable';
interface RowProps<T extends object> {
    rows: T[];
    columns: IDatableColumns[];
    ignoreKeys: string[];
    customEvents: ITableCustomEvents<T>[];
}
export declare function Rows<T extends object>({ ignoreKeys, rows, columns, customEvents }: RowProps<T>): JSX.Element;
export {};
