import type { BaseType } from "@models/interfaces/IDataList";
import type { DataListStore } from "@components/DataList/store";
import type {ReactNode} from "react";

export interface IDataListPlugin<T extends BaseType = BaseType> {
    id: string;
    name: string;
    version: string;
    enable(): void;
    disable(): void;
    initialize(store: DataListStore<T>): void;
    render(store: DataListStore<T>): ReactNode;
}
export class DataListPlugin<T extends BaseType = BaseType> implements IDataListPlugin<T> {
    constructor(public id: string, public name: string, public version: string) { }

    initialize(_store: DataListStore<T>): void {
        throw new Error('[TRS] - O método "initialize" deve ser implementado por plugins específicos.');
    }

    enable() {
        console.log(`Plugin ${this.name} ativado.`);
    }

    disable() {
        console.log(`Plugin ${this.name} desativado.`);
    }

    render(_store): ReactNode {
        throw new Error('[TRS] - O método "render" deve ser implementado por plugins específicos.');
    }
}