import { RangeType } from '../../helpers/enums';
import type { FilterOption } from '../../models/interfaces/IPanelFilter';
import type { ITag } from '@fluentui/react/lib/Pickers';
import type { IPersonaProps } from '@fluentui/react/lib/Persona';
export declare function usePanelFilterController(): {
    state: {
        isOpen: boolean;
        actualFilteredValues: import("../../models/interfaces/IPanelFilter").SelectedItemsMap;
        panelTitle: string;
        availableFilters: import("../../models/interfaces/IPanelFilter").IAvailableFilters[];
    };
    handlers: {
        getDefaultDropdownSelectedKeys: () => string[];
        getDefaultSelectedTag: (keyToFilter: string) => ITag[];
        getDefaultSelectedDate: (keyToFilter: string) => {
            slider: RangeType;
            from: Date;
            to: Date;
        };
        getDefaultSelectedPeople: (keyToFilter: string) => IPersonaProps[];
        onAddOrRemoveToMap: (rootItemKey: string, option: FilterOption) => void;
        onClose: () => void;
        onCancel: () => void;
        onApply: (map: import("../../models/interfaces/IPanelFilter").SelectedItemsMap) => void;
        onOpen: () => void;
        setActualFilteredValues: import("react").Dispatch<import("react").SetStateAction<import("../../models/interfaces/IPanelFilter").SelectedItemsMap>>;
        onChangeTags: (options: FilterOption[]) => (tags: ITag[]) => void;
        onTagSelected: (key: string) => (selectedItem: ITag) => ITag;
        onResolveTagSuggestion: (options: FilterOption[]) => (currentFilter: string, tagList: ITag[]) => {
            name: string;
            key: string | number;
            text: string;
            data?: import("../../models/interfaces/IGridView").IRow;
            selected?: boolean;
            isDateComponent?: boolean;
        }[];
        onRecordDateChange: (key: string) => (from: Date, to: Date, type: RangeType) => void;
        mapOptions: (options: FilterOption[]) => FilterOption[];
        onChangePeople: (key: string) => (items: IPersonaProps[]) => void;
    };
    JSX: {
        FluentPanel: import("react").LazyExoticComponent<import("react").FunctionComponent<import("@fluentui/react/lib/Panel").IPanelProps>>;
        Dropdown: import("react").LazyExoticComponent<import("react").FunctionComponent<import("@fluentui/react/lib/Dropdown").IDropdownProps>>;
        PrimaryButton: import("react").LazyExoticComponent<typeof import("@fluentui/react/lib/Button").PrimaryButton>;
        DefaultButton: import("react").LazyExoticComponent<typeof import("@fluentui/react/lib/Button").DefaultButton>;
        TagPicker: import("react").LazyExoticComponent<import("react").FunctionComponent<import("@fluentui/react/lib/Pickers").ITagPickerProps>>;
    };
};