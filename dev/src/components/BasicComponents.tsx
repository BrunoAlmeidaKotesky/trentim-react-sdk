import {Tooltip} from '../../../src/components/Tooltip';
import {IFrame} from '../../../src/components/IFrame';
import { UploadButton } from '../../../src/components/UploadButton';
import type { TooltipDirectionValues } from 'trentim-react-sdk';
import { useState } from 'react';
import { StickerCard } from '../../../src/components/StickerCard';

export default function BaseComponents() {
    const [{button, frame}, setDirection] = useState<{frame: TooltipDirectionValues, button: TooltipDirectionValues}>({frame: 'bottom_center', button: 'bottom_center'});
    const options: TooltipDirectionValues[] = ['bottom_center', 'bottom_left', 'bottom_right', 'right', 'left', 'top_right', 'top_center', 'top_left']; 

    return (
        <div>
            <div>
                <label>Botão</label>
                <select onChange={(e) => setDirection(p => ({...p, button: e.target.value as TooltipDirectionValues}))}>
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
            </div>
            <div>
                <label>IFrame</label>
                <select onChange={(e) => setDirection(p => ({...p, frame: e.target.value as TooltipDirectionValues}))}>
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
            </div>
            <Tooltip content={<div style={{width: 60, height: 40, color: 'cyan'}}>Hello</div>} direction={frame}>
                <IFrame fallback={<div style={{width: 300, height: 153, backgroundColor: '#f1643'}}></div>} src="https://www.google.com" />
            </Tooltip>
            <Tooltip content="Tooltip" direction={button}>
                <UploadButton accepts={['image/png']} buttonLabel={'Clicar'} />
            </Tooltip>
            <StickerCard
                classNames={{ root: 'rootCard'}}
                headerProps={{
                    backgroundColor: 'rgb(246, 221, 255)',
                    title: 'Teste',
                    icon: 'Edit',
                    addTitle: 'Adicionar'
                }}
                stickers={[]}
                isEditModeEnabled={true}
                onStickersChanged={{
                    when: 'lengthChanged',
                    callback: (stickers) => console.log(stickers)
                }} />
        </div>
    );
}