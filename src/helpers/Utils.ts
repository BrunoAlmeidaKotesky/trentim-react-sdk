
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
}