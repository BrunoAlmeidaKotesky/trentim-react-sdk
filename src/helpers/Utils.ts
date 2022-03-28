import type { IGroup } from "@fluentui/react/lib/DetailsList";
import type { INode, IRow } from "../models/interfaces/IGridView";

export class Utils {

    /**Tries to convert an ISO `string` to the locale format. */
    public static convertIsoToLocaleString(date: string, locales: string | string[] = 'pt-BR', formatOptions: Intl.DateTimeFormatOptions = undefined): string {
        //First check if the string can be converted to a date object.
        if(!(new Date(date) instanceof Date) && isNaN(new Date(date)?.getTime()))
            return date;
        const isIsoDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z/.test(date);
        if (!isIsoDate)
            return date;
        return new Intl.DateTimeFormat(locales, formatOptions).format(new Date(date));
    }

    public static processNodes(nodeItems: INode[] | undefined, groups: IGroup[], items: IRow[], level: number): void {
        // end of recursion
        if (!nodeItems || !nodeItems?.length) return;
        // processing current level of the tree
        nodeItems.forEach(nodeItem => {
            const newGroup: IGroup = {
                key: nodeItem.key,
                name: nodeItem.title,
                startIndex: items?.length,
                count: 0,
                children: [],
                level: level, // level is incremented on each call of the recursion
                data: nodeItem // storing initial INode instance in the group's data
            };

            groups.push(newGroup);
            if (nodeItem?.items && nodeItem?.items?.length) {

                // adding items to the flat array
                items.push(...nodeItem?.items);
            }

            // processing child nodes
            Utils.processNodes(nodeItem.children, newGroup.children!, items, level + 1);
            // current group count is a sum of group's leaf items and leaf items in all child nodes
            newGroup.count = items?.length - newGroup.startIndex;
        });
    }

    public static copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
    }

    /**Get a value from a deep nested object.
     * 
     * @param obj The object to search in.
     * @param path The path to the value, as an array of keys, separated by dots.
     * @returns The value, if found.
     * 
     * Theoretically, this function can be used to get the value from an `number[]` as the type of the `pathArr`, but I've not tested it.
     */
    public static getNestedObject<Path, ReturnV extends any, Obj extends Record<any, any>>(nestedObj: Obj, pathArr: Path[]): ReturnV {
        return pathArr?.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj) as ReturnV;
    }

    public static getDeepKeys(obj: Record<any, any>): string[] {
        let keys: string[] = [];
        for(let key in obj) {
            keys.push(key);
            if(typeof obj[key] === "object") {
                let subKeys = Utils.getDeepKeys(obj[key]);
                keys = keys.concat(subKeys?.map(subkey => {
                    return key + "." + subkey;
                }));
            }
        }
        return keys;
    }
    
}