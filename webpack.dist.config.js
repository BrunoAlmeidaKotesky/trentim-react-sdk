const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const loaders = require('./webpack.loaders');
const { plugins } = require('./webpack.plugins');

const isSingleModule = fs.existsSync('./src/index.ts') || fs.existsSync('./src/index.tsx');
const thisPackageBelongsToMonorepo = fs.existsSync('../../package.json') && !!require('../../package.json').workspaces;

const getModuleNames = root => fs.readdirSync(root, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const moduleNames = getModuleNames('./src');

const singleModules = [path.resolve(__dirname, 'src/index.tsx')];
const multipleModule = (
  // Multiple module exports of the /src/<Module name>/index.ts
  moduleNames
    .reduce((acc, entry) => {
      // if (entry === 'components') {
      //   //Acess each folder from components and add it's index.ts to acc
      //   const subModuleNames = getModuleNames(`./src/${entry}`);
      //   subModuleNames.forEach(subModuleName => {
      //     acc[subModuleName] = `./src/${entry}/${subModuleName}/index.ts`;
      //   });
      // }
      acc[entry] = `./src/${entry}`;
      return acc;
    }, {})
)

const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
  mode: "production",          // distribute it without minification
  target: "web",
  entry: isSingleModule ? singleModules : multipleModule,
  externals:
    thisPackageBelongsToMonorepo
      ? [                  // exclude all dependencies from the bundle
        nodeExternals(),
        nodeExternals({
          modulesDir: path.resolve(__dirname, '../../node_modules')
        })
      ]
      : nodeExternals(),
  optimization: {
    // help: https://webpack.js.org/guides/tree-shaking/
    usedExports: true,  // true to remove the dead code,
    moduleIds: 'named',
    minimizer: [plugins[1]]

  },
  devtool: "source-map",        // help: https://webpack.js.org/configuration/devtool/
  output: isSingleModule ? {
    // Classic export of the /src/index.ts
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'auto',
    library: package_.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    sourceMapFilename: 'bundle.map'
  }
    : {
      // Multiple module exports of the /src/<Module name>/index.ts
      filename: '[name]/index.js',
      path: __dirname + '/dist',
      publicPath: ASSET_PATH,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      sourceMapFilename: '[name]/bundle.map'
    },
  resolve: {
    alias: {
      //Include alias with @ for src/helpers, src/components, src/hooks and src/models
      "@helpers": path.resolve(__dirname, 'dist/helpers'),
      "@components": path.resolve(__dirname, 'dist/components'),
      "@hooks": path.resolve(__dirname, 'dist/hooks'),
      "@models": path.resolve(__dirname, 'dist/models')
    },
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  node: {
    // universal app? place here your conditional imports for node env
    fs: "empty",
    path: "empty",
    child_process: "empty",
  },
  module: {
    rules: loaders.module.rules,
  },
  plugins,
};

module.exports = config;