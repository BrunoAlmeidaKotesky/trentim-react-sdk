
import { GridView } from 'trentim-react-sdk';
import {Meta, ArgTypes, Args} from '@storybook/react/types-6-0';
import {
  Title,
  DescriptionType,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

const description = `
An enhanced version of the DetailsList component, with automatic filtering, sorting, grouping, properties searching with many other features to customize.
The component can also be rendered as a collection of Card components, with the same functionalities.
`;

const argTypes: Partial<ArgTypes<Args>> = {
    rows: {
        defaultValue: [],
        description: 'The rows to be displayed in the grid or the cards.',
        name: 'rows',
        //@ts-ignore
        type: 'array'
    },
    searchKeys: {
        type: 'array' as 'string',
        defaultValue: ['Title']
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
        type: 'array' as 'string',
        defaultValue: [{
            text: 'Upload', props: {
                onClick: () => console.log('Clicked')
            }
        }]
    },
    onRowClick: {
        action: 'onRowClick'
    },
    cardProps: {
        defaultValue: {
            cardTitleKey: 'Title',
            cardSubtitleKey: 'NumeroPI',
            enableUserSelect: true,
            circleIndicator: true,
            height: 200,
            rightColumn: {
                keys: [{title: 'NumeroPI'}, {title: 'GerenteProjeto.Title'}, {title: 'DataInicio', dateConversionOptions: {
                 shouldConvertToLocaleString: true
               }}]
            }
        }

    }
}

export default {
    title: 'Components/GridView',
    component: GridView,
    argTypes,
    parameters: {
        docs: {
          page: () => (
            <>
            <Title/>
            <Description type={DescriptionType.INFO} markdown={description}/>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            </>
          ),
        },
      },
} as Meta;


export const ListGridView = (args) => {
    const headerOptions = {
        enableSearch: args.enableSearch,
        enableFilter: args.enableFilter,
        customButtons: args.customButtons,
        searchKeys: args.searchKeys
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

export const CardGridView = (args) => {
    const headerOptions = {
        enableSearch: args.enableSearch,
        enableFilter: args.enableFilter,
        customButtons: args.customButtons,
        searchKeys: args.searchKeys
    }
    return(
    <GridView
        headerOptions={headerOptions}
        renderAs="card"
        {...args}
        cardProps={{
            cardTitleKey: 'Title',
            cardSubtitleKey: 'NumeroPI',
            enableUserSelect: true,
            circleIndicator: true,
            height: 200,
            rightColumn: {
                keys: [{title: 'NumeroPI'}, {title: 'GerenteProjeto.Title'}, {title: 'DataInicio', dateConversionOptions: {
                 shouldConvertToLocaleString: true
               }}]
            }
        }}
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