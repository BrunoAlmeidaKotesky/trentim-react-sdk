import * as React from 'react';
import { CSSProperties } from 'react';
import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import {GroupPanelContext, ListOptionsContext} from './Contexts';
import { IconClickCaller } from '../helpers/enums';

export const ListOptions = () => {
    const { customButtons, enableFilter, enableSearch, searchKeys, onSearchItemChange, 
            setIsFilterPanelOpen, defaultButtonsOrder, searchBoxPlaceholder, enableCardView, 
            setRenderAs, enableGrouping, onClickSearchIcon} = React.useContext(ListOptionsContext);
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
        {customButtons?.length > 0 && customButtons?.map((b, idx) => 
            <PrimaryButton key={b?.text + "_" + idx} className={b?.className} styles={{label: {fontSize: 14}, root: {order: b?.position ?? 'unset'}}} {...b?.props}>{b?.text}</PrimaryButton>)}
        {(enableSearch && searchKeys) && 
        <TextField
            placeholder={searchBoxPlaceholder}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onClickSearchIcon(IconClickCaller.ENTER, e?.currentTarget?.value, searchKeys);
                }
            }}
            onBlur={e => onSearchItemChange(e.target.value, searchKeys)} 
            iconProps={{
                iconName: 'Search',
                style: { pointerEvents: "auto", cursor: "pointer", position: 'static', padding: 8, backgroundColor: '#e2d7cab5'},
                onClick: (e) => {
                    const inputValue = (e?.currentTarget?.parentElement?.childNodes[0] as HTMLInputElement)?.value;
                    if(inputValue)
                        onClickSearchIcon(IconClickCaller.CLICK);
                }
            }} 
            styles={{root: {width: 320, order: defaultButtonsOrder?.search}, icon: {color: '[theme: themePrimary, default: #0078D4]'}}} />}
        {enableFilter && 
        <DefaultButton 
            onClick={_ => setIsFilterPanelOpen(true)} styles={{label: {fontSize: 14}, root: {order: defaultButtonsOrder?.filter}}} iconProps={{iconName: 'Filter'}} />}
    </div>);
}