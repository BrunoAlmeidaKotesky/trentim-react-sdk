
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
    /**@default #efefef */
    stageBgColor?: string;
    /**@default 4px solid #c4c4c4 */
    stageBorderTop?: string;
}

export interface ILifecycleStages<T = any> {
    label: string;
    active: boolean;
    data?: T;
}

export interface ILifecycleProgressProps<StageData = any> extends IInfoColumn, IStageColumn {
    /**@default 56px */
    containerHeight?: string;
    /**@default #00BCF2 */
    /**@default 42px */
    columnsHeight?: string;
    stages: ILifecycleStages<StageData>[];
    onStageClick: (curIndex: number, data?: StageData, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**@default false */
    showCalloutOnClick?: boolean;
    calloutContent?: React.ReactNode;
}

export type LifecycleCallout = {isVisible: boolean, calloutIdx: number};
export type ILifecycleProgressRef = {setCallout: React.Dispatch<React.SetStateAction<LifecycleCallout>>};
export type StageColumnComponent = Pick<ILifecycleProgressProps, 'gridTemplateColumn' | 'columnsHeight'>;
export type StageBlockComponent = Pick<ILifecycleProgressProps, 'stageBgColor' | 'stageBorderTop' | 'columnsHeight'> & {isFirstColumn: boolean, isLastColumn: boolean};
export type StageIndicatorComponent = Pick<IStageColumn, 'indicatorColor'> & {active: boolean};
export type InfoColumnComponent = Pick<ILifecycleProgressProps, 'infoColumnBgColor' | 'infoColumnTxtColor' | 'infoColumnMaxWidth' | 'columnsHeight'>