import type { TColumn } from "@models/interfaces/IDataList";
import type { ILifecycleStages } from "@models/interfaces/ILifecycleProgressProps";
import type json from "./MOCK_DATA.json";

export const simpleRow = [
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
        "Id": 1,
        "Title": "Unidade SJC"
    },
    "Id": 1,
    "ID": 1,
    "Title": "Projeto Teste 1",
    "Modified": "2022-02-04T17:25:19Z",
    "Created": "2022-02-04T17:24:09Z",
    "DataInicio": "2022-03-28T08:00:00Z",
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
        "Title": "Roberto"
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
    "Id": 7,
    "ID": 7,
    "Title": "Exemplo de unidade",
    "Modified": "2023-06-04T17:25:19Z",
    "Created": "2022-07-04T17:24:09Z",
    "DataInicio": "2022-03-31T08:00:00Z",
    "Status": null,
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
    "Id": 5,
    "ID": 5,
    "Title": "Outro Title.xlsx",
    "Modified": "2022-02-04T17:25:19Z",
    "Created": "2022-03-04T17:24:09Z",
    "DataInicio": "2021-01-04T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "9,121",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "George"
    },
    "DonoProjeto@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/DonoProjeto",
    "DonoProjeto": {
        "Title": "Bruno"
    },
    "UnidadeDeNegocio@odata.navigationLinkUrl": "Web/Lists(guid'1aad42f6-3394-4129-8c88-7a5bd84e7e60')/Items(1)/UnidadeDeNegocio",
    "UnidadeDeNegocio": {
        "Id": 2,
        "Title": "Unidade SDA"
    },
    "Id": 6,
    "ID": 6,
    "Title": "Item dois.xlsx",
    "Modified": "2022-02-04T17:25:19Z",
    "Created": "2022-03-04T17:24:09Z",
    "DataInicio": "2021-01-04T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "2,17",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "Hugo"
    },
    "DonoProjeto": {
        "Title": "Daniel"
    },
    "UnidadeDeNegocio": {
        "Id": 2,
        "Title": "Unidade SDA"
    },
    "Id": 8,
    "ID": 8,
    "Title": "Processamento.xlsx",
    "Modified": "2022-02-04T17:25:19Z",
    "Created": "2022-03-04T17:24:09Z",
    "DataInicio": "2021-01-04T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "8,21455",
    "DescricaoPI": "null",
    "Setor": "null"
},
{
    "GerenteProjeto": {
        "Title": "Dev"
    },
    "DonoProjeto": {
        "Title": "Dev"
    },
    "UnidadeDeNegocio": {
        "Id": 1,
        "Title": "Unidade SJC"
    },
    "TipoDeProjeto": {
        "odata.type": "SP.Data.TiposProjetoListItem",
        "odata.id": "82d08978-26dc-4ec7-9eb3-3a2ab21f7854",
        "Id": 1,
        "Title": "Tipo 01"
    },
    "Id": 10,
    "ID": 10,
    "Title": "Test Subject",
    "Modified": "2022-02-14T18:16:09Z",
    "Created": "2022-02-04T17:24:09Z",
    "DataInicio": "2022-02-04T08:00:00Z",
    "Status": "Escolha 1",
    "NumeroPI": "3,14",
    "DescricaoPI": null,
    "Setor": null
},
{
    "GerenteProjeto": {
        "Title": "Dev"
    },
    "DonoProjeto": {
        "Title": "Dev"
    },
    "UnidadeDeNegocio": {
        "Id": 3,
        "Title": "Unidade RJ"
    },
    "TipoDeProjeto": {
        "odata.type": "SP.Data.TiposProjetoListItem",
        "odata.id": "a0ab4a8f-7b2a-49b7-9348-a3069d4ae7d9",
        "Id": 3,
        "Title": "Tipo 03"
    },
    "Id": 11,
    "ID": 11,
    "Title": "Outro Projeto",
    "Modified": "2022-02-14T18:18:31Z",
    "Created": "2022-02-14T18:16:47Z",
    "DataInicio": "2022-02-07T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "3,1415",
    "DescricaoPI": "PI",
    "Setor": null
},
{
    "GerenteProjeto": {
        "Title": "Dev Agraria"
    },
    "DonoProjeto": {
        "Title": "Dev Agraria"
    },
    "UnidadeDeNegocio": {
        "Id": 1,
        "Title": "Unidade SJC"
    },
    "TipoDeProjeto": {
        "odata.type": "SP.Data.TiposProjetoListItem",
        "odata.id": "72c94dcb-8d6e-42ef-976c-978c4a98929c",
        "Id": 1,
        "Title": "Tipo 01"
    },
    "Id": 12,
    "ID": 12,
    "Title": "Teste Power Automate",
    "Modified": "2022-02-17T18:25:23Z",
    "Created": "2022-02-17T18:25:23Z",
    "DataInicio": "2022-02-08T08:00:00Z",
    "Status": "Escolha 2",
    "NumeroPI": "32123",
    "DescricaoPI": "D",
    "Setor": "a"
}
];

