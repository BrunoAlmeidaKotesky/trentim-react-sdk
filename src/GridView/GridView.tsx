import * as React from 'react';
import { useGridController } from './hooks/useGridController';
import { FilterPanelContext, GroupPanelContext, ListOptionsContext } from './Contexts';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode, IDetailsHeaderProps } from '@fluentui/react/lib/DetailsList';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import type { IGridListProps, BaseType } from '../models/interfaces/IGridView';
import PanelFilter from './PanelFilter';
import GroupPanel from './GroupPanel';
import { ListOptions } from './ListOptions';
import { Suspense } from 'react';

/** An enhanced version of the `DetailsList` component, with automatic filtering, sorting, grouping, properties searching with many other features to customize.
 * 
 * The component can also be rendered as a collection of `Card` components, with the same functionalities.
 */
export function GridView<T extends BaseType>(props: IGridListProps<T>) {
    const {state, handlers, JSX} = useGridController(props);
    const {CardsList} = JSX;
    const {actualRows, cols, isFilterPanelOpen, filterPanelConfig, groupPanelConfig, listConfig, shouldRenderCard, isGroupPanelOpen, groups} = state;
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
                        items={actualRows} columns={cols}
                        groups={groups}
                        groupProps={{
                            isAllGroupsCollapsed: props?.detailsListProps?.groups ? props?.detailsListProps?.groups?.filter(gr => !gr?.isCollapsed)?.length === 0 : true,
                            collapseAllVisibility: CollapseAllVisibility.visible,
                            onRenderHeader: (props, defaultRender) => {
                                if (!props.group!.name)
                                    return <></>;
                                return defaultRender(props);
                            },
                            showEmptyGroups: false
                        }}
                        layoutMode={DetailsListLayoutMode.fixedColumns} isHeaderVisible={true}
                        onRenderDetailsHeader={(headerProps, defaultRender) => {
                            const _headerProps: IDetailsHeaderProps = {...headerProps, columns: headerProps.columns.filter(c => !c?.['hideColumn'])};
                            return (
                            <Sticky key={_headerProps?.key} stickyPosition={StickyPositionType.Header} stickyBackgroundColor="transparent">
                                <div key={_headerProps?.key}>{defaultRender!(_headerProps)}</div>
                            </Sticky>);
                        }}
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