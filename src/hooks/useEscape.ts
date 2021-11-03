import { KeyboardEvent, useEffect } from "react";

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