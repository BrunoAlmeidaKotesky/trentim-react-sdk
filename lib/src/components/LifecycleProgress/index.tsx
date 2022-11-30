
import LifecycleTile from './LifecycleTile';
import styles from './lifecycle.module.scss';
import type { ILifecycleProgressProps, ILifecycleProgressRef, LifecycleCallout, ILifecycleStages } from '@models/interfaces/ILifecycleProgressProps';
import { useEffect, useRef, useState, useImperativeHandle, forwardRef, ForwardedRef, useLayoutEffect, useCallback, DOMAttributes } from 'react';
import { Callout, DirectionalHint } from '@fluentui/react/lib/Callout';
import { CalloutCtx } from './Context';
import { ChevronLeft24Regular, ChevronRight24Regular } from '@fluentui/react-icons';

declare module "react" {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>
    ): (props: P & React.RefAttributes<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
type MouseDown = DOMAttributes<HTMLDivElement>['onMouseDown'];

function LifecycleProgressInner<StageData = any>(props: ILifecycleProgressProps<StageData>, ref: ForwardedRef<ILifecycleProgressRef>) {
    const [{isVisible, calloutIdx}, setCallout] = useState<LifecycleCallout>({isVisible: false, calloutIdx: null});
    const lifecycleTrack = useRef<HTMLDivElement>(null);
    const lifecycleContainer = useRef<HTMLDivElement>(null);
    const overflowStageText = useRef(false);
    const [gridRowNumber, setGridRowNumber] = useState<number>(1);
    const [visibleStages, setVisibleStages] = useState<ILifecycleStages[]>(
        props?.stages.map(i => ({...i, hidden: true})) ?? []);

    const setCSSVariables = () => {
        const root = document.documentElement;
        root?.style.setProperty("--lifecycle-color", props.indicatorColor);
        root?.style.setProperty("--lifecycle-button-color", props.buttonColor);
        root?.style.setProperty("--lifecycle-left-col-color", props?.leftColumnColor ?? props.indicatorColor);
        if(gridRowNumber)
            root?.style.setProperty("--lifecycle-grid-row-number", gridRowNumber.toString());
        else root?.style.setProperty("--lifecycle-grid-row-number", "3");
    }

    const verifyGridRowNumber = useCallback(() => {
        let width = lifecycleContainer?.current?.clientWidth;
        if(!width) 
            width =  document.querySelector('.mainLifecycleContainer')?.clientWidth;
        if(width >= 1200) {
            if(props?.stages.length >= 4) return setGridRowNumber(4);
            return setGridRowNumber(props?.stages.length);
        }
        if(width <= 992 && width > 768) {
            if(props?.stages.length >= 3) return setGridRowNumber(3);
            return setGridRowNumber(props?.stages.length);
        }
        if(width <= 768 && width > 520) {
            if(props?.stages.length >= 2) return setGridRowNumber(2);
            return setGridRowNumber(props?.stages.length);
        }
        if(width <= 411)
            setGridRowNumber(1);
        else setGridRowNumber(3);
    }, [lifecycleContainer?.current?.clientWidth, props?.stages, visibleStages?.length]);

    const changeVisibility = (direction: 'left' | 'right') => {
        if (!lifecycleTrack.current) return; 
        if(direction === 'right') {
            const notHiddenIdxs: number[] = [];
            for(let i = 0; i < visibleStages.length; i++)
                if(!visibleStages[i].hidden) notHiddenIdxs.push(i);
            const lastVisibleIdx = notHiddenIdxs[notHiddenIdxs.length - 1];
            const firstVisibleIdx = notHiddenIdxs[0];
            if(lastVisibleIdx === visibleStages.length - 1) return;
            /*The item in the firstVisibleIdx should be now be hidden and everything before it, 
            and the next item after lastVisibleIdx should be visible.*/
            setVisibleStages(p => p.map((i, idx) => {
                if(idx < firstVisibleIdx) return {...i, hidden: true};
                if(idx === firstVisibleIdx) return {...i, hidden: true};
                if(idx === lastVisibleIdx + 1) return {...i, hidden: false};
                return i;
            }));
        }
        if (direction === 'left') {
            const notHiddenIdxs: number[] = [];
            for(let i = 0; i < visibleStages.length; i++)
                if(!visibleStages[i].hidden) notHiddenIdxs.push(i);
            const lastVisibleIdx = notHiddenIdxs[notHiddenIdxs.length - 1];
            const firstVisibleIdx = notHiddenIdxs[0];
            if(firstVisibleIdx === 0) return;
            /*The item in the lastVisibleIdx should be now be hidden and everything after it, 
            and the next item before firstVisibleIdx should be visible. */
            setVisibleStages(p => p.map((i, idx) => {
                if(idx > lastVisibleIdx) return {...i, hidden: true};
                if(idx === lastVisibleIdx) return {...i, hidden: true};
                if(idx === firstVisibleIdx - 1) return {...i, hidden: false};
                return i;
            }));
        }
    }

    const checkTilePosition = useCallback((index: number) => {
        if (index === 0) return 'start';
        if (index === visibleStages.length - 1) return 'end';
        return 'middle';
    }, [visibleStages]);

    type LFS = ILifecycleStages<any>;
    const mountNewStages = (minusOneIdx: number, zeroIdx: number, lastIdx: number, middleIdx?: number) => (previousArr: LFS[]): LFS[] => {
        const activeIdx = previousArr.findIndex(i => i.active);
        if(activeIdx === -1) return previousArr.map((i, idx) => ({...i, hidden: idx < previousArr.length - minusOneIdx}));
        if(activeIdx === 0) return previousArr.map((i, idx) => ({...i, hidden: idx > zeroIdx}));
        if(activeIdx === visibleStages.length - 1) return previousArr.map((i, idx) => ({...i, hidden: idx < visibleStages.length - lastIdx}));
        const newStageArr = previousArr.map((i, idx) => {
            const hidden = (middleIdx >= 0) ? 
            idx < activeIdx - 1 || idx > activeIdx + middleIdx : 
            idx < activeIdx - 1 || idx > activeIdx;
            return {...i, hidden};
        });

        if(minusOneIdx === 4) {
            //If the active stage is the one before the last one,
            const activeIdx =  newStageArr.findIndex(i => i.active);
            if(activeIdx === newStageArr.length - 2) {
                //Make the item before the last hidden, also make the last item visible.
                const firstNotHiddenIdx = newStageArr.findIndex(i => !i.hidden);
                if(firstNotHiddenIdx !== -1 && newStageArr?.[firstNotHiddenIdx - 1])
                    newStageArr[firstNotHiddenIdx - 1].hidden = false;
            }
        }

        return newStageArr;
    }

    useLayoutEffect(() => { 
        setCSSVariables(); 
        verifyGridRowNumber(); 
    }, []);
    useEffect(() => {
        //Keep every prop from props.stage, but keep the hidden from visibleStages
        if(props.stages.length > 0) {
            const newStages = props.stages.map((i, idx) => ({...i, hidden: visibleStages?.[idx]?.hidden ?? true}));
            setVisibleStages(newStages);
        }
    }, [props.stages]);
    useEffect(() => verifyGridRowNumber(), [lifecycleContainer?.current?.clientWidth, visibleStages.length]);
    useEffect(() => {
        if(gridRowNumber === 1) overflowStageText.current = true;
        else overflowStageText.current = false;
        switch(gridRowNumber) {
            case 1: setVisibleStages(p => p.map((i, idx) => ({...i, hidden: idx !== 0}))); break;
            case 4: {
                setVisibleStages(mountNewStages(4, 3, 4, 2)); 
                break;
            }
            case 3: {
                setVisibleStages(mountNewStages(3, 2 , 3, 1)); 
                break;
            }
            case 2: {
                setVisibleStages(mountNewStages(2, 1, 2)); 
                break;
            }
        }
    }, [gridRowNumber]);
    useEffect(() => setCSSVariables(), [gridRowNumber, props?.indicatorColor, props?.leftColumnColor]);

    useImperativeHandle(ref, () => ({ setCallout }), []);

    useEffect(() => {
        window.addEventListener('resize', verifyGridRowNumber);
        return () => { window.removeEventListener('resize', verifyGridRowNumber); };
    }, []);

    const preventTextSelection: MouseDown = useCallback(e => { if(e.detail > 1) e.preventDefault(); }, []);

    return (<>
        <div ref={lifecycleContainer} className={`${styles.lifecycle} mainLifecycleContainer`}>
            <div className={styles.projectLifecycle}>
                <span className={styles.columnTitle}>{props.leftColumnTitle}</span>
                <span className={styles.columnSubTitle}>{props.leftColumnSubtitle}</span>
            </div>
            <div className={styles.lifecycleContainer}>
                <div 
                    onMouseDown={preventTextSelection} 
                    style={props?.leftScrollButtonStyles} className={`${styles.btnLifecycleScroll} ${styles.scrollLeft}`} 
                    onClick={() => changeVisibility('left')}>
                    <ChevronLeft24Regular />
                </div>
                <div className={styles.lifecycleTrackContainer}>
                    <div ref={lifecycleTrack} className={styles.lifecycleTrack}>
                        <CalloutCtx.Provider value={{
                            calloutIdx, setCallout, 
                            alwaysShowCallout: props?.alwaysShowCallout, 
                            showCalloutOnlyOnActive: props?.showCalloutOnlyOnActive
                        }}>
                        {visibleStages?.map((item, idx) => (
                            <LifecycleTile
                                hidden={item?.hidden}
                                styles={styles}
                                key={item?.label + idx}
                                label={item.label}
                                overflowStageText={overflowStageText.current}
                                currentIdx={idx}
                                data={item?.data}
                                showCallout={item?.showCallout}
                                active={item.active}
                                completed={item?.completed}
                                position={checkTilePosition(idx)}
                                onStageClick={props.onStageClick} />
                        ))}
                        </CalloutCtx.Provider>
                    </div>
                </div>
                <div 
                    onMouseDown={preventTextSelection} 
                    style={props?.rightScrollButtonStyles} className={`${styles.btnLifecycleScroll} ${styles.scrollRight}`} 
                    onClick={() => changeVisibility('right')}>
                    <ChevronRight24Regular />
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