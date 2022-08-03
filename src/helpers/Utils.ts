import type { Paths, TypeFrom } from 'bakutils-types';

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
        const pathAsArray = path?.split(".");
        try {
            return pathAsArray?.reduce((obj, key) => (obj && obj[key as string] !== 'undefined') ? obj[key as string] : undefined, nestedObj) as ReturnV;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }

    public static setDeepValue = <
    Obj extends Record<any, any>,
    Path extends string = Paths<Obj, 4>
    >(obj: Obj, path: Path, value: TypeFrom<Obj, Path>): Obj => {
        if (Object(obj) !== obj) return obj; // When obj is not an object
        // If not yet an array, get the keys from the string-path
        if (!Array.isArray(path)) 
            (path as any) = path?.toString()?.match(/[^.[\]]+/g) || []; 
        ((path as any)?.slice(0,-1) as any[]).reduce((a, c, i) => // Iterate all of them except the last one
             Object(a[c]) === a[c] // Does the key exist and is its value an object?
                 // Yes: then follow that path
                 ? a[c] 
                 // No: create the key. Is the next key a potential array-index?
                 : a[c] = Math.abs(path[i+1] as any)>>0 === +path[i+1] 
                       ? [] // Yes: assign a new array object
                       : {}, // No: assign a new plain object
             obj)[path[path.length-1]] = value; // Finally assign the value to the last key
        return obj; // Return the top-level object to allow chaining
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

    /**
     * Get the search parameters from the URL as an object.
     * You can type the possible search parameters as it's first type parameter.
     * @param asLowerCase If true, the keys of the returned object will be lowercased.
     * 
     * @returns The search parameters as an object.
     * 
     * @example
     * ```typescript
     * const searchParams = Utils.getSearchParams<'projectid'|'username'>(true); //Record<'projectid' | 'username', string>
     * ```
     */
    static getSearchParamsAsObject<
        Keys extends string,
        AsLowerCase extends boolean = false | true
    >(asLowerCase: AsLowerCase): Record<AsLowerCase extends true ? Lowercase<Keys> : Keys, string> {
        try {
            const search = location.search.substring(1);
            const pathMap: Record<string, string> = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            const keys = Object.keys(pathMap);
            const values = Object.values(pathMap);
            const result: Record<Keys, string> = {} as Record<Keys, string>;
            for (let idx = 0; idx < keys.length; idx++) {
                const key = keys[idx];
                result[key] = asLowerCase ? values[idx].toLowerCase() : values[idx];
            }
        } catch(e) { return null; }
    }
}