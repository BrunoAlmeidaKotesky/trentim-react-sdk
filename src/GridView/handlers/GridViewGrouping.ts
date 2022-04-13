import { Utils } from '../../helpers/Utils';
import type { IGroup } from "@fluentui/react/lib/DetailsList";
import type { ApplyGrouping } from "../../models/types/Common";

export class GridViewGrouping {
    
    static onApplyGrouping: ApplyGrouping = ({actualRows, cols, setGroups, setIsGroupPanel, emptyGroupLabel, onItemsGrouped}) => (keyAndName) => {
        const defaultEmptyLabel = emptyGroupLabel ?? 'Sem itens definidos';
        const selectedKey = keyAndName?.split(';')?.[0];
        if (!keyAndName || selectedKey === '@NONE') {
            setIsGroupPanel(false);
            return setGroups(undefined);
        }
        const groups: IGroup[] = [...actualRows]
            .sort((a, b) => (a?.Id as number) - (b?.Id as number))
            .reduce<IGroup[]>((acc, cur) => {
                const [key, name] = keyAndName?.split(';');
                let valueFromKey = Utils.getNestedObject(cur, key.split('.')) as string ?? defaultEmptyLabel;
                const isKeyADate = cols.find(i => i?.key === key)?.dateConversionOptions?.shouldConvertToLocaleString;
                if (isKeyADate)
                    valueFromKey = Utils.convertIsoToLocaleString(
                        valueFromKey, 
                        cols.find(i => i?.key === key)?.dateConversionOptions?.locales, 
                        cols.find(i => i?.key === key)?.dateConversionOptions?.formatOptions);
                
                const group: IGroup = {
                    key: valueFromKey,
                    name: `${name}: ${valueFromKey}`,
                    startIndex: 0,
                    count: 1,
                }
                if (acc.length === 0) {
                    acc.push(group)
                    return acc
                } else if (!acc?.map(i => i?.key).includes(valueFromKey)) {
                    const count = acc?.filter(g => g?.key === valueFromKey).length;
                    const startIndex = acc[acc.length - 1]?.startIndex + acc[acc.length - 1]?.count;
                    acc.push({
                        key: valueFromKey,
                        name: `${name}: ${valueFromKey}`,
                        startIndex,
                        count
                    });
                }
                const lastAcc = acc[acc.length - 1];
                if (lastAcc?.key === valueFromKey)
                    acc[acc.length - 1].count++;
                return acc
            }, []);
        setGroups(groups);
        setIsGroupPanel(false);
        if(!!onItemsGrouped) 
            onItemsGrouped({selectedKey, setGroups});
    }
}