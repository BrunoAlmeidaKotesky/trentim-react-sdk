import * as React from 'react';
import { GridView } from '../src/GridView/GridView';
import { simpleRow } from './constants';

export function GridViewCardExample() {
    return (
        <div>
          <GridView
            headerOptions={{
              enableSearch: true, enableFilter: true, enableCardView: true,
              searchKey: ['Title', 'Status'],
              searchBoxPlaceholder: "Pesquisar",
              customButtons: [{text: 'Upload', props: {
                onClick: () => console.log('Clicked')
              }}]
            }}
            cardProps={{
              cardTitleKey: 'Title',
              cardSubtitleKey: 'Status',
              rightColumn: {
                keys: [{title: 'NumeroPI'}, {title: 'GerenteProjeto.Title'}]
              },
              circleIndicator: {title: 'Status', color: '#06ad51' }
            }}
            renderAs="card"
            rows={simpleRow}
            hiddenFilterKeys={['NumeroPI']}
            onRowClick={(i) => console.log(i)}
            columns={[
              {key: 'Title', name: 'Nome Do Projeto', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'SearchBox'},
              {key: 'NumeroPI', name: 'PI', fieldName: 'NumeroPI', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'Status', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'GerenteProjeto.Title', name: 'Gerente do Projeto', fieldName: 'GerenteProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'DonoProjeto.Title', name: 'Dono do Projeto', fieldName: 'DonoProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'DataInicio', name: 'Data Início', fieldName: 'DataInicio', minWidth: 100, maxWidth: 200, isResizable: true, dateConversionOptions: {shouldConvertToLocaleString: true}},
            ]}/>
        </div>
    )
}