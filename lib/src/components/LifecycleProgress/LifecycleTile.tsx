import type { ILifecycleStages, ILifecycleProgressProps } from '@models/interfaces/ILifecycleProgressProps';
import { Icon } from '@fluentui/react/lib/Icon';
import { useContext } from 'react';
import { CalloutCtx } from './Context';

type LifecycleTileProps<T> = ILifecycleStages<T> & Pick<ILifecycleProgressProps, 'onStageClick'> & {
	position: 'start' | 'middle' | 'end';
    currentIdx: number;
	hidden: boolean;
	styles: CSSModuleClasses;
};

const LifecycleTile = ({styles, ...props}: LifecycleTileProps<any>) => {
	const {calloutIdx, setCallout, alwaysShowCallout, showCalloutOnlyOnActive} = useContext(CalloutCtx);
	const indicatorClass = `${styles.tile} ${styles[`${props.position}`]} ${props.completed ? styles.completed : ''} ${props.active ? styles['active'] : ''} indicator-${props?.currentIdx}`;

	return (
		<div className={indicatorClass} style={{ order: props.order, display: props?.hidden ? 'none' : 'flex' }}>
			{props.completed ? (
				<span className={styles.stageIndicator}>
					<Icon styles={{root: {width: '100%' }}} iconName='CheckMark' />
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
				<span className={styles.tileTitle}>{props.label}</span>
			</div>
		</div>
	);
};

export default LifecycleTile;
