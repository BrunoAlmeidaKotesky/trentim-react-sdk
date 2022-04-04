import * as React from 'react';
import { CSSProperties } from 'react';
import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import {GroupPanelContext, ListOptionsContext} from './Contexts';

export const ListOptions = () => {
    const {customButtons, enableFilter, enableSearch, searchKeys, onSearchItem, setIsFilterPanelOpen, defaultButtonsOrder, searchBoxPlaceholder, enableCardView, setRenderAs, enableGrouping} = React.useContext(ListOptionsContext);
    const {onOpen} = React.useContext(GroupPanelContext);

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
        {enableGrouping &&
        <DefaultButton 
            onClick={ _ => onOpen()} styles={{label: {fontSize: 14}, root: {order: defaultButtonsOrder?.group}}} iconProps={{iconName: 'GroupList'}} />}
        {enableCardView && 
        <DefaultButton 
            onClick={_ => setRenderAs()} styles={{label: {fontSize: 14}, root: {order: defaultButtonsOrder?.card}}} iconProps={{iconName: 'GridViewMedium'}} />}
        {customButtons?.length > 0 && customButtons?.map(b => 
            <PrimaryButton key={b?.text} className={b?.className} styles={{label: {fontSize: 14}, root: {order: b?.position ?? 'unset'}}} {...b?.props}>{b?.text}</PrimaryButton>)}
        {(enableSearch && searchKeys) && 
        <TextField 
            onChange={(_, newValue) => onSearchItem(newValue, searchKeys)} placeholder={searchBoxPlaceholder}
            iconProps={{iconName: 'Search'}} styles={{root: {width: 320, order: defaultButtonsOrder?.search}, icon: {color: '[theme: themePrimary, default: #0078D4]'}}} />}
        {enableFilter && 
        <DefaultButton 
            onClick={_ => setIsFilterPanelOpen(true)} styles={{label: {fontSize: 14}, root: {order: defaultButtonsOrder?.filter}}} iconProps={{iconName: 'Filter'}} />}
    </div>);
}