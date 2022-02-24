import * as React from 'react';
import { useGridController } from './useGridController';
import { FilterPaneContext, ListOptionsContext } from './Contexts';
import { CheckboxVisibility, CollapseAllVisibility, DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import type { IGridListProps } from '../models/interfaces/IGridView';
import PanelFilter from './PanelFilter';
import { ListOptions } from './ListOptions';

export const GridView = (props: IGridListProps<any>) => {   
    const {state, handlers} = useGridController(props);
    const {actualRows, allRows, cols, groups, isFilterPanelOpen, panelConfig} = state;
    const {onRowClick, setActualRows, setIsFilterPanel} = handlers;

    return (
        <FilterPaneContext.Provider value={panelConfig}>
            <ListOptionsContext.Provider value={{
                onSearchItem: (text, key) => {
                    const filteredRows = text ?
                        allRows?.filter(item => {
                            const isKeyInsideFileObj = item?.file ? Object.keys(item?.file)?.includes(key as unknown as string) : false;
                            const itemValue: string = isKeyInsideFileObj ? item?.file[key] : item?.[key];
                            console.log(key, itemValue)
                            return itemValue?.toLowerCase().includes(text.toLowerCase());
                        }) : allRows;
                    setActualRows(filteredRows);
                },
                setIsFilterPanelOpen: (value) => { setIsFilterPanel(value); },
                ...props?.headerOptions
            }}>
                <div>
                    <ListOptions />
                    <div data-is-scrollable="true" style={{ position: 'relative', zIndex: 0 }}>
                        <DetailsList
                            {...props?.detailsListProps}
                            onRenderRow={(p, defaultRender) => <div onClick={() => onRowClick(p?.item)}>{defaultRender({ ...p, styles: { root: { cursor: props?.onRowClick ? 'pointer' : 'default' } } })}</div>}
                            items={actualRows} columns={cols} groups={groups}
                            groupProps={{
                                isAllGroupsCollapsed: props?.groups ? props?.groups.filter(gr => !gr?.isCollapsed)?.length === 0 : true,
                                collapseAllVisibility: CollapseAllVisibility.visible,
                                onRenderHeader: (props, defaultRender) => {
                                    if (!props.group!.name)
                                        return <></>;
                                    return defaultRender(props);
                                }
                            }}
                            layoutMode={DetailsListLayoutMode.fixedColumns} isHeaderVisible={true}
                            onRenderDetailsHeader={(headerProps, defaultRender) => (
                                <Sticky key={headerProps?.key} stickyPosition={StickyPositionType.Header} stickyBackgroundColor="transparent">
                                    <div key={headerProps?.key}>{defaultRender!(headerProps)}</div>
                                </Sticky>)}
                            checkboxVisibility={props?.detailsListProps?.checkboxVisibility ?? CheckboxVisibility.hidden}
                        />
                    </div>
                    {isFilterPanelOpen && <PanelFilter />}
                </div>
            </ListOptionsContext.Provider>
        </FilterPaneContext.Provider>);
}