import * as React from 'react';
import { useRef } from 'react'; 
import { IDatableColumns, ITableCustomEvents } from '../models/IDataTable';

interface RowProps<T extends object> {
    rows: T[];
    columns: IDatableColumns[];
    ignoreKeys: string[];
    customEvents: ITableCustomEvents<T>[];
}

export function Rows<T extends object>({ignoreKeys, rows, columns, customEvents}:RowProps<T>) {
    const tdRef = useRef<HTMLTableRowElement>(null);

    return (<>
    {rows?.map((row, idx) => {
     let rowEntries = Object.entries(row);
     if(ignoreKeys && ignoreKeys.length > 0) {
         rowEntries = rowEntries.filter(([k, ]) => {
             //@ts-ignore
             if(!ignoreKeys.includes(k)){
               return k;
             }
         });
     }
     return (
        <tr key={idx.toString()}>
        {rowEntries.map(([key, val], idx2) => {
          return (
          <td 
            key={key?.toString() ?? idx2}
            data-label={columns[idx2]?.title} 
            onClick={() => {
                /** Events for custom JSX.Elements provided on the columns*/
                if(customEvents && customEvents?.length > 0) {
                    customEvents.map(ev => {
                        if(ev?.eventName && ev?.objectKey === key)
                            ev?.onEventAction(row, tdRef?.current!);
                    })
                }
            }} 
            >{val ?? ''}
         </td>)
        })}
        </tr>)
    })}
    </>);
}