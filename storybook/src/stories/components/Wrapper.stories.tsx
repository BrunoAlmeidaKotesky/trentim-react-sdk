
import { Meta, StoryFn } from '@storybook/react';
import {ConditionalWrapper} from 'trentim-react-sdk/ConditionalWrapper';

const meta: Meta<typeof ConditionalWrapper>  = {
    title: 'Components/ConditionalWrapper',
    component: ConditionalWrapper,
    tags: ['component', 'docsPage']
}

export default meta;

export const Demo:StoryFn<typeof ConditionalWrapper> = () => <ConditionalWrapper condition={true} wrapper={children => <div>{children}</div>}><div>Content</div></ConditionalWrapper>