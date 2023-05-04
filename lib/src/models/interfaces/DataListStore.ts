import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { TColumn } from '@models/interfaces/IDataList';
import type { IDataListPlugin } from '@plugins/DataList/DataListPlugin';

type BaseMapKeys = 'filtered' | 'grouped' | 'allRows';
export type CallbackSet<T> = (data: T) => T;
export type ValueOrFunc<T> = T | CallbackSet<T>;
export interface DataListState<T, S extends string = string> {
    /**The initial rows that were passed to the DataList component */
    rows: T[];
    /**Use this state to store the rows information depending on your needs */
    tempRows: Map<BaseMapKeys | S, T[]>;
    plugins: IDataListPlugin<T>[];
    columns: TColumn<T>[];
    groups?: IGroup[];
}

export interface DataListActions<T> {
    /**Set the rows that will be displayed in the DataList */
    setRows: (data: ValueOrFunc<T[]>) => void;
    setColumns: (data: ValueOrFunc<TColumn<T>[]>) => void;
    setTempRows: <S extends string>(key: S | BaseMapKeys, rows: T[]) => void;
    getTempRows: <S extends string>(key: S | BaseMapKeys) => T[];
    initializePlugin: (plugin: IDataListPlugin<T>) => void;
    setPlugins: (plugins: ValueOrFunc<IDataListPlugin<T>[]>) => void;
}

export type DataListStore<T> = DataListState<T> & DataListActions<T>;