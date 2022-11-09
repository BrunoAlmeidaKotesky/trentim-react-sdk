"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripStoryHMRBoundary = stripStoryHMRBoundary;

var _vite = require("vite");

var _magicString = _interopRequireDefault(require("magic-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This plugin removes HMR `accept` calls in story files.  Stories should not be treated
 * as hmr boundaries, but vite has a bug which causes them to be treated as boundaries
 * (https://github.com/vitejs/vite/issues/9869).
 */
function stripStoryHMRBoundary() {
  const filter = (0, _vite.createFilter)(/\.stories\.([tj])sx?$/);
  return {
    name: 'storybook:strip-hmr-boundary-plugin',
    enforce: 'post',

    async transform(src, id) {
      if (!filter(id)) return undefined;
      const s = new _magicString.default(src);
      s.replace(/import\.meta\.hot\.accept\(\);/, '');
      return {
        code: s.toString(),
        map: s.generateMap({
          hires: true,
          source: id
        })
      };
    }

  };
}