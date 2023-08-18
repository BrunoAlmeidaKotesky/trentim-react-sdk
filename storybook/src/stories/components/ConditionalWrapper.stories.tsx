
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ConditionalWrapper } from 'trentim-react-sdk/ConditionalWrapper';
import { storiesOf } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";

const meta: Meta<typeof ConditionalWrapper> = {
    title: 'Components/ConditionalWrapper',
    component: ConditionalWrapper,
    decorators: [jsxDecorator],
    tags: ['docsPage'],
    argTypes: {
        children: {
            defaultValue: <div>Hello World</div>,
            description: 'The content to wrap'
        },
        wrapper: {
            defaultValue: (children: React.ReactNode) => <div>{children}</div>,
        },
        condition: {
            defaultValue: true,
            control: { type: 'boolean' },
        }
    },
}

export default meta;

type Story = StoryObj<typeof ConditionalWrapper>;
export const Demo: Story = {
    args: {
        children: <span>Hello World</span>,
        wrapper: (children) => <a href="https://github.com/BrunoAlmeidaKotesky/trentim-react-sdk">{children}</a>,
    }
}