
import { getDeepValue } from '@helpers/objectUtils';
import { useEffect, useCallback } from 'react';
import { createNewSortInstance } from 'fast-sort';
import type { IDataListProps, IRow, TColumn, BaseType } from '@models/interfaces/IDataList';
import { convertIsoToLocaleString } from '@helpers/general';
import type { IListProps } from '@fluentui/react/lib/List';
import { useDataListContext } from './store';

/** TO-DO: Use `useReducer` with context for better code splitting. */
export function useDataListController<T extends BaseType>(props: IDataListProps<T>) {
    const store = useDataListContext((s) => s);
    const { plugins, initializePlugin, setPlugins } = store;
    const naturalSort = useCallback(createNewSortInstance({
        comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
    }), []);

    useEffect(() => {
        if (props.rows && props.rows.length > 0) {
          store.setRows(props.rows);
          store.setTempRows('allRows', props.rows);
        }
        if (props.columns && props.columns.length > 0) {
          const columns = props?.columns;
          const convertedColumns = columns.map((c) => {
            let onRender;
            if (c?.key?.includes('.')) {
              onRender = (item) => {
                const fieldValue: string = getDeepValue(item, c?.key);
                return <span>{fieldValue}</span>;
              };
            } else if (c?.dateConversionOptions?.shouldConvertToLocaleString) {
              onRender = (item) => {
                const fieldValue = convertIsoToLocaleString(
                  item[c?.key],
                  c?.dateConversionOptions?.locales,
                  c?.dateConversionOptions?.formatOptions
                );
                return <span>{fieldValue}</span>;
              };
            }
      
            if (onRender) {
              return { ...c, onRender };
            }
      
            return c;
          });
          store.setColumns(convertedColumns as TColumn<BaseType>[]);
        }
      }, [props.rows, props.columns]);

    useEffect(() => {
        setPlugins(props.plugins);
    }, [props.plugins, setPlugins]);

    // Inicialize os plugins apenas uma vez durante a montagem do componente
    useEffect(() => {
        plugins.forEach((plugin) => {
            initializePlugin(plugin);
        });
    }, [plugins, initializePlugin]);

    const onItemClick = (item: IRow<T>) => !!props?.onItemClick && props?.onItemClick(item);
    const onColumnClick = (currentRows: IRow<T>[]) => (_: any, column: TColumn<T>): void => {
        if (!column) return;
        let isSortedDescending = column?.isSortedDescending;
        if (column?.isSorted)
            isSortedDescending = !isSortedDescending;
        let sortedItems = currentRows;
        const sortType: 'asc' | 'desc' = isSortedDescending ? 'desc' : 'asc';
        const columnKeys = column?.key;
        if (sortType === 'asc')
            sortedItems = naturalSort(sortedItems).by({
                asc: u => getDeepValue(u, columnKeys as any)?.toString(),
            });
        else if (sortType === 'desc')
            sortedItems = naturalSort(sortedItems).by({
                desc: u => getDeepValue(u, columnKeys as any)?.toString(),
            });
        store.setRows(sortedItems);
        store.setColumns(c => c.map(col => {
            col.isSorted = col.key === column?.key;
            if (col?.isSorted)
                col.isSortedDescending = isSortedDescending;
            return col;
        }));
    }

    useEffect(() => {
        store.setColumns(columns => [...columns.map(c => ({ ...c, onColumnClick: onColumnClick(store.rows as IRow<T>[]) }))]);
    }, [store.rows]);

    const renderPlugins = () => {
        return store.plugins.map((plugin) => {
            if (plugin.render)
                return <div key={plugin.name}>{plugin.render(store)}</div>
            return null;
        });
    };

    const verifyVirtualization = useCallback((): IListProps['onShouldVirtualize'] => {
        if (props?.maxHeight || props?.detailsListProps?.styles?.['root']?.['maxHeight'])
            return props?.onShouldVirtualize ?? (() => true);
        return () => false;
    }, [props?.maxHeight, props?.detailsListProps]);

    return {
        state: {
            columns: store.columns,
            rows: store.rows,
            groups: store?.groups
        },
        handlers: { onItemClick, verifyVirtualization, renderPlugins }
    }
}