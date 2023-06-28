import type { Paths, TypeFrom } from 'bakutils-types';

/**Get a value from a deep nested object.
 * 
 * @param obj The object to search in.
 * @param path The path to the value, as an array of keys, separated by dots.
 * @returns The value, if found.
 * 
 * @example
 * 
 * ```ts
 * const obj = {a: {b: {c: {d: 2}}}};
 * const value = getDeepValue(obj, 'a.b.c.d'); //2 - And inferred as a number
 * ```
 */
export function getDeepValue<
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
/**
 * Change the value of a property in a deep nested object, mutating the original object.
 * @param obj The object to search in.
 * @param path The path to the value, as an array of keys, separated by dots.
 * @param value The new value to bet set.
 * @returns a new object with the value set, however the original object is **also modified**.
 * 
 * @example
 * ```ts
 * const obj = {a: {b: {c: 1}}};
 * setDeepValue(obj, 'a.b.c', 2);
 * ```
 */
export const setDeepValue = <
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
 * @param obj The object to get the keys from.
 * @return The array of all the existing keys.
 * 
 * @example
 * ```ts
 * const obj = {a: {b: {c: 1}}};
 * const keys = getDeepKeys(obj); //['a', 'a.b', 'a.b.c'] - string[] | ("a" | "a.b" | "a.b.c")[]
 * ``` 
 */
export function getDeepKeys<
ResultKeys extends Array<Paths<Obj, 8>>, 
Obj extends Record<any, any> = Record<any, any>>
(obj: Obj): ResultKeys | string[] {
    let keys: string[] = [];
    for (let key in obj) {
        keys.push(key);
        if (typeof obj[key] === "object") {
            let subKeys = getDeepKeys(obj[key]) as string[];
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
 * const searchParams = getSearchParams<'projectid'|'username'>(true); //Record<'projectid' | 'username', string>
 * ```
 */
export function getSearchParamsAsObject<
    Keys extends string,
    AsLowerCase extends boolean = false | true
>(asLowerCase: AsLowerCase): Record<AsLowerCase extends true ? Lowercase<Keys> : Keys, string> | null {
    try {
        const hasQuery = new URL(location.href).search !== '';
        if(!hasQuery) {
            console.warn("[TRS] - No search params found in the URL.");
            return null;
        }
        const search = location.search.substring(1);
        const pathAsString = '{"' + decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/\//, '\\/')
        .replace(/=/g, '":"') + '"}';
        const pathMap: Record<string, string> = JSON.parse(pathAsString);
        const keys = Object.keys(pathMap);
        const values = Object.values(pathMap);
        const result: Record<Keys, string> = {} as Record<Keys, string>;
        for (let idx = 0; idx < keys.length; idx++) {
            const key = keys[idx];
            if(asLowerCase)
                result[key?.toLowerCase()] = values[idx];
            else
                result[key] = values[idx];
        }
        return result as Record<AsLowerCase extends true ? Lowercase<Keys> : Keys, string>;
    } catch(e) { console.error('[TRS] - Failed to get Url params as an object, ', e); return null; }
}

/**
 * Set a query parameter in the URL, either by updating it's value or adding it if it doesn't exist.
 * @param queryParam The query parameter to update or add.
 * @param value The value of the query parameter.
 */
export function setQueryStringUrl(queryParam: string, value: any) {
    const url = new URL(window.location.href);
    url.searchParams.set(queryParam, value.toString());
    window.history.replaceState({}, document.title, url.toString());
}

/**The same method as `JSON.parse`, but it handles it when it fails, automatically returning null (If fallback value is not set).
 * @param json The json string
 * @param fallbackValue A value if the parse fails
 * @returns the parsed json, or the fallback value if the parse fails.*/
export const tryJSONParse: <Result, Fallback = null>(json: string, fallbackValue?: Fallback) => (Result | Fallback | null) = 
    (json, fallbackValue = null) => {
        try { return JSON.parse(json); }
        catch(e) {
            console.error('[TRS] - ', e);
            return fallbackValue as any; 
        }
}

/**
 * Fills missing keys in a given object based on a template object. 
 * If a key from the template is not found in the given object, 
 * the key will be added to the given object with a provided fallback value.
 *
 * @param {T} template The template object to match the keys against.
 * @param {Partial<T>} obj The object that will be filled with missing keys.
 * @param {*} fallbackValue The value to be assigned for the missing keys in the object. Default value is null.
 * 
 * @returns {T} The resultant object which is a copy of the given object but filled with missing keys.
 * 
 * @template T This function can handle any type of object. T is the type of the object.
 *
 * @example
 * const template = { a: 1, b: 2, c: { d: 3 } };
 * const obj = { a: 10, c: { } };
 * const fallbackValue = 0;
 * fillMissingKeys(template, obj, fallbackValue);
 * // Result: { a: 10, b: 0, c: { d: 0 } }
 */
 export function fillMissingKeys<T extends object>(template: T, obj: Partial<T>, fallbackValue = null): T {
    return Object.keys(template).reduce((acc: Record<any, any>, key) => {
        //@ts-ignore
        const value = template[key];
        if (typeof value === 'object' && value !== null && !(value instanceof Array)) {
          // Recurse for nested objects
          acc[key] = fillMissingKeys(value as T, obj[key as keyof typeof obj]  as Partial<T> || {}, fallbackValue);
        } else {
          acc[key] = Object.prototype.hasOwnProperty.call(obj, key) ? obj[key as keyof typeof obj] : fallbackValue;
        }
        return acc;
    }, {} as any);
}