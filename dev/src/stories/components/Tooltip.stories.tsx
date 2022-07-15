import * as React from 'react';
import { Tooltip, ITooltipProps } from 'trentim-react-sdk';
import {PrimaryButton} from '@fluentui/react';
import type { ComponentStory, Meta } from '@storybook/react';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        children: { control: 'text' },
        direction: {
            control: {
                type: 'select',
                options: [
                    'bottom_center',
                    'bottom_left',
                    'bottom_right',
                    'right',
                    'left',
                    'top_left',
                    'top_right',
                    'top_center'
                ],
                defaultValue: 'top_center'
            },
            defaultValue: 'top_center'
        },
        classKey: {
            control: {
                type: 'text',
                placeholder: 'Descriptive identifier for the root class',
                defaultValue: 'identifier'
                
            },
            defaultValue: 'identifier'
        }
    }
} as Meta<ITooltipProps>;

export const Example: ComponentStory<typeof Tooltip> = (args) =>
(<div style={{height: '100vh', width: '100%'}}>
    <div style={{display: 'grid', placeItems: 'center', height: '100%'}}>
        <Tooltip {...args} 
            content={<span>Texto de exemplo</span>}><PrimaryButton>Passa o mouse</PrimaryButton></Tooltip>
    </div>
</div>);