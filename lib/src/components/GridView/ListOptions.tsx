import { CSSProperties, useMemo, useContext } from 'react';
import { DefaultButton, IButtonStyles, ITextFieldProps, PrimaryButton, TextField } from '@fluentui/react'
import {GroupPanelContext, ListOptionsContext} from '@components/GridView/Contexts';
import { IconClickCaller } from '@helpers/enums';

export const ListOptions = () => {
    const { 
        customButtons, enableFilter, enableSearch, searchKeys, onSearchItemChange, 
        setIsFilterPanelOpen, defaultButtonsOrder, searchBoxPlaceholder, enableGrouping, onClickSearchIcon, onFilterIconClick, 
        onGroupIconClick, onSearchBoxClick, filterButtonProps, searchBoxProps, groupButtonProps, leftHeaderSpace
    } = useContext(ListOptionsContext);
    const {onOpen} = useContext(GroupPanelContext);

    const omittedButtonProps = useMemo(() => {
        delete filterButtonProps?.['onClick'];
        delete groupButtonProps?.['onClick'];
        return {
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

    const mergeButtonStyles = (obj: IButtonStyles, order: number): IButtonStyles => {
        const label = {fontSize: 14, ...obj?.label as {}};
        const root = {order: order ?? 'unset', ...obj?.root as {}};
        return {...obj, label, root};
    }

    const mergeTxtStyles = (): ITextFieldProps['styles'] => {
        const btnWidth = omittedTextFieldProps?.styles?.['root']?.width || 320;
        const root = {width: btnWidth, order: defaultButtonsOrder?.search, ...omittedTextFieldProps?.styles?.['root']};
        const icon = {color: '[theme: themePrimary, default: #0078D4]', ...omittedTextFieldProps?.styles?.['icon']};
        return {...omittedTextFieldProps, root, icon};
    }

    return (
    <div data-class-name="grid-view-header-container" style={defaultStyles.container}>
        {!!leftHeaderSpace && leftHeaderSpace}
        {enableGrouping &&
        <DefaultButton
            {...omittedButtonProps?.groupButtonProps}
            onClick={_ => {
                if(!!onGroupIconClick)
                    onGroupIconClick();
                onOpen();
            }} styles={mergeButtonStyles(omittedButtonProps?.groupButtonProps, defaultButtonsOrder?.group)} iconProps={{iconName: 'GroupList'}} />}
        {customButtons?.length > 0 && customButtons?.map((b, idx) => {
            switch (b?.renderAs) {
                case 'PrimaryButton':
                    return (<PrimaryButton 
                        key={b?.text + "_" + idx} className={b?.className} 
                        styles={mergeButtonStyles(b?.props?.styles, b?.position)} {...b?.props}>{b?.text}</PrimaryButton>);
                case 'DefaultButton': 
                    return (<DefaultButton 
                        key={b?.text + "_" + idx} className={b?.className} 
                        styles={mergeButtonStyles(b?.props?.styles, b?.position)} {...b?.props}>{b?.text}</DefaultButton>);
                case 'CustomButton': 
                    return b?.onRenderCustomButton(b?.props) ?? null;
                default: throw new Error("[TRS] - GridView - Invalid renderAs value for custom button");
            }
        })}
        {(enableSearch && searchKeys) && 
        <TextField
            placeholder={searchBoxPlaceholder} styles={mergeTxtStyles()} 
            onKeyDown={(e) => {
                if (e.key !== 'Enter') return; 
                onClickSearchIcon(IconClickCaller.ENTER, e?.currentTarget?.value, searchKeys);
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
            {...omittedTextFieldProps} />}
        {enableFilter &&
        <DefaultButton
            onClick={_ => {
                if(!!onFilterIconClick) 
                    onFilterIconClick();
                setIsFilterPanelOpen(true);
            }}
            styles={mergeButtonStyles(omittedButtonProps?.filterButtonProps, defaultButtonsOrder?.filter)} iconProps={{iconName: 'Filter'}} 
            {...omittedButtonProps?.filterButtonProps}/>}
    </div>);
}