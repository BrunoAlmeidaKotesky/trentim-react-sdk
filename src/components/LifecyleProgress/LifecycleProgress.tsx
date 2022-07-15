import * as React from 'react';
import {StageBlock, StagesColumn, StageIndicator} from './LifecycleStages';
import {LifecycleRow} from './LifecycleRow';
import {InformationColumn} from './InfoColumn';
import {FocusTrapCallout} from '@fluentui/react/lib/Callout';
import type {ILifecycleProgressProps, ILifecycleProgressRef, LifecycleCallout} from '@models/interfaces/ILifecycleProgressProps';

declare module "react" {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

function LifecycleProgressInner<StageData>(props: ILifecycleProgressProps<StageData>, ref:  React.ForwardedRef<ILifecycleProgressRef>) {
    const [{isVisible, calloutIdx}, setCallout] = React.useState<LifecycleCallout>({isVisible: false, calloutIdx: null});
    const currentBlockRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => ({
        setCallout
    }), [currentBlockRef]);

    return (
        <LifecycleRow {...props}>
            <InformationColumn {...props} />
            <StagesColumn {...props}>
                {props.stages.map((stage, index) => (<>
                    <StageBlock {...props}
                        ref={currentBlockRef}
                        onClick={(ev) => { 
                            props.onStageClick(index, stage?.data, ev);
                            if(props.showCalloutOnClick && !isVisible && !calloutIdx)
                                setCallout({isVisible: true, calloutIdx: index});
                        }} 
                        isFirstColumn={index === 0} isLastColumn={index === props.stages.length - 1} key={index}>
                        <StageIndicator active={stage?.active} indicatorColor={props?.indicatorColor} />
                        <span style={{fontSize: 14, lineHeight: 30, padding: '0 12px', cursor: 'pointer', fontWeight: stage?.active  ? 'bold' : 'normal'}}>{stage?.label}</span>
                    </StageBlock>
                    {isVisible && 
                    <FocusTrapCallout
                        role="dialog" target={currentBlockRef} setInitialFocus             
                        onDismiss={() => setCallout({isVisible: false, calloutIdx: null})}>{props?.calloutContent}
                    </FocusTrapCallout>}
                </>))}
            </StagesColumn>
        </LifecycleRow>
    );
}

export const LifecycleProgress = React.forwardRef(LifecycleProgressInner);