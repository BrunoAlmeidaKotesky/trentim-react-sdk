import * as React from 'react';
import { IDatableColumns, IDatatableStyles } from '../../models/interfaces/IDataTable';

interface HeadColumnsProps {
    columns:IDatableColumns[];
    styles: Partial<IDatatableStyles>;
}
export function HeadColumns({columns, styles}:HeadColumnsProps) {
    return (
    <thead>
        <tr>
        {columns?.map(h => (
            <th style={styles?.tableHeader ?? {}} key={`${h.keyName}_x0h`}>{h?.title ?? ''}</th>
        ))}
        </tr>
    </thead>
    );
}