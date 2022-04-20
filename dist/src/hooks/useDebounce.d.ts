/**
 * @credits - https://usehooks-ts.com/react-hook/use-debounce
 *
 * This React hook helps to limit that the component is re-rendered too many times.
 * Imagine that you want to execute a function on an event that executes several hundred times per second such as moving the mouse or scrolling.
 * This may cause the application to lag.
 *
 * To prevent this, the debounce uses an internal timer to execute the callback function every xx seconds (2nd parameter).
 * @param value - any value of `T` type
 * @param delay - time to delay the event.
 * @returns the value after debounced.
 *
 * @example
 * ```tsx
 *function Component() {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setValue(event.target.value) }
  useEffect(() => { //Something when debouncedValue changes.}
    , [debouncedValue])
  return (<div>
      Debounced value: {debouncedValue}
      <input type="text" value={value} onChange={handleChange} />
    </div>)
}
 * ```
 */
export declare function useDebounce<T>(value: T, delay: number): T;
