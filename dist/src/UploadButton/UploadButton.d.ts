import * as React from 'react';
import { IButtonStyles } from '@fluentui/react/lib/Button';
export interface IUploadButton {
    accepts: string[];
    onChange: (file: File[]) => void;
    buttonLabel: string;
    buttonIconName?: string;
    styles?: IButtonStyles;
}
/**
 * It's the same as `<PrimaryButton/>`  from  `@fluentui/react` but it can be used as an file upload button.
 *
 * The `onChange` event is called when the user selects one or more files.
 */
export declare const UploadButton: React.MemoExoticComponent<({ accepts, onChange, buttonLabel, buttonIconName, styles }: IUploadButton) => JSX.Element>;
