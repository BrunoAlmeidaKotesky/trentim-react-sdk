import type { Dispatch, SetStateAction } from 'react';
import type { ICommonPanel, IPanelChildrenPosition } from '@models/interfaces/ICommonPanel';
import type { KeyAndName } from '@models/types/Common';

export interface IGroupPanel extends ICommonPanel<string>, IPanelChildrenPosition {
    options: {
        key: string;
        text: string;
    }[];
    selectedGroupKeys: KeyAndName;
    setSelectedGroupKeys: Dispatch<SetStateAction<KeyAndName>>;
}