export interface SubStage {
    name: string;
    description: string;
    completed: boolean;
    active: boolean;
}

export const mockStages: ILifecycleStages<SubStage[]>[] = [
    {
        active: false, 
        label: "Um texto muito grande blablablablablas", 
        data: [
            {name: '1A. Business Case', description: 'Lorem Ipsum', active: false, completed: false}, 
            {name: '1B. Revisão Comitê Executivo', description: 'Lorem Ispum', active: false, completed: true},
            {name: '1C. Revisão Comitê Financeiro', description: 'Lorem Ipsum', active: false, completed: true},
        ], 
        completed: true,
    },
    {
        active: false,
        label: "Seleção",
        completed: true,
        data: [
            {name: '2A. Seleção de Projetos', description: 'Lorem Ipsum', active: false, completed: true},
            {name: '2B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: true}, 
        ],
    },
    {
        active: false,
        label: "Planejamento",
        completed: true,
        data: [
            {name: '3A. Planejamento', description: 'Lorem Ipsum', active: false, completed: true},
        ],
    },
    {
        active: true,
        label: "Execução",
        completed: false,
        data: [
            {name: '4A. Execução de Projetos', description: 'Lorem Ipsum', active: true, completed: true},
            {name: '4B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: true},
        ],
        showCallout: true
    },
    {
        active: false,
        label: "Encerramento",
        completed: false,
        data: [
            {name: '5A. Encerramento', description: 'Lorem Ipsum', active: false, completed: true},
            {name: '5B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: true}
        ],
        showCallout: true
    },
    {
        active: false,
        label: "Conclusão",
        completed: false,
        data: [
            {name: '6A. Conclusão', description: 'Lorem Ipsum', active: false, completed: false},
            {name: '6B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: false}
        ],
    },
    {
        active: false,
        label: "Cancelamento",
        completed: false,
        data: [
            {name: '7A. Cancelamento', description: 'Lorem Ipsum', active: false, completed: false},
            {name: '7B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: false}
        ],
    }
];

export const mockStages2 = [
    {
        "label": "1. Concepção",
        "data": {
            "stages": [
                {
                    "StageName": "1A - Solicitação",
                    "StageDescription": "",
                    "StageStatus": 1,
                    "active": false,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": "Um nova solicitação foi criada. Por favor complete todas as informações obrigatórias e clique em \"Enviar\".",
                    "StageOrder": 0,
                    "StageStateDescription": "In Progress (Waiting for Input)",
                    "StageId": "dd31e3d8-9212-ed11-8945-00155d88724f"
                },
                {
                    "StageName": "1B - Aprovação da Área",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 1,
                    "StageStateDescription": "Not Started",
                    "StageId": "1a83e32a-9312-ed11-b597-00155d88724d"
                }
            ],
            "LastModifiedDate": "/Date(1668610574030)/",
            "PhaseDescription": "Solicitação de um projeto/ideia para ser analisada"
        },
        "active": false,
        "completed": true,
        "showCallout": true
    },
    {
        "label": "2. Priorização",
        "data": {
            "stages": [
                {
                    "StageName": "2A - Business Case",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 2,
                    "StageStateDescription": "Not Started",
                    "StageId": "6e42bb0c-2d13-ed11-867c-00155d88c343"
                },
                {
                    "StageName": "2B - Revisão Comitê",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 3,
                    "StageStateDescription": "Not Started",
                    "StageId": "36983a57-2e13-ed11-b7b1-00155d884040"
                },
                {
                    "StageName": "2C - Ordem de Investimento",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 4,
                    "StageStateDescription": "Not Started",
                    "StageId": "8f8a15e4-fc20-ed11-8362-00155d88ba3a"
                }
            ],
            "LastModifiedDate": "/Date(1668610563673)/",
            "PhaseDescription": "Priorização dos projetos que estão aderentes aos objetivos estratégicos da empresa"
        },
        "active": false,
        "completed": true,
        "showCallout": false
    },
    {
        "label": "3. Planejamento",
        "data": {
            "stages": [
                {
                    "StageName": "3A - Termo de Abertura",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 5,
                    "StageStateDescription": "Not Started",
                    "StageId": "6f8667a8-2e13-ed11-b7b1-00155d884040"
                },
                {
                    "StageName": "3B - Revisão Escopo",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 8,
                    "StageStateDescription": "Not Started",
                    "StageId": "556c623c-3013-ed11-91eb-00155d883845"
                }
            ],
            "LastModifiedDate": "/Date(1668610563673)/",
            "PhaseDescription": "Planejamento do escopo de um projeto"
        },
        "active": false,
        "completed": true,
        "showCallout": false
    },
    {
        "label": "4. Execução",
        "data": {
            "LastModifiedDate": "/Date(1668610563673)/",
            "PhaseDescription": "Execução e monitoria do projeto",
            "stages": [
                {
                    "StageName": "4A - Execução e Monitoria",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": true,
                    "completed": true,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 9,
                    "StageStateDescription": "Not Started",
                    "StageId": "2748c61c-3b13-ed11-b15b-00155d885949"
                }
            ]
        },
        "active": true,
        "completed": false,
        "showCallout": false
    },
    {
        "label": "5. Pos Audit",
        "data": {
            "LastModifiedDate": "/Date(1668610563673)/",
            "PhaseDescription": "Etapa de revisão e validação do encerramento do projeto",
            "stages": [
                {
                    "StageName": "5A - Termo de Encerramento",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": false,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 10,
                    "StageStateDescription": "Not Started",
                    "StageId": "b30afbde-3c13-ed11-9877-00155d888e4a"
                }
            ]
        },
        "active": false,
        "completed": false,
        "showCallout": false
    },
    {
        "label": "6. Encerrado",
        "data": {
            "LastModifiedDate": "/Date(1668610563673)/",
            "PhaseDescription": "Etapa final do ciclo de vida do projeto",
            "stages": [
                {
                    "StageName": "6A - Encerrado",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": false,
                    "StageCompletionDate": null,
                    "StageInformation": null,
                    "StageOrder": 11,
                    "StageStateDescription": "Not Started",
                    "StageId": "fae46ab1-3d13-ed11-9877-00155d888e4a"
                }
            ]
        },
        "active": false,
        "completed": false,
        "showCallout": false
    },
    {
        "label": "7. Finalizar",
        "data": {
            "LastModifiedDate": "/Date(1668610563673)/",
            "PhaseDescription": "Etapa final do ciclo de vida do projeto",
            "stages": [
                {
                    "StageName": "7A - Finalizar",
                    "StageDescription": "",
                    "StageStatus": 0,
                    "active": false,
                    "completed": false,
                },
            ]
        },
        "active": false,
        "completed": false,
        "showCallout": false
    }
]

export type JsonType = NonNullable<typeof json[0]>;
export const COLUMNS_EX: TColumn<JsonType>[] = [
    {
      key: "Title",
      name: "Nome Do Projeto",
      fieldName: "Title",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "NumeroPI",
      name: "PI",
      fieldName: "NumeroPI",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "Status",
      name: "Status",
      fieldName: "Status",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "GerenteProjeto.Title",
      name: "Gerente do Projeto",
      //fieldName: "GerenteProjeto.Title",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "DonoProjeto.Title",
      name: "Dono do Projeto",
      //fieldName: "DonoProjeto.Title",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "DataInicio",
      name: "Data Início",
      //fieldName: "DataInicio",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      dateConversionOptions: { shouldConvertToLocaleString: true },
    },
    {
      key: "Modified",
      name: "Modificado",
      fieldName: "Modified",
      minWidth: 100,
      maxWidth: 200,
      hideColumn: false,
      dateConversionOptions: { shouldConvertToLocaleString: true },
    },
  ]