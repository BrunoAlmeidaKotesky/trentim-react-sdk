import * as React from 'react';
import {useRef, useState, useImperativeHandle, useMemo, ForwardedRef, forwardRef} from 'react';
import {StageBlock, StagesColumn, StageIndicator} from './LifecycleStages';
import {LifecycleContainer} from './LifecycleContainer';
import {InformationColumn} from './InfoColumn';
import {FocusTrapCallout} from '@fluentui/react/lib/Callout';
import type {ILifecycleProgressProps, ILifecycleProgressRef, LifecycleCallout} from '@models/interfaces/ILifecycleProgressProps';
import { Icon } from '@fluentui/react/lib/Icon';
import {useIsOverflow} from '../../hooks/useIsOverflow';
import type {CSSSizeUnit, CSSNumberFormat} from '../../models/types/UtilityTypes';

declare module "react" {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: Ref<T>) => ReactElement | null
    ): (props: P & RefAttributes<T>) => ReactElement | null;
}

function LifecycleProgressInner<StageData>(props: ILifecycleProgressProps<StageData>, ref:  ForwardedRef<ILifecycleProgressRef>) {
    const [{isVisible, calloutIdx}, setCallout] = useState<LifecycleCallout>({isVisible: false, calloutIdx: null});
    const {onStageClick, calloutProps, ...other} = props;
    const stageColRef = useRef<HTMLDivElement>();
    const isOverflow = useIsOverflow(stageColRef);
    console.log(isOverflow);
    useImperativeHandle(ref, () => ({
        setCallout
    }), []);

    const getScrollSizes = (): [width: number, height: number] => {
        let el= document.createElement('div');
        el.style.visibility= 'hidden';
        el.style.overflow= 'scroll';
        document.body.appendChild(el);
        let w= el.offsetWidth-el.clientWidth;
        let h= el.offsetHeight-el.clientHeight;
        document.body.removeChild(el);
        return [w, h];
    };

    const {leftColumnHeight, rightColPaddingBot} = useMemo<{leftColumnHeight: CSSNumberFormat, rightColPaddingBot: CSSNumberFormat}>(() => {
        const leftColHeight = props?.leftColumnHeight ?? '59px';
        const notDigitRegex = /\D/g;
        const leftColUnit = leftColHeight?.match(notDigitRegex)?.join('') as CSSSizeUnit;
        const [_w, scrollHeight] = getScrollSizes();
        if(isOverflow) return ({
            rightColPaddingBot: `${scrollHeight}px`,
            leftColumnHeight: `${parseFloat(leftColHeight) + scrollHeight}${leftColUnit}`
        });
        return ({
            rightColPaddingBot: '0px',
            leftColumnHeight: leftColHeight
        });
    }, [isOverflow, props?.leftColumnHeight, props?.rightColumnHeight]);

    

    return (<>
        <LifecycleContainer {...other}>
            <InformationColumn 
                leftColumnHeight={leftColumnHeight} infoColumnBgColor={other?.infoColumnBgColor} infoColumnTxtColor={other?.infoColumnTxtColor}>
                {props.infoContent}
            </InformationColumn>
            <StagesColumn rightColPaddingBot={rightColPaddingBot} {...other} ref={stageColRef}>
                {props.stages.map((stage, index) => (
                    <StageBlock {...other}
                        className={`indicator-${index}`} completed={stage?.completed} active={stage?.active}
                        onClick={(ev) => { 
                            onStageClick(stage, index, ev);
                            if(other.showCalloutOnClick && !isVisible && (!calloutIdx || calloutIdx !== index) && (stage?.showCallout || stage?.active))
                                setCallout({isVisible: true, calloutIdx: index});
                        }} 
                        isFirstColumn={index === 0} isLastColumn={index === other.stages.length - 1} key={index}>
                        <StageIndicator active={stage?.active} completed={stage?.completed} indicatorColor={other?.indicatorColor}>
                            {stage?.completed && <Icon styles={{root: {width: '100%', backgroundColor: other?.indicatorColor}}} iconName='CheckMark' />}
                        </StageIndicator>
                        <span style={{fontSize: 14, padding: '0 12px', cursor: 'pointer', fontWeight: stage?.active  ? 'bold' : 'normal', color: other?.textColor ?? 'black'}}>{stage?.label}</span>
                    </StageBlock>
                ))}
            </StagesColumn>
        </LifecycleContainer>
        {isVisible && 
            <FocusTrapCallout
                role="dialog" target={`.indicator-${calloutIdx}`} setInitialFocus             
                onDismiss={() => setCallout({isVisible: false, calloutIdx: null})} {...calloutProps}>{other?.calloutContent}
            </FocusTrapCallout>}
    </>);
}

export const LifecycleProgress = forwardRef(LifecycleProgressInner);