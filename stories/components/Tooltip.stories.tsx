import * as React from 'react';
import { Tooltip, ITooltipProps, TooltipDirection } from '../../src/Tooltip/index';
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
                    TooltipDirection.TOP_RIGHT
                ]
            }
        }
    }
} as Meta<ITooltipProps>;

export const Example: ComponentStory<typeof Tooltip> = (args) =>
(<div style={{height: '100vh', width: '100%'}}>
    <div style={{display: 'grid', placeItems: 'center', height: '100%'}}>
        <Tooltip {...args} 
            classKey={'story'} content={<span>Texto de exemplo</span>}><button>Passa o mouse</button></Tooltip>
    </div>
</div>);