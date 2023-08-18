import type { AsyncFunction, SyncFunction, Result, NoneType, Option, SomeType } from '@models/interfaces/ErrorHandling';

/** Creates a successful Result with the given value.
 * @param value The value of the successful computation.
 * @returns A Result with the 'ok' type and the provided value.*/
export function Ok<T, E>(value: T): Result<T, E> {
    return {
        type: 'ok',
        value,
        unwrap: () => value,
        unwrapOr: () => value,
        unwrapOrElse: () => value,
        isErr: () => false,
        isOk: () => true
    };
}

/**
 * Creates a failed Result with the given error.
 * @param error The error that caused the computation to fail.
 * @returns A Result with the 'error' type and the provided error.
 */
export function Err<T, E>(error: E): Result<T, E> {
    return {
        type: 'error',
        error,
        unwrap: () => { throw error; },
        unwrapOr: (defaultValue: T) => defaultValue,
        unwrapOrElse: (fn: (error: E) => T) => fn(error),
        isErr: () => true,
        isOk: () => false
    };
}

/**
 * Creates an Option with a value.
 * @param value The value to be wrapped in the Option.
 * @returns An Option with the 'some' type and the provided value.
 */
export function Some<T>(value: T): Option<T> {
    return {
        type: 'some',
        value,
        unwrap: () => value,
        unwrapOr: () => value,
        unwrapOrElse: () => value,
        isSome: () => true,
        isNone: () => false
    };
}

/**
 * Represents an empty Option with no value.
 * @returns An Option with the 'none' type.
 */
export const None: Option<never> = {
    type: 'none',
    unwrap: () => { throw new Error('Cannot unwrap None'); },
    unwrapOr: <T>(defaultValue: T) => defaultValue,
    unwrapOrElse: <T>(fn: () => T) => fn(),
    isSome: () => false,
    isNone: () => true
};

/**
 * Checks if an Option contains a value.
 * @param option The Option to check.
 * @returns True if the Option contains a value, false otherwise.
 * Note: Prefer using the isSome method directly on the Option object.
 */
export function isSome<T>(option: Option<T>): option is SomeType<T> {
    return option.type === 'some';
}

/**
 * Checks if an Option does not contain a value.
 * @param option The Option to check.
 * @returns True if the Option does not contain a value, false otherwise.
 * Note: Prefer using the isNone method directly on the Option object.
 */
export function isNone<T>(option: Option<T>): option is NoneType {
    return option.type === 'none';
}


//Decorators
export function isPromise<T = any>(object: any): object is Promise<T> {
    return object && Promise.resolve(object) === object;
}

export function isFunction(func: any): func is Function {
    return typeof func === "function" || func instanceof Function;
}

export type Handler<R = any, E = any, Args extends any[] = any[], C = any> = (err: E, context: C, ...args: Args) => R;

function Factory<R = any, E = any, Args extends any[] = any[], C = any>(ErrorClassConstructor: Function | Handler<R, E, Args, C>, handler?: Handler<R, E, Args, C>) {
    return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
        const { value } = descriptor;
        if (!handler) {
            handler = ErrorClassConstructor as Handler;
            ErrorClassConstructor = (undefined as unknown) as any;
        }

        descriptor.value = function (...args: any[]) {
            try {
                const response = value.apply(this, args);
                if (!isPromise(response)) return response;
                return response.catch((error) => {
                    if (
                        isFunction(handler) &&
                        (ErrorClassConstructor === undefined ||
                            error instanceof ErrorClassConstructor)
                    ) {
                        return handler.call(null, error, this, ...args);
                    }
                    throw error;
                });
            } catch (error) {
                if (
                    isFunction(handler) &&
                    (ErrorClassConstructor === undefined ||
                        error instanceof ErrorClassConstructor)
                ) {
                    return handler.call(null, error, this, ...args);
                }
                throw error;
            }
        };

        return descriptor;
    };
};

/**
 * Catch decorator: A TypeScript decorator that wraps a class method with error handling logic.
 * It catches errors of a specific type that are thrown within the decorated method.
 * @param ErrorClassConstructor - The constructor of the specific error type to catch.
 * @param handler - The function to handle the caught error.
 * @returns A decorator function.
 */
