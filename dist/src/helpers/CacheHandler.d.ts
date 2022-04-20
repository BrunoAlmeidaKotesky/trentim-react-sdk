import type { ICacheHandler, ICacheOptions, ICacheResponse } from "../models/interfaces/ICacheHandler";
/**
 * The same interface from `JSON`, but it can also be from some other JSON parser libraries, such as npm module `flatted` for allowing circular objects.
 */
interface IDependencyJson extends Omit<JSON, 'readonly [Symbol.toStringTag]: string'> {
}
/**An utility class for controlling a cache, from local or session storage. */
export declare class CacheHandler implements ICacheHandler {
    private _json?;
    constructor(_json?: IDependencyJson);
    private stringify;
    private parse;
    setCache<T>(key: string, object: T, opt: ICacheOptions): void;
    getCache<T>(key: string, { type }: Pick<ICacheOptions, 'type'>): ICacheResponse<T>;
    private parseCache;
    removeCacheKey(key: string, { type }: Pick<ICacheOptions, 'type'>): void;
    setRefreshDate(date: Date, dateType: 'minutes' | 'hours' | 'days' | 'seconds', timeSpan: number): string;
}
export {};
