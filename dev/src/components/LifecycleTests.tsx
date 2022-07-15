import { LifecycleProgress } from "../../../src/components/LifecyleProgress/LifecycleProgress";
import { ILifecycleProgressProps } from "../../../src/models/interfaces/ILifecycleProgressProps";

export function LifecycleTests() {
    const lifeCycleProps: ILifecycleProgressProps<string[]> = {
        infoContent: (<div></div>),
        onStageClick: (idx, data, ev) => {
            console.log(idx, data, ev);
        },
        stages: [
            {active: true, label: "Stage 1", data: ['Substage 1', 'Substage 2']},
            {active: false, label: "Stage 2", data: ['Substage 1', 'Substage 2']},
            {active: false, label: "Stage 3", data: ['Substage 1', 'Substage 2']},
            {active: false, label: "Stage 4", data: ['Substage 1', 'Substage 2']},
        ],
        showCalloutOnClick: true,
        calloutContent: (<div>Callout content</div>)
    }

    return (
        <div style={{ width: '100%', height: '100%'}}>
            <LifecycleProgress {...lifeCycleProps}/>
        </div>
    )
}