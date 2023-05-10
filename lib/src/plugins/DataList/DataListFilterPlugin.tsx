import type { ColumnKey } from '@models/types/Common';
import type { DataListPlugin } from "@models/interfaces/DataListStore";
//import type { ColumnKey } from "@models/types/Common";
import type { DataListStore } from "@models/interfaces/DataListStore";
import { getDeepValue } from '@helpers/index';
import { ComboBox, IComboBoxOption } from '@fluentui/react/lib/ComboBox';
import {createPortal} from 'react-dom';
import type { TColumn } from '@models/interfaces/IDataList';

type FilterPluginConfig<T> = {
    /**Text to display when clicking on the column header menu */
    filterText?: string;
    /**Fields that won't be filtered */
    excludeColumns?: ColumnKey<T>[];
    /**@default `white` */
};
type FilterMap<T> = Map<ColumnKey<T>, {values: unknown[], order: number, column: TColumn<T>;}>;
type FilterAreaProps<T> = {
    store: DataListStore<T>, 
    filterMap: FilterMap<T>, 
    /**@default `white` */
}
type AddOrRemoveConfig<T> = Pick<DataListStore<T>, 'clickedColumnKey' | 'headerMenuItems' | 'getStore' | 'setHeaderMenuItems'>;

function FilterArea<T>(props: FilterAreaProps<T>): JSX.Element {
    const currentFilteringKey = props.store.clickedColumnKey;
    if(!props.filterMap.has(currentFilteringKey)) return null;
    const currentMap = props.filterMap.get(currentFilteringKey);
    const options = currentMap?.values?.map<IComboBoxOption>(v => ({
        key: `${currentFilteringKey} - ${v?.toString()}`,
        text: v?.toString(),
        useAriaLabelAsText: true,
        ariaLabel: v?.toString(),
    })) || [];
    
    const TARGET_SELECTOR = `div[data-item-key="${currentFilteringKey}"]` as const;
    const targetDom = document.querySelector(TARGET_SELECTOR);
    if(!targetDom) {
        console.error(`FilterPlugin: Could not find target element with selector ${TARGET_SELECTOR}`);
        return null;
    }
    const width = targetDom?.clientWidth || currentMap.column?.minWidth;
    const sibling = targetDom?.appendChild(document.createElement('div'));

    return createPortal(<div style={{width: '100%', top: 40, zIndex: 999, position: 'absolute' }}>
        <div style={{ width, placeContent: 'center', display: 'grid' }} id={currentFilteringKey as string}>
            <ComboBox 
                multiSelect
                styles={{
                    root: {maxWidth: width},
                    callout: {minWidth: 100, maxHeight: '320px!important', scroll: 'auto'}
                }}
                //onRenderItem={/**Implement it later */}
                options={options} autoComplete="on" />
        </div>
        </div>,
        sibling
    );
}


export class FilterPlugin<T> implements DataListPlugin<T, 'FilterPlugin'> {
    public name: string = 'DataListFilterPlugin';
    public version: string = '1.0.0';
    private currentFilter: FilterMap<T> = new Map([]);
    constructor(private config?: FilterPluginConfig<T>) {}

    public initialize(getStore: () => DataListStore<T, 'FilterPlugin'>) {
        const store = getStore();
        console.log("FilterPlugin initialized");
        store.setHeaderMenuItems(items => {
            return [...items, 
                {
                    key: 'filter',
                    text: this?.config?.filterText || 'Filter By',
                    onClick: () => this.#onClickFilterOpt(getStore())
                }
            ];
        });
        getStore().subscribe(
            (state) => state.clickedColumnKey,
            (clickedColumnKey, _prev) => {
                const store = getStore();
                this.#addOrRemoveFilterItem({
                    clickedColumnKey,
                    getStore,
                    headerMenuItems: store.headerMenuItems,
                    setHeaderMenuItems: store.setHeaderMenuItems,
                });
            },
            { fireImmediately: true }
        );
        //type Test = {a: string};
        //let b = store.getPluginDataMapValue<Test>('FilterPlugin')('a')
    }

    #onClickFilterOpt(store: DataListStore<T>): void {
        const columnKey = store.clickedColumnKey;
        const column = store.columns.find(c => c.key === columnKey);
        if(!column) return;
        const order = this.currentFilter.has(columnKey) ? this.currentFilter.get(columnKey)!.order : 0;
        const valuesToShow = [...new Set(
            store.rows
            .filter(r => {
                const value = getDeepValue(r, columnKey as any);
                if(value === undefined || value === null) return false;
                return true;
            })
            .map(r => getDeepValue(r, columnKey  as any))
        )];
        this.currentFilter.set(columnKey, {values: valuesToShow, order, column});
        console.log(this.currentFilter);
    }

    #addOrRemoveFilterItem({
        clickedColumnKey, getStore, 
        headerMenuItems, setHeaderMenuItems
    }: AddOrRemoveConfig<T>) {
        if (!clickedColumnKey) return;

        // Encontra o item "filter" em headerMenuItems
        const filterItemIndex = headerMenuItems.findIndex(item => item.key === 'filter');

        // Cria uma nova cópia de headerMenuItems para evitar a mutação direta do estado
        let newHeaderMenuItems = [...headerMenuItems];

        // Se clickedColumnKey é um dos excludeColumns, remova o item "filter" se ele existir
        if (this?.config?.excludeColumns?.includes(clickedColumnKey)) {
            if (filterItemIndex !== -1) {
                // Remova o item "filter"
                newHeaderMenuItems = newHeaderMenuItems.filter((_, index) => index !== filterItemIndex);
            }
        } else {
            // Se clickedColumnKey não é um dos excludeColumns, adicione o item "filter" se ele não existir
            if (filterItemIndex === -1) {
                // Adicione o item "filter"
                newHeaderMenuItems.push({
                    key: 'filter',
                    text: this?.config?.filterText || 'Filter By',
                    onClick: () => this.#onClickFilterOpt(getStore())
                });
            }
        }

        // No final, podemos querer atualizar o estado da loja com o novo headerMenuItems
        setHeaderMenuItems(() => newHeaderMenuItems);
    }

    public render = (getStore: () => DataListStore<T>) => (
        <FilterArea<T> store={getStore()} filterMap={this.currentFilter}/>
    )
}