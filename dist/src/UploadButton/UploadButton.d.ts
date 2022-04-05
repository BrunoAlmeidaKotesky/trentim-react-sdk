import * as React from 'react';
import { IButtonStyles } from '@fluentui/react/lib/Button';
export interface IUploadButton {
    accepts: string[];
    onChange: (file: File[]) => void;
    buttonLabel: string;
    buttonIconName?: string;
    styles?: IButtonStyles;
}
export declare const UploadButton: React.MemoExoticComponent<({ accepts, onChange, buttonLabel, buttonIconName, styles }: IUploadButton) => JSX.Element>;
