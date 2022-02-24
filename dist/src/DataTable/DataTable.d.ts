import * as React from "react";
import type { IDatatableProps } from '../models/interfaces/IDataTable';
export declare const DataTable: React.MemoExoticComponent<(<T extends object>({ columns, styles, footer, rows, ignoreKeys, idName, customEvents, tableCaption, classes, type, onRowClick }: IDatatableProps<T>) => JSX.Element)>;
