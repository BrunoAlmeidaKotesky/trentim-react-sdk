interface Size {
    width: number | undefined;
    height: number | undefined;
}
/**
 * @credits https://joshwcomeau.com/react/the-perils-of-rehydration/
 *
 * Use this function to detect the size of the user screen whenever it changes.
 *
 * @returns A size object with the `width` and `height` of the user screen. as an `Size` interface.
 */
export declare function useWindowSize(): Size;
export {};
