import * as React from 'react';
import { RangeType } from '../helpers/enums';
import { Slider, ISliderProps } from '@fluentui/react/lib/Slider';
import { DatePicker } from '@fluentui/react/lib/DatePicker';
import type { IDateSliderProps } from '../models/interfaces/IDateSlider';
import { useContext, useEffect, useState, memo, useMemo } from 'react';
import { FilterPanelContext } from './Contexts';

function DateSliderComponent(props: IDateSliderProps) {
    const [displayDatePicker, setDisplayDatePicker] = useState(false);
    const {fromDate, toDate, setFromDate, setToDate} = useContext(FilterPanelContext);
    const formatSliderValue = (num: number): string => num === 0 ? 'Nenhum' : num === 1 ? 'Última Semana' : num === 2 ? 'Último Mês' : num === 3 ? 'Últimos Ano' : '';
    const onSliderChange: ISliderProps['onChanged'] = (_, val) => {
        if(val === 4)
            setDisplayDatePicker(true);
        else {
            setDisplayDatePicker(false);
            setFromDate(null);
            setToDate(new Date());
        }
        if(val === 0) {
            props.onRecordDateRange(null, null, RangeType.NONE);
        }
        else if(val === 1) {
            const lastWeek = new Date();
            lastWeek.setDate(lastWeek.getDate() - 7);
            props.onRecordDateRange(lastWeek, new Date(), RangeType.WEEK);
        }
        else if(val === 2) {
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            props.onRecordDateRange(lastMonth, new Date(), RangeType.MONTH);
        }
        else if(val === 3) {
            const lastYear = new Date();
            lastYear.setFullYear(lastYear.getFullYear() - 1);
            props.onRecordDateRange(lastYear, new Date(), RangeType.YEAR);
        }
    }

    useEffect(() => {
        if(fromDate && toDate)
            props.onRecordDateRange(fromDate, toDate, RangeType.CUSTOM);
    }, [fromDate, toDate]);

    useEffect(() => {
        if(props?.defaultSliderValue === 4 && !displayDatePicker)
            setDisplayDatePicker(true);
    }, [props?.defaultSliderValue]);

    const dateStrings = useMemo(() => ({
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        shortDays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        goToToday: 'Hoje',
        prevMonthAriaLabel: 'Mês anterior',
        nextMonthAriaLabel: 'Próximo mês',
        prevYearAriaLabel: 'Ano anterior',
        nextYearAriaLabel: 'Próximo ano',
        closeButtonAriaLabel: 'Fechar',
        isRequiredErrorMessage: 'Este campo é obrigatório.',
        invalidInputErrorMessage: 'Valor de entrada inválido.',
        isOutOfBoundsErrorMessage: 'Valor de entrada fora dos limites.',
        showWeekNumbers: false,
        weekNumberFormatString: '',
        firstWeekOfYear: 0,
        dateFormat: 'd',
        showGoToToday: true,
    }), []);

    return (<>
    <Slider
        min={0} max={4} step={1}
        defaultValue={props?.defaultSliderValue ?? 0} styles={{container: { display: 'grid' }}}
        valueFormat={formatSliderValue}
        onChanged={onSliderChange}
        label={props?.label}/>
    {displayDatePicker && 
        <div>
            <DatePicker
                maxDate={toDate}
                strings={dateStrings}
                value={fromDate}
                formatDate={(date) => date?.toLocaleDateString()}
                onSelectDate={(d) => {
                    setFromDate(d);
                }}
                label="De"/>
            <DatePicker
                minDate={fromDate}
                strings={dateStrings}
                formatDate={(date) => date?.toLocaleDateString()}
                onSelectDate={(d) => {
                    setToDate(d);
                }}
                value={toDate}
                label="Até"/>
        </div>
    }
    </>);
}

export const DateSlider = memo(DateSliderComponent);