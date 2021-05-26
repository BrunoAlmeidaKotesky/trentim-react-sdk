import * as React from 'react';
import {CSSProperties, useMemo} from 'react';

interface CaptionProps {
    tableCaption: string;
    captionStyle: CSSProperties;
}
export function Caption({captionStyle, tableCaption}:CaptionProps) {
    const defaultCaptionStyle:CSSProperties = useMemo(() => {
        return {
            fontWeight: 600,
            fontSize: 22,
            borderBottom: '1px solid #00000063',
            paddingBottom: 12,
            paddingTop: 12
        };
    }, []);
    
    return(<caption style={captionStyle ?? defaultCaptionStyle}>{tableCaption}</caption>);
}