import type { Leaves } from "@models/types/UtilityTypes";

export type FilterComponent = 'Dropdown' | 'SearchBox' | 'DateSlider' | 'PeoplePicker';
export type KeyAndName = `${string};${string}`;
export type CancelActivation = 'cancel' | 'dismiss' | 'not-selected';

/**This interface is used to represent objects that can be used to convert ISO string formats to a locale string from a date. */
export interface IDateConversionOptions {
    /**If se to `true`, it will automatically convert the string ISO dates to your locale date. */
    shouldConvertToLocaleString?: boolean;
    locales?: string | string[];
    /**Use this if you want to overwrite the behavior of the default `Intl.DateTimeFormatOptions` applied. */
    formatOptions?: Intl.DateTimeFormatOptions;
}

export type DeepKey4<T> = Leaves<T, 4>;
export type ColumnKey<T> = keyof T | DeepKey4<T>;

export type TooltipDirectionValues =  "bottom_center" | "bottom_left" | "bottom_right" | "right" | "left" | "top_left" | "top_right" | "top_center"
