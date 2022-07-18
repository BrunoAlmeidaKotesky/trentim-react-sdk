import { useRef, useState } from "react";
import { LifecycleProgress } from "../../../src/components/LifecyleProgress/LifecycleProgress";
import { ILifecycleProgressProps, ILifecycleProgressRef } from "../../../src/models/interfaces/ILifecycleProgressProps";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {mockStages, SubStage} from './constants';

initializeIcons();

export function LifecycleTests() {
    const calloutRef = useRef<ILifecycleProgressRef>(null);
    const [calloutStateItems, setCalloutStateItems] = useState<JSX.Element>(null);
    const lifeCycleProps: ILifecycleProgressProps<SubStage[]> = {
        infoContent: (
        <div>
            <p style={{
                fontFamily: 'Segoe UI,Tahoma,Geneva,Verdana,sans-serif',
                fontStyle: 'normal',
                fontSize: 14,
                color: '#fff',
                margin: 0
            }}>Project Process</p>
            <p style={{
               fontFamily: 'Segoe UI,Tahoma,Geneva,Verdana,sans-serif',
               fontStyle: 'normal',
               fontWeight: 400,
               fontSize: 14,
               color: '#fff',
               margin: 0 
            }}>Active for 7 Days</p>
        </div>),
        onStageClick: (stage) => {
            setCalloutStateItems(<>
                {<div style={{display: 'grid', gridTemplateRows: '1fr', borderBottom: '1px solid #D8D8D8'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', lineBreak: 'auto'}}><span>{stage?.label}</span><span>{stage.completed ? 'Finalizado' : ''}</span></div>
                </div>}
                <div style={{display: 'grid', gridTemplateRows: '1fr', borderBottom: '1px solid #D8D8D8', gap: 12, padding: '8px 0'}}>
                    {stage?.data?.map(s => (
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span style={{fontWeight: s?.active ? 'bold' : 'normal'}}>{s.name}</span><span style={{fontWeight: s?.active ? 'bold' : 'normal'}}>{s?.description}</span>
                        </div>
                    ))}
                </div>
            </>);
        },
        stages: mockStages,
        showCalloutOnClick: true,
        calloutContent: 
        (<div style={{
            width: 300, backgroundColor: '#fff', display: 'flex', padding: 14,
            flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #D8D8D8', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                
                {calloutStateItems}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '7px 14px',
                    gap: '10px',
                    alignItems: 'center'
                }}>
                    <button style={{width: '100%'}}>Próximo estágio</button>
                    <button style={{width: '100%'}} onClick={() => {
                        if(calloutRef?.current?.setCallout)
                            calloutRef.current.setCallout({isVisible : false, calloutIdx: null});
                    }}>Paralisar projeto</button>
                </div>
            </div>
        </div>)
    }

    return (
        <div style={{ width: '100%', height: '100%'}}>
            <LifecycleProgress ref={calloutRef} {...lifeCycleProps}/>
        </div>
    )
}