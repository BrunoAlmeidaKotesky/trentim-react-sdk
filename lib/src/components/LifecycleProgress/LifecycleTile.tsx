
import type { ILifecycleStages, ILifecycleProgressProps } from '@models/interfaces/ILifecycleProgressProps';
import { Checkmark20Regular } from '@fluentui/react-icons';
import { useContext } from 'react';
import { CalloutCtx } from './Context';

type LifecycleTileProps<T> = ILifecycleStages<T> & Pick<ILifecycleProgressProps, 'onStageClick'> & {
	position: 'start' | 'middle' | 'end';
    currentIdx: number;
	hidden: boolean;
	styles: CSSModuleClasses;
	overflowStageText: boolean;
};

const LifecycleTile = ({styles, ...props}: LifecycleTileProps<any>) => {
	const {calloutIdx, setCallout, alwaysShowCallout, showCalloutOnlyOnActive} = useContext(CalloutCtx);
	const indicatorClass = `${styles.tile} ${styles[`${props.position}`]} ${props.completed ? styles.completed : ''} ${props.active ? styles['active'] : ''} indicator-${props?.currentIdx}`;

	return (
		<div className={indicatorClass} style={{ order: props.currentIdx, display: props?.hidden ? 'none' : 'flex' }}>
			{props.completed ? (
				<span className={styles.stageIndicator}>
					<Checkmark20Regular />
				</span>
			) : (
				<span className={styles.stageIndicator}></span>
			)}
			<div className={styles.titleArea} onClick={(ev) => {
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
					className={styles.tileTitle} 
					style={props.overflowStageText ? {textOverflow: 'ellipsis', width: 100, overflow: 'hidden'} : {}}>
					{props.label}
				</span>
			</div>
		</div>
	);
};

export default LifecycleTile;
