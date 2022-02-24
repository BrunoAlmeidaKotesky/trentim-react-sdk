import { CSSProperties } from 'react';
interface CaptionProps {
    tableCaption: string;
    captionStyle: CSSProperties;
    type: 'div' | 'table';
}
export declare function Caption({ captionStyle, tableCaption, type }: CaptionProps): JSX.Element;
export {};
