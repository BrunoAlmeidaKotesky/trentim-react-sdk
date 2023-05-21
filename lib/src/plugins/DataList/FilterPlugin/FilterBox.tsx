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

export function FilterBox<T>({ stateManager, getStore }: FilterAreaProps<T>): JSX.Element {
    const {state, handlers} = useFilterBox({stateManager, getStore});
    const {width, sibling, targetDom, useOuterClickRef} = state;
    const {onComboBoxChange, onDateValueChange, onSliderChange} = handlers;

    if (!stateManager.getPluginStateValue('currentFiltering')?.show || !targetDom) {
        return null;
    }

    return createPortal(
        <div style={{ width: '100%', top: 40, zIndex: 999, position: 'absolute' }}>
            <div ref={useOuterClickRef} style={{ width, placeContent: 'center', display: 'grid' }} id={getStore().clickedColumnKey as string}>
                {(stateManager.getPluginStateValue('currentFiltering')?.column?.transformations?.renderAs === 'date') ?
                    <BoxShadow>
                        <div style={{ width, backgroundColor: 'white', padding: 8 }}>
                            <DateRangeSlider
                                {...stateManager.getPluginStateValue('currentFiltering')?.dateRangeSliderConfig?.props}
                                sliderValue={stateManager.getWrappedFilterStoreValue('sliderValue')} 
                                dateRange={stateManager.getWrappedFilterStoreValue('dateRange')}
                                onDateValueChange={onDateValueChange}
                                onSliderChange={onSliderChange} />
                        </div>
                    </BoxShadow> :
                    <BoxShadow>
                        <VirtualizedComboBox
                            multiSelect
                            selectedKey={stateManager.getWrappedFilterStoreValue('selectedKeys')}
                            onChange={onComboBoxChange}
                            dropdownMaxWidth={300}
                            styles={{
                                root: { maxWidth: width },
                                callout: { minWidth: 100, maxHeight: '320px!important', scroll: 'auto' }
                            }}
                            options={stateManager.getWrappedFilterStoreValue('options') || []} 
                            autoComplete="on" />
                    </BoxShadow>
                }
            </div>
        </div>,
        sibling
    );
}