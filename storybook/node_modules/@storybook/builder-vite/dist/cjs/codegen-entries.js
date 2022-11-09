"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePreviewEntryCode = generatePreviewEntryCode;
exports.generateVirtualStoryEntryCode = generateVirtualStoryEntryCode;

var _coreCommon = require("@storybook/core-common");

var _slash = _interopRequireDefault(require("slash"));

var _vite = require("vite");

var _listStories = require("./list-stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const absoluteFilesToImport = (files, name) => files.map((el, i) => `import ${name ? `* as ${name}_${i} from ` : ''}'/@fs/${(0, _vite.normalizePath)(el)}'`).join('\n');

async function generateVirtualStoryEntryCode(options) {
  const storyEntries = await (0, _listStories.listStories)(options);
  const resolveMap = storyEntries.reduce((prev, entry) => Object.assign({}, prev, {
    [entry]: entry.replace((0, _slash.default)(process.cwd()), '.')
  }), {});
  const modules = storyEntries.map((entry, i) => `${JSON.stringify(entry)}: story_${i}`).join(',');
  return `
    ${absoluteFilesToImport(storyEntries, 'story')}

    function loadable(key) {
      return {${modules}}[key];
    }
    
    Object.assign(loadable, {
      keys: () => (${JSON.stringify(Object.keys(resolveMap))}),
      resolve: (key) => (${JSON.stringify(resolveMap)}[key])
    });

    export function configStories(configure) {
      configure(loadable, { hot: import.meta.hot }, false);
    }
  `.trim();
}

async function generatePreviewEntryCode({
  configDir
}) {
  const previewFile = (0, _coreCommon.loadPreviewOrConfigFile)({
    configDir
  });
  if (!previewFile) return '';
  return `import * as preview from '${(0, _slash.default)(previewFile)}';
  export default preview;`;
}