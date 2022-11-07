
import { IFrame } from 'trentim-react-sdk/IFrame';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IFrame> = {
    title: 'components/IFrame',
    component: IFrame,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/react/writing-docs/docs-page
    tags: ['component', 'docsPage'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

type Story = StoryObj<typeof IFrame>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        src: "https://trentim.com",
        fallback: <div>Loading...</div>,
    },
};