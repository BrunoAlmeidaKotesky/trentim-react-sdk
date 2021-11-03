import * as React from 'react';
import { useRef, useCallback } from 'react'; 
import { IDatableColumns, ITableCustomEvents } from '../../models/interfaces/IDataTable';
import { IBodyStyles } from '../../models/interfaces/IDatatableStyles';

interface RowProps<T extends object> {
    type: 'div'|'table'
    rows: T[];
    columns: IDatableColumns[];
    ignoreKeys: string[];
    customEvents: ITableCustomEvents<T>[];
    styles?: Partial<IBodyStyles>;
}
export function Rows<T extends object>({ignoreKeys, rows, columns, customEvents, styles, type}:RowProps<T>) {
    const tdRef = useRef<HTMLTableRowElement>(null);

    const tableRowStyle = useCallback((currentIdx?: number) => {
        if(styles?.tableBodyRow?.style) {
            const {style, specficRow} = styles.tableBodyRow;
            if(specficRow?.positions.includes(currentIdx)) 
                return specficRow.style;
            return style;
        }
        else if(styles?.tableBodyRow?.specficRow?.style) {
            const {specficRow} = styles.tableBodyRow;
            if(specficRow?.positions.includes(currentIdx)) 
                return specficRow.style;
            return null;
        }
        return null;
    }, [styles]);

    const tableCellStyle = useCallback((key: string, idx: number) => {
        const useSpecificStyle = styles?.tableCell?.specificCells?.style ? true : false;
        const isEqualKey = styles?.tableCell?.specificCells?.keys.includes(key);
        const positions = styles?.tableCell?.specificCells?.positions?.length > 0 ? styles?.tableCell?.specificCells?.positions : [];
        if(styles?.tableCell?.style) 
            return styles?.tableCell?.style;
        if(useSpecificStyle) {
            if(isEqualKey) {
                if(positions?.length > 0) {
                    if(positions.includes(idx))
                        return styles?.tableCell?.specificCells?.style;
                    return null;
                }
                return styles?.tableCell?.specificCells?.style;
            }
        }
        return null;
    }, [styles]);

    return (<>
    {rows?.map((row, idx) => {
     const colKeys = Object.values(columns).map(i => i.keyName);
     let _rows:object = {};
     colKeys.forEach(name => {
        if (Object.prototype.hasOwnProperty.call(row, name)) {
            const element = row[name];
            _rows = {..._rows, [name]: element};
        }
     });
     let rowEntries = Object.entries(_rows);
     if(ignoreKeys && ignoreKeys.length > 0) {
         rowEntries = rowEntries.filter(([k, ]) => {
             //@ts-ignore
             if(!ignoreKeys.includes(k)){
               return k;
             }
         });
     }
     
     const rowsToRender:[string, any][] = rowEntries.map(([rowKey, rowValue]) => {
        const keyName = colKeys.find(n => n === rowKey);
        return [keyName, rowValue];
     });
     switch (type) {
        case 'div': {
            return (
            <div style={{display: 'table-row', ...tableRowStyle(idx)}}>
            {rowsToRender.map(([key, val], idx2) => {
            return (
                <div 
                  style={{display: 'table-cell', ...tableCellStyle(key, idx)}}
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
               </div>)
            })}
            </div>
            );
        }
        case 'table': {
            return (
            <tr style={tableRowStyle(idx)} key={idx.toString()}>
            {rowsToRender.map(([key, val], idx2) => {
              return (
              <td 
                style={tableCellStyle(key, idx)}
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
        }
        default: return null;
     }
    })}
    </>);
}