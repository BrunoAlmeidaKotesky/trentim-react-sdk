/**
 * Target can be either a class name or an Node or HTMLElement
 */
type Target = string | HTMLElement | Node;

/**
 * @deprecated This class is going to be removed on the next major release, due to the lack of many use cases. The `registerLiveReload` is still going to be available as a single function.
 */
export class SPFxUtils {

    private changeElementProperty (element: HTMLElement, elementsToChange: Map<keyof CSSStyleDeclaration, any>): void {
        if(element?.style) {
          elementsToChange?.forEach((value, key) => {
            element.style[key as unknown as string] = value;
          });
        }
    }

    /**
     * @param nodeElement - Base Node element that contains a collection of children divs that can reach the target element
     * @param finalTarget - The target element such as an class name selector like `my-element` or an `HTMLElement` using
     * ```js
     * document.querySelector('my-element');
     * ```
     * @param elementsToChange - A map of the elements to change, the key is the property name and the value is the new value
     * ```js
     * const elementsToChange = new Map<keyof CSSStyleDeclaration, any>([['height', '100%']]);
     * ```
     */
    public changeNodeProperty(nodeElement: HTMLCollection, finalTarget: Target, elementsToChange: Map<keyof CSSStyleDeclaration, any>): boolean {
        try {
            let childCanvasChild: HTMLElement = null;
            if (nodeElement?.length > 1) {
                if (nodeElement[0]?.className?.includes('ControlZone-control'))
                    childCanvasChild = nodeElement[0] as HTMLElement;
                else
                    childCanvasChild = nodeElement[1] as HTMLElement;
            }
            else childCanvasChild = nodeElement[0] as HTMLElement;
            const canChange = this.targetCondition(finalTarget, childCanvasChild);
            return canChange ? canChange : this.changeNodeRecursive(childCanvasChild, finalTarget, elementsToChange);
        }
        catch (err) {
            console.error('[SPFxUtils] - changeElementProperty - Error while changing the node property', err);
            return false;
        }
    }

    private changeNodeRecursive(childCanvasChild: HTMLElement, target: Target, elementsToChange: Map<keyof CSSStyleDeclaration, any>): boolean {
        if (!childCanvasChild?.children)
            return this.changeNodeProperty(childCanvasChild?.nextElementSibling?.children, target, elementsToChange);
        else {
            this.changeElementProperty(childCanvasChild, elementsToChange);
            return this.changeNodeProperty(childCanvasChild?.children, target, elementsToChange);
        }
    }

    private targetCondition(target: Target, child: HTMLElement) {
        if(typeof target === 'string') 
            return child?.className?.startsWith(target);
        else if(typeof target === 'object') {
            const nodeCondition = child?.isEqualNode(target as Node);
            return nodeCondition;
        }
        return false;
    }

    /**
     * It enables the webpart to be live reloaded even when the webpart is already on a production environment, it only applies when using `gulp serve`.
     * @param manifest - SPFx manifest from the webpart context - `{@microsoft/sp-component-base#BaseComponent.context}`
     * @param serveUrl - An optional URL to use as the gulp serve address, by default it will be https://localhost:4321
     * @param liveReloadUrl - An optional URL to use as the live reload address, by default it will be `//localhost:35729/livereload.js?snipver=1`
     */
    static registerLiveReload(manifest: IBaseManifest, serveUrl?: string, liveReloadUrl?: string) {
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
}

export interface IBaseManifest {
    [key: string]: any;
    loaderConfig: {
        [key: string]: any;
        internalModuleBaseUrls: string[][];
    }
}