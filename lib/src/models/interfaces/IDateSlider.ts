import {RangeType} from '@models/enums';

export interface IDateSliderProps {
    label: string;
    onRecordDateRange: (from: Date, to: Date, rangeType: RangeType) => void;
    defaultSliderValue: number;
    itemKey: string;
}