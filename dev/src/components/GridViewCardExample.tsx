import { GridView } from 'trentim-react-sdk';
import { simpleRow } from './constants';

export function GridViewCardExample() {
    return (
        <div style={{width: '80%'}}>
          <GridView
            headerOptions={{
              enableSearch: true, enableFilter: true, enableCardView: true, enableGrouping: true,
              searchKeys: ['Title', 'Status'],
              searchBoxPlaceholder: "Pesquisar",
              customButtons: [{text: 'Upload', props: {
                onClick: () => console.log('Clicked')
              }}]
            }}
            cardProps={{
              cardTitleKey: 'Title',
              cardSubtitleKey: 'Status',
              rightColumn: {
                 keys: [{title: 'NumeroPI'}, {title: 'GerenteProjeto.Title'}, {title: 'DataInicio', dateConversionOptions: {
                  shouldConvertToLocaleString: true
                }}]
              },
              circleIndicator: {title: 'Status', color: '#06ad51' }
            }}
            renderAs="card"
            rows={simpleRow}
            hiddenFilterKeys={['NumeroPI']}
            onItemClick={(i) => console.log(i)}
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