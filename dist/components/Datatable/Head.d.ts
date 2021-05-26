import { IDatableColumns } from '../../models/interfaces/IDataTable';
import { IHeaderStyles } from '../../models/interfaces/IDatatableStyles';
interface HeadColumnsProps {
    columns: IDatableColumns[];
    styles: Partial<IHeaderStyles>;
}
export declare function HeadColumns({ columns, styles }: HeadColumnsProps): JSX.Element;
export {};
