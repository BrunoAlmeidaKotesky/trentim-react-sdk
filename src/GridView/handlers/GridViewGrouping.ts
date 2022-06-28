import { Utils } from '../../helpers/Utils';
import { GroupOrder } from '../../helpers/enums';
import type { IGroup } from "@fluentui/react/lib/DetailsList";
import type { ApplyGrouping, BuildGroups } from "../../models/interfaces/IGrouping";
import type { IRow } from '../../models/interfaces/IGridView';

export class GridViewGrouping {

    static onApplyGrouping: ApplyGrouping = ({ 
        setGroups, setIsGroupPanel, onItemsGrouped, onGroupPanelCancel, groupByFields, startIndex, level, items, emptyGroupLabel, setActualRows, setIsGrouping, cols
    }) => {
        const selectedKey = groupByFields?.[0]?.name?.split(';')?.[0];
        const selectedName = groupByFields?.[0]?.name?.split(';')?.[1];
        if (!groupByFields?.[0] || selectedKey === '@NONE') {
            setIsGroupPanel(false);
            setIsGrouping({active: false, key: null, name: null});
            if (!!onGroupPanelCancel)
                onGroupPanelCancel('not-selected');
            if (!!onItemsGrouped)
                onItemsGrouped({ selectedKey, setGroups });
            return setGroups(undefined);
        }
        setIsGrouping({active: true, key: selectedKey, name: selectedName});
        const {groups, updatedItemsOrder} = GridViewGrouping.buildGroups({emptyGroupLabel, groupByFields, items, level, startIndex, cols});
        setGroups(groups);
        setActualRows(updatedItemsOrder);
        setIsGroupPanel(false);
        if (!!onItemsGrouped)
            onItemsGrouped({ selectedKey, setGroups });
    }

    /** Original code from: https://github.com/pnp/sp-dev-fx-controls-react/blob/master/src/controls/listView/ListView.tsx 
     * 
     * This method supports multiple grouping levels and multiple groups, but the GridView component it self does not implement it yet.
    */
    static buildGroups: BuildGroups = ({ emptyGroupLabel, groupByFields, items, level, startIndex, cols }) => {
        const defaultEmptyLabel = emptyGroupLabel ?? 'Sem itens definidos';

        // Group array which stores the configured grouping
        let groups: IGroup[] = [];
        let updatedItemsOrder: IRow[] = [];
        // Check if there are groupby fields set
        if (groupByFields) {
            const groupField = groupByFields[level];
            const groupKey = groupField?.name?.split(';')[0];
            const keyDateConverterOptions = cols?.find(i => i?.key === groupKey)?.dateConversionOptions;
            const isKeyADate = keyDateConverterOptions?.shouldConvertToLocaleString;
            const groupFieldName = groupField?.name?.split(';')[1];
            // Check if grouping is configured
            if (groupByFields && groupByFields.length > 0) {
                // Create grouped items object
                const groupedItems = {};
                items.forEach(item => {
                    let groupName = Utils.getNestedObject(item, groupKey) as string ?? defaultEmptyLabel;
                    if (isKeyADate)
                        groupName = Utils.convertIsoToLocaleString(groupName, keyDateConverterOptions?.locales, keyDateConverterOptions?.formatOptions);
                    // Check if the group name exists
                    // Check if group name is a number, this can cause sorting issues
                    if (typeof groupName === "number") 
                        groupName = `${groupName}.`;
                    
                    // Check if current group already exists
                    if (typeof groupedItems[groupName] === "undefined") {
                        // Create a new group of items
                        groupedItems[groupName] = [];
                    }
                    groupedItems[groupName].push(item);
                });

                // Sort the grouped items object by its key
                const sortedGroups = {};
                let groupNames = Object.keys(groupedItems);
                groupNames = groupField.order === GroupOrder.ascending ? groupNames.sort() : groupNames.sort().reverse();
                groupNames.forEach((key: string) => {
                    sortedGroups[key] = groupedItems[key];
                });

                // Loop over all the groups
                for (const groupItems in sortedGroups) {
                    // Retrieve the total number of items per group
                    const totalItems = groupedItems[groupItems].length;
                    // Create the new group
                    const group: IGroup = {
                        name: groupItems === "undefined" ? defaultEmptyLabel : `${groupFieldName}: ${groupItems}`,
                        key: groupItems === "undefined" ? defaultEmptyLabel : groupItems,
                        startIndex: startIndex,
                        count: totalItems,
                        isCollapsed: true
                    };
                    // Check if child grouping available
                    if (groupByFields[level + 1]) {
                        // Get the child groups
                        const subGroup = GridViewGrouping.buildGroups({
                            emptyGroupLabel,
                            items: groupedItems[groupItems], 
                            groupByFields,
                            startIndex,
                            level: level + 1,
                            cols
                        });
                        subGroup?.updatedItemsOrder?.forEach((item) => {
                            updatedItemsOrder.push(item);
                        });
                        group.children = subGroup.groups;
                    } else {
                        // Add the items to the updated items order array
                        groupedItems[groupItems].forEach((item) => {
                            updatedItemsOrder.push(item);
                        });
                    }
                    // Increase the start index for the next group
                    startIndex = startIndex + totalItems;
                    groups.push(group);
                }
            }
        }

        return {
            updatedItemsOrder,
            groups
        };
    }
}