import type { ColumnKey } from '@models/types/Common';
import type { DataListPlugin } from "@models/interfaces/DataListStore";
//import type { ColumnKey } from "@models/types/Common";
import type { DataListStore } from "@models/interfaces/DataListStore";
import { getDeepValue } from '@helpers/index';
import { ComboBox, IComboBoxOption } from '@fluentui/react/lib/ComboBox';

type FilterPluginConfig<T> = {
    /**Text to display when clicking on the column header menu */
    filterText?: string;
    /**Fields that won't be filtered */
    excludeColumns?: ColumnKey<T>[];
};
type FilterMap<T> = Map<ColumnKey<T>, {values: unknown[], order: number, name: string}>;
type FilterAreaProps<T> = {store: DataListStore<T>, filterMap: FilterMap<T>};

function FilterArea<T>(props: FilterAreaProps<T>): JSX.Element {
    const currentFilteringKey = props.store.clickedColumnKey;
    if(!props.filterMap.has(currentFilteringKey)) return null;
    const options = props.filterMap.get(currentFilteringKey)?.values?.map<IComboBoxOption>(v => ({
        key: `${currentFilteringKey} - ${v?.toString()}`,
        text: v?.toString(),
    })) || [];

    return (
        <div>
            <ComboBox options={options} autoComplete="on" />
        </div>
    );
}

export class FilterPlugin<T> implements DataListPlugin<T> {
    public name: string = 'DataListFilterPlugin';
    public version: string = '1.0.0';
    private currentFilter: FilterMap<T> = new Map([]);
    private unsubscribe: () => void = null;

    constructor(private config?: FilterPluginConfig<T>) {}

    public initialize(getStore: () => DataListStore<T>) {
        const store = getStore();
        store.setTempRows('filtered', []);
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
        this.unsubscribe = getStore().subscribe(
            (state) => state.clickedColumnKey,
            (clickedColumnKey, prevClickedColumnKey) => {
                console.log('O clickedColumnKey mudou de', prevClickedColumnKey, 'para', clickedColumnKey);
            },
            { fireImmediately: true }
        );
    }

    #onClickFilterOpt(store: DataListStore<T>): void {
        const columnKey = store.clickedColumnKey;
        const column = store.columns.find(c => c.key === columnKey);
        if(!column) return;
        const order = this.currentFilter.has(columnKey) ? this.currentFilter.get(columnKey)!.order : 0;
        const valuesToShow = store.rows
            .filter(r => {
                const value = getDeepValue(r, columnKey as any);
                if(value === undefined || value === null) return false;
                return true;
            })
            .map(r => getDeepValue(r, columnKey  as any));
        this.currentFilter.set(columnKey, {values: valuesToShow, order, name: column.name});
        console.log(this.currentFilter);
    }

    public render = (getStore: () => DataListStore<T>) => <FilterArea<T> store={getStore()} filterMap={this.currentFilter}/>
}