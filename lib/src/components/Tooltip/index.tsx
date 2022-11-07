
import type { TooltipDirectionValues } from "@models/types/Common";
import styles from '@components/Tooltip/Tooltip.module.scss';
import type { ITooltipProps } from '@models/interfaces/ITooltipProps';
import { useRef, useMemo, useEffect } from 'react';

/** A component that displays a tooltip when the user hovers over an element. */
export const Tooltip = (props: ITooltipProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

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
        if(!props.direction) return;
        const root = document.documentElement;
        switch (props.direction) {
            case 'top_center':
            case 'top_left':
            case 'top_right': {
                root.style.setProperty('--tooltip-container-bottom', '100%');
                root.style.setProperty('--tooltip-container-margin-bottom', '12px');
                //unset
                root.style.setProperty('--tooltip-container-top', 'unset');
                root.style.setProperty('--tooltip-container-right', 'unset');
                root.style.setProperty('--tooltip-container-margin-top', 'unset');
                root.style.setProperty('--tooltip-container-margin-left', 'unset');
                root.style.setProperty('--tooltip-container-margin-right', 'unset');
                //after
                root.style.setProperty('--tooltip-container-after-top', '100%');
                root.style.setProperty('--tooltip-container-after-transform', 'rotate(180deg)');
                //after unset
                root.style.setProperty('--tooltip-container-after-bottom', 'unset');
                root.style.setProperty('--tooltip-container-after-right', 'unset');
                break;
            }
            case 'bottom_left':
            case 'bottom_center':
            case 'bottom_right': {
                root.style.setProperty('--tooltip-container-top', '100%');
                root.style.setProperty('--tooltip-container-margin-top', '12px');
                //unset
                root.style.setProperty('--tooltip-container-margin-left', 'unset');
                root.style.setProperty('--tooltip-container-margin-right', 'unset');
                root.style.setProperty('--tooltip-container-bottom', 'unset');
                root.style.setProperty('--tooltip-container-right', 'unset');
                //after
                root.style.setProperty('--tooltip-container-after-bottom', '100%');
                //after unset
                root.style.setProperty('--tooltip-container-after-top', 'unset');
                root.style.setProperty('--tooltip-container-after-right', 'unset');
                root.style.setProperty('--tooltip-container-after-transform', 'unset');
                break;
            }
            case 'right': {
                root.style.setProperty('--tooltip-container-top', '-5px');
                root.style.setProperty('--tooltip-container-margin-left', '12px');
                //unset
                root.style.setProperty('--tooltip-container-margin-right', 'unset');
                root.style.setProperty('--tooltip-container-margin-top', 'unset');
                root.style.setProperty('--tooltip-container-right', 'unset');
                root.style.setProperty('--tooltip-container-bottom', 'unset');
                //after
                root.style.setProperty('--tooltip-container-after-top', '45%');
                root.style.setProperty('--tooltip-container-after-right', '100%');
                root.style.setProperty('--tooltip-container-after-transform', 'rotate(270deg)');
                //after unset
                root.style.setProperty('--tooltip-container-after-bottom', 'unset');
                break;
            }
            case 'left': {
                root.style.setProperty('--tooltip-container-right', '105%');
                root.style.setProperty('--tooltip-container-margin-right', '12px');
                root.style.setProperty('--tooltip-container-top', '-5px');
                //unset
                root.style.setProperty('--tooltip-container-margin-left', 'unset');
                root.style.setProperty('--tooltip-container-margin-top', 'unset');
                root.style.setProperty('--tooltip-container-margin-bottom', 'unset');
                root.style.setProperty('--tooltip-container-bottom', 'unset');
                //after
                root.style.setProperty('--tooltip-container-after-top', '45%');
                root.style.setProperty('--tooltip-container-after-transform', 'rotate(90deg)');
                //after unset
                root.style.setProperty('--tooltip-container-after-bottom', 'unset');
                root.style.setProperty('--tooltip-container-after-right', 'unset');
                break;
            }
        }
    }, [props.direction]);

    useEffect(() => {
        if(enableParentOverflow) return;
        if(!wrapperRef?.current?.parentElement) return;
        wrapperRef.current.parentElement.style.overflow = 'unset';
    }, [wrapperRef, enableParentOverflow]);

    const calculateDirectionLeft = (wrapperWidth: string, tooltipWidth: string) => {
        const calc = (elementToCalc: string) => `calc(${elementToCalc})`;
        const setCss = (left: string, afterLeft: string) => { 
            root.style.setProperty('--tooltip-container-left', left);
            root.style.setProperty('--tooltip-container-after-left', afterLeft);
        };
        const root = document.documentElement;
        const directionMap: Map<TooltipDirectionValues, () => void> = new Map([
            ['bottom_right', () => setCss(calc(`${wrapperWidth} - ${tooltipWidth}`), '70%')],
            ['bottom_center', () => setCss(calc(`${wrapperWidth} / 2 - ${tooltipWidth} / 2`), '50%')],
            ['bottom_left', () => setCss('0px', '20%')],
            ['left', () => setCss('unset', '100%')],
            ['right', () => setCss('100%', 'unset')],
            ['top_right', () => setCss(calc(`${wrapperWidth} - ${tooltipWidth}`), '70%')],
            ['top_center', () => setCss(calc(`${wrapperWidth} / 2 - ${tooltipWidth} / 2`), '50%')],
            ['top_left', () => setCss('0px', '20%')]
        ])
        directionMap.get(props.direction)?.call(null);
    }

    return (
        <div ref={wrapperRef} className={styles.tooltipWrapper}>
            {props.children}
            <div ref={tooltipRef} className={styles.tooltipContentContainer} /*direction={props.direction} afterLeft={`${afterLeft};`} left={`${left};`}*/>
                {props.content}
            </div>
        </div>);
}