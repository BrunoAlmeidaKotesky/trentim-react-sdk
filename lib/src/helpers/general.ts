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