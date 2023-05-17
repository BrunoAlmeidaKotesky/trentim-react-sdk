import { DataList } from "@components/DataList";
import json from "./MOCK_DATA.json";
import { FilterPlugin, SearchBoxPlugin } from "@plugins/DataList";
import { COLUMNS_EX, Project } from './constants';

const rows: Project[] = json;
const searchBoxPlugin = new SearchBoxPlugin<Project>({
  placeholder: 'Buscar', 
  keysToSearch: ['Title', 'DonoProjeto.Title']
});
const filterPlugin = new FilterPlugin<Project>({
  filterText: 'Filtrar por',
  excludeColumns: ['Title', 'DonoProjeto.Title']
});

export default function DataListEx() {
  return (
    <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%"}}>
      <div style={{ width: "80%" }}>
        <DataList<Project>
          rows={rows}
          plugins={[searchBoxPlugin, filterPlugin]}
          maxHeight="400px"
          keyUniqueIdentifier="Id"
          columns={COLUMNS_EX}
        />
      </div>
    </div>
  );
}
