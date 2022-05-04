import * as React from 'react';
import { GridView } from '../src/GridView/GridView';
import * as json from './MOCK_DATA.json';

type JsonType = typeof json[0];
export function GridViewListExample() {
  const [isGroupingDisabled, setGroupingDisabled] = React.useState(false);
  const [isFilterDisabled, setFilterDisabled] = React.useState(false);

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
            {key: 'Modified', name: 'Modificado', fieldName: 'Modified', minWidth: 100, maxWidth: 200, hideColumn: false, dateConversionOptions: {shouldConvertToLocaleString: true}, renderFilterAs: 'DateSlider'}
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
            }}],
            groupButtonProps: {
              disabled: isGroupingDisabled
            },
            filterButtonProps: {
              disabled: isFilterDisabled
            }
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
          onItemsFiltered={() => setGroupingDisabled(true)}
          onItemsGrouped={() => setFilterDisabled(true)}
          rows={json}
          onItemClick={(i) => console.log(i.Id)}
          />
      </div>
  )
}