import type { IGroup } from "@fluentui/react/lib/DetailsList";
import type { INode, IRow } from "../models/interfaces/IGridView";
export declare class Utils {
    static findObjectByPath<T, R extends any>(objectIn: T, path: string[]): R;
    static convertIsoToLocaleString(date: string, locales?: string | string[], formatOptions?: Intl.DateTimeFormatOptions): string;
    static processNodes(nodeItems: INode[] | undefined, groups: IGroup[], items: IRow[], level: number): void;
    static copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[];
    static getNestedObject<T, V extends any>(nestedObj: any, pathArr: T[]): V;
    static getAllNestedObjectKeys(nestedObj: any): string[];
}
