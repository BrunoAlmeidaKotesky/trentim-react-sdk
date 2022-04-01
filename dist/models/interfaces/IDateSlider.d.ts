import { RangeType } from '../../helpers/enums';
export interface IDateSliderProps {
    label: string;
    onRecordDateRange: (from: Date, to: Date, rangeType: RangeType) => void;
    defaultValues: {
        from: Date;
        to: Date;
        slider: number;
    };
}
