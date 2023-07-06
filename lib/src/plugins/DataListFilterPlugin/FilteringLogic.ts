import type { FilterQueueValue, FilterRowConfig } from './types';
import type { TColumn } from "@models/index";
import type { DateDropdownValues } from '@components/DateRangeDropdown';
import type { DataListStore } from "@models/interfaces/DataListStore";
import { getDeepValue } from '@helpers/index';

export class FilteringLogic {
    static applyFilter(queue: FilterQueueValue<{ type: 'date', dropdownValue?: DateDropdownValues }>[], getStore: () => DataListStore<any>) {
        let rows = [...getStore().allRows];

        if (queue.length === 0) {
            rows = [...getStore().allRows];
            getStore().setRows(rows);
            return;
        }

        const columns = getStore().columns;

        rows = queue.reduce((filteredRows, filter) => {
            const column: TColumn<any> = columns.find(column => column.key === filter.key);

            if (!column) return filteredRows;

            if (filter?.metadata?.type === 'date') {
                const rangeStart = new Date(filter.values[0] as string);
                rangeStart.setHours(0, 0, 0, 0);  // Opcional, dependendo se você deseja incluir o início do dia
                const rangeEnd = new Date(filter.values[1] as string);
                rangeEnd.setHours(23, 59, 59, 999);
                return filteredRows.filter(row => {
                    //@ts-ignore
                    const currentValue = new Date(getDeepValue(row, column.key));
                    return currentValue >= rangeStart && currentValue <= rangeEnd;
                });
            } else {
                return filteredRows.filter(row => FilteringLogic.filterRow({ filter, row, column }, getStore));
            }
        }, rows);

        getStore().setRows(rows);
    }

    private static filterRow({ column, filter, row }: FilterRowConfig<any>, getStore: () => DataListStore<any>): unknown {
        let filterValues = filter.values;
        const transformations = column?.transformations;
        if (transformations?.renderAs)
            filterValues = FilteringLogic.findOriginalValue(getStore, filter);
        //@ts-ignore
        return filterValues.includes(getDeepValue(row, column.key));
    }

    private static findOriginalValue(getStore: () => DataListStore<any>, filter: FilterQueueValue<any>): unknown[] {
        const originalRowValues = getStore().originalRowValues;
        const foundItem = originalRowValues?.find(originalRow => originalRow?.key === filter.key);
        const originalValues = foundItem?.values
            ?.filter(value => filter?.values
                ?.includes(value?.transformedValue))
            ?.map(v => v?.oldValue);
        return originalValues;
    }
}