import React from 'react';
import { memo } from 'react';
import { DetailsList, DetailsListLayoutMode, IDetailsHeaderProps, IDetailsListProps } from '@fluentui/react/lib/DetailsList';
import { ScrollablePane, ScrollbarVisibility } from '@fluentui/react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';

interface IGridListProps extends IDetailsListProps {}
export const List = memo((props: IGridListProps): JSX.Element => {

    const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (headerProps, defaultRender) => {
        return (
            <Sticky stickyPosition={StickyPositionType.Header} stickyBackgroundColor="transparent">
                <div>{defaultRender!(headerProps)}</div>
            </Sticky>
        );
    };

    return (
        <div style={{ position: 'relative', zIndex: 0 }}>
            <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                <DetailsList
                    layoutMode={DetailsListLayoutMode.fixedColumns}
                    onRenderDetailsHeader={onRenderDetailsHeader}
                    isHeaderVisible={true}
                    {...props}
                />
            </ScrollablePane>
        </div>
    );
});