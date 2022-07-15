import * as React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import {Card, ICardProps} from 'trentim-react-sdk';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        height: {type: 'number'},
        width: {type: 'number'},
        onCardClick: {
            type: 'function',
            action: {
                handles: 'onCardClick',
            }
        },
        onClickDownButton: {
            type: 'function',
            action: {
                handles: 'onClickDownButton',
            }
        },
    },
    args: {
        width: '420px',
        cardSubtitle: 'Subtitle',
        cardTitle: 'Title',
        cardRightColInformation: {
            values: [{title: 'Information', style: { background: 'lightblue'}}],
        },
        circleIndicator: {
            title: 'Error',
            color: 'red'
        },
        enableUserSelect: true,
        height: '150px',
        iconName: 'info',
    }
} as Meta<ICardProps>;

export const Example: ComponentStory<typeof Card> = ({...args}) => 
    (<div style={{width: '100%', height: '100vh'}}><Card {...args}/></div>);