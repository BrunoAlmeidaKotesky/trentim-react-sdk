import * as React from 'react';
import { IButtonStyles, PrimaryButton } from '@fluentui/react/lib/Button';
import { memo, useRef } from 'react';

export interface IUploadButton {
    accepts: string[];
    onChange: (file: File[]) => void;
    buttonLabel: string;
    buttonIconName?: string;
    styles?: IButtonStyles;
}

export const UploadButton = memo(({ accepts, onChange, buttonLabel, buttonIconName, styles }: IUploadButton) => {
    const hiddenInput = useRef<HTMLInputElement>(null);
    const handleClick = (_: any) => {
        hiddenInput.current.click();
    };
    const handleChange = (event: any) => {
        const fileUploaded = Array.from((event.target as HTMLInputElement).files);
        onChange(fileUploaded);
        event.target.value = null;
    };
    return (<>
        <PrimaryButton
            styles={styles}
            iconProps={buttonIconName ? { iconName: buttonIconName } : {}}
            text={buttonLabel}
            onClick={handleClick}>
            {buttonLabel}
        </PrimaryButton>
        <input
            data-is-focusable="false"
            style={{ display: 'none' }}
            ref={hiddenInput}
            accept={accepts?.join(',')}
            type="file"
            onChange={handleChange} />
    </>);
});