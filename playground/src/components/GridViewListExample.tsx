import { useState } from "react";
import { DataList } from "@components/DataList";
import json from "./MOCK_DATA.json";
import { DataListPlugin } from "@plugins/index";
import { BaseType } from "@models/interfaces/IDataList";
import { DataListStore } from "@components/DataList/store";

type JsonType = NonNullable<typeof json[0]>;

export class MyCustomPlugin<T extends BaseType> extends DataListPlugin<T> {
  constructor() {
    super("MyCustomPlugin", "My Custom Plugin", "1.0.0");
  }

  initialize(store: DataListStore<T>): void {
    console.log("MyCustomPlugin initialized", store);
  }

  render = (store: DataListStore<T>) => {
    // Agora você pode acessar a store aqui
    return (
      <div style={{ backgroundColor: "lightblue", padding: "10px", marginBottom: "10px" }}>
        <h3>My Custom Plugin</h3>
        <p>Plugins atuais {store.plugins[0].name}</p>
        <button onClick={() => {
          store.setRows(store.rows.map(i => ({ ...i, Status: "Mudado" })));
        }}>Mudar estado</button>
      </div>
    );
  };
}

export default function GridViewListExample() {
  const [items] = useState<JsonType[]>(json);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        margin: "0 auto",
        height: "100%",
      }}
    >
      <div style={{ width: "80%" }}>
        <DataList<JsonType>
          rows={items}
          plugins={[new MyCustomPlugin()]}
          maxHeight="400px"
          columns={[
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
          ]}
        />
      </div>
    </div>
  );
}
