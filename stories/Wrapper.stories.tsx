import * as React from 'react';
import {ConditionalWrapper} from '../src/ConditionalWrapper/index';

export default {
    title: 'ConditionalWrapper',
    component: ConditionalWrapper,
    argTypes: {
        condition: {
            type: 'boolean',
            defaultValue: true
        },
        linkUrl: {
            type: 'string',
            defaultValue: 'https://www.trentim.com'
        },
        linkText: {
            type: 'string',
            defaultValue: 'Trentim'
        }
    }
}

export const Template = ({linkText, asd, linkUrl , ...args}) => (
<ConditionalWrapper condition wrapper={child => (<a href={linkUrl}>{child}</a>)}{...args}>
    <span>{linkText}</span>
</ConditionalWrapper>);