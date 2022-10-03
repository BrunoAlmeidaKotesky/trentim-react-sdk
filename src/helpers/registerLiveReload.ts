/**
* It enables the webpart to be live reloaded even when the webpart is already on a production environment, it only applies when using `gulp serve`.
* @param manifest - SPFx manifest from the webpart context - `{@microsoft/sp-component-base#BaseComponent.context}`
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