import type { ApplyGrouping, BuildGroups } from "../../models/interfaces/IGrouping";
export declare class GridViewGrouping {
    static onApplyGrouping: ApplyGrouping;
    /** Original code from: https://github.com/pnp/sp-dev-fx-controls-react/blob/master/src/controls/listView/ListView.tsx
     *
     * This method supports multiple grouping levels and multiple groups, but the GridView component it self does not implement it yet.
    */
    static buildGroups: BuildGroups;
}
