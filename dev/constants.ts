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
   {key: 'code', title: 'Pasta de Documentos 01', status: 'Único', children: []} 
];