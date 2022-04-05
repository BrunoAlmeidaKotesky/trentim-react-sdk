import { Utils } from '../../helpers/Utils';
import { GridViewMapper } from './GridViewMapper';
import type { IRow, TColumn } from '../../models/interfaces/IGridView';
import type { ApplyFilter, SearchItem } from '../../models/types/Common';
import type { FilterOption, IAvailableFilters } from '../../models/interfaces/IPanelFilter';

export class GridViewFilter {

    static onApplyFilter: ApplyFilter = ({allRows, setActualRows, setIsFilterPanel}) => (selectedItems) => {
        /**Se não tiver nada no map, limpa os filtros. */
        if(selectedItems.size === 0) {
            setActualRows(allRows);
            return setIsFilterPanel(false);
        }
        //Agrupa os maps selecionados em um outro grupo maior, dividindo por tipo. (key: tipo, value: map)
        const groupedMaps = GridViewMapper.groupMaps(selectedItems);
        let filteredRows: IRow[] = [];
        /**Para cada key principal dos maps selecionados */
        for(const [mapKey, map] of groupedMaps.entries()) {
            //Se tivesse algo memorizando o filtro poderia colocar aqui, porém no momento ele sempre vai começar filtrando todas colunas inicialmente (idx 0).
            const filterFrom = filteredRows?.length > 0 ? filteredRows : allRows;
            //Para cada map selecionado
            map?.forEach(value => {
                const isDate = !!value?.data?.from && !!value?.data?.to;
                const ORrowsFromThisKey = filterFrom.filter(r => {
                    //Verifica se os dados do map são do tipo data.
                    if(isDate) {
                        const from: Date = value?.data?.from;
                        const to: Date = value?.data?.to;
                        const rDate: Date = new Date(Utils.getNestedObject(r, mapKey.split('.')));
                        return rDate >= from && rDate <= to;
                    }
                    //Se não for data, verifica se o valor do map é igual ao valor do map do row comparando os valores pela key.
                    return Utils.getNestedObject(r, mapKey.split('.')) === value?.text;
                });
                //Se os rows filtrados do OR não estiverem no filteredRows, verificando pelo Id, adiciona. (Campos do tipo data não tem como comparar Id)
                if(ORrowsFromThisKey.length > 0 && !filteredRows?.map(r => r?.Id)?.includes(value?.data?.Id))
                    filteredRows.push(...ORrowsFromThisKey);
            });
        }
        //Garante que o array filtrada não vai ter nenhum item repetido.
        filteredRows = filteredRows.filter((obj, pos, arr) => arr.map(mapObj => mapObj?.Id).indexOf(obj?.Id) === pos);
        //Outra iteração dos maps selecionados, desta vez para verificar a condição de AND.
        for(const [mapKey, map] of groupedMaps.entries()) {
            //Pega todos os possíveis valores do map atual.
            const allMapValues = [...map.values()];
            //Cria um novo array temporário, filtrando dos arays já filtrados, verificando se no allMapValues está presente no filteredRows.
            const newFilteredItems = filteredRows.filter(r => {
                const rowValue = Utils.getNestedObject(r, mapKey.split('.'));
                //return allMapValues.map(v => v?.text).includes(rowValue as string); 
                return allMapValues.some(v => {
                    if(v?.data?.from && v?.data?.to) {
                        const from: Date = v?.data?.from;
                        const to: Date = v?.data?.to;
                        const rDate: Date = new Date(rowValue as string);
                        return rDate >= from && rDate <= to;
                    }
                    return v?.text === rowValue
                });
            });
            if(newFilteredItems?.length > 0)
                filteredRows = newFilteredItems;
        }
        //Garante novamente que o array filtrada não vai ter nenhum item repetido.
        filteredRows = filteredRows.filter((obj, pos, arr) => arr.map(mapObj => mapObj?.Id).indexOf(obj?.Id) === pos);
        setActualRows(filteredRows)
        setIsFilterPanel(false);
    }

    /**Generate the components of each available column and it's unique values */
    static buildFilters(allRows: IRow[], columns: TColumn<any>[], hiddenFields: string[]): IAvailableFilters[] {
        const filters: IAvailableFilters[] = [];
        const columnsToFilter = GridViewFilter.filterFromColumns(hiddenFields, columns);
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

    static filterFromColumns = (hiddenKeys: string[], columns: TColumn<any>[]) => columns.filter(c => (!hiddenKeys?.includes(c?.key)));

    static onSearchItem: SearchItem = ({allRows, setActualRows}) => (searchText, keys) => {
        const filteredRows: IRow[] = []; 
        if(!searchText)
            filteredRows.push(...allRows);
        else {
            filteredRows.push(...allRows?.filter(item => {
                const itemValues: string[] = [];
                for (const key of keys) {
                    const value = Utils.getNestedObject(item, (key as string)?.split('.'));
                    if(value !== undefined && value !== null)
                        itemValues.push(value.toString());
                }
                const containsText = itemValues.some(v => v?.toLowerCase().includes(searchText?.toLowerCase()));
                return containsText;
            }));
        } 
        setActualRows(filteredRows);
    }
}