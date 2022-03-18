import type { INode } from "../src/models/interfaces/IGridView";

export const nodeItem: INode[] = [
    {
        key: 'file',
        title: 'Pasta de Documentos 01',
        children: [
            {
                key: 'file',
                title: 'Subpasta de Documentos',
                items: [
                    {
                        Id: 2,
                        file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Arquivo.xlsx' },
                        responsavel: 'José da Silva'
                    },
                    {
                        Id: 3,
                        file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Arquivo2.xlsx' },
                        responsavel: 'José da Silva'
                    },
                    {
                        Id: 4,
                        file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Arquivo.xlsx' },
                        responsavel: 'José da Silva'
                    },
                ]
            },
            {
                key: 'file',
                title: 'Subpasta de Documentos 2',
                children: [
                    {
                        key: 'file',
                        title: 'Documentos CLT',
                        items: [
                            {
                                Id: 6,
                                file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Nested.xlsx' },
                                responsavel: 'Pessoa 3'
                            }
                        ]
                    },
                    {
                        key: 'file',
                        title: 'Documentos CLT 2',
                        items: [
                            {
                                Id: 7,
                                file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Demo.xlsx' },
                                responsavel: 'Pessoa 1'
                            },
                            {
                                Id: 8,
                                file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Teste.xlsx' },
                                responsavel: 'Pessoa 2'
                            }
                        ],
                    }
                ]
            }]
    },
    {
        key: 'file',
        title: 'Pasta de Documentos 02',
        children: [
            {
                key: 'file',
                title: 'Subpasta de Documentos',
                items: [
                    {
                        Id: 13,
                        file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Teste.xlsx' },
                        status: 'Revisão'
                    }
                ]
            }
        ]
    }
]

export const singleNodeItem: INode[] = [
    { key: 'code', title: 'Pasta de Documentos 01', children: [] }
];

export const simpleRow = [{
    "GerenteProjeto": {
        "Title": "Rodrigo"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Bruno"
    },
    "UnidadeDeNegocio@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/UnidadeDeNegocio",
    "UnidadeDeNegocio": {
        "Id": 1,
        "Title": "Unidade SJC"
    },
    "Id": 1,
    "ID": 1,
    "Title": "Projeto Teste 1",
    "Modified": "2022-02-04T17:25:19Z",
    "Created": "2022-02-04T17:24:09Z",
    "DataInicio": "2022-02-04T08:00:00Z",
    "Status": "Escolha 1",
    "NumeroPI": "3,14",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "Rodrigo"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Bruno"
    },
    "UnidadeDeNegocio@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/UnidadeDeNegocio",
    "UnidadeDeNegocio": {
        "Id": 2,
        "Title": "Unidade SJC"
    },
    "Id": 2,
    "ID": 2,
    "Title": "Projeto Teste 2",
    "Modified": "2022-03-04T17:25:29Z",
    "Created": "2022-06-011T17:24:09Z",
    "DataInicio": "2022-09-14T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "3,1415",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "Lucas"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Rafael"
    },
    "UnidadeDeNegocio@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/UnidadeDeNegocio",
    "UnidadeDeNegocio": {
        "Id": 3,
        "Title": "Unidade SJC"
    },
    "Id": 3,
    "ID": 3,
    "Title": "Outro Teste",
    "Modified": "2023-02-04T17:25:19Z",
    "Created": "2022-03-04T17:24:09Z",
    "DataInicio": "2022-08-06T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "3,1415",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "George"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Daniel"
    },
    "UnidadeDeNegocio@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/UnidadeDeNegocio",
    "UnidadeDeNegocio": {
        "Id": 2,
        "Title": "Unidade SDA"
    },
    "Id": 4,
    "ID": 4,
    "Title": "Arquivo.xlsx",
    "Modified": "2022-02-04T17:25:19Z",
    "Created": "2022-03-04T17:24:09Z",
    "DataInicio": "2021-01-04T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "3,1415",
    "DescricaoPI": "null",
    "Setor": "null"
}
]