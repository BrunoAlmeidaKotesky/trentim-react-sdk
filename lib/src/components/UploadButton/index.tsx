//@ts-ignore
import * as React from 'react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { memo, useRef } from 'react';
import type { IUploadButton } from '@models/interfaces/IUploadButton';
import type { IIconProps } from '@fluentui/react/lib/Icon';

/**
 * @deprecated - **This component will be removed on the next major release, please use the new `useFileUpload` hook instead.**
 * 
 * It's the same as `<PrimaryButton/>` or `<DefaultButton />`  from  `@fluentui/react` but it can be used as an file upload button.
 * 
 * The `onChange` event is called when the user selects one or more files.
 */
export const UploadButton = memo<IUploadButton>(
({ accepts, onChange, buttonLabel, buttonIconName, styles, renderAs = 'PrimaryButton', onRenderCustomButton }) => {
        const hiddenInput = useRef<HTMLInputElement>(null);
        const handleClick = (_ev: any) => {
            hiddenInput.current.click();
        };
        const handleChange = (event: any) => {
            const fileUploaded = Array.from((event.target as HTMLInputElement).files);
            onChange(fileUploaded);
            event.target.value = null;
        };

        const renderButton = () => {
            const defaultProps = {
                styles,
                iconProps: buttonIconName ? { iconName: buttonIconName } : {} as IIconProps,
                text: buttonLabel,
                onClick: handleClick
            }
            const defaultRender = (<PrimaryButton {...defaultProps}>{buttonLabel}</PrimaryButton>);
            switch (renderAs) {
                case 'PrimaryButton':
                    return defaultRender;
                case 'DefaultButton':
                    return (
                        <DefaultButton
                            styles={styles}
                            iconProps={buttonIconName ? { iconName: buttonIconName } : {}}
                            text={buttonLabel}
                            onClick={handleClick}>
                            {buttonLabel}
                        </DefaultButton>);
                case 'CustomButton':
                    return onRenderCustomButton(handleClick);
                default: return defaultRender;
            }
        }

        return (<>
            {renderButton()}
            <input
                data-is-focusable="false"
                style={{ display: 'none' }}
                multiple
                ref={hiddenInput}
                accept={accepts?.join(',')}
                type="file"
                onChange={handleChange} />
        </>);
});