import type { IGroup } from '@fluentui/react/lib/DetailsList';
import type { BaseType, IRow, TColumn } from '@models/interfaces/IDataList';
import type { IDataListPlugin } from '@plugins/DataList/DataListPlugin';

type BaseMapKeys = 'filtered' | 'sorted' | 'allRows';
export type CallbackSet<T> = (data: T) => T;
export type ValueOrFunc<T> = T | CallbackSet<T>;
export interface DataListState<T extends BaseType, S extends string = string> {
    /**The initial rows that were passed to the DataList component */
    rows: IRow<T>[];
    /**Use this state to store the rows information depending on your needs */
    tempRows: Map<BaseMapKeys | S, IRow<T>[]>;
    plugins: IDataListPlugin<T>[];
    columns: TColumn<T>[];
    groups?: IGroup[];
}

export interface DataListActions<T extends BaseType> {
    /**Set the rows that will be displayed in the DataList */
    setRows: (data: ValueOrFunc<IRow<T>[]>) => void;
    setColumns: (data: ValueOrFunc<TColumn<T>[]>) => void;
    setTempRows: <S extends string>(key: S | BaseMapKeys, rows: IRow<T>[]) => void;
    getTempRows: <S extends string>(key: S | BaseMapKeys) => IRow<T>[];
    addPlugin: (plugin: IDataListPlugin<T>) => void;
    initializePlugin: (plugin: IDataListPlugin<T>) => void;
    setPlugins: (plugins: ValueOrFunc<IDataListPlugin[]>) => void;
}

export type DataListStore<T extends BaseType = BaseType> = DataListState<T> & DataListActions<T>;