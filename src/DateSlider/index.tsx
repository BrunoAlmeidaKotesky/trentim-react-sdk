import * as React from 'react';
import { Slider, ISliderProps } from '@fluentui/react/lib/Slider';
import { DatePicker } from '@fluentui/react/lib/DatePicker';

interface IDateSliderProps {
    label: string;
    onChange: (value: number) => void;
}
export default function DateSlider(props: IDateSliderProps) {
    const [displayDatePicker, setDisplayDatePicker] = React.useState(false);
    const [fromDate, setFromDate] = React.useState<Date>(null);
    const [toDate, setToDate] = React.useState(new Date());
    const formatSliderValue = (num: number): string => num === 0 ? 'Nenhum' : num === 1 ? 'Última Semana' : num === 2 ? 'Último Mês' : num === 3 ? 'Últimos Ano' : '';
    const onSliderChange: ISliderProps['onChange'] = (val) => {
        if(val === 4)
            setDisplayDatePicker(true);
        else {
            setDisplayDatePicker(false);
            setFromDate(null);
            setToDate(new Date());
        }
        props?.onChange(val);
    }

    const dateSrings = React.useMemo(() => ({
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
        defaultValue={0} styles={{container: { display: 'grid' }}}
        valueFormat={formatSliderValue}
        onChange={onSliderChange}
        label={props?.label}/>
    {displayDatePicker && 
        <div>
            {/**Translate Datepicker all props to portuguese*/}
            <DatePicker
                maxDate={toDate}
                strings={dateSrings}
                formatDate={(date) => date?.toLocaleDateString()}
                onSelectDate={(d) => {
                    if(d && !fromDate || !fromDate && d)
                        setFromDate(d);
                    else if(d && fromDate && fromDate.getTime() > d.getTime())
                        setFromDate(d);
                    else if(d && fromDate && fromDate.getTime() < d.getTime() && !toDate)
                        setToDate(d);
                }}
                value={fromDate} label="De"/>
            <DatePicker
                minDate={fromDate}
                strings={dateSrings}
                formatDate={(date) => date?.toLocaleDateString()}
                onSelectDate={(d) => {
                    if(d && !toDate || !toDate && d)
                        setToDate(d);
                    else if(d && toDate && toDate.getTime() < d.getTime())
                        setToDate(d);
                    else if(d && toDate && toDate.getTime() > d.getTime())
                        setFromDate(d);
                }}
                value={toDate} label="Até"/>
        </div>
    }
    </>);
}