import type {IFocusTrapCalloutProps} from '@fluentui/react/lib/Callout';

export interface IInfoColumn {
    infoColumnBgColor?: string;
    /**@default #fff */
    infoColumnTxtColor?: string;
    /**@default 200px */
    infoColumnMaxWidth?: string;
    infoContent: React.ReactNode;
}

export interface IStageColumn extends IStageBlock {
     /**@default `repeat(auto-fit, minmax(200px, 1fr))` */
    gridTemplateColumn?: string;
    /**@default #00BCF2 */
    indicatorColor?: string;
}

export interface IStageBlock {
    stageBgColor?: string;
    stageBorderTop?: string;
}

export interface ILifecycleStages<T = any> {
    label: string;
    active: boolean;
    completed: boolean;
    data?: T;
}

export interface ILifecycleProgressProps<StageData = any> extends IInfoColumn, IStageColumn {
    /**@default 60px */
    containerHeight?: string;
    /**@default #00BCF2 */
    /**@default 46px */
    columnsHeight?: string;
    /**@default #fff */
    containerBgColor?: string;
    stages: ILifecycleStages<StageData>[];
    onStageClick: (curIndex: number, data?: StageData, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**@default false */
    showCalloutOnClick?: boolean;
    calloutContent?: React.ReactNode;
    calloutProps?: IFocusTrapCalloutProps;
    /**@default black */
    textColor?: string;
}

export type LifecycleCallout = {isVisible: boolean, calloutIdx: number};
export type ILifecycleProgressRef = {setCallout: React.Dispatch<React.SetStateAction<LifecycleCallout>>};
export type StageColumnComponent = Pick<ILifecycleProgressProps, 'gridTemplateColumn' | 'columnsHeight'>;
export type StageBlockComponent = Pick<ILifecycleProgressProps, 'stageBgColor' | 'stageBorderTop' | 'columnsHeight'> & {isFirstColumn: boolean, isLastColumn: boolean, completed: boolean, active: boolean};
export type StageIndicatorComponent = Pick<IStageColumn, 'indicatorColor'> & {active: boolean, completed: boolean};
export type InfoColumnComponent = Pick<ILifecycleProgressProps, 'infoColumnBgColor' | 'infoColumnTxtColor' | 'infoColumnMaxWidth' | 'columnsHeight'>