import { LifecycleProgress } from "@components/LifecycleProgress";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Slider } from "@fluentui/react";
import { useState } from "react";
import { mockStages2 } from './constants';

initializeIcons();
export function LifecycleTests({ height }: { height?: string } = { height: '100%' }) {
    const [width, setWidth] = useState(parseInt(localStorage.getItem('lifecycle-width')) || 1000);
    const [stages, setStages] = useState(
        localStorage.getItem('lifecycle-stages') ? 
        JSON.parse(localStorage.getItem('lifecycle-stages')) : 
        mockStages2
    );

    return (
        <div style={{ width: '100%', height, margin: '0 auto' }}>
            <div>
                {stages.map((currentStage, idx) => (
                    <button onClick={() => {
                        //All the previous stages from the selected index should be completed, the current should be active, and all the next ones should completed and active as false.
                        const newStages = stages.map((stage, index) => {
                            if (index < idx) {
                                return { ...stage, completed: true, active: false };
                            } else if (index === idx) {
                                return { ...stage, active: true, completed: false };
                            } else {
                                return { ...stage, active: false, completed: false };
                            }
                        });
                        localStorage.setItem('lifecycle-stages', JSON.stringify(newStages));
                        setStages(newStages);
                    }}>
                    {currentStage.label} - {currentStage.active.toString()}</button>
                ))}
            </div>
            <Slider min={0} max={3280} value={width} styles={{valueLabel: {color: 'white'}}} onChange={v => { setWidth(v); localStorage.setItem('lifecycle-width', v.toString()) }}/>
            <div style={{width, margin: 'auto', marginTop: 50}}>
            <LifecycleProgress
                leftColumnSubtitle="Atualizado em 23/10/2022"
                leftColumnTitle="Ciclo de Vida do Projeto"
                stages={stages}
                indicatorColor="rgb(0, 99, 55)"
                buttonColor="rgb(44, 201, 130)"
                onStageClick={(stage, selectedIdx, setCallout, ev) => {
                    console.log(stage, selectedIdx, setCallout, ev);
                    if(stage.active) {
                        const newState = stages.map((s, curIdx, arr) => {
                            if(curIdx === selectedIdx)
                                return {...s, active: false, completed: true};
                            if(curIdx === selectedIdx + 1 && selectedIdx + 1 !== arr.length - 1)
                                return {...s, active: true};
                            if(curIdx === selectedIdx && curIdx === arr.length - 1)
                                return {...s, active: false, completed: true}
                            if(curIdx === arr.length - 1 && !(s.active || s.completed))
                                return {...s, active: true, completed: false}
                            return s;
                        });
                        setStages(newState);
                    }
                }}
                showCalloutOnlyOnActive={true}
                alwaysShowCallout={false}
                calloutContent={<Callout/>} />
            </div>
        </div>
    )
}

const Callout = () => (<div style={{
    width: 300, backgroundColor: '#fff', display: 'flex', padding: 14,
    flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #D8D8D8', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
}}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '7px 14px',
            gap: '10px',
            alignItems: 'center'
        }}>
            <button style={{ width: '100%' }}>Próximo estágio</button>
            <button style={{ width: '100%' }} onClick={() => {}}>Paralisar projeto</button>
        </div>
    </div>
</div>)