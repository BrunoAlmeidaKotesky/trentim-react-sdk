import type { DataListPlugin } from "@models/interfaces/DataListStore";
import type { DataListStore } from "@models/interfaces/DataListStore";
import type { FilterMap, FilterPluginConfig, AddOrRemoveConfig } from './types';
import { getDeepValue } from '@helpers/index';
import { FilterBox } from './FilterBox';

export class FilterPlugin<T> implements DataListPlugin<T> {
    public name: string = 'DataListFilterPlugin';
    public version: string = '1.0.0';
    private currentFilter: FilterMap<T> = new Map([]);
    constructor(private config?: FilterPluginConfig<T>) {}
 
    public initialize(getStore: () => DataListStore<T>) {
        const store = getStore();
        console.log("DataListFilterPlugin initialized");
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
        store.setUnmountedPlugins('DataListFilterPlugin', false);
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
        <FilterBox<T> getStore={getStore} filterMap={this.currentFilter} />
    )

    public unmount = (getStore: () => DataListStore<T>) => {
        getStore().setUnmountedPlugins('DataListFilterPlugin', true);
        document.querySelectorAll('.filterPluginContainer')?.forEach(e => e?.remove());
    }
}