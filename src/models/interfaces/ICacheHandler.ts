export interface ICacheOptions {
    type: 'local'|'session';
}

export interface ICacheResponse<T> {
    /**The parsed value from storage */
    value: T;
    /**The date when the cache was set*/
    requestedAt: string;
    /**The date to specify when to expire the cache */
    expireDate: string;
}

export interface ICacheHandler {
    /**
     * @param key - Name of the storage key
     * @param object - Any objected that can be parsed
     * @param options - The type of the storage: `localStorage` | `sessionStorage` 
     */
    setCache<T>(key: string, object: T, {type}:ICacheOptions): void;
    /**
     * @param key - The gey to get the cached value
     * @param options - The type of the storage: `localStorage` | `sessionStorage` 
     * @returns return an `ICachedResponse` object, where the `value` is the original value.
     */
    getCache<T>(key: string, {type}: ICacheOptions): ICacheResponse<T>;
    /**
     * @param date - The date to set when the object will need to be refreshed. 
     */
    setRefreshDate(date: Date): void;
    /**
     * @param key - The key name to remove from the storage 
     */
    removeCacheKey(key: string): void;
}