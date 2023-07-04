/** Represents a failed computation.*/
export interface Left<T, E> {
    type: 'error';
    error: E;
    /*** Returns the value of the Result if it is successful, otherwise throws an error.*/
    unwrap(): T;
    /*** Returns the value of the Result if it is successful, otherwise returns the provided default value.*/
    unwrapOr(defaultValue: T): T;
    /*** Returns the value of the Result if it is successful, otherwise calls the provided function with the error and returns its result.*/
    unwrapOrElse(fn: (error: E) => T): T;
    /*** Returns true if the Result is an error, false otherwise.*/
    isErr(this: Result<T, E>): this is Left<T, E>;
    /*** Returns true if the Result is successful, false otherwise.*/
    isOk(this: Result<T, E>): this is Right<T, E>;
}

/** Represents a successful computation.*/
export interface Right<T, E> {
    type: 'ok';
    value: T;
    /*** Returns the value of the Result.*/
    unwrap(): T;
    /*** Returns the value of the Result.*/
    unwrapOr(defaultValue: T): T;
    /*** Returns the value of the Result.*/
    unwrapOrElse(fn: (error: E) => T): T;
    /*** Returns true if the Result is an error, false otherwise.*/
    isErr(this: Result<T, E>): this is Left<T, E>;
    /*** Returns true if the Result is successful, false otherwise.*/
    isOk(this: Result<T, E>): this is Right<T, E>;
}

/**Represents the result of a computation that can either succeed with a value of type T or fail with an error of type E.*/
export type Result<T, E> = Left<T, E> | Right<T, E>;

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
 * Represents an Option that contains a value.
 */
export interface SomeType<T> {
    type: 'some';
    value: T;
    /*** Returns the value of the Option if it exists, otherwise throws an error.*/
    unwrap(): T;
    /*** Returns the value of the Option if it exists, otherwise returns the provided default value.*/
    unwrapOr(defaultValue: T): T;
    /*** Returns the value of the Option if it exists, otherwise calls the provided function and returns its result.*/
    unwrapOrElse(fn: () => T): T;
    /*** Returns true if the Option contains a value, false otherwise.*/
    isSome(this: Option<T>): this is SomeType<T>;
    /*** Returns true if the Option does not contain a value, false otherwise.*/
    isNone(this: Option<T>): this is NoneType;
}

/**
 * Represents an Option that does not contain a value.
 */
export interface NoneType {
    type: 'none';
    /*** Throws an error because None does not contain a value.*/
    unwrap(): never;
    /*** Returns the provided default value because None does not contain a value.*/
    unwrapOr<T>(defaultValue: T): T;
    /*** Calls the provided function and returns its result because None does not contain a value.*/
    unwrapOrElse<T>(fn: () => T): T;
    /*** Returns true if the Option contains a value, false otherwise.*/
    isSome<T>(this: Option<T>): this is SomeType<T>;
    /*** Returns true if the Option does not contain a value, false otherwise.*/
    isNone<T>(this: Option<T>): this is NoneType;
}

/**
 * Represents an optional value: every Option is either Some with a value of type T or None.
 */
export type Option<T> = SomeType<T> | NoneType;

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

export function Catch<R = any, E = any, Args extends any[] = any[], C = any>(ErrorClassConstructor: Function, handler: Handler<R, E, Args, C>) {
    return Factory(ErrorClassConstructor, handler);
}

export function DefaultCatch<R = any, E = any, Args extends any[] = any[], C = any>(handler: Handler<R, E, Args, C>) {
    return Factory(handler);
}