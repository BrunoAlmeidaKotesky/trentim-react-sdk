import { INode } from "../src/models/interfaces/IGridView";

export const nodeItem: INode[] = [
    {
        key: 'code',
        title: 'Pasta de Documentos 01',
        children: [
            {
                key: 'code',
                title: 'Subpasta de Documentos',
                items: [
                    {
                        key: 'file',
                        file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Arquivo.xlsx' },
                        responsavel: 'José da Silva'
                    },
                    {
                        key: 'file',
                        file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Arquivo2.xlsx' },
                        responsavel: 'José da Silva'
                    },
                    {
                        key: 'file',
                        file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Arquivo.xlsx' },
                        responsavel: 'José da Silva'
                    },
                ]
            },
            {
                key: 'code',
                title: 'Subpasta de Documentos 2',
                children: [
                    {
                        key: 'code',
                        title: 'Documentos CLT',
                        items: [
                            {
                                key: 'file',
                                file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Nested.xlsx' },
                                responsavel: 'Pessoa 3'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                key: 'code',
                                file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Demo.xlsx' },
                                responsavel: 'Pessoa 1'
                            },
                            {
                                key: 'code',
                                file: { fileType: 'xlsx', iconUrl: 'https://static2.sharepointonline.com/files/fabric/assets/item-types/16/one.svg', key: 'fileType', name: 'Teste.xlsx' },
                                responsavel: 'Pessoa 2'
                            }
                        ],
                    }
                ]
            }]
    },
    {
        key: 'code',
        title: 'Pasta de Documentos 02',
        children: [
            {
                key: 'code',
                title: 'Subpasta de Documentos',
                items: [
                    {
                        key: 'file',
                        title: 'Relatorio XYZ_XPTO',
                        status: 'Revisão'
                    }
                ]
            }]
    }
]

export const singleNodeItem: INode[] = [
    { key: 'code', title: 'Pasta de Documentos 01', status: 'Único', children: [] }
];

export const simpleRow = [{
    "GerenteProjeto": {
        "Title": "Dev"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Dev"
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
        "Title": "Dev"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Dev"
    },
    "UnidadeDeNegocio@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/UnidadeDeNegocio",
    "UnidadeDeNegocio": {
        "Id": 2,
        "Title": "Unidade SJC"
    },
    "Id": 2,
    "ID": 2,
    "Title": "Projeto Teste 2",
    "Modified": "2022-02-04T17:25:19Z",
    "Created": "2022-03-04T17:24:09Z",
    "DataInicio": "2022-02-04T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "3,1415",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "Dev"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Dev"
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
    "DataInicio": "2022-02-04T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "3,1415",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "Dev"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Dev"
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
    "DataInicio": "2022-02-04T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "3,1415",
    "DescricaoPI": "null",
    "Setor": "null"
}
]