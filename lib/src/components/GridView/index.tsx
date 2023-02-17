
import {forwardRef} from 'react';
import { useGridController } from '@components/GridView/hooks/useGridController';
import { FilterPanelContext, GroupPanelContext, ListOptionsContext } from '@components/GridView/Contexts';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode, IDetailsColumnRenderTooltipProps, IDetailsHeaderProps } from '@fluentui/react/lib/DetailsList';
import type { IGridListProps, BaseType, IGridViewRefHandler } from '@models/interfaces/IGridView';
import PanelFilter from '@components/GridView/PanelFilter';
import GroupPanel from '@components/GridView/GroupPanel';
import { ListOptions } from '@components/GridView/ListOptions';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import type { IRenderFunction } from '@fluentui/react/lib/Utilities';

declare module "react" {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
  }

function GridViewInner<T extends BaseType>(props: IGridListProps<T>, ref: React.ForwardedRef<IGridViewRefHandler<T>>) {
    const {state, handlers} = useGridController(props, ref);
    const {actualRows, visibleCols, isFilterPanelOpen, filterPanelConfig, groupPanelConfig, listConfig, isGroupPanelOpen, groups} = state;
    const {onItemClick, verifyVirtualization} = handlers;

    const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (props, defaultRender) => {
        if (!props) {
          return null;
        }
        const onRenderColumnHeaderTooltip: IRenderFunction<IDetailsColumnRenderTooltipProps> = tooltipHostProps => (
          <TooltipHost {...tooltipHostProps} />
        );
        return defaultRender!({
          ...props,
          onRenderColumnHeaderTooltip,
        });
    };

    return (
        <GroupPanelContext.Provider value={groupPanelConfig}>
        <FilterPanelContext.Provider value={filterPanelConfig}>
        <ListOptionsContext.Provider value={listConfig}>
            <div style={props?.styles?.root ?? {}}>
                <ListOptions />
                <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0, overflowY: 'scroll', height: props?.maxHeight, ...props?.styles?.contentContainer }} id="gridView-root">
                    {
                    !!props?.onRenderCustomRow ? actualRows?.map(i => props?.onRenderCustomRow(i)) :
                    <DetailsList
                        {...props?.detailsListProps}
                        onRenderItemColumn={props?.onRenderItemColumn}
                        onRenderRow={(p, defaultRender) => 
                            <div onClick={() => onItemClick(p?.item)}>
                                {defaultRender({ ...p, styles: { root: { cursor: props?.onItemClick ? 'pointer' : 'default' } } })}
                            </div>}
                        items={actualRows} columns={visibleCols}
                        groups={groups}
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
                        styles={props?.detailsListProps?.styles}
                        onShouldVirtualize={verifyVirtualization()}
                        layoutMode={props?.detailsListProps?.layoutMode ?? DetailsListLayoutMode.justified} isHeaderVisible={true}
                        onRenderDetailsHeader={props?.detailsListProps?.onRenderDetailsHeader ?? onRenderDetailsHeader}
                        checkboxVisibility={props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden}
                    />}
                </div>
                {isFilterPanelOpen && <PanelFilter />}
                {isGroupPanelOpen && <GroupPanel />}
            </div>
        </ListOptionsContext.Provider>
        </FilterPanelContext.Provider>
        </GroupPanelContext.Provider>);
}

/** An enhanced version of the `DetailsList` component, with automatic filtering, sorting, grouping, properties searching with many other features to customize.
 * 
 * The component can also be rendered as a collection of `Card` components, with the same functionalities.
 */
export const GridView = forwardRef(GridViewInner);