import { getDeepValue } from '@helpers/objectUtils';
import type { IRow, TColumn } from '@models/interfaces/IDataList';
import type { ApplyFilter, SearchItem } from '@models/types/Common';
import type { FilterOption, IAvailableFilters, SelectedItemsMap } from '@models/interfaces/IPanelFilter';
import { convertIsoToLocaleString } from '@helpers/general';

//General algorithm for dealing with the filters in the Panel and SearchBox
export class DataListFilterPlugin {

    static onApplyFilter: ApplyFilter<IRow<any>> = ({ allRows, setActualRows, setIsFilterPanel, applyCustomFilter, onItemsFiltered, onFilterPanelCancel }) => (selectedItems) => {
        //If the user provided a custom filter algorithm, use it instead of the original, providing everything that are necessary to work properly.
        if (!!applyCustomFilter) {
            const groupedMaps = DataListFilterPlugin.groupMaps(selectedItems);
            return applyCustomFilter({ allRows, setActualRows, setIsFilterPanel, selectedItems, groupedMaps });
        }

        if (selectedItems.size === 0) {
            setActualRows(allRows);
            if (!!onItemsFiltered)
                onItemsFiltered(allRows);
            if (!!onFilterPanelCancel)
                onFilterPanelCancel('not-selected');
            return setIsFilterPanel(false);
        }
        const groupedMaps = DataListFilterPlugin.groupMaps(selectedItems);
        let filteredRows: IRow[] = [];
        for (const [mapKey, map] of groupedMaps.entries()) {
            const filterFrom = filteredRows?.length > 0 ? filteredRows : allRows;
            map?.forEach(value => {
                const isDate = !!value?.data?.from && !!value?.data?.to;
                const ORrowsFromThisKey = filterFrom.filter(r => {
                    if (isDate) {
                        const from: Date = value?.data?.from;
                        const to: Date = value?.data?.to;
                        const rDate: Date = new Date(getDeepValue(r, mapKey));
                        return rDate >= from && rDate <= to;
                    }
                    return getDeepValue(r, mapKey) === value?.text;
                });
                if (ORrowsFromThisKey.length > 0 && !filteredRows?.map(r => r?.Id)?.includes(value?.data?.Id))
                    filteredRows.push(...ORrowsFromThisKey);
            });
        }

        filteredRows = filteredRows.filter((obj, pos, arr) => arr.map(mapObj => mapObj?.Id).indexOf(obj?.Id) === pos);
        for (const [mapKey, map] of groupedMaps.entries()) {
            const allMapValues = [...map.values()];
            const newFilteredItems = filteredRows.filter(r => {
                const rowValue = getDeepValue(r, mapKey);
                return allMapValues.some(v => {
                    if (v?.data?.from && v?.data?.to) {
                        const from: Date = v?.data?.from;
                        const to: Date = v?.data?.to;
                        const rDate: Date = new Date(rowValue as string);
                        return rDate >= from && rDate <= to;
                    }
                    return v?.text === rowValue
                });
            });
            if (newFilteredItems?.length > 0)
                filteredRows = newFilteredItems;
        }

        filteredRows = filteredRows.filter((obj, pos, arr) => arr.map(mapObj => mapObj?.Id).indexOf(obj?.Id) === pos);
        setActualRows(filteredRows)
        setIsFilterPanel(false);
        if (!!onItemsFiltered)
            onItemsFiltered(filteredRows);
    }

    /**Generate the components of each available column and it's unique values */
    static buildFilters(allRows: IRow[], columns: TColumn<any>[], hiddenFields: string[]): IAvailableFilters[] {
        const filters: IAvailableFilters[] = [];
        const columnsToFilter = DataListFilterPlugin.filterFromColumns(hiddenFields, columns);
        for (let index = 0; index < columnsToFilter.length; index++) {
            const col = columnsToFilter[index];
            const keys = col?.key;
            const options: FilterOption[] = allRows?.filter(d => d)?.map((data, idx) => {
                let stringObject = getDeepValue(data, keys)?.toString();
                if (col?.dateConversionOptions?.shouldConvertToLocaleString)
                    stringObject = convertIsoToLocaleString(stringObject, col?.dateConversionOptions?.locales, col?.dateConversionOptions?.formatOptions);
                return {
                    key: idx + "_" + col?.key,
                    text: stringObject,
                    data
                };
            });
            const uniqueOptions = options?.filter((obj, pos, arr) => arr.map(mapObj => mapObj?.text).indexOf(obj?.text) === pos);

            filters.push({
                key: col?.key,
                options: uniqueOptions,
                enableMultiple: true,
                name: col?.name
            });
        }
        return filters;
    }

    static filterFromColumns = (hiddenKeys: string[], columns: TColumn<any>[]) => columns.filter(c => (!hiddenKeys?.includes(c?.key)));

    static onSearchItemChange: SearchItem = ({ allRows, searchBoxItems, setActualRows, onSearchBoxItemsFiltered }) => (searchText, keys) => {
        const allFilteredRows: IRow[] = [];
        if (!searchText) {
            setActualRows(allRows);
            return [];
        }
        for (const key of keys) {
            const filterFrom = allFilteredRows?.length > 0 ? allFilteredRows : allRows;
            const filteredValues = filterFrom.filter(item => {
                const foundValues: string = getDeepValue(item, (key as string))?.toString();
                return foundValues?.toLowerCase()?.startsWith(searchText?.toLowerCase());
            });
            allFilteredRows.push(...filteredValues);
        }
        searchBoxItems.current = allFilteredRows;
        if (!!onSearchBoxItemsFiltered)
            onSearchBoxItemsFiltered(allFilteredRows);
        return allFilteredRows;
    }


    /**
     * Creates a new map collection with the first level keys being the real keys, and the values being the maps with selected maps (with key and values) 
     * @example 
     * ```ts
     * const selectedItemsMap = new Map([['0_User.Title', data], ['1_User.Title', data]]);
     * const groupedMap = DataListFilterPlugin.groupMaps(selectedItemsMap);
     * //It'll be: key: 'User.Title', value: [Map([['0_User.Title', data], ['1_User.Title', data]])]
     * ```
     **/
    static groupMaps(selectedItems: SelectedItemsMap): Map<string, SelectedItemsMap> {
        const mapsByKeyKind = new Map<string, SelectedItemsMap>();
        selectedItems.forEach((_, key, map) => {
            let keyName = key.split('_')[1];
            if (!keyName && !key.includes('_'))
                keyName = key;
            const doesNotHaveKey = !mapsByKeyKind.has(keyName);
            const sameMapsList = [...map].filter(d => d[0] === key);
            if (doesNotHaveKey)
                mapsByKeyKind.set(keyName, new Map(sameMapsList));
            else {
                const thisKindMap = mapsByKeyKind.get(keyName);
                sameMapsList.forEach(d => thisKindMap?.set(d[0], d[1]));
            }
        });
        return mapsByKeyKind;
    }

    static mapFilterOptions = (options: FilterOption[]) => {
        return options
            .filter(i => (i?.text !== null && i?.text !== undefined))
            .map<FilterOption>(({ key, text, data }) => ({
                key,
                text,
                data
            }));
    }
}