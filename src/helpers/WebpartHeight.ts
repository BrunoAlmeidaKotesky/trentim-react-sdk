export class WebpartHeight {

    private changeSize(element: HTMLElement) {
        if (element?.style)
            element.style.height = '100%';
    }
    /**Método recursivo para mudar fazer com que a webpart ocupe 100% da altura*/
    public changeNodeHeights(nodeElement: HTMLCollection, classToFind: string):boolean {
        try {
            let childCanvasChild: HTMLElement = null;
            if (nodeElement?.length > 1) {
                if (nodeElement[0]?.className?.includes('ControlZone-control'))
                    childCanvasChild = nodeElement[0] as HTMLElement;
                else
                    childCanvasChild = nodeElement[1] as HTMLElement;
            }
            else childCanvasChild = nodeElement[0] as HTMLElement;

            if (childCanvasChild?.className?.startsWith(classToFind)) {
                this.changeSize(childCanvasChild);
                return true;
            }
            else {
                if (!childCanvasChild?.children)
                    return this.changeNodeHeights(childCanvasChild?.nextElementSibling?.children, classToFind);
                else {
                    this.changeSize(childCanvasChild);
                    return this.changeNodeHeights(childCanvasChild?.children, classToFind);
                }
            }
        }
        catch (err) {
            console.error('Erro ao atualizar o tamannho das divs');
            return false;
        }
    }
}

var afds = new WebpartHeight();
var f = afds.changeNodeHeights(null, null);