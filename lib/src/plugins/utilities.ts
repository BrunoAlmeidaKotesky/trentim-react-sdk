import type { DataListStore, DataListState } from '@models/interfaces/DataListStore';

export type GetStore<T> = () => DataListStore<T>;
export type StateKey<T> = keyof DataListState<T>;
export type StoreSelectorCb<T, K extends StateKey<T>> = (tuple: [curr: DataListState<T>[K], prev: DataListState<T>[K]]) => void;

type StoreListener<T, K extends StateKey<T>> = {
    stateKey: K,
    cb: StoreSelectorCb<T, K>
};

/**
 * A utility function that allows for multiple listeners to be registered at once.
 *
 * @param getStore A function that returns the DataListStore.
 * @param listeners An array of listener objects. 
 * Each object must include a `stateKey` which represents the state property to listen to,
 * and a callback function `cb` that is called when the state property changes.
 * 
 * You can for example, call this function on your plugin `initialize` method to register all the listeners, they will keep the
 * sync with the store state.
 *
 * The callback function receives a tuple as parameter: 
 * - `curr` is the current value of the state property, 
 * - `prev` is the previous value of the state property.
 *
 * @example
 * import {listeners} from 'trentim-react-sdk/plugins/DataList';
 * class MyPlugin<T> implements DataListPlugin<T> {
 *
 *  initialize(getStore: GetStore<T>, props: IDataListProps<T>) {
 *      listeners(getStore, [
 *          {
 *              stateKey: 'clickedColumnKey',
 *              cb: ([currentKey, prevKey]) => {
 *                  // logic here
 *              }
 *          }
 *      ]);
 *  }
 *
 * @note
 *Essentially, this function is a shorthand for multiple `getStore().subscribe()` calls, please not that this approach,
 doesn't allow for multiple selectors to be registered for the same state property.
 * Each subscription would look something like:
 * @example
 * getStore().subscribe(
 *   (state) => state[listener.stateKey],
 *   (curr, prev) => listener.cb([curr, prev]),
 *   { fireImmediately: true }
 * );
}*/
export function listeners<T, K extends StateKey<T>>(getStore: GetStore<T>, listeners: StoreListener<T, K>[]) {
    for (const listener of listeners) {
        getStore().subscribe(
            (state) => state[listener.stateKey],
            (curr, prev) => listener.cb([curr, prev]),
            { fireImmediately: true }
        );
    }
}