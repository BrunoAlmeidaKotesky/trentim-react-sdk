import * as React from 'react';
import { GridView } from '../src/GridView/GridView';
import * as json from './MOCK_DATA.json';

type JsonType = typeof json[0];
export function GridViewListExample() {
  const [data, setData] = React.useState<JsonType[]>(json);

  React.useEffect(() => {
    setTimeout(() => {
      setData(p => p.filter(i => i.Status === 'Procedente'));
    }, 6500);
  }, []);

  return (
      <div style={{width: '80%'}}>
        <GridView<JsonType>
          columns={[
            {key: 'Title', name: 'Nome Do Projeto', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'SearchBox'},
            {key: 'NumeroPI', name: 'PI', fieldName: 'NumeroPI', minWidth: 100, maxWidth: 200, isResizable: true},
            {key: 'Status', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 200, isResizable: true},
            {key: 'GerenteProjeto.Title', name: 'Gerente do Projeto', fieldName: 'GerenteProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'PeoplePicker'},
            {key: 'DonoProjeto.Title', name: 'Dono do Projeto', fieldName: 'DonoProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'PeoplePicker'},
            {key: 'DataInicio', name: 'Data Início', fieldName: 'DataInicio', minWidth: 100, maxWidth: 200, isResizable: true, dateConversionOptions: {shouldConvertToLocaleString: true}, renderFilterAs: 'DateSlider'},
            {key: 'GerenteProjeto.Nested.Value.Another.MoreNest', name: 'Modificado', fieldName: 'GerenteProjeto.Nested.Value.Another.MoreNest', minWidth: 100, maxWidth: 200, hideColumn: true}
          ]}
          hiddenFilterKeys={['NumeroPI']}
          // initialGroupedBy={{key: 'Status', name: 'Status'}}
          headerOptions={{
            enableSearch: true, enableFilter: true,
            enableGrouping: true,
            searchKeys: ['Title', 'Status', 'NumeroPI'],
            searchBoxPlaceholder: "Pesquisar",
            customButtons: [{text: 'Upload', props: {
              onClick: () => console.log('Clicked')
            }}]
          }}
          panelChildren={{
            group: {
              top: <div>AAA</div>,
              footer: <div>BBB</div>
            }
          }}
          onGroupPanelCancel={by => console.log(by)}
          onFilterPanelCancel={by => console.log(by)}
          styles={{contentContainer: {maxHeight: 500, overflowY: 'auto'}}}
          renderAs="list"
          onFilterIconClick={() => {console.log("Before Filter")}}
          onGroupIconClick={() => {console.log("Before Group")}}
          onSearchBoxClick={() => {console.log("Before Search")}}
          rows={data}
          onItemClick={(i) => console.log(i.Id)}
          />
      </div>
  )
}