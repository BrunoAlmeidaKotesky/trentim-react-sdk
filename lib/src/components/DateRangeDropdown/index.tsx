import { useState } from 'react';
import { Dropdown, IDropdownOption, DatePicker, IDatePickerProps } from '@fluentui/react';

export type DateDropdownValues = 
'today' | 'oneDayAgo' | 'lastWeek' | 'lastMonth' | 'lastYear' | 
'nextDay' | 'nextWeek' | 'nextMonth' | 'nextYear' | 'range';
export type DateRangeDdpChange = (
    date: { start: Date | null, end: Date | null }, 
    ddpValue: DateDropdownValues,
    label?: string
) => void;
export interface DateRangeDropdownProps {
    labels?: Record<DateDropdownValues, string>;
    startPicker?: Omit<IDatePickerProps, 'onSelectDate' | 'value' | 'minDate' | 'maxDate'>;
    endPicker?: Omit<IDatePickerProps, 'onSelectDate' | 'value' | 'minDate' | 'maxDate'>;
    onDateValueChange: DateRangeDdpChange;
    dropdownValue: DateDropdownValues;
    dateRange: { start: Date | null, end: Date | null };
};

export function DateRangeDropdown(props: DateRangeDropdownProps) {
    const dropdownValue = props.dropdownValue;
    const [startDate, setStartDate] = useState<Date | null>(props?.dateRange?.start);
    const [endDate, setEndDate] = useState<Date | null>(props?.dateRange?.end);
    const [dateOption, setDateOption] = useState<DateDropdownValues>(dropdownValue);
    const defaultLabels: Record<DateDropdownValues, string> = {
        today: 'Today',
        oneDayAgo: 'One day ago',
        lastWeek: 'One week ago',
        lastMonth: 'One month ago',
        lastYear: 'One year ago',
        nextDay: 'Until tomorrow',
        nextWeek: 'Until next week',
        nextMonth: 'Until next month',
        nextYear: 'Until next year',
        range: 'Select a date Range'
    };
    const labels: Record<DateDropdownValues, string> = {...defaultLabels, ...props?.labels};

    const dropdownOptions: IDropdownOption[] = [
        { key: 'oneDayAgo', text: labels.oneDayAgo },
        { key: 'lastWeek', text: labels.lastWeek },
        { key: 'lastMonth', text: labels.lastMonth },
        { key: 'lastYear', text: labels.lastYear },
        { key: 'header1', text: '', itemType: 1 },
        { key: 'today', text: labels.today },
        { key: 'header2', text: '', itemType: 1 },
        { key: 'nextDay', text: labels.nextDay },
        { key: 'nextWeek', text: labels.nextWeek  },
        { key: 'nextMonth', text: labels.nextMonth },
        { key: 'nextYear', text: labels.nextYear },
        { key: 'header3', text: 'Personalizado', itemType: 1 },
        { key: 'range', text: labels.range },
    ];

    const handleDropdownChange = (_e: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        let end = new Date();
        end.setHours(23, 59, 59, 999);
        let start = new Date();
        start.setHours(0, 0, 0, 0);
        if (!option) return;

        switch (option.key) {
            case 'lastDay':
                start.setDate(start.getDate() - 1);
                break;
            case 'lastWeek':
                start.setDate(start.getDate() - 7);
                break;
            case 'lastMonth':
                start.setMonth(start.getMonth() - 1);
                break;
            case 'lastYear':
                start.setFullYear(start.getFullYear() - 1);
                break;
            case 'nextDay':
                start.setDate(start.getDate() + 1);
                break;
            case 'nextWeek':
                start.setDate(start.getDate() + 7);
                break;
            case 'nextMonth':
                start.setMonth(start.getMonth() + 1);
                break;
            case 'nextYear':
                start.setFullYear(start.getFullYear() + 1);
                break;
            default:
                start = null;
                break;
        }

        setDateOption(option.key as DateDropdownValues);
        if(option.key !== 'range') {
            setStartDate(start);
            setEndDate(end);
        }
        props.onDateValueChange({ start, end }, option.key as DateDropdownValues, labels[option.key as DateDropdownValues]);
    };

    const handleStartDateChange: IDatePickerProps['onSelectDate'] = (date) => {
        let start = new Date(date);
        start.setHours(0, 0, 0, 0);
        if (endDate && start && start > endDate) {
            alert('A data de início não pode ser posterior à data de término');
        } else {
            setStartDate(start); // Atualizando o estado local
            props.onDateValueChange({ start, end: endDate }, 'range', labels.range);
        }
    };

    const handleEndDateChange: IDatePickerProps['onSelectDate'] = (date) => {
        let end = new Date(date);
        end.setHours(23, 59, 59, 999);
        if (startDate && end && end < startDate) {
            alert('A data de término não pode ser anterior à data de início');
        } else {
            setEndDate(end); // Atualizando o estado local
            props.onDateValueChange({ start: startDate, end }, 'range', labels.range);
        }
    };

    return (
        <div>
            <Dropdown
                options={dropdownOptions}
                selectedKey={dateOption}
                onChange={handleDropdownChange} />
            {dateOption === 'range' && (
                <div>
                    <DatePicker
                        {...props?.startPicker}
                        maxDate={endDate}
                        onSelectDate={handleStartDateChange} value={startDate} />
                    <DatePicker
                        {...props?.endPicker}
                        minDate={startDate}
                        onSelectDate={handleEndDateChange} value={endDate} />
                </div>
            )}
        </div>
    );
};
