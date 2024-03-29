import { VirtualizedComboBox } from '@fluentui/react/lib/ComboBox';
import { createPortal } from 'react-dom';
import { DateRangeDropdown } from '@components/DateRangeDropdown';
import { Breadcrumb, IBreadcrumbItem } from '@fluentui/react/lib/Breadcrumb';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { FilterDismiss24Regular } from '@fluentui/react-icons';
import { Tooltip } from '@components/Tooltip';
import { ConditionalWrapper } from '@components/ConditionalWrapper';
import { useFilterBox } from './useFilterBox';
import type { FilterAreaProps } from './types';
import { ReactNode, useMemo } from 'react';
import { useFilterPluginStore } from './filterStore';

const BoxShadow = ({ children }: { children: ReactNode }) => (
    <div style={{
        fontWeight: 600, fontSize: 16, boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        borderRadius: 2, background: 'white', zIndex: 999999, padding: 12
    }}>{children}</div>
)

const ApplyFilterBtn = ({text, onClick}: {text: string, onClick: () => void}) => (
    <div style={{display: 'grid', padding: '8px 2px 0px 2px', marginTop: 8}}>
        <PrimaryButton onClick={onClick}>{text || 'Apply Filter'}</PrimaryButton>
    </div>
)

export function FilterBox<T>(props: FilterAreaProps<T>): JSX.Element {
    const { state, handlers } = useFilterBox({ getStore: props.getStore });
    const {
        width, sibling, targetDom, useOuterClickRef,
        dropdownValue, dateRange, selectedKeys, options,
        currentFiltering
    } = state;
    const { onComboBoxChange, onDateSelected, onApplyFilter } = handlers;
    const content: ReactNode = props?.tooltipContent || "After selecting your values, click outside the filter box to apply them";

    if (!currentFiltering?.show || !targetDom)
        return null;

    return createPortal(
        <div style={{ width: '100%', top: 40, zIndex: 999, position: 'absolute' }}>
            <ConditionalWrapper condition={props?.showTooltip} wrapper={child => (<Tooltip direction='top_center' content={content}>{child}</Tooltip>)}>
            <div ref={useOuterClickRef} style={{ width, placeContent: 'center', display: 'grid' }} id={props.getStore().clickedColumnKey as string}>
                {(currentFiltering?.column?.transformations?.renderAs === 'date') ?
                    <BoxShadow>
                        <div style={{ width, backgroundColor: 'white', padding: 8 }}>
                            <DateRangeDropdown
                                {...currentFiltering?.dateRangeSliderConfig?.props}
                                dropdownValue={dropdownValue}
                                dateRange={dateRange}
                                onDateValueChange={onDateSelected} />
                            <ApplyFilterBtn onClick={onApplyFilter} text={props?.applyFilterText} />
                        </div>
                    </BoxShadow> :
                    <BoxShadow>
                        <VirtualizedComboBox
                            multiSelect
                            selectedKey={selectedKeys}
                            onChange={onComboBoxChange}
                            dropdownMaxWidth={300}
                            styles={{
                                root: { maxWidth: width },
                                callout: { minWidth: 100, maxHeight: '320px!important', scroll: 'auto' }
                            }}
                            options={options || []}
                            autoComplete="on" />
                        <ApplyFilterBtn onClick={onApplyFilter} text={props?.applyFilterText} />
                    </BoxShadow>
                }
            </div>
            </ConditionalWrapper>
        </div>,
        sibling
    );
}

function FilterBreadCrumb(props: FilterAreaProps<any>) {
    const { showBreadcrumb, queue, applyFilter, resetState } = useFilterPluginStore(state => ({
        showBreadcrumb: state.showBreadcrumb,
        queue: state.queue,
        applyFilter: state.applyFilter,
        resetState: state.resetState
    }));
    const breadCrumbItems = useMemo<IBreadcrumbItem[]>(() => {
        return queue?.map((item) => {
            let text: string;
            if ((item?.metadata as any)?.type === 'date')
                text = (item?.metadata as any)?.label;
            else text = item?.values?.map(v => v)?.join(', ');
            return ({
                key: item.key,
                text
            })
        }) || [];
    }, [queue]);
    if (!showBreadcrumb || !applyFilter) return null;
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumb items={breadCrumbItems} />
            <div style={{ display: 'flex', alignSelf: 'center', top: '6px', position: 'relative' }}>
                <FilterDismiss24Regular cursor={'pointer'} onClick={() => {
                    resetState();
                    props.getStore().setRows(props.getStore().allRows);
                    if (props?.onFilterCleared)
                        props.onFilterCleared(props.getStore().allRows);
                }} />
            </div>
        </div>);
}

export function FilterWrapper<T>(props: FilterAreaProps<T>): JSX.Element {
    return (<>
        <FilterBreadCrumb {...props} />
        <FilterBox {...props} />
    </>);
}