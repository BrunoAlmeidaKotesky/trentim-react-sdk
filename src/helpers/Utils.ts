import { PropertyPath } from 'lodash';
import * as set from 'lodash-es/set';

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

    /**
     * @TO-DO: Add documentation
     */
    public static copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        return items.slice(0).sort((a: T, b: T) => {
            const aValue = Utils.getNestedObject(a, columnKey?.split('.'));
            const bValue = Utils.getNestedObject(b, columnKey?.split('.'));
            return ((isSortedDescending ? aValue < bValue : aValue > bValue) ? 1 : -1);
        });
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

    /**Set the value of a deep nested object by an path of keys separated by dots `.`
     * 
     * This methods does not use an native implementation of the function, but instead uses the `set` function from `lodash` library.
     * 
     * @note Only the `set` function is loaded from the `lodash` library.
    */
    public static setNestedObject<Obj extends Record<any, any>>(nestedObj: Obj, pathArr: PropertyPath, value: any) {
        return set?.default(nestedObj, pathArr, value);
    }

    /**@TO-DO: Add documentation */
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