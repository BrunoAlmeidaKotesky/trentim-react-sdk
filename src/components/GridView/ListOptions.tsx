import * as React from 'react';
import { CSSProperties } from 'react';
import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import { IListOptionsProps } from '../../models/interfaces/IGridView';

export const ListOptions = (props: IListOptionsProps = {enableFilter: true, enableSearch: true, customButtons: []}) => {
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
        {props?.customButtons?.length > 0 && props?.customButtons?.map(b => 
        <PrimaryButton className={b?.className} styles={{label: {fontSize: 14}}} {...b?.props}>{b?.text}</PrimaryButton>)}
        {(props?.enableSearch && props?.searchKey) && 
        <TextField 
            onChange={(_, newValue) => props?.onSearchItem(newValue, props?.searchKey)}
            iconProps={{iconName: 'Search'}} styles={{root: {width: 320}, icon: {color: '[theme: themePrimary, default: #0078D4]'}}} />}
        {props?.enableFilter && 
        <DefaultButton 
            onClick={ _ => ''} styles={{label: {fontSize: 14}}} iconProps={{iconName: 'Filter'}} />}
    </div>);
}