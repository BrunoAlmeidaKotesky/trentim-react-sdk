/**
 * Target can be either a class name or an Node or HTMLElement
 */
type Target = string | HTMLElement | Node;
export class WebpartHeight {

    private changeSize(element: HTMLElement) {
        if (element?.style)
            element.style.height = '100%';
    }
    /**
     * @param nodeElement - Base Node element that contains a collection of children divs that can reach the target element
     * @param target - The target element such as an class name selector like `my-element` or an `HTMLElement` using
     * ```js
     * document.querySelector('my-element');
     * ```
     * @returns 
     */
    public changeWebpartHeight(nodeElement: HTMLCollection, target: Target):boolean {
        try {
            let childCanvasChild: HTMLElement = null;
            if (nodeElement?.length > 1) {
                if (nodeElement[0]?.className?.includes('ControlZone-control'))
                    childCanvasChild = nodeElement[0] as HTMLElement;
                else
                    childCanvasChild = nodeElement[1] as HTMLElement;
            }
            else childCanvasChild = nodeElement[0] as HTMLElement;
            const canChange = this.targetCondition(target, childCanvasChild);
            return canChange ? canChange : this.changeNodeRecursive(childCanvasChild, target);
        }
        catch (err) {
            console.error('Erro ao atualizar o tamannho das divs');
            return false;
        }
    }

    private changeNodeRecursive(childCanvasChild: HTMLElement, target: Target) {
        if (!childCanvasChild?.children)
            return this.changeWebpartHeight(childCanvasChild?.nextElementSibling?.children, target);
        else {
            this.changeSize(childCanvasChild);
            return this.changeWebpartHeight(childCanvasChild?.children, target);
        }
    }

    private targetCondition(target: Target, child: HTMLElement) {
        if(typeof target === 'string') {
            if(child?.className?.startsWith(target))
                return true;
            return false;
        }
        else if(typeof target === 'object') {
            const nodeCondition = child?.isEqualNode(target as Node);
            if(nodeCondition)
                return true;
            return false;
        }
        return false;
    }
}