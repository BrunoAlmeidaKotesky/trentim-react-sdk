import {TooltipWrapper} from '@components/Tooltip/TooltipWrapper';
import {TooltipContentContainer} from '@components/Tooltip/TooltipContentContainer';
import type {ITooltipProps, LeftTypes, TTDirectionMap} from '@models/interfaces/ITooltipProps';
import { useRef, useState, useMemo, useEffect } from 'react';

/** A component that displays a tooltip when the user hovers over an element. */
export const Tooltip = (props: ITooltipProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [{left, afterLeft}, setLeft] = useState<LeftTypes>({left: '0px', afterLeft: '20%'});

    const enableParentOverflow = useMemo(() => {
        if(props?.enableParentOverflow === null || props.enableParentOverflow === undefined) return false;
        return props?.enableParentOverflow;
    }, [props?.enableParentOverflow]);

    useEffect(() => {
        if(!(wrapperRef.current && tooltipRef.current)) return;
        const wrapperWidth = wrapperRef?.current?.getBoundingClientRect().width;
        const tooltipWidth = tooltipRef?.current?.getBoundingClientRect().width;
        calculateDirectionLeft(`${Math.floor(wrapperWidth)}px`, `${Math.floor(tooltipWidth)}px`);
    }, [wrapperRef, tooltipRef, props.direction]);

    useEffect(() => {
        if(enableParentOverflow) return;
        if(!wrapperRef?.current?.parentElement) return;
        wrapperRef.current.parentElement.style.overflow = 'unset';
    }, [wrapperRef, enableParentOverflow]);

    const calculateDirectionLeft = (wrapperWidth: string, tooltipWidth: string) => {
        const calc = (elementToCalc: string) => `calc(${elementToCalc})`;
        const directionMap: TTDirectionMap = new Map([
            ['bottom_right', () => setLeft({ left: calc(`${wrapperWidth} - ${tooltipWidth}`), afterLeft: '70%'})],
            ['bottom_center', () => setLeft({ left: calc(`${wrapperWidth} / 2 - ${tooltipWidth} / 2`), afterLeft: '50%'})],
            ['bottom_left', () => setLeft({ left: '0px', afterLeft: '20%'})],
            ['left', () => () => setLeft({left: 'unset', afterLeft: '100%'})],
            ['right', () => setLeft({left: '100%', afterLeft: 'unset'})],
            ['top_right', () => setLeft({left: calc(`${wrapperWidth} - ${tooltipWidth}`), afterLeft: '70%'})],
            ['top_center', () => setLeft({left: calc(`${wrapperWidth} / 2 - ${tooltipWidth} / 2`), afterLeft: '50%'})],
            ['top_left', () => setLeft({left: '0px', afterLeft: '20%'})]
        ])
        directionMap.get(props.direction)?.call(null);
    }

    return (
        <TooltipWrapper ref={wrapperRef} className={`trsTooltipWrapper${props?.classKey ? `-${props.classKey}` : ''}`}>
            {props.children}
            <TooltipContentContainer ref={tooltipRef} direction={props.direction} afterLeft={`${afterLeft};`} left={`${left};`}>
                {props.content}
            </TooltipContentContainer>
        </TooltipWrapper>);
}