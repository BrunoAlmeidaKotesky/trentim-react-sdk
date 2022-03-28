import { Dispatch, SetStateAction } from 'react';
import type { ICommonPanel } from './ICommonPanel';
export interface IGroupPanel extends ICommonPanel<Map<string, string>> {
    options: {
        key: string;
        text: string;
    }[];
    selectedGroupKeys: Map<string, string>;
    setSelectedGroupKeys: Dispatch<SetStateAction<Map<string, string>>>;
}
