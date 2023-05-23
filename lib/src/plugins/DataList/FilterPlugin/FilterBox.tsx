import { VirtualizedComboBox } from '@fluentui/react/lib/ComboBox';
import { createPortal } from 'react-dom';
import { DateRangeSlider } from '@components/DateRangeSlider';
import { useFilterBox } from './useFilterBox';
import type { FilterAreaProps } from './types';
import type { ReactNode } from 'react';

const BoxShadow = ({ children }: { children: ReactNode }) => (
    <div style={{
        fontWeight: 600, fontSize: 16, boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        borderRadius: 2, background: 'white', zIndex: 999999, padding: 12
    }}>{children}</div>
)

export function FilterBox<T>({ getStore }: FilterAreaProps<T>): JSX.Element {
    const {state, handlers} = useFilterBox({getStore});
    const {
        width, sibling, targetDom, useOuterClickRef,
        sliderValue, dateRange, selectedKeys, options,
        currentFiltering
    } = state;
    const {onComboBoxChange, onDateValueChange, onSliderChange} = handlers;

    if (!currentFiltering?.show || !targetDom)
        return null;
    
    return createPortal(
        <div style={{ width: '100%', top: 40, zIndex: 999, position: 'absolute' }}>
            <div ref={useOuterClickRef} style={{ width, placeContent: 'center', display: 'grid' }} id={getStore().clickedColumnKey as string}>
                {(currentFiltering?.column?.transformations?.renderAs === 'date') ?
                    <BoxShadow>
                        <div style={{ width, backgroundColor: 'white', padding: 8 }}>
                            <DateRangeSlider
                                {...currentFiltering?.dateRangeSliderConfig?.props}
                                sliderValue={sliderValue} 
                                dateRange={dateRange}
                                onDateValueChange={onDateValueChange}
                                onSliderChange={onSliderChange} />
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
                    </BoxShadow>
                }
            </div>
        </div>,
        sibling
    );
}