import { ITextFieldProps, TextField } from "@fluentui/react/lib/TextField";
import { DataListPlugin } from "@plugins/index";
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

    const onSearch = (store: DataListStore<T>, type: 'click' | 'keydown') => (e: any) => {
        if (type === 'keydown' && e.key !== 'Enter') return;
        const inputValue = (e?.currentTarget?.parentElement?.childNodes[0] as HTMLInputElement)?.value;
        if(!inputValue) 
            return store.setRows(store.getTempRows('allRows') || store.rows);
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
                iconProps={{
                    iconName: 'Search',
                    style: iconStyles,
                    onClick: onSearch(props?.store, 'click')
                }} />
        </div>
    )
}

/**Implementação do plugin de fato pra ser instanciado e passado para o array de plugins do DataList */
export class SearchBoxPlugin<T> extends DataListPlugin<T> {
    constructor(private props?: SearchBoxConfig<T> | null) {
        super("SearchBoxPlugin", "SearchBoxPlugin", "1.0.0");
    }

    /**Método obrigatório para implementar, que faz alguma coisa (o que quiser) quando o plugin inicializa */
    initialize(store: DataListStore<T>): void {
        store.setTempRows('searchPlugin', []);
        console.log("SearchBoxPlugin initialized");
    }

    /**Método que faz algo ser renderizado dentro do DataList, nesse caso esse plugin renderiza o componente SearchBox */
    render = (store: DataListStore<T>) => <SearchBox store={store} {...this.props} />
}