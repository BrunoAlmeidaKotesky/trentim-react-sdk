/**
 * Target can be either a class name or an Node or HTMLElement
 */
declare type Target = string | HTMLElement | Node;
export declare class WebpartHeight {
    private changeSize;
    /**
     * @param nodeElement - Base Node element that contains a collection of children divs that can reach the target element
     * @param target - The target element such as an class name selector like `my-element` or an `HTMLElement` using
     * ```js
     * document.querySelector('my-element');
     * ```
     * @returns
     */
    changeWebpartHeight(nodeElement: HTMLCollection, target: Target): boolean;
    private changeNodeRecursive;
    private targetCondition;
}
export {};
