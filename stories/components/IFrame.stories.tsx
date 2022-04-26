import * as React from 'react';
import {IFrame} from '../../src/IFrame/index';
import type { IFrameProps } from '../../src/IFrame/IFrame';
import type { ComponentStory, Meta } from '@storybook/react';

export default {
    title: 'Components/IFrame',
    component: IFrame,
    argTypes: {
        src: {
            name: 'src',
            description: 'The src of the iframe',
            defaultValue: 'https://trentim.com/',
            type: 'string'
        },
        fallback: {
            name: 'fallback',
            description: 'The fallback component to show when the iframe is loading',
            defaultValue: <div>Carregando...</div>,
            control: 'text'
        },
        style: {
            name: 'style',
            description: 'The style of the iframe',
            defaultValue: {
                width: 'inherit',
                height: '80vh'
            },
            control: 'object'
        }
    }
} as Meta<IFrameProps>;

export const Example: ComponentStory<typeof IFrame> = ({src, fallback, refChanged, refDepencyList, style}) => 
    (<div style={{width: '100%', height: '100vh'}}><IFrame style={style} src={src} fallback={fallback} refChanged={refChanged} refDepencyList={refDepencyList}/></div>);