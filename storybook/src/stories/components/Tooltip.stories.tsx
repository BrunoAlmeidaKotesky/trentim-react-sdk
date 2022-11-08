
import { Tooltip } from 'trentim-react-sdk/Tooltip';
import type { StoryFn, Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
    title: 'components/Tooltip',
    component: Tooltip,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/react/writing-docs/docs-page
    tags: ['docsPage'],
    argTypes: {
        enableParentOverflow: {
            control: {
                type: 'boolean',
                default: false,
            }
        },
        children: {
            control: {
                type: 'text',
                default: <div>Hover!!!</div>,
            }
        },
        content: <div style={{padding: 8}}>🤨</div>,
        direction: {
            options: ['top_center', 'top_right', 'top_left', 'bottom_right', 'bottom_left', 'bottom_center', 'left', 'right'],
            defaultValue: 'right',
            description: 'The direction of the tooltip',
            control: {
                type: 'select',
            }
        }
    } 
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

type Story = StoryObj<typeof Tooltip>;
export const Demo: Story =  {
};