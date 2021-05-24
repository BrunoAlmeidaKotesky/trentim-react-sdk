import * as React from 'react';
import {CSSProperties, useMemo} from 'react';
import {IDatatableStyles} from '../../models/interfaces/IDataTable';
interface CaptionProps {
    tableCaption: string;
    styles?: Partial<IDatatableStyles>;
}
export function Caption({styles, tableCaption}:CaptionProps) {
    const captionStyle:CSSProperties = useMemo(() => {
        return {
            fontWeight: 600,
            fontSize: 22,
            borderBottom: '1px solid #00000063',
            paddingBottom: 12,
            paddingTop: 12
        };
    }, []);
    
    return(<caption style={{...captionStyle, ...styles?.caption }}>{tableCaption}</caption>);
}