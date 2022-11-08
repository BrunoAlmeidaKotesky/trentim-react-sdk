
import type { Meta, StoryObj } from '@storybook/react';
import { IFrame } from './IFrame';

const meta: Meta<typeof IFrame> = {
    title: 'components/IFrame',
    component: IFrame,
    tags: ['docsPage'],
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/react/writing-docs/docs-page
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

type Story = StoryObj<typeof IFrame>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Demo: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args

};