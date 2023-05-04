import { DataList } from "@components/DataList";
import json from "./MOCK_DATA.json";
import { SearchBoxPlugin } from "@plugins/DataList/DataListSearchBoxPlugin";
import { COLUMNS_EX, JsonType } from './constants';

const searchBoxPlugin = new SearchBoxPlugin<JsonType>({
  placeholder: 'Buscar', 
  keysToSearch: ['Title', 'DonoProjeto.Title']
});

export default function GridViewListExample() {
  return (
    <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%"}}>
      <div style={{ width: "80%" }}>
        <DataList<JsonType>
          rows={json}
          plugins={[searchBoxPlugin]}
          maxHeight="400px"
          columns={COLUMNS_EX}
        />
      </div>
    </div>
  );
}
