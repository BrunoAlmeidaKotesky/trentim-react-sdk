/**
 * A hook to be used to memorize the previous value of a state/variable before the last render.
 *
 * @param value - Any value of type `T`
 * @returns the previous value from the previous render.
 */
export declare function usePrevious<T>(value: T): T;
