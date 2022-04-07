import { RefObject } from "react";
/**
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
declare function useRefWithCallback<T>(initialValue: T): [
    (value: T) => void,
    RefObject<T>,
    boolean
];
export default useRefWithCallback;
