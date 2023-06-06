import { useDataListController } from './useDataListController';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import type { IDataListProps } from '@models/interfaces/IDataList';
import { DataListCtx } from './Context';
import { useRef } from 'react'
import { createUseDataListStore } from './store';
import type { DataListState, DataListStore } from '@models/interfaces/DataListStore';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { useStyling } from './useStyling';

function DataListInner<Row, ColMetaData = any>(props: IDataListProps<Row, ColMetaData>) {
    useStyling({enableColBorder: props?.styles?.enableColBorder});
    const { state, handlers } = useDataListController(props);
    const { rows, columns, groups, contextMenu, headerMenuItems } = state;
    const { onItemClick, verifyVirtualization, renderPlugins, setContextMenu, onColumnClick } = handlers;

    return (
        <div style={props?.styles?.root ?? {}}>
            <div className="data-list-plugins-area">{renderPlugins()}</div>
            <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0, overflowY: 'auto', height: props?.maxHeight, ...props?.styles?.contentContainer }} id="DataList-root">
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
                    onRenderDetailsHeader={(props, defaultRender) => {
                        return (
                            <div id="dataListHeaderContainer">
                                {defaultRender({...props, onColumnClick})}
                                <div id={`headerPortalZone`}/>
                            </div>
                        )
                    }}
                    groups={groups.length === 0 ? undefined : groups}
                    onShouldVirtualize={verifyVirtualization()}
                    layoutMode={props?.layoutMode ?? DetailsListLayoutMode.fixedColumns} isHeaderVisible={true}
                    checkboxVisibility={props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden} />
                {contextMenu.visible && (
                    <ContextualMenu
                        items={headerMenuItems}
                        target={{ x: contextMenu.x, y: contextMenu.y }}
                        onDismiss={() => setContextMenu({ visible: false, x: 0, y: 0 })}
                    />
                )}
            </div>
        </div>);
}

export function DataList<Row, ColMetaData = any>(props: IDataListProps<Row, ColMetaData>) {
    return (
        <DataListProvider
            //@ts-ignore
            rows={props?.rows} plugins={props?.plugins} allRows={new Map()} columns={props?.columns} >
            <DataListInner {...props} />
        </DataListProvider>
    )
}

type DataListProviderProps<Row> = React.PropsWithChildren<DataListState<Row>>;
function DataListProvider<Row>({ children, ...props }: DataListProviderProps<Row>) {
    const storeRef = useRef<DataListStore<Row>>();
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