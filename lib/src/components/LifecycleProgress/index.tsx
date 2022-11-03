import LifecycleTile from './LifecycleTile';
import { IButtonStyles, IconButton } from '@fluentui/react/lib/Button';
import styles from './lifecycle.module.scss';
import type { ILifecycleProgressProps, ILifecycleProgressRef, LifecycleCallout, IInternalLifecycleStages } from '@models/interfaces/ILifecycleProgressProps';
import { useEffect, useMemo, useRef, useState, useImperativeHandle, forwardRef, ForwardedRef, useLayoutEffect, useCallback } from 'react';
import { Callout, DirectionalHint } from '@fluentui/react/lib/Callout';
import { CalloutCtx } from './Context';

declare module "react" {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>
    ): (props: P & React.RefAttributes<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

function LifecycleProgressInner<StageData = any>(props: ILifecycleProgressProps<StageData>, ref: ForwardedRef<ILifecycleProgressRef>) {
    const [{isVisible, calloutIdx}, setCallout] = useState<LifecycleCallout>({isVisible: false, calloutIdx: null});
    const lifecycleTrack = useRef<HTMLDivElement>(null);
    const lifecyleContainer = useRef<HTMLDivElement>(null); 
    const [gridRowNumber, setGridRowNumber] = useState<number>(1);
    const [visibleStagesQueue, setVisibleStages] = useState<IInternalLifecycleStages[]>(props?.stages.map(i => ({...i, hidden: true})));
    const iconStyles = useMemo<{right: IButtonStyles, left: IButtonStyles}>(() => {
        const baseStyles: IButtonStyles = ({
            root: {color: 'white', width: 24}, 
            rootHovered: {backgroundColor: props?.buttonColor, color: 'white'}, 
            rootFocused: {outline: 'none', color: 'white'}, 
            rootPressed: {background: props.buttonColor, color: 'white'}});
        return {
            left: {...baseStyles, ...props?.leftScrollButtonStyles},
            right: {...baseStyles,...props?.rightScrollButtonStyles},
        }
    }, [props?.leftScrollButtonStyles, props?.rightScrollButtonStyles]);

    const setCSSVariables = () => {
        const root = document.documentElement;
        root?.style.setProperty("--lifecycle-color", props.indicatorColor);
        root?.style.setProperty("--lifecycle-button-color", props.buttonColor);
        root?.style.setProperty("--lifecycle-left-col-color", props?.leftColumnColor ?? props.indicatorColor);
        if(gridRowNumber)
            root?.style.setProperty("--lifecycle-grid-row-number", gridRowNumber.toString());
        else root?.style.setProperty("--lifecycle-grid-row-number", "3");
    }

    const verifyGridRowNumber = () => {
        const width = lifecyleContainer?.current?.clientWidth;
        if(width >= 1200) {
            if(props?.stages.length >= 4) return setGridRowNumber(4);
            else return setGridRowNumber(props?.stages.length);
        }
        if(width <= 992 && width > 768) {
            if(props?.stages.length >= 3) return setGridRowNumber(3);
            else return setGridRowNumber(props?.stages.length);
        }
        if(width <= 768 && width > 520) {
            if(props?.stages.length >= 2) return setGridRowNumber(2);
            else return setGridRowNumber(props?.stages.length);
        }
        if(width <= 520) setGridRowNumber(1);
        else setGridRowNumber(3);
    }

    useLayoutEffect(() => { setCSSVariables(); verifyGridRowNumber(); }, []);
    useEffect(() => verifyGridRowNumber(), [lifecyleContainer?.current?.clientWidth, props?.stages.length]);
    useEffect(() => {
        switch(gridRowNumber) {
            case 1: setVisibleStages(p => p.map((i, idx) => ({...i, hidden: idx !== 0}))); break;
            case 4:
                setVisibleStages(p => p.map((i, idx) => ({...i, hidden: idx > 3}))); break;
            case 3:
                setVisibleStages(p => p.map((i, idx) => ({...i, hidden: idx > 2}))); break;
            case 2:
                setVisibleStages(p => p.map((i, idx) => ({...i, hidden: idx > 1}))); break;
        }
    }, [gridRowNumber]);
    useEffect(() => setCSSVariables(), [gridRowNumber, props?.indicatorColor, props?.leftColumnColor]);

    useImperativeHandle(ref, () => ({ setCallout }), []);

    const checkTilePosition = useCallback((order: number) => {
        if (order === props?.stages?.[0]?.order) return 'start';
        if (order === props?.stages[props?.stages.length - 1].order) return 'end';
        return 'middle';
    }, [props?.stages]);

    const scrollItem = useCallback((direction: 'left' | 'right') => {
        if (!lifecycleTrack.current) return; 
        if(direction === 'left') lifecycleTrack.current.scrollLeft -= 140;
        if (direction === 'right') lifecycleTrack.current.scrollLeft += 140;
    }, [lifecycleTrack?.current]);


    useEffect(() => {
        window.addEventListener('resize', verifyGridRowNumber);
        return () => {
            window.removeEventListener('resize', verifyGridRowNumber);
        };
    }, []);

    return (<>
        <div ref={lifecyleContainer} className={styles.lifecycle}>
            <div className={styles.projectLifecycle}>
                <span className={styles.columnTitle}>{props.leftColumnTitle}</span>
                <span className={styles.columnSubTitle}>{props.leftColumnSubtitle}</span>
            </div>
            <div className={styles.lifecycleContainer}>
                <div className={`${styles.btnLifecycleScroll} ${styles.scrollLeft}`} onClick={() => scrollItem('left')}>
                    <IconButton styles={iconStyles.left} iconProps={{iconName: 'ChevronLeftMed'}} />
                </div>

                <div className={styles.lifecycleTrackContainer}>
                    <div ref={lifecycleTrack} className={styles.lifecycleTrack}>
                        <CalloutCtx.Provider value={{
                            calloutIdx, setCallout, 
                            alwaysShowCallout: props?.alwaysShowCallout, 
                            showCalloutOnlyOnActive: props?.showCalloutOnlyOnActive
                        }}>
                        {visibleStagesQueue?.map((item, idx) => (
                            <LifecycleTile
                                hidden={item?.hidden}
                                styles={styles}
                                key={item?.order}
                                label={item.label}
                                currentIdx={idx}
                                data={item?.data}
                                order={item.order}
                                showCallout={item?.showCallout}
                                active={item.active}
                                completed={item?.completed}
                                position={checkTilePosition(item.order)}
                                onStageClick={props.onStageClick}
                            />
                        ))}
                        </CalloutCtx.Provider>
                    </div>
                </div>

                <div className={`${styles.btnLifecycleScroll} ${styles.scrollRight}`} onClick={() => scrollItem('right')}>
                    <IconButton styles={iconStyles.right} iconProps={{iconName: 'ChevronRightMed'}} />
                </div>
            </div>
        </div>
        {isVisible && 
            <Callout
                role="dialog" target={`.indicator-${calloutIdx}`} setInitialFocus
                directionalHint={props?.calloutProps?.directionalHint ?? DirectionalHint.bottomAutoEdge}         
                onDismiss={() => setCallout({isVisible: false, calloutIdx: null})} {...props?.calloutProps}>{props?.calloutContent}
            </Callout>}
        </>
    );
};

export const LifecycleProgress = forwardRef(LifecycleProgressInner);