/**
 *@info This function will be moved on next major release to a separated plugin module.
* It enables the SPFx to be live reloaded even when it is already on a production environment, it only applies when using `gulp serve`.
* @param manifest - SPFx manifest from a webpart or extension context - `{@microsoft/sp-component-base#BaseComponent.context}`
* @param serveUrl - An optional URL to use as the gulp serve address, by default it will be https://localhost:4321
* @param liveReloadUrl - An optional URL to use as the live reload address, by default it will be `//localhost:35729/livereload.js?snipver=1`
*/
export function registerLiveReload(manifest: any, serveUrl?: string, liveReloadUrl?: string) {
  const pageUrl = manifest["loaderConfig"]["internalModuleBaseUrls"][0];
  if (pageUrl?.indexOf(serveUrl || "https://localhost:4321") !== -1) {
    // create a new <script> element
    const script = document.createElement('script');
    // assign the src attribute to the livereload serve
    script.src = liveReloadUrl || "//localhost:35729/livereload.js?snipver=1";
    // add script to the head section of the page
    document.head.appendChild(script);
  }
}

/**Tries to convert an ISO `string` to the locale format. 
 * @param date The date to convert.
 * @param locales The locale to convert
 * @param formatOptions `Intl.DateTimeFormatOptions` to use if desired.
 * @returns The converted date or the original date string if the conversion was not possible.
*/
export function convertIsoToLocaleString(
  date: string, locales: string | string[] = 'pt-BR',
  formatOptions: Intl.DateTimeFormatOptions = undefined): string {
  //First check if the string can be converted to a date object.
  if (!(new Date(date) instanceof Date) && isNaN(new Date(date)?.getTime())) return date;
  const isIsoDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z/.test(date);
  if (!isIsoDate) return date;
  return new Intl.DateTimeFormat(locales, formatOptions).format(new Date(date));
}
/**
 * The classical sleep function, it will wait for the specified amount of time before continuing the execution.
 * 
 * Similar to Python `time.sleep()`
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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

/**
 * `removeDuplicates` is a function that removes duplicate elements from an array.
 *
 * This function works with arrays of any type. It uses a selector function 
 * to determine what to check for duplication. The selector function 
 * should take an element of the array and return a property that will be used 
 * to check for duplicates.
 *
 * For example, if you have an array of objects, and each object has a `name` property, 
 * you could pass a function that returns the `name` property to remove all objects 
 * that have the same name.
 *
 * The function returns a new array that contains only the first occurrence 
 * of each duplicate element.
 *
 * @template T The type of the elements in the array
 * @param arr The original array from which to remove duplicates
 * @param selector A function that takes an array element and returns a property to check for duplication
 * @returns A new array with duplicates removed
 */
export function removeDuplicates<T>(arr: T[], selector: (item: T) => any): T[] {
  return arr.filter((item, index, self) =>
      index === self.findIndex((t) => (
          selector(t) === selector(item)
      ))
  );
}

/**
 * Check if a given Date object is valid or if it is a valid date string that can be converted to a Date object.
 * @param date The date to check.
 * @returns `true` if the date is valid, `false` otherwise.
 */
export function isValidDate(date: string | Date): boolean {
  if (date === null || date === undefined) return false;
  if (typeof date === 'string') {
      const dateObject = new Date(date);
      return !isNaN(dateObject.getTime());
  } else if (date instanceof Date) 
      return !isNaN(date.getTime());
  return false;
}