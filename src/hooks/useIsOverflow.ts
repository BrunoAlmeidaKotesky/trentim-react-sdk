import * as React from 'react';
import { useWindowSize } from './useWindowSize';

export function useIsOverflow<RefType extends HTMLElement = HTMLElement>(ref: React.MutableRefObject<RefType>, isVerticalOverflow = false, callback?: (hasOverflow: boolean) => void): boolean {
    const [isOverflow, setIsOverflow] = React.useState<boolean>(undefined);
    const {width} = useWindowSize();

    const effectCb = () => {
        const { current } = ref;
        const { clientWidth, scrollWidth, clientHeight, scrollHeight } = current;

        const trigger = () => {
            const hasOverflow = isVerticalOverflow ? scrollHeight > clientHeight : scrollWidth > clientWidth;
            setIsOverflow(hasOverflow);
            if (callback) callback(hasOverflow);
        };
        if (current)
            trigger();
    }

    React.useLayoutEffect(() => effectCb(), [callback, ref, isVerticalOverflow, width]);

    return isOverflow;
}