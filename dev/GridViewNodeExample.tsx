import * as React from 'react';
import { GridView } from '../src/GridView/GridView';
import { nodeItem } from './constants';

export function GridViewNodeExample() {
    return (
        <div>
          <GridView
            headerOptions={{
              enableFilter: true,
              enableSearch: true,
              searchKey: 'name'
            }}
            columns={[{ key: 'responsavel', minWidth: 120, name: 'Responsável', fieldName: 'responsavel' }]}
            rowsAsNode={nodeItem}
            listType="folder"
          />
        </div>
    );
}