import * as React from 'react';
import type { IDatableColumns } from '../models/interfaces/IDataTable';
import type { IHeaderStyles } from '../models/interfaces/IDatatableStyles';

interface HeadColumnsProps {
    type: 'div' | 'table';
    columns: IDatableColumns[];
    styles: Partial<IHeaderStyles>;
}
export function HeadColumns({ columns, styles, type }: HeadColumnsProps) {
    switch (type) {
        case 'table': {
            return (
                <thead style={styles?.tableHeaderContainer ?? {}}>
                    <tr style={styles?.tableHeaderRows ?? {}}>
                        {columns?.map(h => (
                            <th style={styles?.tableHeader ?? {}} key={`${h.keyName}_x0h`}>{h?.title ?? ''}</th>
                        ))}
                    </tr>
                </thead>
            );
        }
        case 'div': {
            return (
            <div style={{display: 'table-header-group', ...styles?.tableHeaderContainer ?? {}}}>
                <div style={{display: 'table-row', ...styles?.tableHeaderRows ?? {}}}>
                    {columns?.map(h => (
                        <div style={{display: 'table-cell', ...styles?.tableHeader ?? {}}} key={`${h.keyName}_x0h`}>{h?.title ?? ''}</div>
                    ))}
                </div>
            </div>);
        }
        default: return null;
    }
}