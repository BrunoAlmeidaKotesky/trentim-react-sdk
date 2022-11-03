import { IButtonStyles } from '@fluentui/react/lib/Button';
import type { ICalloutProps } from '@fluentui/react/lib/Callout';
import type { Dispatch, SetStateAction } from 'react';

export type LifecycleCallout = {isVisible: boolean, calloutIdx: number};
export type ILifecycleProgressRef = {setCallout: React.Dispatch<React.SetStateAction<LifecycleCallout>>};

export interface ILifecycleStages<T = any> {
    label: string;
    active: boolean;
    completed: boolean;
    order: number;
    data?: T;
    /**
     * If not set, it will show callout only if the prop `showCalloutOnClick` is set to `true` and the stage is `active`.
     */
    showCallout?: boolean;
}

export interface IInternalLifecycleStages<T = any> extends ILifecycleStages<T> {
    hidden: boolean;
}

export type OnStagClick<D> = (currentStage: ILifecycleStages<D>, curIndex: number, setCallout?: Dispatch<SetStateAction<LifecycleCallout>>, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

export interface ILifecycleProgressProps<StageData = any> {
    /**The stages that the lifecycle can have. */
    stages: ILifecycleStages<StageData>[];
    /**`onClick` event that happens when the stage indicator or column is clicked. */
    onStageClick?: OnStagClick<StageData>;
    /**@default false */
    showCalloutOnClick?: boolean;
    /**What will be rendered inside the `<Callout/>` component of the LifecycleProgress selected stage. 
     * Same as `calloutProps.children`
    */
    calloutContent: React.ReactNode;
    /**Default `@fluentui/react` `<Callout/>` props. */
    calloutProps?: ICalloutProps;
    /**The text to be rendered on the title of the left column */
    leftColumnTitle: string;
    /**The text to be rendered on the subtitle of the left column */
    leftColumnSubtitle: string;
    /**Lifecycle indicator color, the Previous and Next buttons will be a darken() version of this color. */
    indicatorColor: string;
    /**Custom color for the Left and Right buttons icons. */
    buttonColor: string;
    /**A custom color of the left column, if not set, will be the same as `indicatorColor` */
    leftColumnColor?: string;
    /**Custom styles for the left arrow button*/
    leftScrollButtonStyles?: IButtonStyles;
    /**Custom styles for the right arrow button*/
    rightScrollButtonStyles?: IButtonStyles;
    /**The text to be rendered on the title of the right column */
    /**If true, the callout will always be shown, even if on the currentStage the showCallout is falsy */
    alwaysShowCallout?: boolean;
    /**If true, the callout will only be shown if the current clicked stage is active, ignoring `showCallout` from this and other stages. */
    showCalloutOnlyOnActive?: boolean;
}