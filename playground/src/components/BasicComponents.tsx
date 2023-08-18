import type { TooltipDirectionValues } from '@models/index';
import { useEffect, useState } from 'react';
import { StickerCard } from '@components/StickerCard';

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