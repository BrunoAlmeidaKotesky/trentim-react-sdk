/**
 * Represents the result of a computation that can either succeed with a value of type T or fail with an error of type E.
 */
export type Result<T, E> = {
    type: 'ok';
    value: T;
} | {
    type: 'error';
    error: E;
};

/**
 * Creates a successful Result with the given value.
 * @param value The value of the successful computation.
 * @returns A Result with the 'ok' type and the provided value.
 */
export function Ok<T, E>(value: T): Result<T, E> {
    return { type: 'ok', value };
}

/**
 * Creates a failed Result with the given error.
 * @param error The error that caused the computation to fail.
 * @returns A Result with the 'error' type and the provided error.
 */
export function Err<T, E>(error: E): Result<T, E> {
    return { type: 'error', error };
}

/**
 * Represents an optional value: every Option is either Some with a value of type T or None.
 */
export type Option<T> = {
    type: 'some';
    value: T;
} | {
    type: 'none';
};

/**
 * Creates an Option with a value.
 * @param value The value to be wrapped in the Option.
 * @returns An Option with the 'some' type and the provided value.
 */
export function Some<T>(value: T): Option<T> {
    return { type: 'some', value };
}

/**
 * Represents an empty Option with no value.
 * @returns An Option with the 'none' type.
 */
export const None: Option<never> = { type: 'none' };

export function isSome<T>(option: Option<T>): option is { type: 'some', value: T } {
    return option.type === 'some';
}

export function isNone<T>(option: Option<T>): option is { type: 'none' } {
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

export function Catch<R = any, E = any, Args extends any[] = any[], C = any>(ErrorClassConstructor: Function, handler: Handler<R, E, Args, C>) {
    return Factory(ErrorClassConstructor, handler);
}

export function DefaultCatch<R = any, E = any, Args extends any[] = any[], C = any>(handler: Handler<R, E, Args, C>) {
    return Factory(handler);
}