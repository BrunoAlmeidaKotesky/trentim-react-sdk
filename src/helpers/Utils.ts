import type { IGroup } from "@fluentui/react/lib/DetailsList";
import type { INode, IRow } from "../models/interfaces/IGridView";

export class Utils {

    public static findObjectByPath<T, R extends any>(objectIn: T, path: string[]): R {
        try {
            let obj = objectIn;
            for (let i = 0; i <= path.length - 1; i++) {
                const item = path[i]
                obj = obj[item]
            }
            return obj as R ?? null;
        } catch (e) {
            return null;
        }
    }

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
        if (!nodeItems || !nodeItems?.length)
            return;
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
}