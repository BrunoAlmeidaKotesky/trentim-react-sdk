import { LifecycleProgress } from "@components/LifecycleProgress";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Slider } from "@fluentui/react";
import { useState } from "react";
import { mockStages } from './constants';

initializeIcons();
export function LifecycleTests({ height }: { height?: string } = { height: '100%' }) {
    const [width, setWidth] = useState(1280);

    return (
        <div style={{ width: '100%', height, margin: '0 auto' }}>
            <Slider min={0} max={3280} value={width} onChange={v => setWidth(v)}/>
            <div style={{width, margin: 'auto', marginTop: 50}}>
            <LifecycleProgress
                leftColumnSubtitle="Atualizado em 23/10/2022"
                leftColumnTitle="Ciclo de Vida do Projeto"
                stages={mockStages}
                indicatorColor="rgb(0, 99, 55)"
                buttonColor="rgb(44, 201, 130)"
                onStageClick={(stage, idx, setCallout, ev) => {
                    console.log(stage, idx, setCallout, ev);
                }}
                showCalloutOnlyOnActive={false}
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