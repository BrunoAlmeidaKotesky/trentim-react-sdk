import { IDatableColumns, ITableCustomEvents } from '../../models/interfaces/IDataTable';
import { IBodyStyles } from '../../models/interfaces/IDatatableStyles';
interface RowProps<T extends object> {
    rows: T[];
    columns: IDatableColumns[];
    ignoreKeys: string[];
    customEvents: ITableCustomEvents<T>[];
    styles?: Partial<IBodyStyles>;
}
export declare function Rows<T extends object>({ ignoreKeys, rows, columns, customEvents, styles }: RowProps<T>): JSX.Element;
export {};
