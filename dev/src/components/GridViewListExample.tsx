import {useState, useRef} from 'react';
import { GridView } from '@components/GridView';
import { Tooltip } from '@components/Tooltip';
import type { IGridViewRefHandler } from '@models/index';
import json from './MOCK_DATA.json';

type JsonType = NonNullable<typeof json[0]>;
export function GridViewListExample() {
  const [items, ] = useState<JsonType[]>(json);
  const ref = useRef<IGridViewRefHandler<JsonType>>(null);
  //const [currentGridRows, setCurrentGridRows] = useState<JsonType[]>([]);
  const [isGroupingDisabled, setGroupingDisabled] = useState(false);
  const [isFilterDisabled, setFilterDisabled] = useState(false);
  
  return (
      <div style={{width: '80%'}}>
        <GridView<JsonType>
          ref={ref}
          //getCurrentRows={r => setCurrentGridRows(r)}
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
          //initialGroupedBy={{key: 'Status', name: 'Status'}}
          headerOptions={{
            leftHeaderSpace: <span style={{
              fontWeight: '700',
              flexWrap: 'wrap',
              flex: 'auto',
              textAlign: 'initial',
              paddingLeft: '8px'
            }}>Central de Projetos</span>,
            enableSearch: true, enableFilter: true,
            enableGrouping: true,
            searchKeys: ['Title', 'Status', 'NumeroPI'],
            searchBoxPlaceholder: "Pesquisar",
            searchBoxProps: {
              styles: { root: { width: 200 }}
            },
            customButtons: [{text: 'Upload', props: {
              onClick: () => console.log('Clicked')
            }}],
            groupButtonProps: {
              disabled: isGroupingDisabled
            },
            filterButtonProps: {
              disabled: isFilterDisabled
            },
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
          onFilterIconClick={() => {console.log("Before Filter")}}
          onGroupIconClick={() => {console.log("Before Group")}}
          onRenderItemColumn={(i, _idx, col) => {
            if(col.key === 'Title')
              return <Tooltip content={<div>AAAA</div>} direction='top_right'><span>{i?.Title}</span></Tooltip>
            return <span>{i[col.key]}</span>
          }}
          onSearchBoxClick={() => {console.log("Before Search")}}
          //onItemsFiltered={() => setGroupingDisabled(true)}
          //onItemsGrouped={() => setFilterDisabled(true)}
          rows={items}
          onItemClick={(i) => console.log(i.Id)}
          />
      </div>
  )
}