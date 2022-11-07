
import { Tooltip } from 'trentim-react-sdk/Tooltip';
import type { StoryFn, Meta } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
    title: 'components/Tooltip',
    component: Tooltip,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/react/writing-docs/docs-page
    tags: ['component', 'docsPage'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        children: {
            defaultValue: 'Tooltip',
        
        }
    }
};

export default meta;

type Story = StoryFn<typeof Tooltip>;
export const Demo: Story = () => <Tooltip direction='top_right' content="Tooltip content">Hover me</Tooltip>;