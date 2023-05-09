import { convertIsoToLocaleString, getDeepValue} from "@helpers/index";
import { createNewSortInstance } from 'fast-sort';
import type { TColumn } from "@models/interfaces/IDataList";
import type { ReactNode, ComponentType } from "react";
import type { ColumnKey } from "@models/types/Common";

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

/**
 * Maps columns to be used in the DataList component, depending on the transformations provided (if any).
 * 
 * @param c Column to map
 * @returns Mapped column
 */
export function mapColumns<T>(c: TColumn<T>): TColumn<T> {
    let onRender: (item?: T, index?: number, column?: TColumn<T>) => ReactNode;
    const transformations = c?.transformations;
    if (!transformations) {
        onRender = (item) => renderValue(item, c, (fieldValue) => <span>{fieldValue}</span>);
        return {...c, onRender, fieldName: c?.key };
    }
    switch (transformations?.renderAs) {
        case 'date': {
            onRender = (item) => {
                const valueToRender = renderValue(item, c, (fieldValue: string) => {
                    return convertIsoToLocaleString(
                        fieldValue,
                        transformations?.locales,
                        transformations?.formatOptions
                    );
                }, transformations?.wrapper);
                return valueToRender;
            };
            break;
        }
        case 'boolean': {
            onRender = (item) => {
                const valueToRender = renderValue(item, c, (fieldValue: boolean | null) => {
                    let valueToRender: string = '';
                    if (typeof fieldValue === 'boolean') {
                        valueToRender = fieldValue ? transformations?.trueText : transformations?.falseText;
                    } else {
                        valueToRender = transformations?.nullText;
                    }
                    return valueToRender;
                }, transformations?.wrapper);
                return valueToRender;
            };
            break;
        }
        case 'number': {
            onRender = (item) => {
                const valueToRender = renderValue(item, c, (fieldValue: string) => {
                    return Number(fieldValue).toLocaleString(
                        transformations?.locales,
                        transformations?.formatOptions
                    );
                }, transformations?.wrapper);
                return valueToRender;
            };
            break;
        }
        case 'custom': {
            onRender = (item) => renderValue(item, c, (fieldValue) => {
                const valueToRender = transformations?.mapFn(fieldValue);
                return valueToRender;
            });
            break;
        }
        default: {
            throw new Error('[TRS] - Unknown renderAs transformation for the column with key: "' + c?.key + '"');
        }
    }
    return {...c, onRender, fieldName: c?.key}
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