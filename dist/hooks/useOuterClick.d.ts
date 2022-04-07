/**
 *
 * @param callback - A callback with a pointer event as parameter.
 * @param cancelableCb - A callback with a pointer event as parameter, which can be used to stop the execution of the first callback.
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
export declare function useOuterClick<R extends HTMLElement = HTMLElement>(callback: (ev?: PointerEvent) => any, cancelableCb?: (ev: PointerEvent) => boolean): import("react").MutableRefObject<R>;
