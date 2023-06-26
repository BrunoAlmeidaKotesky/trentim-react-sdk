import { useLayoutEffect } from "react";

type StyleConfig = { enableColBorder: boolean };
export function useStyling({ enableColBorder }: StyleConfig) {
    const addBorder = () => {
        const style = document.createElement('style');
        style.id = "dataListBorderStyle";
        style.textContent = `
            #dataListHeaderContainer div[class*="cellSizer"]::after {
                content: '';
                height: 50%;
                width: 1.5px;
                position: absolute;
                right: 0;
                opacity: 1;
                top: 12px;
                background-color: #0000007d;
            }

            #dataListHeaderContainer div[class*="cellSizer"]:hover::after {
                content: "";
                position: absolute;
                top: 12px;
                bottom: 0px;
                width: 1px;
                background: rgb(200, 198, 196);
                left: 50%;
                height: 50%;
            }
        `;
        document.head.append(style);
    }

    useLayoutEffect(() => {
        if (enableColBorder) addBorder();
    }, [enableColBorder]);
}