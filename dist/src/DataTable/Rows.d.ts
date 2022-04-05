import * as React from 'react';
import type { IDatableColumns, ITableCustomEvents } from '../models/interfaces/IDataTable';
import type { IBodyStyles } from '../models/interfaces/IDatatableStyles';
interface RowProps<T extends object> {
    type: 'div' | 'table';
    rows: T[];
    columns: IDatableColumns[];
    ignoreKeys: string[];
    customEvents: ITableCustomEvents<T>[];
    styles?: Partial<IBodyStyles>;
    onRowClick?: (item?: T, ev?: React.MouseEvent<HTMLElement, MouseEvent>) => any;
}
export declare function Rows<T extends object>({ ignoreKeys, rows, columns, customEvents, styles, type, onRowClick }: RowProps<T>): JSX.Element;
export {};
