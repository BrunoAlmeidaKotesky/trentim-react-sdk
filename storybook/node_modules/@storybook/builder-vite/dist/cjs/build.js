"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = build;

var _vite = require("vite");

var _viteConfig = require("./vite-config");

async function build(options) {
  const {
    presets
  } = options;
  const config = await (0, _viteConfig.commonConfig)(options, 'build');
  config.build = {
    outDir: options.outputDir,
    emptyOutDir: false,
    // do not clean before running Vite build - Storybook has already added assets in there!
    sourcemap: true
  };
  const finalConfig = await presets.apply('viteFinal', config, options);
  await (0, _vite.build)(finalConfig);
}