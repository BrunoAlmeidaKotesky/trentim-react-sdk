import type {IFocusTrapCalloutProps} from '@fluentui/react/lib/Callout';
import type {CSSNumberFormat} from '@models/types/UtilityTypes';

export interface IInfoColumn {
    infoColumnBgColor?: string;
    /**@default #fff */
    infoColumnTxtColor?: string;
    /**@default 200px */
    infoColumnWidth?: CSSNumberFormat;
    infoContent: React.ReactNode;
}

export interface IStageColumn extends IStageBlock {
    /**@default #00BCF2 */
    indicatorColor?: string;
}

export interface IStageBlock {
    /**@default 42px */
    stageHeight?: CSSNumberFormat;
    /**@default 200px */
    stageMinWidth?: CSSNumberFormat;
    stageBgColor?: string;
    stageBorderTop?: string;
}

export interface ILifecycleStages<T = any> {
    label: string;
    active: boolean;
    completed: boolean;
    data?: T;
    /**
     * If not set, it will show callout only if the prop `showCalloutOnClick` is set to `true` and the stage is `active`.
     */
    showCallout?: boolean;
}

export interface ILifecycleProgressProps<StageData = any> extends IInfoColumn, IStageColumn {
    /**@default #00BCF2 */
    /**@default 59px */
    leftColumnHeight?: CSSNumberFormat;
    /**@default 73px */
    rightColumnHeight?: CSSNumberFormat;
    /**@default #fff */
    containerBgColor?: string;
    stages: ILifecycleStages<StageData>[];
    onStageClick: (currentStage: ILifecycleStages<StageData>, curIndex: number, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**@default false */
    showCalloutOnClick?: boolean;
    calloutContent?: React.ReactNode;
    calloutProps?: IFocusTrapCalloutProps;
    /**@default black */
    textColor?: string;
}

export type LifecycleCallout = {isVisible: boolean, calloutIdx: number};
export type ILifecycleProgressRef = {setCallout: React.Dispatch<React.SetStateAction<LifecycleCallout>>};
export type StageColumnComponent = Pick<ILifecycleProgressProps, 'rightColumnHeight' | 'containerBgColor'> & { rightColPaddingBot: CSSNumberFormat };
export type StageBlockComponent = Pick<ILifecycleProgressProps, 'stageBgColor' | 'indicatorColor' | 'stageBorderTop' | 'rightColumnHeight' | 'stageHeight' | 'stageMinWidth'> & {isFirstColumn: boolean, isLastColumn: boolean, completed: boolean, active: boolean};
export type StageIndicatorComponent = Pick<IStageColumn, 'indicatorColor'> & {active: boolean, completed: boolean};
export type InfoColumnComponent = Pick<ILifecycleProgressProps, 'infoColumnBgColor' | 'infoColumnTxtColor' | 'leftColumnHeight'>
export type LifeCycleContainer = Pick<ILifecycleProgressProps, 'containerBgColor' | 'infoColumnWidth' | 'stageMinWidth'>; 