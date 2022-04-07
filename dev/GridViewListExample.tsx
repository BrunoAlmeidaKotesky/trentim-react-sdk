import * as React from 'react';
import { GridView } from '../src/GridView/GridView';
import * as json from './MOCK_DATA.json';

type JsonType = typeof json[0];
export function GridViewListExample() {

    return (
        <div style={{width: '80%'}}>
          <GridView<JsonType>
            headerOptions={{
              enableSearch: true, enableFilter: true,
              enableGrouping: true,
              searchKeys: ['Title', 'Status', 'NumeroPI'],
              searchBoxPlaceholder: "Pesquisar",
              customButtons: [{text: 'Upload', props: {
                onClick: () => console.log('Clicked')
              }}]
            }}
            styles={{contentContainer: {maxHeight: 500, overflowY: 'auto'}}}
            renderAs="list"
            rows={json}
            hiddenFilterKeys={['NumeroPI']}
            onItemClick={(i) => console.log(i.Id)}
            columns={[
              {key: 'Title', name: 'Nome Do Projeto', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'SearchBox'},
              {key: 'NumeroPI', name: 'PI', fieldName: 'NumeroPI', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'Status', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 200, isResizable: true},
              {key: 'GerenteProjeto.Title', name: 'Gerente do Projeto', fieldName: 'GerenteProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'PeoplePicker'},
              {key: 'DonoProjeto.Title', name: 'Dono do Projeto', fieldName: 'DonoProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'PeoplePicker'},
              {key: 'DataInicio', name: 'Data Início', fieldName: 'DataInicio', minWidth: 100, maxWidth: 200, isResizable: true, dateConversionOptions: {shouldConvertToLocaleString: true}, renderFilterAs: 'DateSlider'},
              {key: 'Modified', name: 'Modificado', fieldName: 'Modified', minWidth: 100, maxWidth: 200, hideColumn: true}
            ]}/>
        </div>
    )
}