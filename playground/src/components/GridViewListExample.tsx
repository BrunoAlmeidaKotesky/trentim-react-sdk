import React, { useState } from "react";
import { DataList } from "@components/DataList";
import json from "./MOCK_DATA.json";
import { DataListPlugin } from "@plugins/index";
import { BaseType } from "@models/interfaces/IDataList";
import { DataListStore } from "@models/interfaces/DataListStore";
import { ITextFieldProps, TextField } from "@fluentui/react/lib/TextField";

type JsonType = NonNullable<typeof json[0]>;

export type SearchBoxConfig = {
  /**@default Search */
  placeholder?: string;
  containerStyles?: React.CSSProperties;
  textFieldStyles?: ITextFieldProps['styles']
}

function SearchBox<T extends BaseType>(props: SearchBoxConfig & { store: DataListStore<T> }) {
  const containerStyles: React.CSSProperties = props?.containerStyles ?? {
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    marginRight: '12px'
  }

  const onSearch = <T extends BaseType>(store: DataListStore<T>, type: 'click' | 'keydown') => (e: any) => {
    if (type === 'keydown' && e.key !== 'Enter') return;
    const inputValue = (e?.currentTarget?.parentElement?.childNodes[0] as HTMLInputElement)?.value;
    if (inputValue) {
      store.setTempRows('allRows', store.rows);
      store.setRows(store.rows.filter((i) => i.Title.includes(inputValue)));
    }
    else {
      store.setRows(store.getTempRows('allRows') || store.rows);
    }
  }

  return (
    <div style={containerStyles}>
      <TextField
        styles={props?.textFieldStyles} placeholder={props?.placeholder ?? 'Search'}
        iconProps={{
          iconName: 'Search',
          style: { pointerEvents: "auto", cursor: "pointer", position: 'static', padding: 8, backgroundColor: '#e2d7cab5' },
          onKeyDown: onSearch(props?.store, 'keydown'),
          onClick: onSearch(props?.store, 'click')
        }} />
    </div>
  )
}

export class SearchBoxPlugin<T extends BaseType> extends DataListPlugin<T> {
  constructor(private props?: SearchBoxConfig | null) {
    super("SearchBoxPlugin", "SearchBoxPlugin", "1.0.0");
  }

  initialize(store: DataListStore<T>): void {
    store.setTempRows('searchPlugin', []);
    console.log("SearchBoxPlugin initialized");
  }

  render = (store: DataListStore<T>) => <SearchBox store={store} {...this.props} />
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
          plugins={[new SearchBoxPlugin()]}
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
