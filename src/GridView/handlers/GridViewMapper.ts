import { SelectedItemsMap } from "../../models/interfaces/IPanelFilter";

/**Internal class to be used when using map data operations on the GridView component context as a whole. */
export class GridViewMapper {

    /**
     * Creates a new map collection with the first level keys being the real keys, and the values being the maps with selected maps (with key and values) 
     * @example 
     * ```ts
     * const selectedItemsMap = new Map([['0_User.Title', data], ['1_User.Title', data]]);
     * const groupedMap = GridViewMapper.groupMaps(selectedItemsMap);
     * //It'll be: key: 'User.Title', value: [Map([['0_User.Title', data], ['1_User.Title', data]])]
     * ```
     **/
    static groupMaps(selectedItems: SelectedItemsMap): Map<string, SelectedItemsMap> {
        const mapsByKeyKind = new Map<string, SelectedItemsMap>();
        selectedItems.forEach((_, key, map) => {
            let keyName = key.split('_')[1];
            if(!keyName && !key.includes('_'))
                keyName = key;
            const doesNotHaveKey = !mapsByKeyKind.has(keyName);
            const sameMapsList = [...map].filter(d => d[0] === key);
            if(doesNotHaveKey) 
                mapsByKeyKind.set(keyName, new Map(sameMapsList));
            else {
                const thisKindMap = mapsByKeyKind.get(keyName);
                sameMapsList.forEach(d => thisKindMap?.set(d[0], d[1]));
            } 
        });
        return mapsByKeyKind;
    }
}