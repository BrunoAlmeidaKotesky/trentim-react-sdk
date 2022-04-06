import { RefObject, useCallback, useRef, useState } from "react";

/**
 * This hook can be used when using ref inside useCallbacks
 * 
 * Usage
 * ```tsx
 * const [toggle, refCallback, myRef] = useRefWithCallback<HTMLSpanElement>();
 * const onClick = useCallback(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
  return (<span ref={refCallback} />);
  ```
 * @returns 
 */
function useRefWithCallback<T>(initialValue: T): [
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

export default useRefWithCallback;