import { DataList } from "@components/DataList";
import json from "./MOCK_DATA.json";
import { SearchBoxPlugin } from "@plugins/DataList/DataListSearchBoxPlugin";
import { COLUMNS_EX, Project } from './constants';

const searchBoxPlugin = new SearchBoxPlugin<Project>({
  placeholder: 'Buscar', 
  keysToSearch: ['Title', 'DonoProjeto.Title']
});

export default function GridViewListExample() {
  const rows: Project[] = json;
  return (
    <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%"}}>
      <div style={{ width: "80%" }}>
        <DataList<Project>
          rows={rows}
          plugins={[searchBoxPlugin]}
          maxHeight="400px"
          keyUniqueIdentifier="Id"
          columns={COLUMNS_EX}
        />
      </div>
    </div>
  );
}
