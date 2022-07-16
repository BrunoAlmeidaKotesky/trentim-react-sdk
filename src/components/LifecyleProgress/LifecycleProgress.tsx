import * as React from 'react';
import {StageBlock, StagesColumn, StageIndicator} from './LifecycleStages';
import {LifecycleRow} from './LifecycleRow';
import {InformationColumn} from './InfoColumn';
import {FocusTrapCallout} from '@fluentui/react/lib/Callout';
import type {ILifecycleProgressProps, ILifecycleProgressRef, LifecycleCallout} from '@models/interfaces/ILifecycleProgressProps';
import { Icon } from '@fluentui/react/lib/Icon';

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
            <InformationColumn {...other}>
                {props.infoContent}
            </InformationColumn>
            <StagesColumn {...other}>
                {props.stages.map((stage, index) => (<>
                    <StageBlock {...other}
                        className={`indicator-${index}`} completed={stage?.completed} active={stage?.active}
                        onClick={(ev) => { 
                            onStageClick(index, stage?.data, ev);
                            if(other.showCalloutOnClick && !isVisible && (!calloutIdx || calloutIdx !== index))
                                setCallout({isVisible: true, calloutIdx: index});
                        }} 
                        isFirstColumn={index === 0} isLastColumn={index === other.stages.length - 1} key={index}>
                        <StageIndicator active={stage?.active} completed={stage?.completed} indicatorColor={other?.indicatorColor}>
                            {stage?.completed && <Icon styles={{root: {width: '100%', backgroundColor: other?.indicatorColor}}} iconName='CheckMark' />}
                        </StageIndicator>
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