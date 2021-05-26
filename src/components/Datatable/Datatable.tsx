import * as React from "react";
import { memo, useEffect } from 'react';
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
  classes
}: 
IDatatableProps<T>) => {

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

    return (
        <div style={styles?.tableContainer ?? {}} className={classes ? classes?.container : "table-row"}>
            <table style={styles?.rootTable ?? {}} className={idName}>
                {tableCaption && 
                <Caption 
                    captionStyle={styles?.captionStyle ?? null} 
                    tableCaption={tableCaption}/>}
                <HeadColumns 
                    columns={columns} 
                    styles={styles}/>
                <tbody style={styles?.tableRootBody ?? {}}>
                    <Rows 
                        columns={columns} 
                        rows={rows}
                        styles={styles}
                        ignoreKeys={ignoreKeys} 
                        customEvents={customEvents} />
                </tbody>
                {footer && <>{footer}</>}
            </table> 
        </div>);
});
