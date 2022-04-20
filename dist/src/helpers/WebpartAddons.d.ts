/**
 * Target can be either a class name or an Node or HTMLElement
 */
declare type Target = string | HTMLElement | Node;
export declare class WebpartAddons {
    private changeElementProperty;
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
    changeNodeProperty(nodeElement: HTMLCollection, finalTarget: Target, elementsToChange: Map<keyof CSSStyleDeclaration, any>): boolean;
    private changeNodeRecursive;
    private targetCondition;
    /**
     * It enables the webpart to be live reloaded even when the webpart is already on a production environment, it only applies when using `gulp serve`.
     * @param manifest - SPFx manifest from the webpart context - `{@microsoft/sp-component-base#BaseComponent.context}`
     * @param serveUrl - An optional URL to use as the gulp serve address, by default it will be https://localhost:4321
     * @param liveReloadUrl - An optional URL to use as the live reload address, by default it will be `//localhost:35729/livereload.js?snipver=1`
     */
    static registerLiveReload(manifest: Record<any, any>, serveUrl?: string, liveReloadUrl?: string): void;
}
export {};
