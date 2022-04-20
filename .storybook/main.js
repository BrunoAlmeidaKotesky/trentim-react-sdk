const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const config = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|mdx)',
    '../stories/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {
          babelrc: true
        },
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    'storybook-addon-react-docgen',
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
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    config.resolve.extensions.push('.mdx');

    // config.module.rules.push({
    //   test: /\.mdx$/,
    //   use: [

    //     {
    //       loader: '@mdx-js/loader',
    //       options: {
    //         compilers: [createCompiler({})],
    //       },
    //     },
    //   ]
    // });

    return config;
  }
}
module.exports = config;