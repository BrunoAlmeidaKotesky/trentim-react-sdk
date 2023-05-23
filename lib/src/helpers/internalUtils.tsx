/**All the functions in this file are for internal use only. */

import { convertIsoToLocaleString, getDeepValue} from "@helpers/index";
import { createNewSortInstance } from 'fast-sort';
import type { TColumn } from "@models/interfaces/IDataList";
import type { ReactNode, ComponentType } from "react";
import type { ColumnKey } from "@models/types/Common";
import type { DataListStore } from "@models/interfaces/DataListStore";
import type { ColumnItemTransformation } from "@models/interfaces/ColumnItemTransformation";

/**
 * This function takes the transformations of a column and returns the rendered value of the item, 
 * using getDeepValue to get the value of the item.
 * 
 * @param item The current item to render
 * @param column The column of the item to render
 * @param processValue A function to process the value of the item
 * @param Wrapper A wrapper component to wrap the value
 * @returns 
 */
function renderValue<T>(
    item: T,
    column: TColumn<T>,
    processValue: (value: any) => ReactNode,
    Wrapper?: ComponentType<{ children: ReactNode }>
) {
    //@ts-ignore
    const fieldValue = getDeepValue(item, column?.key);
    const valueNode = processValue(fieldValue);
    return Wrapper ? <Wrapper>{valueNode}</Wrapper> : valueNode;
}

export const convertItemValue = (transformations: ColumnItemTransformation, fieldValue: unknown): string => {
    if(!transformations?.renderAs) return fieldValue?.toString();
    switch (transformations.renderAs) {
        case 'date': {
            return convertIsoToLocaleString(
                fieldValue as string,
                transformations?.locales,
                transformations?.formatOptions
            );
        }
        case 'boolean': {
            let valueToRender: string = '';
            if (typeof fieldValue === 'boolean') {
                valueToRender = fieldValue ? transformations?.trueText : transformations?.falseText;
            } else {
                valueToRender = transformations?.nullText;
            }
            return valueToRender;
        }
        case 'number': {
            return Number(fieldValue).toLocaleString(
                transformations?.locales,
                transformations?.formatOptions
            );
        }
        case 'custom': {
            return transformations?.mapFn(fieldValue);
        }
    }
}

/**
 * Maps columns to be used in the DataList component, depending on the transformations provided (if any).
 * 
 * @param c Column to map
 * @returns Mapped column
 */
export function mapColumns<T>(column: TColumn<T>, store: DataListStore<T>): TColumn<T> {
    let onRender: (item?: T, index?: number, column?: TColumn<T>) => ReactNode;
    const transformations = column?.transformations;
    if (!transformations) {
        onRender = (item) => renderValue(item, column, (fieldValue) => <span>{fieldValue}</span>);
        return {...column, onRender, fieldName: column?.key };
    }
    onRender = (item) => renderValue(
        item, 
        column, 
        (fieldValue) => {
            const newValue = convertItemValue(transformations, fieldValue);
            store.setOriginalRowValue(column.key, fieldValue, newValue);
            return newValue;
        }, 
        transformations?.wrapper
    );
    return {...column, onRender, fieldName: column?.key}
}

const naturalSort = createNewSortInstance({
    comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
});

export function sortItems<T>(items: T[], columnKey: ColumnKey<T>, isSortedDescending: boolean): T[] {
    const sortType: 'asc' | 'desc' = isSortedDescending ? 'desc' : 'asc';
    if (sortType === 'asc') {
        return naturalSort(items).by({
            asc: u => getDeepValue(u, columnKey as any)?.toString(),
        });
    }
    return naturalSort(items).by({
        desc: u => getDeepValue(u, columnKey as any)?.toString(),
    });
};

export function onClickSortItem<T>(desc: boolean, get: () => DataListStore<T>, set: Function) {
    const column = get().clickedColumnKey;
    const sortedItems = sortItems(get().rows, column, desc);
    set(state => {
        (state.rows as T[]) = sortedItems;
    });
}