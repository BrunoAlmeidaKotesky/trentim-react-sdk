import * as React from 'react';
import { GridView } from '../src/GridView/GridView';
import { realColumnEx, realRowsEx } from './constants';

export function GridRealExample() {
    return (
        <div>
          <GridView
            headerOptions={{
              enableSearch: true, enableFilter: true,
              enableGrouping: true,
              searchKeys: ['Title', 'Status'],
              searchBoxPlaceholder: "Pesquisar",
              customButtons: [{text: 'Upload', props: {
                onClick: () => console.log('Clicked')
              }}]
            }}
            renderAs="list"
            rows={realRowsEx}
            hiddenFilterKeys={['NumeroPI']}
            onItemClick={(i) => console.log(i)}
            columns={realColumnEx as any}/>
        </div>
    )
}