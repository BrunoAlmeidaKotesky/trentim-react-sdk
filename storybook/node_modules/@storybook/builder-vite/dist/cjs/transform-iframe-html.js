"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformIframeHtml = transformIframeHtml;

var _coreCommon = require("@storybook/core-common");

async function transformIframeHtml(html, options) {
  const {
    configType,
    features,
    presets,
    serverChannelUrl,
    title
  } = options;
  const frameworkOptions = await presets.apply('frameworkOptions');
  const headHtmlSnippet = await presets.apply('previewHead');
  const bodyHtmlSnippet = await presets.apply('previewBody');
  const logLevel = await presets.apply('logLevel', undefined);
  const docsOptions = await presets.apply('docs');
  const coreOptions = await presets.apply('core');
  const stories = (0, _coreCommon.normalizeStories)(await options.presets.apply('stories', [], options), {
    configDir: options.configDir,
    workingDir: process.cwd()
  }).map(specifier => Object.assign({}, specifier, {
    importPathMatcher: specifier.importPathMatcher.source
  }));
  return html.replace('<!-- [TITLE HERE] -->', title || 'Storybook').replace('[CONFIG_TYPE HERE]', configType || '').replace('[LOGLEVEL HERE]', logLevel || '').replace(`'[FRAMEWORK_OPTIONS HERE]'`, JSON.stringify(frameworkOptions)).replace(`'[CHANNEL_OPTIONS HERE]'`, JSON.stringify(coreOptions && coreOptions.channelOptions ? coreOptions.channelOptions : {})).replace(`'[FEATURES HERE]'`, JSON.stringify(features || {})).replace(`'[STORIES HERE]'`, JSON.stringify(stories || {})).replace(`'[DOCS_OPTIONS HERE]'`, JSON.stringify(docsOptions || {})).replace(`'[SERVER_CHANNEL_URL HERE]'`, JSON.stringify(serverChannelUrl)).replace('<!-- [HEAD HTML SNIPPET HERE] -->', headHtmlSnippet || '').replace('<!-- [BODY HTML SNIPPET HERE] -->', bodyHtmlSnippet || '');
}