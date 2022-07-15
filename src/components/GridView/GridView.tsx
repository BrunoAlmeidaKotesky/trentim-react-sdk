//@ts-ignore
import * as React from 'react';
import { useGridController } from './hooks/useGridController';
import { FilterPanelContext, GroupPanelContext, ListOptionsContext } from './Contexts';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import type { IGridListProps, BaseType, IGridViewRefHandler } from '@models/interfaces/IGridView';
import PanelFilter from './PanelFilter';
import GroupPanel from './GroupPanel';
import { ListOptions } from './ListOptions';
import { Suspense } from 'react';

declare module "react" {
    function forwardRef<T, P = {}>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
  }

function GridViewInner<T extends BaseType>(props: IGridListProps<T>, ref: React.ForwardedRef<IGridViewRefHandler<T>>) {
    const {state, handlers, JSX} = useGridController(props, ref);
    const {CardsList} = JSX;
    const {actualRows, visibleCols, isFilterPanelOpen, filterPanelConfig, groupPanelConfig, listConfig, shouldRenderCard, isGroupPanelOpen, groups} = state;
    const {onItemClick} = handlers;

    return (
        <GroupPanelContext.Provider value={groupPanelConfig}>
        <FilterPanelContext.Provider value={filterPanelConfig}>
        <ListOptionsContext.Provider value={listConfig}>
            <div style={props?.styles?.root ?? {}}>
                <ListOptions />
                <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0, ...props?.styles?.contentContainer }} id="gridView-root">
                    {
                    !!props?.onRenderCustomComponent ? actualRows?.map(i => props?.onRenderCustomComponent(i)) :
                    !shouldRenderCard ? 
                    <DetailsList
                        {...props?.detailsListProps}
                        onRenderItemColumn={props?.onRenderItemColumn}
                        onRenderRow={(p, defaultRender) => <div onClick={() => onItemClick(p?.item)}>{defaultRender({ ...p, styles: { root: { cursor: props?.onItemClick ? 'pointer' : 'default' } } })}</div>}
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
                        layoutMode={DetailsListLayoutMode.fixedColumns} isHeaderVisible={true}
                        onRenderDetailsHeader={(headerProps, defaultRender) => (
                            <Sticky key={headerProps?.key} stickyPosition={StickyPositionType.Header} stickyBackgroundColor="transparent">
                                <div key={headerProps?.key}>{defaultRender!(headerProps)}</div>
                            </Sticky>)
                        }
                        checkboxVisibility={props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden}
                    /> :
                    <Suspense fallback={'...'}>
                        <div id="gridView-cardContainer" style={props?.cardProps?.containerStyle ?? {display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                        {CardsList}
                        </div>
                    </Suspense>
                    }
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
export const GridView = React.forwardRef(GridViewInner);