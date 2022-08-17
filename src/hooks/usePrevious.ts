import { useEffect, useRef } from 'react';

/**
 * A hook to be used to memorize the previous value of a state/variable before the last render.
 * 
 * @param value - Any value of type `T`
 * @returns the previous value from the previous render.
 */
export function usePrevious<T>(value: T): T {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}