"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateImportFnScriptCode = generateImportFnScriptCode;

var path = _interopRequireWildcard(require("path"));

var _vite = require("vite");

var _nodeLogger = require("@storybook/node-logger");

var _listStories = require("./list-stories");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This file is largely based on https://github.com/storybookjs/storybook/blob/d1195cbd0c61687f1720fefdb772e2f490a46584/lib/core-common/src/utils/to-importFn.ts
 */

/**
 * Paths get passed either with no leading './' - e.g. `src/Foo.stories.js`,
 * or with a leading `../` (etc), e.g. `../src/Foo.stories.js`.
 * We want to deal in importPaths relative to the working dir, so we normalize
 */
function toImportPath(relativePath) {
  return relativePath.startsWith('../') ? relativePath : `./${relativePath}`;
}
/**
 * This function takes an array of stories and creates a mapping between the stories' relative paths
 * to the working directory and their dynamic imports. The import is done in an asynchronous function
 * to delay loading. It then creates a function, `importFn(path)`, which resolves a path to an import
 * function and this is called by Storybook to fetch a story dynamically when needed.
 * @param stories An array of absolute story paths.
 */


async function toImportFn(stories) {
  const objectEntries = stories.map(file => {
    const ext = path.extname(file);
    const relativePath = (0, _vite.normalizePath)(path.relative(process.cwd(), file));

    if (!['.js', '.jsx', '.ts', '.tsx', '.mdx'].includes(ext)) {
      _nodeLogger.logger.warn(`Cannot process ${ext} file with storyStoreV7: ${relativePath}`);
    }

    return `  '${toImportPath(relativePath)}': async () => import('/@fs/${file}')`;
  });
  return `
    const importers = {
      ${objectEntries.join(',\n')}
    };

    export async function importFn(path) {
        return importers[path]();
    }
  `;
}

async function generateImportFnScriptCode(options) {
  // First we need to get an array of stories and their absolute paths.
  const stories = await (0, _listStories.listStories)(options); // We can then call toImportFn to create a function that can be used to load each story dynamically.

  return (await toImportFn(stories)).trim();
}