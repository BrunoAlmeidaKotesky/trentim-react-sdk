declare type AnyFunction = (...args: any[]) => any;
/**
 * This is a user-level **premature** implementation of the the `useEvent` RFC proposal.https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
 *
 * Similar to useCallback, with a few subtle differences:
 * - The returned function is a stable reference, and will always be the same between renders
 * - No dependency lists required
 * - Properties or state accessed within the callback will always be "current"
 */
export declare function useEvent<TCallback extends AnyFunction>(callback: TCallback): TCallback;
export {};
