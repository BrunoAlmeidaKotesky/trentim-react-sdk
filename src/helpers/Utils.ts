
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