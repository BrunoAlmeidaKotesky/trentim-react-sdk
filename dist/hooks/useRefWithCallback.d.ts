import { RefObject } from "react";
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
declare function useRefWithCallback<T>(initialValue: T): [
    (value: T) => void,
    RefObject<T>,
    boolean
];
export default useRefWithCallback;
