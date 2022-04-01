import * as React from 'react';
import { useGridController } from './hooks/useGridController';
import { FilterPanelContext, GroupPanelContext, ListOptionsContext } from './Contexts';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import type { IGridListProps } from '../models/interfaces/IGridView';
import PanelFilter from './PanelFilter';
import GroupPanel from './GroupPanel';
import { ListOptions } from './ListOptions';
import { Suspense } from 'react';

/** Mudar nome do componente talvez? Ele é mais do que só um Grid. */
export function GridView<T = any>(props: IGridListProps<T>) {
    const {state, handlers, JSX} = useGridController(props);
    const {CardsList} = JSX;
    const {actualRows, cols, isFilterPanelOpen, filterPanelConfig, groupPanelConfig, listConfig, shouldRenderCard, isGroupPanelOpen, groups} = state;
    const {onRowClick} = handlers;

    return (
        <GroupPanelContext.Provider value={groupPanelConfig}>
        <FilterPanelContext.Provider value={filterPanelConfig}>
        <ListOptionsContext.Provider value={listConfig}>
            <div>
                <ListOptions />
                <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0 }}>
                    {
                    !!props?.onRenderCustomComponent ? actualRows?.map(i => props?.onRenderCustomComponent(i)) :
                    !shouldRenderCard ? 
                    <DetailsList
                        {...props?.detailsListProps}
                        onRenderItemColumn={props?.onRenderItemColumn}
                        onRenderRow={(p, defaultRender) => <div onClick={() => onRowClick(p?.item)}>{defaultRender({ ...p, styles: { root: { cursor: props?.onRowClick ? 'pointer' : 'default' } } })}</div>}
                        items={actualRows} columns={cols}
                        groups={groups}
                        groupProps={{
                            isAllGroupsCollapsed: /*props?.groups ? props?.groups.filter(gr => !gr?.isCollapsed)?.length === 0 :*/ true,
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
                            </Sticky>)}
                        checkboxVisibility={props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden}
                    /> :
                    <Suspense fallback={'...'}>
                        <div id="gridView-cardContainer" style={props?.cardProps?.containerStyle ?? {display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
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