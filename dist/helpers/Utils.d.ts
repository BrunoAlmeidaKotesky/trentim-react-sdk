import type { IGroup } from "@fluentui/react/lib/DetailsList";
import type { INode, IRow } from "../models/interfaces/IGridView";
export declare class Utils {
    /**Tries to convert an ISO `string` to the locale format. */
    static convertIsoToLocaleString(date: string, locales?: string | string[], formatOptions?: Intl.DateTimeFormatOptions): string;
    static processNodes(nodeItems: INode[] | undefined, groups: IGroup[], items: IRow[], level: number): void;
    static copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[];
    /**Get a value from a deep nested object.
     *
     * @param obj The object to search in.
     * @param path The path to the value, as an array of keys, separated by dots.
     * @returns The value, if found.
     *
     * Theoretically, this function can be used to get the value from an `number[]` as the type of the `pathArr`, but I've not tested it.
     */
    static getNestedObject<Path, ReturnV extends any, Obj extends Record<any, any>>(nestedObj: Obj, pathArr: Path[]): ReturnV;
    static getDeepKeys(obj: Record<any, any>): string[];
}
