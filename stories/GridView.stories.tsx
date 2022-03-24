import * as React from 'react';
import { GridView } from '../src/GridView/index';
import {simpleRow} from '../dev/constants';

export default {
    title: 'GridView',
    component: GridView,
    argTypes: {
        rows: {
            type: 'array',
            defaultValue: simpleRow
        }
    }
}

export const ListGridView = (args) => (
    <GridView
        headerOptions={{
            enableSearch: true, enableFilter: true,
            searchKey: 'Title',
            customButtons: [{
                text: 'Upload', props: {
                    onClick: () => console.log('Clicked')
                }
            }]
        }}
        renderAs="list"
        {...args}
        hiddenFilterKeys={['NumeroPI']}
        onRowClick={(i) => console.log(i)}
        columns={[
            { key: 'Title', name: 'Nome Do Projeto', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'SearchBox' },
            { key: 'NumeroPI', name: 'PI', fieldName: 'NumeroPI', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'Status', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'GerenteProjeto.Title', name: 'Gerente do Projeto', fieldName: 'GerenteProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'DonoProjeto.Title', name: 'Dono do Projeto', fieldName: 'DonoProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'DataInicio', name: 'Data Início', fieldName: 'DataInicio', minWidth: 100, maxWidth: 200, isResizable: true, dateConvertionOptions: { shouldConvertToLocaleString: true } },
        ]} />)