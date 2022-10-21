import {useRef, useState, useImperativeHandle, ForwardedRef, useEffect, forwardRef, useCallback} from 'react';
import {StageBlock, StagesColumn, StageIndicator} from './LifecycleStages';
import {LifecycleContainer} from './LifecycleContainer';
import {InformationColumn} from './InfoColumn';
import {FocusTrapCallout} from '@fluentui/react/lib/Callout';
import type {ILifecycleProgressProps, ILifecycleProgressRef, LifecycleCallout} from '@models/interfaces/ILifecycleProgressProps';
import { Icon } from '@fluentui/react/lib/Icon';
import {useIsOverflow} from '../../hooks/useIsOverflow';
import type {CSSSizeUnit, CSSNumberFormat} from '../../models/types/UtilityTypes';

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

declare module "react" {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>
    ): (props: P & React.RefAttributes<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

function LifecycleProgressInner<StageData = any>(props: ILifecycleProgressProps<StageData>, ref:  ForwardedRef<ILifecycleProgressRef>) {
    const [{isVisible, calloutIdx}, setCallout] = useState<LifecycleCallout>({isVisible: false, calloutIdx: null});
    const [{leftColumnHeight, rightColPaddingBot}, setShouldAdjustRightCol] = useState<{leftColumnHeight: CSSNumberFormat, rightColPaddingBot: CSSNumberFormat}>({
        leftColumnHeight: props?.leftColumnHeight ?? '59px', 
        rightColPaddingBot: (getScrollSizes()[1] + "px") as CSSNumberFormat});
    const {onStageClick, calloutProps, ...other} = props;
    const stageColRef = useRef<HTMLDivElement>();
    const isOverflow = useIsOverflow(stageColRef);
    useImperativeHandle(ref, () => ({
        setCallout
    }), []);

    const verifyShouldUpdateHeight = (stageRef: typeof stageColRef, isFirstRun = false) => {
        const leftColHeight = props?.leftColumnHeight ?? '59px';
        const notDigitRegex = /\D/g;
        const leftColUnit = leftColHeight?.match(notDigitRegex)?.join('') as CSSSizeUnit;
        const [_w, scrollHeight] = getScrollSizes();
        if(isFirstRun && !isOverflow) {
            if(stageRef?.current?.scrollWidth > stageRef?.current?.clientWidth)
                return setShouldAdjustRightCol({
                    rightColPaddingBot: `${scrollHeight}px`,
                    leftColumnHeight: `${parseFloat(leftColHeight) + scrollHeight}${leftColUnit}`
                });
            else 
                return setShouldAdjustRightCol({
                    rightColPaddingBot: '0px',
                    leftColumnHeight: leftColHeight
                });
        }
        if(isOverflow) 
            return setShouldAdjustRightCol({
                rightColPaddingBot: `${scrollHeight}px`,
                leftColumnHeight: `${parseFloat(leftColHeight) + scrollHeight}${leftColUnit}`
            });
        else if(!isOverflow && !isFirstRun)
            return setShouldAdjustRightCol({
               rightColPaddingBot: '0px',
               leftColumnHeight: leftColHeight
            });
    }

    useEffect(() => verifyShouldUpdateHeight(stageColRef, true), []);
    useEffect(() => verifyShouldUpdateHeight(stageColRef), [isOverflow, props?.leftColumnHeight, props?.rightColumnHeight]);
    const spanStyle = useCallback(() => props?.stageTextStyle ? 
        props?.stageTextStyle : 
        {fontSize: 14, padding: '0 12px 16px', cursor: 'pointer', color: 'black'}, [props?.stageTextStyle]);

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
                            {stage?.completed && <Icon styles={{root: {width: '100%' }}} iconName='CheckMark' />}
                        </StageIndicator>
                        <span style={{...spanStyle(), fontWeight: stage?.active ? 'bold' : 'normal'}}>{stage?.label}</span>
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