import { useEffect, useRef } from "react";

/**
 * 
 * @param onOuterClick - A callback with a pointer event as it's parameter.
 * @param cancellationFn - A callback with a pointer event as it's parameter, which can be used to stop the execution of the first callback.
 * @returns innerRef - A ref to be used on some element.
 * 
 * @example
 * ```tsx
 *  function Component() {
 *  const [isClicking, setIsClicking] = useState(false);
    const containerRef = useOuterClick<HTMLDivElement>(() => setIsClicking(false));}
    
    //When the the user clicks outside of this div, the event of useOuterClick will be triggered.
    //Which in that case is `setClicking(false)`
    return (
        <div 
            ref={containerRef} 
            onClick={() => setIsClicking(true)} 
            style={{...footerContainerStyle, ...editingFooterStyle}}>
            {isClicking && 
            <div>...</div>}
        </div>
    );
 * ```
 */

type Config = {
    onOuterClick: (ev?: PointerEvent) => void, 
    cancellationFn?: (ev: PointerEvent) => boolean;
}
export function useOuterClick<R extends HTMLElement = HTMLElement>({onOuterClick, cancellationFn}: Config) {
    const callbackRef = useRef<Function>(); // initialize mutable ref, which stores callback
    const innerRef = useRef<R>(); // initialize returned to client, who marks "border" element

    // update cb on each render, so second useEffect has access to current value 
    useEffect(() => { callbackRef.current = onOuterClick; });

    useEffect(() => {
        function handleClick(e: PointerEvent) {
            if (innerRef?.current && callbackRef?.current &&
                !innerRef?.current?.contains(e?.target as Node)
            ) {
                if (!cancellationFn)
                    callbackRef.current(e);
                else {
                    const isCancelable = cancellationFn(e);
                    if (!isCancelable)
                        callbackRef.current(e);
                }
            }
        }
        document.addEventListener("click", handleClick as EventListenerOrEventListenerObject);
        return () => document.removeEventListener("click", handleClick as EventListenerOrEventListenerObject);   
    }, []); // no dependencies -> stable click listener

    return innerRef; // convenience for client (doesn't need to init ref himself) 
}