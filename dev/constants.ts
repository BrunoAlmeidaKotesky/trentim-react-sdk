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
                        title: 'Relatorio XYZ_XPTO',
                        status: 'Revisão',
                    },
                    {
                        key: 'file',
                        title: 'Apresentacao GHI',
                        status: 'Validação',
                    },
                    {
                        key: 'file',
                        title: 'Máquina ABC_DEF',
                        status: 'Completo',
                    }
                ]
            },
            {
                key: 'code',
                title: 'Subpasta de Documentos',
                items: [
                    {
                        key: 'scss',
                        title: 'WebPart.module.scss',
                        status: 'Revisão',
                    }, {
                        key: 'ts',
                        title: 'WebPart.ts',
                        status: 'Validação',
                    }]
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