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
    const {onStageClick, calloutProps, ...other} = props;

    React.useImperativeHandle(ref, () => ({
        setCallout
    }), []);

    return (<>
        <LifecycleRow {...other}>
            <InformationColumn {...other} />
            <StagesColumn {...other}>
                {props.stages.map((stage, index) => (<>
                    <StageBlock {...other}
                        className={`indicator-${index}`}
                        onClick={(ev) => { 
                            onStageClick(index, stage?.data, ev);
                            if(other.showCalloutOnClick && !isVisible && (!calloutIdx || calloutIdx !== index))
                                setCallout({isVisible: true, calloutIdx: index});
                        }} 
                        isFirstColumn={index === 0} isLastColumn={index === other.stages.length - 1} key={index}>
                        <StageIndicator active={stage?.active} indicatorColor={other?.indicatorColor} />
                        <span style={{fontSize: 14, padding: '0 12px', cursor: 'pointer', fontWeight: stage?.active  ? 'bold' : 'normal', color: other?.textColor ?? 'black'}}>{stage?.label}</span>
                    </StageBlock>
                </>))}
            </StagesColumn>
        </LifecycleRow>
        {isVisible && 
            <FocusTrapCallout
                role="dialog" target={`.indicator-${calloutIdx}`} setInitialFocus             
                onDismiss={() => setCallout({isVisible: false, calloutIdx: null})} {...calloutProps}>{other?.calloutContent}
            </FocusTrapCallout>}
    </>);
}

export const LifecycleProgress = React.forwardRef(LifecycleProgressInner);