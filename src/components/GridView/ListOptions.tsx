import * as React from 'react';
import { CSSProperties, useMemo } from 'react';
import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import {GroupPanelContext, ListOptionsContext} from './Contexts';
import { IconClickCaller } from '@helpers/enums';

export const ListOptions = () => {
    const { 
        customButtons, enableFilter, enableSearch, searchKeys, onSearchItemChange, 
        setIsFilterPanelOpen, defaultButtonsOrder, searchBoxPlaceholder, enableCardView, 
        setRenderAs, enableGrouping, onClickSearchIcon, onFilterIconClick, onGroupIconClick, onSearchBoxClick,
        cardButtonProps, filterButtonProps, searchBoxProps, groupButtonProps
    } = React.useContext(ListOptionsContext);
    const {onOpen} = React.useContext(GroupPanelContext);

    const omittedButtonProps = useMemo(() => {
        delete cardButtonProps?.['onClick'];
        delete filterButtonProps?.['onClick'];
        delete groupButtonProps?.['onClick'];
        return {
            cardButtonProps,
            filterButtonProps,
            groupButtonProps
        }
    }, [filterButtonProps, filterButtonProps, groupButtonProps, searchBoxProps]);

    const omittedTextFieldProps = useMemo(() => {
        delete searchBoxProps?.['placeholder'];
        delete searchBoxProps?.['onKeyDown'];
        delete searchBoxProps?.['onFocus'];
        delete searchBoxProps?.['onBlur'];
        return searchBoxProps;
    }, [filterButtonProps, filterButtonProps, groupButtonProps, searchBoxProps]);

    const defaultStyles = useMemo<Record<string, CSSProperties>>(() =>({
        container: {
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            justifyContent: 'end',
            margin: '8px 0'
        }
    }), []);

    return (
    <div data-class-name="grid-view-header-container" style={defaultStyles.container}>
        {enableGrouping &&
        <DefaultButton
            {...omittedButtonProps?.groupButtonProps}
            onClick={_ => {
                if(!!onGroupIconClick)
                onGroupIconClick();
                onOpen();
            }} styles={{label: {fontSize: 14}, root: {order: defaultButtonsOrder?.group}}} iconProps={{iconName: 'GroupList'}} />}
        {enableCardView &&
        <DefaultButton
            {...omittedButtonProps?.cardButtonProps}
            onClick={_ => setRenderAs()} styles={{label: {fontSize: 14}, root: {order: defaultButtonsOrder?.card}}} iconProps={{iconName: 'GridViewMedium'}} />}
        {customButtons?.length > 0 && customButtons?.map((b, idx) => {
            switch (b?.renderAs) {
                case 'PrimaryButton':
                    return (<PrimaryButton key={b?.text + "_" + idx} className={b?.className} styles={{label: {fontSize: 14}, root: {order: b?.position ?? 'unset'}}} {...b?.props}>{b?.text}</PrimaryButton>);
                case 'DefaultButton': 
                    return (<DefaultButton key={b?.text + "_" + idx} className={b?.className} styles={{label: {fontSize: 14}, root: {order: b?.position ?? 'unset'}}} {...b?.props}>{b?.text}</DefaultButton>);
                case 'CustomButton': 
                    return b?.onRenderCustomButton(b?.props) ?? null;
                default: return (<PrimaryButton key={b?.text + "_" + idx} className={b?.className} styles={{label: {fontSize: 14}, root: {order: b?.position ?? 'unset'}}} {...b?.props}>{b?.text}</PrimaryButton>);
            }
        })}
        {(enableSearch && searchKeys) && 
        <TextField
            {...omittedTextFieldProps}
            placeholder={searchBoxPlaceholder}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onClickSearchIcon(IconClickCaller.ENTER, e?.currentTarget?.value, searchKeys);
                }
            }}
            onFocus={onSearchBoxClick}
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
            {...omittedButtonProps?.filterButtonProps}
            onClick={_ => {
                if(!!onFilterIconClick) 
                    onFilterIconClick();
                setIsFilterPanelOpen(true);
            }}
            styles={{label: {fontSize: 14}, root: {order: defaultButtonsOrder?.filter}}} iconProps={{iconName: 'Filter'}} />}
    </div>);
}