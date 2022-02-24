import * as React from 'react';
import {CSSProperties, useMemo} from 'react';

interface CaptionProps {
    tableCaption: string;
    captionStyle: CSSProperties;
    type: 'div'|'table';
}
export function Caption({captionStyle, tableCaption, type}:CaptionProps) {
    const defaultCaptionStyle:CSSProperties = useMemo(() => {
        return {
            fontWeight: 600,
            fontSize: 22,
            borderBottom: '1px solid #00000063',
            paddingBottom: 12,
            paddingTop: 12
        };
    }, []);
    
    return(
        type === 'table' ? <caption style={captionStyle ?? defaultCaptionStyle}>{tableCaption}</caption> : 
        type === 'div' ? <div style={{display: 'table-caption', ...captionStyle ?? {}}}>{tableCaption}</div> : null);
}