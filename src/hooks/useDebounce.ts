import {useState, useEffect} from 'react';

export function useDebouncer<T>(value: T, delay: number) {
    
    const [debouncedValue, setDebouncedValue] = useState<typeof value>(value);
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value] 
    );
  
    return debouncedValue;
}
