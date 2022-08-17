import { useState, useEffect } from 'react';

interface Size {
    width: number | undefined;
    height: number | undefined;
}

/**
 * @credits https://joshwcomeau.com/react/the-perils-of-rehydration/
 * 
 * Use this function to detect the size of the user screen whenever it changes.
 * 
 * @returns A size object with the `width` and `height` of the user screen. as an `Size` interface.
 */
export function useWindowSize(): Size {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
        };
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}