import * as React from 'react';
import { DataTable } from '../src/DataTable/DataTable';

export function DataTableExample() {
    return (
        <div style={{
            display: "grid",
            padding: "20px",
            placeItems: "center",
            background: 'linear-gradient(90deg, #49ff5f 0%, #23b5b5 100%)',
            borderRadius: '40px',
            border: '2px solid rgba(95,95,95,0.56)'
        }}>
            <DataTable
                type={'div'}
                columns={[{ keyName: 'name', title: 'Name' }, { keyName: 'age', title: 'Age' }, { keyName: 'desc', title: 'Description' }]}
                styles={{
                    tableBodyRow: {
                        specficRow: { positions: [0, 4], style: { background: 'magenta' } },
                        style: { background: 'lightblue' }
                    },
                    tableCell: {
                        specificCells:
                            { keys: ['name'], style: { color: 'yellow' }, positions: [2, 3] }
                    }
                }}
                ignoreKeys={['ignoreMe']}
                rows={[
                    { age: 21, name: 'Bruno', ignoreMe: true },
                    { age: 36, name: 'Jony', ignoreMe: true },
                    { age: 23, name: 'Jean', ignoreMe: true },
                    { age: 67, name: 'Robert', ignoreMe: true },
                    { age: 27, name: 'July', ignoreMe: true },
                    { age: 55, name: 'Carl', ignoreMe: true },
                    { age: 75, name: 'Mario', ignoreMe: true },
                    { age: 88, name: 'Rodney', ignoreMe: true },
                ]} />
        </div>
    )
}