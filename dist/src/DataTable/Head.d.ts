import type { IDatableColumns } from '../models/interfaces/IDataTable';
import type { IHeaderStyles } from '../models/interfaces/IDatatableStyles';
interface HeadColumnsProps {
    type: 'div' | 'table';
    columns: IDatableColumns[];
    styles: Partial<IHeaderStyles>;
}
export declare function HeadColumns({ columns, styles, type }: HeadColumnsProps): JSX.Element;
export {};
