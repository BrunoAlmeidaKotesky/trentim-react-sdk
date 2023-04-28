
import type { ILifecycleStages, ILifecycleProgressProps } from '@models/interfaces/ILifecycleProgressProps';
import { Checkmark20Regular } from '@fluentui/react-icons';
import { useContext } from 'react';
import { CalloutCtx } from './Context';
import './lifecycle.scss';

type LifecycleTileProps<T> = ILifecycleStages<T> & Pick<ILifecycleProgressProps, 'onStageClick'> & {
	position: 'start' | 'middle' | 'end';
    currentIdx: number;
	hidden: boolean;
	overflowStageText: boolean;
};

const LifecycleTile = (props: LifecycleTileProps<any>) => {
	const {calloutIdx, setCallout, alwaysShowCallout, showCalloutOnlyOnActive} = useContext(CalloutCtx);
	const indicatorClass = `tile ${props.position} ${props.completed ? 'completed' : ''} ${props.active ? 'active' : ''} indicator-${props?.currentIdx}`;

	return (
		<div className={indicatorClass} style={{ order: props.currentIdx, display: props?.hidden ? 'none' : 'flex' }}>
			{props.completed ? (
				<span className={'stageIndicator'}>
					<Checkmark20Regular />
				</span>
			) : (
				<span className={'stageIndicator'}></span>
			)}
			<div className={'titleArea'} onClick={(ev) => {
                const {onStageClick, position, currentIdx, ...rest} = props;
				if(alwaysShowCallout) 
					setCallout({isVisible: true, calloutIdx: currentIdx});
				if(showCalloutOnlyOnActive && rest?.active)
					setCallout({isVisible: true, calloutIdx: currentIdx});
                if(onStageClick) {
					if(rest?.showCallout && (!calloutIdx || calloutIdx !== currentIdx))
                        setCallout({isVisible: true, calloutIdx: currentIdx});
					onStageClick(rest, currentIdx, setCallout, ev);
				}
            }}>
				<span 
					className={'tileTitle'} 
					style={props.overflowStageText ? {textOverflow: 'ellipsis', width: 100, overflow: 'hidden'} : {}}>
					{props.label}
				</span>
			</div>
		</div>
	);
};

export default LifecycleTile;
