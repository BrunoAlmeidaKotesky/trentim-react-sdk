import * as React from 'react';
import { Tooltip, ITooltipProps } from '../../src/Tooltip/index';
import { TooltipDirection } from '../../src/Tooltip/constants';
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
                    TooltipDirection.BOTTOM_CENTER,
                    TooltipDirection.BOTTOM_LEFT,
                    TooltipDirection.BOTTOM_RIGHT,
                    TooltipDirection.RIGHT,
                    TooltipDirection.LEFT,
                    TooltipDirection.TOP_LEFT,
                    TooltipDirection.TOP_RIGHT,
                    TooltipDirection.TOP_CENTER
                ],
                defaultValue: TooltipDirection.BOTTOM_CENTER
            },
            defaultValue: TooltipDirection.BOTTOM_CENTER
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