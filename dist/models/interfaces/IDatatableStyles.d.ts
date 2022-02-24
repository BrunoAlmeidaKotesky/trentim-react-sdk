import { CSSProperties } from 'react';
export interface IDatatableStyles extends IHeaderStyles, IBodyStyles {
    tableContainer: CSSProperties;
    rootTable: CSSProperties;
    captionStyle: CSSProperties;
}
export interface IHeaderStyles {
    tableHeaderContainer: CSSProperties;
    tableHeaderRows: CSSProperties;
    tableHeader: CSSProperties;
}
export interface IBodyStyles {
    tableRootBody: CSSProperties;
    tableBodyRow: {
        style?: CSSProperties;
        specficRow?: {
            positions: number[];
            style: CSSProperties;
        };
    };
    tableCell: {
        style?: CSSProperties;
        specificCells?: {
            keys: string[];
            style: CSSProperties;
            positions?: number[];
        };
    };
}
