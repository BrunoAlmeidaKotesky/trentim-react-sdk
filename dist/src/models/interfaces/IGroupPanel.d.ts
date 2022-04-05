import type { Dispatch, SetStateAction } from 'react';
import type { ICommonPanel } from './ICommonPanel';
import type { KeyAndName } from '../types/Common';
export interface IGroupPanel extends ICommonPanel<string> {
    options: {
        key: string;
        text: string;
    }[];
    selectedGroupKeys: KeyAndName;
    setSelectedGroupKeys: Dispatch<SetStateAction<KeyAndName>>;
}
