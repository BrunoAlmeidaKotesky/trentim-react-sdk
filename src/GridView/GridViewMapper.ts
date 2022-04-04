import { FilterOption, IAvailableFilters, SelectedItemsMap } from "../models/interfaces/IPanelFilter";
import {Utils} from '../helpers/Utils';
import { IRow, TColumn } from "../models/interfaces/IGridView";

/**Internal class to be used when using map data operations on the GridView component context as a whole. */
export class GridViewMapper {

    /**
     * Creates a new map collection with the first level keys being the real keys, and the values being the maps with selected maps (with key and values) 
     * @example 
     * ```ts
     * const selectedItemsMap = new Map([['0_User.Title', data], ['1_User.Title', data]]);
     * const groupedMap = GridViewMapper.groupMaps(selectedItemsMap);
     * //It'll be: key: 'User.Title', value: [Map([['0_User.Title', data], ['1_User.Title', data]])]
     * ```
     **/
    static groupMaps(selectedItems: SelectedItemsMap): Map<string, SelectedItemsMap> {
        const mapsByKeyKind = new Map<string, SelectedItemsMap>();
        selectedItems.forEach((_, key, map) => {
            let keyName = key.split('_')[1];
            if(!keyName && !key.includes('_'))
                keyName = key;
            const doesNotHaveKey = !mapsByKeyKind.has(keyName);
            const sameMapsList = [...map].filter(d => d[0] === key);
            if(doesNotHaveKey) 
                mapsByKeyKind.set(keyName, new Map(sameMapsList));
            else {
                const thisKindMap = mapsByKeyKind.get(keyName);
                sameMapsList.forEach(d => thisKindMap?.set(d[0], d[1]));
            } 
        });
        return mapsByKeyKind;
    }

    static filterFromColumns = (hiddenKeys: string[], columns: TColumn<any>[]) => columns.filter(c => (!hiddenKeys?.includes(c?.key)));

    /**Generate the components of each available column and it's unique values */
    static buildFilters(allRows: IRow[], columns: TColumn<any>[], hiddenFields: string[]): IAvailableFilters[] {
        const filters: IAvailableFilters[] = [];
        const columnsToFilter = GridViewMapper.filterFromColumns(hiddenFields, columns);
        for (let index = 0; index < columnsToFilter.length; index++) {
            const col = columnsToFilter[index];
            const renderAs = col?.renderFilterAs ?? 'Dropdown';
            const keys = col?.key?.split('.') ?? col.fieldName?.split('.'); 
            const options: FilterOption[] = allRows?.filter(d => d)?.map((data, idx) => {
                let stringObject = Utils.getNestedObject(data, keys)?.toString();
                if (col?.dateConversionOptions?.shouldConvertToLocaleString)
                    stringObject = Utils.convertIsoToLocaleString(stringObject, col?.dateConversionOptions?.locales, col?.dateConversionOptions?.formatOptions);
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
                name: col?.name,
                renderAs
            });
        }
        return filters;
    }
}