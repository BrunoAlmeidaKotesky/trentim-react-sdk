//@ts-ignore
import * as React from 'react';
import { RangeType } from '@helpers/enums';
import { Slider, ISliderProps } from '@fluentui/react/lib/Slider';
import { DatePicker } from '@fluentui/react/lib/DatePicker';
import type { IDateSliderProps } from '@models/interfaces/IDateSlider';
import { useContext, useEffect, useState, memo, useMemo } from 'react';
import { FilterPanelContext } from './Contexts';

function DateSliderComponent(props: IDateSliderProps) {
    const [displayDatePicker, setDisplayDatePicker] = useState(false);
    const [currentSlider, setCurSlider] = useState<RangeType>(RangeType.NONE);
    const {dateValue, setFilterDate} = useContext(FilterPanelContext);
    const formatSliderValue = (num: number): string => num === 0 ? 'Nenhum' : num === 1 ? 'Última Semana' : num === 2 ? 'Último Mês' : num === 3 ? 'Últimos Ano' : '';
    const onSliderChange: ISliderProps['onChanged'] = (_, val) => {
        if(val === RangeType.CUSTOM) {
            setDisplayDatePicker(true);
            setCurSlider(RangeType.CUSTOM);
        }
        else {
            setDisplayDatePicker(false);
            setFilterDate(p => {
                const copyMap = new Map(p);
                copyMap.set(props?.itemKey, {fromDate: null, toDate: new Date()});
                return copyMap;
            })
        }
        if(val === RangeType.NONE) {
            props.onRecordDateRange(null, null, RangeType.NONE);
            setCurSlider(RangeType.NONE);
            setDisplayDatePicker(false);
        }
        else if(val === RangeType.WEEK) {
            const lastWeek = new Date();
            lastWeek.setDate(lastWeek.getDate() - 7);
            setCurSlider(RangeType.WEEK);
            props.onRecordDateRange(lastWeek, new Date(), RangeType.WEEK);
        }
        else if(val === RangeType.MONTH) {
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            setCurSlider(RangeType.MONTH);
            props.onRecordDateRange(lastMonth, new Date(), RangeType.MONTH);
        }
        else if(val === RangeType.YEAR) {
            const lastYear = new Date();
            lastYear.setFullYear(lastYear.getFullYear() - 1);
            setCurSlider(RangeType.YEAR);
            props.onRecordDateRange(lastYear, new Date(), RangeType.YEAR);
        }
    }

    useEffect(() => {
        setCurSlider(props.defaultSliderValue);
    }, [props?.defaultSliderValue]);

    useEffect(() => {
        if(dateValue?.size > 0 && currentSlider === RangeType.CUSTOM)
            props.onRecordDateRange(dateValue?.get(props?.itemKey)?.fromDate, dateValue.get(props?.itemKey)?.toDate, RangeType.CUSTOM);
    }, [currentSlider, dateValue]);

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
                maxDate={dateValue?.get(props?.itemKey)?.toDate}
                strings={dateStrings}
                value={dateValue?.get(props?.itemKey)?.fromDate}
                formatDate={(date) => date?.toLocaleDateString()}
                onSelectDate={(d) => {
                    setFilterDate(p => {
                        const newMap = new Map(p);
                        newMap.set(props?.itemKey, {fromDate: d, toDate: dateValue?.get(props?.itemKey)?.toDate});
                        return newMap;
                    });
                    setCurSlider(RangeType.CUSTOM);
                }}
                label="De"/>
            <DatePicker
                minDate={dateValue?.get(props?.itemKey)?.fromDate}
                strings={dateStrings}
                formatDate={(date) => date?.toLocaleDateString()}
                onSelectDate={(d) => {
                    setFilterDate(p => {
                        const newMap = new Map(p);
                        newMap.set(props?.itemKey, {fromDate: dateValue?.get(props?.itemKey)?.fromDate, toDate: d});
                        return newMap;
                    });
                    setCurSlider(RangeType.CUSTOM);
                }}
                value={dateValue?.get(props?.itemKey)?.toDate}
                label="Até"/>
        </div>
    }
    </>);
}

export const DateSlider = memo(DateSliderComponent);