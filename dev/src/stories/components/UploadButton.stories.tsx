import * as React from 'react';
import {UploadButton} from 'trentim-react-sdk';
import type { ComponentStory, Meta } from '@storybook/react';

export default {
    title: 'Components/UploadButton',
    component: UploadButton,
} as Meta

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