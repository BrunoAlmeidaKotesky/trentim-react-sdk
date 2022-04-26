import {UploadButton} from '../../src/UploadButton/index';
import type { IUploadButton } from '../../src/models/interfaces/IUploadButton';
import type { ComponentStory, Meta } from '@storybook/react';

export default {
    title: 'Components/UploadButton',
    component: UploadButton,
} as Meta<IUploadButton>

export const Example: ComponentStory<typeof UploadButton> = ({...args}) => {
    return (
        <UploadButton {...args}
            onRenderCustomButton={(handleClick) => {
                return (
                    <button onClick={handleClick}>
                        <span>Upload</span>
                    </button>
                )
            }}/>
    );
}