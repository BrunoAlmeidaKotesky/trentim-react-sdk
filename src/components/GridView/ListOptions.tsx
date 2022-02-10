import * as React from 'react';
import { CSSProperties } from 'react';
import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import {ListOptionsContext} from './GridView';

export const ListOptions = () => {
    const {customButtons, enableFilter, enableSearch, searchKey, onSearchItem, setIsFilterPanelOpen} = React.useContext(ListOptionsContext);

    const defaultStyles: Record<string, CSSProperties> = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            justifyContent: 'end',
            margin: '8px 0'
        }
    }

    return (
    <div data-class-name="grid-view-header-container" style={defaultStyles.container}>
        <DefaultButton 
            onClick={ _ => ''} styles={{label: {fontSize: 14}}} iconProps={{iconName: 'GroupList'}} />
        <DefaultButton 
            onClick={ _ => ''} styles={{label: {fontSize: 14}}} iconProps={{iconName: 'ViewList'}} />
        {customButtons?.length > 0 && customButtons?.map(b => 
        <PrimaryButton className={b?.className} styles={{label: {fontSize: 14}}} {...b?.props}>{b?.text}</PrimaryButton>)}
        {(enableSearch && searchKey) && 
        <TextField 
            onChange={(_, newValue) => onSearchItem(newValue, searchKey)}
            iconProps={{iconName: 'Search'}} styles={{root: {width: 320}, icon: {color: '[theme: themePrimary, default: #0078D4]'}}} />}
        {enableFilter && 
        <DefaultButton 
            onClick={_ => setIsFilterPanelOpen(true)} styles={{label: {fontSize: 14}}} iconProps={{iconName: 'Filter'}} />}
    </div>);
}