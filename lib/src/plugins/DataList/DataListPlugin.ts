import type { DataListStore } from "@models/interfaces/DataListStore";
import type {ReactNode} from "react";

export interface IDataListPlugin<T> {
    id: string;
    name: string;
    version: string;
    initialize(store: DataListStore<T>): void;
    render(store: DataListStore<T>): ReactNode;
}
export abstract class DataListPlugin<T> implements IDataListPlugin<T> {
    constructor(public id: string, public name: string, public version: string) { }
    abstract initialize(_store: DataListStore<T>): void;
    abstract render(_store): ReactNode;
}