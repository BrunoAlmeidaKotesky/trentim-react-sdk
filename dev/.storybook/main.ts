import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';

const config = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|mdx)',
    '../stories/**/*.stories.@(ts|tsx|mdx)'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-docgen",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: 'react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    babelModeV7: true
  },
  viteFinal: async (config) => {
    const resolve = (await import('../vite.config')).default;
    return mergeConfig(config, {
      resolve,
    });
  }
}
module.exports = config;