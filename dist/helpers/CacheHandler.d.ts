import type { ICacheHandler, ICacheOptions, ICacheResponse } from "../models/interfaces/ICacheHandler";
/**
 * The same interface from `JSON`, but it can also be from some other JSON parser libraries, such as npm module `flatted` for allowing circular objects.
 */
interface IDependencyJson extends Omit<JSON, 'readonly [Symbol.toStringTag]: string'> {
}
export declare class CacheHandler implements ICacheHandler {
    private _json?;
    constructor(_json?: IDependencyJson);
    private stringify;
    private parse;
    setCache<T>(key: string, object: T, { type }: ICacheOptions): void;
    getCache<T>(key: string, { type }: ICacheOptions): ICacheResponse<T>;
    private parseCache;
    removeCacheKey(key: string): void;
    setRefreshDate(date: Date, hours?: number): string;
}
export {};
