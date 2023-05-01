import { useDataListController } from './useDataListController';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import type { IDataListProps, BaseType, IRow } from '@models/interfaces/IDataList';

export function DataList<T extends BaseType>(props: IDataListProps<T>) {
    const { state, handlers } = useDataListController(props);
    const { rows, columns, groups } = state;
    const { onItemClick, verifyVirtualization, renderPlugins } = handlers;

    return (
        <div style={props?.styles?.root ?? {}}>
            <div className="data-list-plugins-area">
            {renderPlugins()}
            </div>
            <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0, overflowY: 'scroll', height: props?.maxHeight, ...props?.styles?.contentContainer }} id="DataList-root">
                {!!props?.onRenderCustomRow ? rows?.map(i => props?.onRenderCustomRow(i as IRow<T>)) :
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