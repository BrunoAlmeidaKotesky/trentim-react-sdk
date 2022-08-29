import { RefObject, useCallback, useRef, useState } from "react";

/**
 * @deprecated **This feature will be removed in next major release, due to the lack of real usage and some `anti-patterns` around it's functionality**
 * 
 * This hook can be used when using ref inside useCallbacks
 * 
 * Usage
 * ```tsx
 * const [refCallback, ref, toggle] = useRefWithCallback<HTMLSpanElement>();
 * const onClick = useCallback(() => {
    if (ref.current) 
      ref.current.scrollIntoView({ behavior: "smooth" });
  }, [toggle]);

  //Change the value of the ref with refCallback(value);

  return (<span ref={refCallback} />);
  ```
 * @returns 
 */
export function useRefWithCallback<T>(initialValue: T): [
    (value: T) => void,
    RefObject<T>,
    boolean
] {
    const ref = useRef<T | null>(initialValue);
    const [toggleState, setToggle] = useState(false);
    const refCallback = useCallback((value: T) => {
        ref.current = value;
        setToggle(val => !val);
    }, []);

    return [refCallback, ref, toggleState];
}