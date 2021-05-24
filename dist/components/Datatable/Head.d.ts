import { IDatableColumns, IDatatableStyles } from '../../models/interfaces/IDataTable';
interface HeadColumnsProps {
    columns: IDatableColumns[];
    styles: Partial<IDatatableStyles>;
}
export declare function HeadColumns({ columns, styles }: HeadColumnsProps): JSX.Element;
export {};
