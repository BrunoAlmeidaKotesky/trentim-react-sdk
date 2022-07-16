import { useRef } from "react";
import { LifecycleProgress } from "../../../src/components/LifecyleProgress/LifecycleProgress";
import { ILifecycleProgressProps, ILifecycleProgressRef } from "../../../src/models/interfaces/ILifecycleProgressProps";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();
export function LifecycleTests() {
    const calloutRef = useRef<ILifecycleProgressRef>(null);
    const lifeCycleProps: ILifecycleProgressProps<string[]> = {
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
        onStageClick: (idx, data, ev) => {
            console.log(idx, data, ev);
        },
        stages: [
            {active: false, label: "Stage 1", data: ['Substage 1', 'Substage 2'], completed: true},
            {active: false, label: "Stage 2", data: ['Substage 1', 'Substage 2'], completed: true},
            {active: true, label: "Stage 3", data: ['Substage 1', 'Substage 2'], completed: false},
            {active: false, label: "Stage 4", data: ['Substage 1', 'Substage 2'], completed: false},
        ],
        showCalloutOnClick: true,
        calloutContent: 
        (<div style={{
            width: 300, backgroundColor: '#fff', display: 'flex', padding: 14,
            flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #D8D8D8', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'grid', gridTemplateRows: '1fr', borderBottom: '1px solid #D8D8D8'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', lineBreak: 'auto'}}><span>1A. Informações complementares</span><span>Finalizado</span></div>
                </div>
                <div style={{display: 'grid', gridTemplateRows: '1fr', borderBottom: '1px solid #D8D8D8', gap: 12, padding: '8px 0'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}><span>1A. Informações complementares</span><span>Finalizado</span></div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}><span>1B. Aprovação Comitê Executivo</span><span>A Terminar</span></div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}><span>1C. Revisão Comitê Executivo</span><span>Não Iniciado</span></div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}><span>1D. Informações complementares</span><span>Não Iniciado</span></div>
                </div>
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