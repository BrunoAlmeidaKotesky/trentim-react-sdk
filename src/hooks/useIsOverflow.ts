import * as React from 'react';
import { useWindowSize } from './useWindowSize';

type OverflowObserverHook = 
    <RefType extends HTMLElement = HTMLElement>(
    ref: React.MutableRefObject<RefType>, 
    isVerticalOverflow?: boolean, 
    callback?: (hasOverflow: boolean, elementSizes?: {clientWidth: number, scrollWidth: number, clientHeight: number, scrollHeight: number}, setIsOverflow?: React.Dispatch<React.SetStateAction<boolean>>) => void) => boolean;

export const useIsOverflow:OverflowObserverHook = (ref, isVerticalOverflow = false, callback) => {
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

    React.useLayoutEffect(effectCb, [ref, callback, isVerticalOverflow, width]);

    return isOverflow;
}