/**
 * SyncFunction: A type representing a synchronous function.
 * @template Args - The types of the function's parameters as a tuple.
 * @template R - The return type of the function.
 */
export type SyncFunction<Args extends any[] = any[], R = any> = (...args: Args) => R;

/**
 * AsyncFunction: A type representing an asynchronous function.
 * @template Args - The types of the function's parameters as a tuple.
 * @template R - The return type of the function.
 */
export type AsyncFunction<Args extends any[] = any[], R = any> = (...args: Args) => Promise<R>;

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
