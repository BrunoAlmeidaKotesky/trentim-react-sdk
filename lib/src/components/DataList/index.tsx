import { useDataListController } from './useDataListController';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import type { IDataListProps } from '@models/interfaces/IDataList';
import { DataListCtx } from './Context';
import { useRef } from 'react'
import { createUseDataListStore } from './store';
import type { DataListState, DataListStore } from '@models/interfaces/DataListStore';

function DataListInner<T>(props: IDataListProps<T>) {
    const { state, handlers } = useDataListController(props);
    const { rows, columns, groups } = state;
    const { onItemClick, verifyVirtualization, renderPlugins } = handlers;

    return (
        <div style={props?.styles?.root ?? {}}>
            <div className="data-list-plugins-area">
            {renderPlugins()}
            </div>
            <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0, overflowY: 'scroll', height: props?.maxHeight, ...props?.styles?.contentContainer }} id="DataList-root">
                {!!props?.onRenderCustomRow ? rows?.map(i => props?.onRenderCustomRow(i)) :
                    <DetailsList
                        {...props?.detailsListProps}
                        onRenderItemColumn={props?.onRenderItemColumn}
                        onRenderRow={(p, defaultRender) =>
                            <div onClick={() => onItemClick(p?.item)}>
                                {defaultRender({ ...p, styles: { root: { cursor: props?.onItemClick ? 'pointer' : 'default' } } })}
                            </div>}
                        items={rows} columns={columns}
                        styles={props?.detailsListProps?.styles}
                        groupProps={{
                            isAllGroupsCollapsed: true,
                            collapseAllVisibility: CollapseAllVisibility.visible,
                            onRenderHeader: (props, defaultRender) => {
                                if (!props.group!.name)
                                    return <></>;
                                return defaultRender(props);
                            },
                            showEmptyGroups: false
                        }}
                        groups={groups.length === 0 ? undefined : groups}
                        onShouldVirtualize={verifyVirtualization()}
                        layoutMode={props?.detailsListProps?.layoutMode ?? DetailsListLayoutMode.justified} isHeaderVisible={true}
                        onRenderDetailsHeader={props?.detailsListProps?.onRenderDetailsHeader}
                        checkboxVisibility={props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden}
                    />
                }
            </div>
        </div>);
}

export function DataList<T>(props: IDataListProps<T>){
    return (
        <DataListProvider 
            rows={props?.rows} plugins={props?.plugins} tempRows={new Map()}
            //@ts-ignore
            columns={props?.columns} >
            <DataListInner {...props}/>
        </DataListProvider>
    )
}

type DataListProviderProps<T> = React.PropsWithChildren<DataListState<T>>;
function DataListProvider<T>({ children, ...props }: DataListProviderProps<T>) {
  const storeRef = useRef<DataListStore<T>>();
  if (!storeRef.current) {
    //@ts-ignore
    storeRef.current = createUseDataListStore(props);
  }
  return (
    <DataListCtx.Provider value={storeRef.current}>
      {children}
    </DataListCtx.Provider>
  )
}