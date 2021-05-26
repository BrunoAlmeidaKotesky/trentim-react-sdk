import * as React from 'react';
import { IDatableColumns } from '../../models/interfaces/IDataTable';
import {IHeaderStyles} from '../../models/interfaces/IDatatableStyles';

interface HeadColumnsProps {
    columns:IDatableColumns[];
    styles: Partial<IHeaderStyles>;
}
export function HeadColumns({columns, styles}:HeadColumnsProps) {
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