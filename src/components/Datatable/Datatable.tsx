import * as React from "react";
import { memo, useEffect, useRef } from 'react';
import {Caption} from './Caption';
import {HeadColumns} from './Head';
import {Rows} from './Rows';
import {IDatatableProps} from '../../models/interfaces/IDataTable';

export const DataTable = memo(
<T extends object>({ 
  columns, 
  styles, 
  footer, 
  rows, 
  ignoreKeys, 
  idName = "default-table",
  customEvents,
  tableCaption,
  classes,
  type
}: 
IDatatableProps<T>) => {
    const parentRef = useRef<HTMLTableRowElement|HTMLDivElement>(null);
    useEffect(() => {
        if(rows.length > 0 && columns.length > 0) {
            let firstRowKeys = Object.keys(rows[0]);
            if(ignoreKeys && ignoreKeys.length > 0 ) {
                firstRowKeys = firstRowKeys.filter(k => {
                    if(!ignoreKeys.includes(k)){
                        return k;
                    }
                })
            }
            const tableHeaderVals = columns.map(h => h.keyName);
            if(firstRowKeys.length !== tableHeaderVals.length) 
                console.error('The number of table header does not match the array values')
        }
    }, [rows, columns, ignoreKeys]);
    

    switch(type) {
        case 'div': {
            return (
            <TableContainer tableContainer={styles?.tableContainer ?? {}} containerClass={classes ? classes?.container : "datatable-container"}>
                <div style={{display: 'table', ...styles?.rootTable ?? {}}}>
                    {tableCaption && 
                        <Caption 
                            type={'div'}
                            captionStyle={styles?.captionStyle ?? null} 
                            tableCaption={tableCaption}/>}
                    <HeadColumns 
                        type={'div'}
                        columns={columns} 
                        styles={styles}/>
                    <div ref={parentRef} style={{display: 'table-row-group', height: '120px', overflow: 'auto', ...styles?.tableRootBody ?? {}}}>
                        <Rows 
                            type={'div'}
                            columns={columns} 
                            rows={rows}
                            styles={styles}
                            ignoreKeys={ignoreKeys} 
                            customEvents={customEvents} />
                    </div>
                </div>
            </TableContainer>
            );
        }
        case 'table': {
            return (
            <TableContainer tableContainer={styles?.tableContainer ?? {}} containerClass={classes ? classes?.container : "datatable-container"}>
                <table style={styles?.rootTable ?? {}} className={idName}>
                    {tableCaption && 
                    <Caption 
                        type={'table'}
                        captionStyle={styles?.captionStyle ?? null} 
                        tableCaption={tableCaption}/>}
                    <HeadColumns 
                        type={'table'}
                        columns={columns} 
                        styles={styles}/>
                    <tbody style={styles?.tableRootBody ?? {}}>
                        <Rows 
                            type={'table'}
                            columns={columns} 
                            rows={rows}
                            styles={styles}
                            ignoreKeys={ignoreKeys} 
                            customEvents={customEvents} />
                    </tbody>
                    {footer && <>{footer}</>}
                </table> 
            </TableContainer>
            );
        }
        default: return null;
    }
});

const TableContainer: React.FC<{tableContainer: React.CSSProperties, containerClass: string}> = 
({tableContainer, containerClass, children}) => (<div style={tableContainer ?? {}} className={containerClass ?? "table-row"}>{children}</div>);