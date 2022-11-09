import type { TColumn } from "trentim-react-sdk";
import { GridView } from "trentim-react-sdk/GridView";

type IRow = {
  Id: number;
  name: string;
  description: string;
  type: string;
  default?: string;
  required: boolean;
};
interface ITypesTableProps {
  rows: IRow[];
}

export const TypesTable = ({ rows }: ITypesTableProps) => {
  const columns: TColumn<IRow>[] = [
    {key: 'Id', name: '', hideColumn: true, minWidth: 0},
    {key: 'name', name: 'Name', minWidth: 100, fieldName: 'name'},
    {key: 'description', name: 'Description', minWidth: 100, fieldName: 'description'},
    {key: 'type', name: 'Type', minWidth: 100, fieldName: 'type'},
    {key: 'default', name: 'Default', minWidth: 100, fieldName: 'default'},
    {key: 'required', name: 'Required', minWidth: 100, fieldName: 'required'},
  ]

  return (
    <GridView
      columns={columns}
      rows={rows}
      headerOptions={{
        enableFilter: false, enableGrouping: false, enableSearch: false
      }}
    />
  );
};
