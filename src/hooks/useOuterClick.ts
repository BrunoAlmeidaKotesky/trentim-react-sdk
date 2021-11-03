import { useEffect, useRef, MutableRefObject } from "react";

type RefObj<T = any> =  React.MutableRefObject<any>;
export function useOuterClick(callback: (ev?: PointerEvent) => any, cancelableCb?: (ev: PointerEvent) => boolean): RefObj {
    const callbackRef = useRef<Function>(); // initialize mutable ref, which stores callback
    const innerRef = useRef<any>(); // initializereturned to client, who marks "border" element

    // update cb on each render, so second useEffect has access to current value 
    useEffect(() => { callbackRef.current = callback; });

    useEffect(() => {
        function handleClick(e: PointerEvent) {
            if (innerRef?.current && callbackRef?.current &&
                !innerRef?.current?.contains(e?.target)
            ) {
                if (!cancelableCb)
                    callbackRef.current(e);
                else {
                    const isCancelable = cancelableCb(e);
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