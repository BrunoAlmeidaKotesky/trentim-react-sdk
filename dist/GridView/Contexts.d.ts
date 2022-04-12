import type { IListOptionsProps } from "../models/interfaces/IListOptions";
import type { IPanelFilterProps } from '../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../models/interfaces/IGroupPanel';
import type { IRow } from "../models/interfaces/IGridView";
export declare const ListOptionsContext: import("react").Context<IListOptionsProps<IRow<import("../models/interfaces/IGridView").BaseType>>>;
export declare const FilterPanelContext: import("react").Context<IPanelFilterProps>;
export declare const GroupPanelContext: import("react").Context<IGroupPanel>;
