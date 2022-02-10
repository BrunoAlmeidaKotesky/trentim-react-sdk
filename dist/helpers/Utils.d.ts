export declare class Utils {
    static findObjectByPath<T, R extends any>(objectIn: T, path: string[]): R;
    static convertIsoToLocaleString(date: string, locales?: string | string[], formatOptions?: Intl.DateTimeFormatOptions): string;
}
