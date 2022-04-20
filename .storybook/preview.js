const { addDecorator, addParameters } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');
const { DocsPage, DocsContainer } = require('@storybook/addon-docs/blocks');


addDecorator(withPropsTable);
