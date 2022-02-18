import type { ICacheHandler, ICacheOptions, ICacheResponse } from "../models/interfaces/ICacheHandler";
/**
 * The same interface from `JSON`, but it can also be from some other JSON parser libraries, such as npm module `flatted` for allowing circular objects.
 */
interface IDepencyJson extends Omit<JSON, 'readonly [Symbol.toStringTag]: string'> {};
export class CacheHandler implements ICacheHandler {
    constructor(private _json?:IDepencyJson){}
    private stringify = this?._json?.stringify ? this._json.stringify : JSON.stringify;
    private parse = this?._json?.parse ? this._json?.parse : JSON.parse;

    public setCache<T>(key: string, object: T, { type }: ICacheOptions) {
        const createdDate = new Date();
        const requestedAt = createdDate.toISOString();
        const expireDate = this.setRefreshDate(createdDate);
        const cacheValue: ICacheResponse<T> = { value: object, expireDate, requestedAt };
        if (type === 'local')
            localStorage.setItem(key, this.stringify(cacheValue));
        else sessionStorage.setItem(key, this.stringify(cacheValue));
    }

    public getCache<T>(key: string, { type }: ICacheOptions): ICacheResponse<T> {
        let strinfyedValue: string;
        if (type === 'local')
            strinfyedValue = localStorage.getItem(key);
        else strinfyedValue = sessionStorage.getItem(key);
        const cachedValues = this.parseCache<T>(strinfyedValue);
        if (cachedValues?.value && cachedValues?.expireDate && cachedValues?.requestedAt)
            return {
                value: cachedValues?.value,
                expireDate: cachedValues?.expireDate,
                requestedAt: cachedValues?.requestedAt
            };
        return null;
    }

    private parseCache<T>(key: string) {
        try {
            const parsedValue: ICacheResponse<T> = this.parse(key);
            const { value, expireDate, requestedAt } = parsedValue;
            return { value, expireDate, requestedAt };
        } catch {
            return {
                value: null,
                expireDate: null,
                requestedAt: null
            }
        }
    }

    public removeCacheKey(key: string) {
        localStorage.removeItem(key);
    }

    public setRefreshDate(date: Date, hours = 36) {
        let refreshDate = date;
        refreshDate.setHours(refreshDate.getHours() + hours);
        return refreshDate.toISOString();
    }
}