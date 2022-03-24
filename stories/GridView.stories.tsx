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
        },
        searchKey: {
            type: 'string',
            defaultValue: 'Title'
        },
        enableSearch: {
            type: 'boolean',
            defaultValue: true
        },
        enableFilter: {
            type: 'boolean',
            defaultValue: true
        },
        customButtons: {
            type: 'array',
            defaultValue: [{
                text: 'Upload', props: {
                    onClick: () => console.log('Clicked')
                }
            }]
        },
        onRowClick: {
            action: 'onRowClick'
        }

    }
}


export const ListGridView = (args) => {
    const headerOptions = {
        enableSearch: args.enableSearch,
        enableFilter: args.enableFilter,
        customButtons: args.customButtons,
        searchKey: args.searchKey
    }
    return(
    <GridView
        headerOptions={headerOptions}
        renderAs="list"
        {...args}
        onRowClick={args.onRowClick}
        hiddenFilterKeys={['NumeroPI']}
        columns={[
            { key: 'Title', name: 'Nome Do Projeto', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true, renderFilterAs: 'SearchBox' },
            { key: 'NumeroPI', name: 'PI', fieldName: 'NumeroPI', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'Status', name: 'Status', fieldName: 'Status', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'GerenteProjeto.Title', name: 'Gerente do Projeto', fieldName: 'GerenteProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'DonoProjeto.Title', name: 'Dono do Projeto', fieldName: 'DonoProjeto.Title', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'DataInicio', name: 'Data Início', fieldName: 'DataInicio', minWidth: 100, maxWidth: 200, isResizable: true, dateConvertionOptions: { shouldConvertToLocaleString: true } },
        ]} />);
}