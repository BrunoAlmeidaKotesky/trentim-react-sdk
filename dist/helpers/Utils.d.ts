import type { Paths } from '../models/types/UtilityTypes';
export declare class Utils {
    /**Tries to convert an ISO `string` to the locale format. */
    static convertIsoToLocaleString(date: string, locales?: string | string[], formatOptions?: Intl.DateTimeFormatOptions): string;
    /**Get a value from a deep nested object.
     *
     * @param obj The object to search in.
     * @param path The path to the value, as an array of keys, separated by dots.
     * @returns The value, if found.
     *
     * Theoretically, this function can be used to get the value from an `number[]` as the type of the `pathArr`, but I've not tested it.
     */
    static getNestedObject<
    /**Inferred string path from the given object  */
    Path extends Paths<Obj, 8>, ReturnV extends any = unknown, Obj extends Record<any, any> = Record<any, any>>(nestedObj: Obj, path: Path): ReturnV;
    /**
     * This is similar to `Object.keys`, but it traverses through the whole object hierarchy and separates the nested keys by dots.
     */
    static getDeepKeys<ResultKeys extends Array<Paths<Obj, 8>>, Obj extends Record<any, any> = Record<any, any>>(obj: Obj): ResultKeys | string[];
}
