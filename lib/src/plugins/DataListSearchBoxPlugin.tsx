import { ITextFieldProps, TextField } from "@fluentui/react/lib/TextField";
import type { DataListPlugin } from "@models/interfaces/DataListStore";
import type { ColumnKey } from "@models/types/Common";
import type { DataListStore } from "@models/interfaces/DataListStore";
import { getDeepValue } from "@helpers/objectUtils";
import { useMemo, CSSProperties } from "react";

export type SearchBoxConfig<T> = {
    keysToSearch: Array<ColumnKey<T>>
    /**@default 'Search' */
    placeholder?: string;
    /**@default {marginBottom: "10px", display: "flex", flexDirection: "row", justifyContent: "end", marginRight: "12px" } */
    containerStyles?: CSSProperties;
    textFieldStyles?: ITextFieldProps['styles'];
    /**@default {pointerEvents: "auto", cursor: "pointer", position: "static", padding: 8, backgroundColor: "rgb(0, 120, 222)"} */
    iconStyles?: CSSProperties;
}
type SearchBoxProps<T> = SearchBoxConfig<T> & { store: DataListStore<T> }

/**Componente caso o plugin tenha alguma lógica que vá renderizar algo a mais dentro da área do DataList
 * Ex: Uma caixa de busca (filtro) em cima da listagem.
*/
function SearchBox<T>(props: SearchBoxProps<T>): JSX.Element {
    const containerStyles = useMemo<CSSProperties>(() => props?.containerStyles ?? {
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        marginRight: '12px'
    }, [props?.containerStyles]);

    const iconStyles = useMemo<CSSProperties>(() => props?.iconStyles ?? {
        pointerEvents: "auto", cursor: "pointer", position: 'static', padding: 8, backgroundColor: 'rgb(0, 120, 222)'
    }, [props?.iconStyles]);

    /**Works either when user clicks on the icon or press enter on the input 
     * 
     * If the current target value is empty, it will set the rows to the original rows, by using
     * the native allRows `allRows` that were saved before any plugin was applied.
     * 
     * If the current target value is not empty, it will filter the rows by the `keysToSearch` property from
     * the `DataList` component.
    */
    const onSearch = (store: DataListStore<T>, type: 'click' | 'keydown') => (e: any) => {
        if (type === 'keydown' && e.key !== 'Enter') return;
        const inputValue = (e?.currentTarget?.parentElement?.childNodes[0] as HTMLInputElement)?.value;
        if(!inputValue) {
            if(
                'DataListFilterPlugin' in store?.pluginStores && 
                (store?.pluginStores?.DataListFilterPlugin as any)?.getState()?.queue?.length > 0
            ) {
                return (store?.pluginStores?.DataListFilterPlugin as any)?.getState()?.resetState();
            }
            return store.setRows(store.allRows || store.rows);
        }
        const keysToSearch = props?.keysToSearch ?? [];
        store.setRows(
            store.rows.filter(row =>
              keysToSearch.some(key => {
                //@ts-ignore
                const fieldValue = getDeepValue(row, key);
                return fieldValue && fieldValue?.toString()?.includes(inputValue);
              })
            )
        );
    }

    return (
        <div style={containerStyles}>
            <TextField
                styles={props?.textFieldStyles} placeholder={props?.placeholder ?? 'Search'}
                onKeyDown={onSearch(props?.store, 'keydown')}
                iconProps={{ iconName: 'Search', style: iconStyles, onClick: onSearch(props?.store, 'click') }} />
        </div>
    )
}

export class SearchBoxPlugin<T> implements DataListPlugin<T> {
    public name = 'SearchBoxPlugin';
    public version = '1.0.0';
    constructor(private props?: SearchBoxConfig<T> | null) {}

    async initialize(_getStore: () => DataListStore<T>): Promise<void> {
        console.log("SearchBoxPlugin initialized");
        Promise.resolve();
    }

    render = (getStore: () => DataListStore<T>) => <SearchBox store={getStore()} {...this.props} />
}