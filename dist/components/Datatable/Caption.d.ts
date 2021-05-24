import { IDatatableStyles } from '../../models/interfaces/IDataTable';
interface CaptionProps {
    tableCaption: string;
    styles?: Partial<IDatatableStyles>;
}
export declare function Caption({ styles, tableCaption }: CaptionProps): JSX.Element;
export {};
