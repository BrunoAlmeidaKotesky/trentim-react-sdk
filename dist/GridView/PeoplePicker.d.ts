import { IPersonaProps } from '@fluentui/react/lib/Persona';
interface IPeoplePickerProps {
    label: string;
    people: IPersonaProps[];
    onChangePeople: (items: IPersonaProps[]) => void;
    defaultSelectedItems?: IPersonaProps[];
}
export declare const PeoplePicker: (props: IPeoplePickerProps) => JSX.Element;
export {};
