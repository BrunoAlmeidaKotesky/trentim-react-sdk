import type { IButtonStyles } from "@fluentui/react/lib/Button";
import type { ICustomButtonConfig } from "../types/Common";

export interface IUploadButton extends Omit<ICustomButtonConfig, 'onRenderCustomButton'> {
    /**An array of accepted mime-types. */
    accepts: string[];
    /**A callback function that triggers when the file is "uploaded/dropped".*/
    onChange: (files: File[]) => void;
    /**The label for the upload button.*/
    buttonLabel: string;
    /**The iconName of the button. */
    buttonIconName?: string;
    /**The styles for the button. */
    styles?: IButtonStyles;
    /**A function to render any custom component as the button. 
     * 
     * The `onClick` from the callback function needs to be passed to the component. */
    onRenderCustomButton?: (onClick: (ev?: any) => void) => JSX.Element;
}