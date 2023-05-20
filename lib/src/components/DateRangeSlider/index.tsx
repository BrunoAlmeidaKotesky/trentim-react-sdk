import { useEffect } from 'react';
import { Slider, DatePicker, ISliderProps, IDatePickerProps } from '@fluentui/react';

export const SLIDER_VALUES = { WEEK: 0, MONTH: 1, YEAR: 2, RANGE: 3 } as const;
export type DateSliderValues = typeof SLIDER_VALUES[keyof typeof SLIDER_VALUES];
export interface DateRangeSliderProps {
    sliderLabels: [week: string, month: string, year: string, range: string];
    startPicker?: Omit<IDatePickerProps, 'onSelectDate' | 'value' | 'minDate' | 'maxDate'>;
    endPicker?: Omit<IDatePickerProps, 'onSelectDate' | 'value' | 'minDate' | 'maxDate'>;
    onDateValueChange: (value: { start: Date | null, end: Date | null }) => void;
    onSliderChange: ISliderProps['onChange'];
    sliderValue: DateSliderValues;
    dateRange: { start: Date | null, end: Date | null };
};

export function DateRangeSlider(props: DateRangeSliderProps) {
    const sliderValue = props.sliderValue;
    const dateRange = props.dateRange;
    const sliderLabels = props?.sliderLabels || ['Last Week', 'Last Month', 'Last Year', 'Range'];

    useEffect(() => {
        if (props?.sliderLabels.length > 0 && props?.sliderLabels?.length !== 4) {
            throw new Error('DateRangeSelector: sliderLabels must have 4 elements');
        }
    }, [props.sliderLabels]);

    const handleSliderChange: ISliderProps['onChange'] = (value, range, e) => {
        const end = new Date();
        let start = new Date();

        switch (value) {
            case SLIDER_VALUES.WEEK:
                start.setDate(start.getDate() - 7);
                break;
            case SLIDER_VALUES.MONTH:
                start.setMonth(start.getMonth() - 1);
                break;
            case SLIDER_VALUES.YEAR:
                start.setFullYear(start.getFullYear() - 1);
                break;
            default:
                start = null;
                break;
        }

        props.onDateValueChange({ start, end });
        props.onSliderChange(value as DateSliderValues, range, e);
    };

    const handleStartDateChange: IDatePickerProps['onSelectDate'] = (date) => {
        if (dateRange.end && date > dateRange.end) {
            alert('A data de início não pode ser posterior à data de término');
        } else {
            props.onDateValueChange({ ...dateRange, start: date });
        }
    };

    const handleEndDateChange: IDatePickerProps['onSelectDate'] = (date) => {
        if (dateRange.start && date < dateRange.start) {
            alert('A data de término não pode ser anterior à data de início');
        } else {
            props.onDateValueChange({ ...dateRange, end: date });
        }
    };

    return (
        <div>
            {sliderValue < 3 ? (
                <Slider
                    min={0} max={3} step={1}
                    value={props.sliderValue} showValue={true}
                    onChange={handleSliderChange} label={sliderLabels?.[sliderValue]} />
            ) : (
                <div>
                    <div>
                    <Slider
                        min={0} max={3} step={1}
                        value={props.sliderValue} showValue={true}
                        onChange={handleSliderChange} label={sliderLabels?.[sliderValue]} />
                    </div>
                    <DatePicker
                        {...props?.startPicker}
                        maxDate={dateRange?.end}
                        onSelectDate={handleStartDateChange} value={dateRange.start} />
                    <DatePicker
                        {...props?.endPicker}
                        minDate={dateRange?.start}
                        onSelectDate={handleEndDateChange} value={dateRange.end} />
                </div>
            )}
        </div>
    );
};
