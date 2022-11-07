
import { LifecycleProgress } from 'trentim-react-sdk/LifecycleProgress';
import type { Meta, StoryObj } from '@storybook/react';
import 'trentim-react-sdk/dist/style.css';

const meta: Meta<typeof LifecycleProgress> = {
    title: 'components/LifecycleProgress',
    component: LifecycleProgress,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/react/writing-docs/docs-page
    tags: ['component', 'docsPage'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof LifecycleProgress>;
export const Demo: Story = {
    args: {
        stages: [
            {
                active: false,
                label: "Um texto muito grande blablablablablas",
                data: [
                    { name: '1A. Business Case', description: 'Lorem Ipsum', active: false, completed: false },
                    { name: '1B. Revisão Comitê Executivo', description: 'Lorem Ispum', active: false, completed: true },
                    { name: '1C. Revisão Comitê Financeiro', description: 'Lorem Ipsum', active: false, completed: true },
                ],
                completed: true,
            },
            {
                active: false,
                label: "Seleção",
                completed: true,
                data: [
                    { name: '2A. Seleção de Projetos', description: 'Lorem Ipsum', active: false, completed: true },
                    { name: '2B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: true },
                ],
            },
            {
                active: false,
                label: "Planejamento",
                completed: true,
                data: [
                    { name: '3A. Planejamento', description: 'Lorem Ipsum', active: false, completed: true },
                ],
            },
            {
                active: true,
                label: "Execução",
                completed: false,
                data: [
                    { name: '4A. Execução de Projetos', description: 'Lorem Ipsum', active: true, completed: true },
                    { name: '4B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: true },
                ],
                showCallout: true
            },
            {
                active: false,
                label: "Encerramento",
                completed: false,
                data: [
                    { name: '5A. Encerramento', description: 'Lorem Ipsum', active: false, completed: true },
                    { name: '5B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: true }
                ],
                showCallout: true
            },
            {
                active: false,
                label: "Conclusão",
                completed: false,
                data: [
                    { name: '6A. Conclusão', description: 'Lorem Ipsum', active: false, completed: false },
                    { name: '6B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: false }
                ],
            },
            {
                active: false,
                label: "Cancelamento",
                completed: false,
                data: [
                    { name: '7A. Cancelamento', description: 'Lorem Ipsum', active: false, completed: false },
                    { name: '7B. Revisão Comitê Executivo', description: 'Lorem Ipsum', active: false, completed: false }
                ],
            }
        ],
        alwaysShowCallout: false,
        buttonColor: 'lightblue',
        calloutContent: <div>Aaaa</div>,
        leftColumnTitle: 'Menu do cilo de vida',
        leftColumnSubtitle: 'Data de criação'
    }
}
