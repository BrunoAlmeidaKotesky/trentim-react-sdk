import type { DataListStore, DataListState } from '@models/interfaces/DataListStore';

export type GetStore<T> = () => DataListStore<T>;
export type StateKey<T> = Array<keyof DataListState<T>>;
export type StoreSelectorCb<
    T, K extends StateKey<T>
    > = (tuple:
        [curr: Pick<DataListState<T>, K[number]>, prev: Pick<DataListState<T>, K[number]>]
    ) => void;

type StoreListener<T, K extends StateKey<T>> = {
    stateKeys: K,
    cb: StoreSelectorCb<T, K>,
    equalityFn?: (cur: any, prev: any) => boolean
};

/**
 * A utility function that allows for multiple listeners to be registered at once.
 *
 * @param getStore A function that returns the DataListStore.
 * @param listeners An array of listener objects. 
 * Each object must include a `stateKeys` which represents the state properties to listen to,
 * and a callback function `cb` that is called when the state properties change.
 * 
 * You can for example, call this function on your plugin `initialize` method to register all the listeners, they will keep the
 * sync with the store state.
 *
 * The callback function receives a tuple as parameter: 
 * - `curr` is the current value of the state properties, 
 * - `prev` is the previous value of the state properties.
 *
 * @example
 * import {subscribe} from 'trentim-react-sdk/plugins/DataList';
 * class MyPlugin<T> implements DataListPlugin<T> {
 *
 *  initialize(getStore: GetStore<T>, props: IDataListProps<T>) {
 *      subscribe(getStore, [
 *          {
 *              stateKeys: ['clickedColumnKey', 'anotherStateProperty'],
 *              cb: ([currentState, prevState]) => {
 *                  // logic here
 *              }
 *          }
 *      ]);
 *  }
 *
 * @note
 *Essentially, this function is a shorthand for multiple `getStore().subscribe()` calls, each subscription would look something like:
 * @example
 * getStore().subscribe(
 *   (state) => ({aStateProperty: state.aStateProperty, anotherStateProperty: state.anotherStateProperty}),
 *   (curr, prev) => listener.cb([curr, prev]),
 *   { fireImmediately: true }
 * );
*/
export function subscribe<T, K extends StateKey<T>>(getStore: GetStore<T>, listeners: StoreListener<T, K>[]) {
    for (const listener of listeners) {
        const selectedStateKeys = listener.stateKeys.reduce((state, key) => {
            state[key] = getStore()[key];
            return state;
        }, {});
        getStore().subscribe(
            (_state) => selectedStateKeys,
            //@ts-ignore
            (curr, prev) => listener.cb([curr, prev]),
            { fireImmediately: true, equalityFn: listener.equalityFn || Object.is }
        );
    }
}