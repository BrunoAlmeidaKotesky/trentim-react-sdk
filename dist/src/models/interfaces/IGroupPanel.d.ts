import type { Dispatch, SetStateAction } from 'react';
import type { ICommonPanel, IPanelChildrenPosition } from './ICommonPanel';
import type { KeyAndName } from '../types/Common';
export interface IGroupPanel extends ICommonPanel<string>, IPanelChildrenPosition {
    options: {
        key: string;
        text: string;
    }[];
    selectedGroupKeys: KeyAndName;
    setSelectedGroupKeys: Dispatch<SetStateAction<KeyAndName>>;
}
