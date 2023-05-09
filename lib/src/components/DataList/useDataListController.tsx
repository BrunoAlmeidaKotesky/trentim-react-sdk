
import { useEffect, useCallback } from 'react';
import type { IDataListProps, TColumn } from '@models/interfaces/IDataList';
import type { IListProps } from '@fluentui/react/lib/List';
import { useDataListContext } from './store';
import { DataListStore } from '@models/interfaces/DataListStore';
import { mapColumns } from './utilities';

export function useDataListController<T>(props: IDataListProps<T>) {
    const store = useDataListContext<T, DataListStore<T>>(s => s);
    const { 
        plugins, initializePlugin, setPlugins, setContextMenu,
        headerMenuItems, onColumnClick, contextMenu 
    } = store;

    const columnMapper = useCallback(mapColumns, []);
    /**Change the state of the rows and columns once they are on the properties.*/
    useEffect(() => {
        if (props.rows && props.rows.length > 0) {
          store.setRows(props.rows);
          store.setTempRows('allRows', props.rows);
        }
        if (props.columns && props.columns.length > 0) {
          const columns = props?.columns;
          const convertedColumns = columns.map(columnMapper);
          store.setColumns(convertedColumns as TColumn<T>[]);
        }
      }, [props.rows, props.columns]);

    /**Set the state of plugins when the props.plugins changes. */
    useEffect(() => { setPlugins(props.plugins) }, [props.plugins, setPlugins]);

    //Initializes the plugins once they are set.
    useEffect(() => {
        plugins.forEach((plugin) => {
            initializePlugin(plugin, props);
        });
    }, [plugins, initializePlugin]);

    /**If consumer provided the props.onItemClick use it, otherwise do nothing. */
    const onItemClick = (item: T) => !!props?.onItemClick && props?.onItemClick(item);
    /**The sorting logic of the columns. */
    
    /**If the plugins had implemented the render method, it will render them. */
    const renderPlugins = () => {
        return store.plugins.map((plugin) => {
            if (plugin.render)
                return <div key={plugin.name}>{plugin.render(store, props)}</div>
            return null;
        });
    };
    /** If the user provided a maxHeight, it will use the onShouldVirtualize property of the DetailsList */
    const verifyVirtualization = useCallback((): IListProps['onShouldVirtualize'] => {
        if (props?.maxHeight || props?.detailsListProps?.styles?.['root']?.['maxHeight'])
            return props?.onShouldVirtualize ?? (() => true);
        return () => false;
    }, [props?.maxHeight, props?.detailsListProps]);

    return {
        state: {
            columns: store.columns,
            rows: store.rows,
            groups: store?.groups,
            contextMenu, headerMenuItems
        },
        handlers: { onItemClick, verifyVirtualization, renderPlugins, onColumnClick, setContextMenu }
    }
}