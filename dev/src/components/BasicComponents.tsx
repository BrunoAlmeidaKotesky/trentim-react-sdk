import {Tooltip} from 'trentim-react-sdk/components';
import {ApplyFilter} from 'trentim-react-sdk/lib/models';
import type { TooltipDirectionValues } from 'trentim-react-sdk/models';
import { useEffect, useState } from 'react';
import { StickerCard } from 'trentim-react-sdk/components';

export default function BaseComponents() {
    const [direct, setDirection] = useState<TooltipDirectionValues>('bottom_center');
    const [categories, setCategories] = useState([]);
    const options: TooltipDirectionValues[] = ['bottom_center', 'bottom_left', 'bottom_right', 'right', 'left', 'top_right', 'top_center', 'top_left'];
    
    useEffect(() => {
        setTimeout(() => { setCategories([{id: 6, title: 'Effect', order: 1, data: 'Group'}]) }, 4000);
    }, []);

    return (
        <div>
            <div>
                <label>IFrame</label>
                <select onChange={(e) => setDirection(e.target.value as TooltipDirectionValues)}>
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
            </div>
            <Tooltip content={<div style={{width: 60, height: 40, color: 'cyan'}}>Hello</div>} direction={direct}>
                <IFrame fallback={<div style={{width: 300, height: 153, backgroundColor: '#f1643'}}></div>} src="https://www.google.com" />
            </Tooltip>
            <StickerCard
                classNames={{ root: 'rootCard'}}
                headerProps={{
                    backgroundColor: 'rgb(246, 221, 255)',
                    title: 'Teste',
                    icon: 'Edit',
                    addTitle: 'Adicionar'
                }}
                stickers={categories}
                isEditModeEnabled={true}/>
        </div>
    );
}