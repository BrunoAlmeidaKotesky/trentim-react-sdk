import { KeyboardEvent, useEffect } from "react";

/**
 * A function that is triggered when the keyboard "Escape" key is pressed, anywhere in the document.
 * 
 * @param onEscape - The callback function to be executed when the user presses the escape key.
 */
export function useEscape(onEscape: Function) {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent<Event>) => {
            const key = event?.key || event?.keyCode;
            if (key === 27 || key === "Escape")
                onEscape();
        };
        //@ts-ignore
        window.addEventListener('keydown', handleEsc);

        return () => {
            //@ts-ignore
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
}