export function Catch<R = any, E = any, Args extends any[] = any[], C = any>(ErrorClassConstructor: Function, handler: Handler<R, E, Args, C>) {
    return Factory(ErrorClassConstructor, handler);
}

/**
 * DefaultCatch decorator: A TypeScript decorator that wraps a class method with error handling logic.
 * It catches all errors that are thrown within the decorated method.
 * @param handler - The function to handle the caught error.
 * @returns A decorator function.
 */
export function DefaultCatch<R = any, E = any, Args extends any[] = any[], C = any>(handler: Handler<R, E, Args, C>) {
    return Factory(handler);
}

/**
 * defaultCatch function: A higher-order function that wraps a target function with error handling logic.
 * It catches all errors that are thrown within the target function.
 * @param targetFunction - The function to wrap.
 * @param handler - The function to handle the caught error.
 * @returns The wrapped function.
 */
export function defaultCatch<Args extends any[] = any[], R = any, E = any>(
    targetFunction: SyncFunction<Args, R>, 
    handler: Handler<R, E, Args, any>
): SyncFunction<Args, R>;
export function defaultCatch<Args extends any[] = any[], R = any, E = any>(
    targetFunction: AsyncFunction<Args, R>, 
    handler: Handler<R, E, Args, any>
): AsyncFunction<Args, R>;
export function defaultCatch<Args extends any[] = any[], R = any, E = any>(
    targetFunction: SyncFunction<Args, R> | AsyncFunction<Args, R>, 
    handler: Handler<R, E, Args, any>
): SyncFunction<Args, R> | AsyncFunction<Args, R> {
    //@ts-ignore
    return function (...args: Args): R | Promise<R> {
        try {
            const response = targetFunction(...args);
            if (isPromise(response)) {
                return response.catch((error: E) => {
                    if (isFunction(handler)) {
                        return handler.call(null, error, this, ...args);
                    }
                    throw error;
                });
            }
            return response;
        } catch (error) {
            if (isFunction(handler)) {
                return handler.call(null, error, this, ...args);
            }
            throw error;
        }
    };
}

/**
 *
 * @deprecated This function has been deprecated due to its verbosity and potential overengineering.
 * In many cases, a simple try/catch block with instanceof checks may be more clear and concise.
 * Consider the specific needs of your code and prefer simpler error handling mechanisms when possible.
 * 
 * catchErrors function: A higher-order function that wraps a target function with error handling logic.
 * It catches errors of a specific type that are thrown within the target function.
 * @param targetFunction - The function to wrap.
 * @param ErrorClassConstructor - The constructor of the specific error type to catch.
 * @param handler - The function to handle the caught error.
 * @returns The wrapped function.
 */
export function catchErrors<R, E extends Error, Args extends any[], C>(
    targetFunction: AsyncFunction<Args, R>, 
    ErrorClassConstructor: Function, 
    handler: Handler<R, E, Args, C>
): AsyncFunction<Args, R>;
export function catchErrors<R, E extends Error, Args extends any[], C>(
    targetFunction: SyncFunction<Args, R>, 
    ErrorClassConstructor: Function, 
    handler: Handler<R, E, Args, C>
): SyncFunction<Args, R>;
export function catchErrors<R = any, E extends Error = Error, Args extends any[] = any[], C = any>(
    targetFunction: SyncFunction<Args, R> | AsyncFunction<Args, R>, 
    ErrorClassConstructor: Function, handler: Handler<R, E, Args, C>
): SyncFunction<Args, R> | AsyncFunction<Args, R> {
    //@ts-ignore
    return function (...args: Args): R | Promise<R> {
        try {
            const result = targetFunction(...args);
            if (isPromise(result)) {
                return result.catch((error: Error) => {
                    if (error instanceof ErrorClassConstructor) {
                        //@ts-ignore
                        return handler(error, null, ...args);
                    }
                    throw error;
                });
            }
            return result;
        } catch (error) {
            if (error instanceof ErrorClassConstructor) {
                //@ts-ignore
                return handler(error, null, ...args);
            }
            throw error;
        }
    };
}