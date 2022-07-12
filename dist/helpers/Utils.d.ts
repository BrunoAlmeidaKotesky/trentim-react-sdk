import type { Paths, TypeFrom } from 'bakutils-types';
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
    static setDeepValue: <Obj extends Record<any, any>, Path extends string = Obj extends object ? (Obj extends infer T ? { [K in keyof T]-?: K extends string | number ? `${K}` | import("bakutils-types").Join<K, Obj[K] extends infer T_1 ? T_1 extends Obj[K] ? T_1 extends object ? (T_1 extends infer T_2 ? { [K_1 in keyof T_2]-?: K_1 extends string | number ? `${K_1}` | import("bakutils-types").Join<K_1, T_1[K_1] extends infer T_3 ? T_3 extends T_1[K_1] ? T_3 extends object ? (T_3 extends infer T_4 ? { [K_2 in keyof T_4]-?: K_2 extends string | number ? `${K_2}` | import("bakutils-types").Join<K_2, T_3[K_2] extends infer T_5 ? T_5 extends T_3[K_2] ? T_5 extends object ? (T_5 extends infer T_6 ? { [K_3 in keyof T_6]-?: K_3 extends string | number ? `${K_3}` | import("bakutils-types").Join<K_3, T_5[K_3] extends infer T_7 ? T_7 extends T_5[K_3] ? T_7 extends object ? (T_7 extends infer T_8 ? { [K_4 in keyof T_8]-?: K_4 extends string | number ? `${K_4}` | import("bakutils-types").Join<K_4, never> : never; } : never)[keyof T_7] : "" : never : never> : never; } : never)[keyof T_5] : "" : never : never> : never; } : never)[keyof T_3] : "" : never : never> : never; } : never)[keyof T_1] : "" : never : never> : never; } : never)[keyof Obj] : "">(obj: Obj, path: Path, value: TypeFrom<Obj, Path>) => Obj;
    /**
     * This is similar to `Object.keys`, but it traverses through the whole object hierarchy and separates the nested keys by dots.
     */
    static getDeepKeys<ResultKeys extends Array<Paths<Obj, 8>>, Obj extends Record<any, any> = Record<any, any>>(obj: Obj): ResultKeys | string[];
}
