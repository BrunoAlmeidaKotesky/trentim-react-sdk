import type {Paths} from '../models/types/UtilityTypes';

export class Utils {

    /**Tries to convert an ISO `string` to the locale format. */
    public static convertIsoToLocaleString(date: string, locales: string | string[] = 'pt-BR', formatOptions: Intl.DateTimeFormatOptions = undefined): string {
        //First check if the string can be converted to a date object.
        if (!(new Date(date) instanceof Date) && isNaN(new Date(date)?.getTime()))
            return date;
        const isIsoDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z/.test(date);
        if (!isIsoDate)
            return date;
        return new Intl.DateTimeFormat(locales, formatOptions).format(new Date(date));
    }

    /**Get a value from a deep nested object.
     * 
     * @param obj The object to search in.
     * @param path The path to the value, as an array of keys, separated by dots.
     * @returns The value, if found.
     * 
     * Theoretically, this function can be used to get the value from an `number[]` as the type of the `pathArr`, but I've not tested it.
     */
    public static getNestedObject<
        /**Inferred string path from the given object  */
        Path extends Paths<Obj, 8>,
        ReturnV extends any = unknown,
        Obj extends Record<any, any> = Record<any, any>>
        (nestedObj: Obj, path: Path): ReturnV {
        const pathAsArray = path.split(".");
        return pathAsArray?.reduce((obj, key) => (obj && obj[key as string] !== 'undefined') ? obj[key as string] : undefined, nestedObj) as ReturnV;
    }

    /**
     * This is similar to `Object.keys`, but it traverses through the whole object hierarchy and separates the nested keys by dots.
     */
    public static getDeepKeys<
    ResultKeys extends Array<Paths<Obj, 8>>, 
    Obj extends Record<any, any> = Record<any, any>>
    (obj: Obj): ResultKeys | string[] {
        let keys: string[] = [];
        for (let key in obj) {
            keys.push(key);
            if (typeof obj[key] === "object") {
                let subKeys = Utils.getDeepKeys(obj[key]) as string[];
                keys = keys.concat(subKeys?.map(subkey => {
                    return key + "." + subkey;
                }));
            }
        }
        return keys;
    }
}