
type AnyFunction = (...args: any[]) => any;
type AnyAsyncFunction = (...args: any[]) => Promise<any>;

/**
 * 
 * @param fn The function to be memoized.
 * @param toKey A function that receives the arguments
 * @returns A memoized version of the function.
 */
export function memoize<Func extends AnyFunction>(
    fn: Func,
    toKey?: (...args: Parameters<Func>) => string | symbol
) {
    const cache = new Map<string | symbol, any>();
    return (...args: Parameters<Func>): ReturnType<Func> => {
        const key = toKey ? toKey(...args) : JSON.stringify(args);
        if (cache.has(key) && typeof cache.get(key) !== 'undefined')
            return cache.get(key);

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

/**
 * Async version of the memoize function.
 * 
 * @param fn The function to be memoized.
 * @param toKey A function that receives the arguments
 * @returns A memoized version of the function.
 */
export function memoizeAsync<AsyncFunc extends AnyAsyncFunction>(
    fn: AsyncFunc,
    toKey?: (...args: Parameters<AsyncFunc>) => string | symbol
) {
    const cache = new Map<string | symbol, any>();
    return async (...args: Parameters<AsyncFunc>): Promise<Awaited<ReturnType<AsyncFunc>>> => {
        const key = toKey ? toKey(...args) : JSON.stringify(args);
        if (cache.has(key) && typeof cache.get(key) !== 'undefined')
            return cache.get(key);

        const result = await fn(...args);
        cache.set(key, result);
        return result;
    };
}

export type Callback<A, B> = (param: A) => B | ((param: A) => Promise<B>);
export type MaybeAwaited<T> = T extends Promise<unknown> ? Awaited<T> : T;
export type MaybePromise<T, T2> =  T extends Promise<unknown> ? Promise<T2> : T2;
/**
 *  @experimental This API is experimental and might change or even be removed in newer versions. Use with caution.
 * 
 *  It's very similar to `fp-ts` library `pipe` function, except that you can pass async functions as well, supports up to 10 functions.
 *  
 *  - Please note that each async functions ARE awaited in the pipe, so you need to be cautious about error handling.
 *  - Since it's experimental, no documentation is provided for now.
 */
export function pipe<A>(a: A): A
export function pipe<A, B>(a: A, ab: Callback<A,B>): B
export function pipe<A, B, C>(a: A, ab: Callback<A,B>, bc: Callback<MaybeAwaited<B>, C>): MaybePromise<B, C>;
export function pipe<A, B, C, D>(a: A, ab: Callback<A,B>, bc: Callback<MaybeAwaited<B>, C>, cd: Callback<MaybeAwaited<C>, D>): MaybePromise<B, MaybePromise<C, D>>;
export function pipe<A, B, C, D, E>(a: A, ab: Callback<A,B>, bc: (b: MaybeAwaited<B>) => C, cd: (c: MaybeAwaited<C>) => D, de: (d: MaybeAwaited<D>) => E): MaybePromise<B, MaybePromise<C, MaybePromise<D, E>>>;
export function pipe<A, B, C, D, E, F>(
  a: A,
  ab: Callback<A,B>,
  bc: Callback<MaybeAwaited<B>, C>,
  cd: Callback<MaybeAwaited<C>, D>,
  de: Callback<MaybeAwaited<D>, E>,
  ef: Callback<MaybeAwaited<E>, F>
): MaybePromise<B, MaybePromise<C, MaybePromise<D, MaybePromise<E, F>>>>;
export function pipe<A, B, C, D, E, F, G>(
  a: A,
  ab: Callback<A,B>,
  bc: Callback<MaybeAwaited<B>, C>,
  cd: Callback<MaybeAwaited<C>, D>,
  de: Callback<MaybeAwaited<D>, E>,
  ef: Callback<MaybeAwaited<E>, F>,
  fg: Callback<MaybeAwaited<F>, G>
): MaybePromise<B, MaybePromise<C, MaybePromise<D, MaybePromise<E, MaybePromise<F, G>>>>>;
export function pipe<A, B, C, D, E, F, G, H>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H
): MaybePromise<B, MaybePromise<C, MaybePromise<D, MaybePromise<E, MaybePromise<F, MaybePromise<G, H>>>>>>;
export function pipe<A, B, C, D, E, F, G, H, I>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I
): MaybePromise<B, MaybePromise<C, MaybePromise<D, MaybePromise<E, MaybePromise<F, MaybePromise<G, MaybePromise<H, I>>>>>>>;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J
): MaybePromise<B, MaybePromise<C, MaybePromise<D, MaybePromise<E, MaybePromise<F, MaybePromise<G, MaybePromise<H, MaybePromise<I, J>>>>>>>>;
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J,
  jk: (j: J) => K
): MaybePromise<B, MaybePromise<C, MaybePromise<D, MaybePromise<E, MaybePromise<F, MaybePromise<G, MaybePromise<H, MaybePromise<I, MaybePromise<J, K>>>>>>>>>;

export function pipe(
  a: unknown,
  ab?: Function,
  bc?: Function,
  cd?: Function,
  de?: Function,
  ef?: Function,
  fg?: Function,
  gh?: Function,
  hi?: Function,
  ij?: Function,
  jk?: Function
): unknown {
  const functions = [ab, bc, cd, de, ef, fg, gh, hi, ij, jk].filter(Boolean)
  if (functions.length === 0) 
    return a
  else {
    return functions.reduce((acc, fn) => acc instanceof Promise ? acc.then(yr => fn(yr)).catch(
      err => {
        throw err
      }
    ) : fn(acc), a)
  }
}