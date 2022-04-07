import type { IGridListProps, BaseType } from '../models/interfaces/IGridView';
/** An enhanced version of the `DetailsList` component, with automatic filtering, sorting, grouping, properties searching with many other features to customize.
 *
 * The component can also be rendered as a collection of `Card` components, with the same functionalities.
 */
export declare function GridView<T extends BaseType>(props: IGridListProps<T>): JSX.Element;
