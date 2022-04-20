import type { ICacheHandler, ICacheOptions, ICacheResponse } from "../models/interfaces/ICacheHandler";
/**
 * The same interface from `JSON`, but it can also be from some other JSON parser libraries, such as npm module `flatted` for allowing circular objects.
 */
interface IDependencyJson extends Omit<JSON, 'readonly [Symbol.toStringTag]: string'> { };
/**An utility class for controlling a cache, from local or session storage. */
export class CacheHandler implements ICacheHandler {
    constructor(private _json?: IDependencyJson) { }
    private stringify = this?._json?.stringify ? this._json.stringify : JSON.stringify;
    private parse = this?._json?.parse ? this._json?.parse : JSON.parse;

    public setCache<T>(key: string, object: T, opt: ICacheOptions) {
        const createdDate = new Date();
        const requestedAt = createdDate.toISOString();
        const expireDate = this.setRefreshDate(createdDate, opt?.timeConfig?.dateType, opt?.timeConfig?.timeSpan);
        const cacheValue: ICacheResponse<T> = { value: object, expireDate, requestedAt };
        if (opt?.type === 'local')
            localStorage.setItem(key, this.stringify(cacheValue));
        else sessionStorage.setItem(key, this.stringify(cacheValue));
    }

    public getCache<T>(key: string, { type }: Pick<ICacheOptions, 'type'>): ICacheResponse<T> {
        let stringifiedValue: string;
        if (type === 'local')
            stringifiedValue = localStorage.getItem(key);
        else stringifiedValue = sessionStorage.getItem(key);
        const cachedValues = this.parseCache<T>(stringifiedValue);
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

    public removeCacheKey(key: string, { type }: Pick<ICacheOptions, 'type'>) {
        if (type === 'local')
            localStorage.removeItem(key);
        else sessionStorage.removeItem(key);
    }

    public setRefreshDate(date: Date, dateType: 'minutes' | 'hours'  | 'days' | 'seconds', timeSpan: number) {
        let refreshDate = date;
        switch (dateType) {
            case 'seconds':
                refreshDate.setSeconds(refreshDate.getSeconds() + timeSpan);
            case 'minutes':
                refreshDate.setMinutes(refreshDate.getMinutes() + timeSpan);
                break;
            case 'hours':
                refreshDate.setHours(refreshDate.getHours() + timeSpan);
                break;
            case 'days':
                refreshDate.setDate(refreshDate.getDate() + timeSpan);
                break;
            default: {
                throw new Error(`The dateType ${dateType} is not supported`);
            }
        }
        return refreshDate.toISOString();
    }
}