"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectExportOrderPlugin = void 0;

var _esModuleLexer = require("es-module-lexer");

var _magicString = _interopRequireDefault(require("magic-string"));

var _vite = require("vite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const include = [/\.stories\.([tj])sx?$/, /(stories|story).mdx$/];
const filter = (0, _vite.createFilter)(include);
const injectExportOrderPlugin = {
  name: 'storybook:inject-export-order-plugin',
  // This should only run after the typescript has been transpiled
  enforce: 'post',

  async transform(code, id) {
    if (!filter(id)) return undefined; // TODO: Maybe convert `injectExportOrderPlugin` to function that returns object,
    //  and run `await init;` once and then call `parse()` without `await`,
    //  instead of calling `await parse()` every time.

    const [, exports] = await (0, _esModuleLexer.parse)(code);

    if (exports.includes('__namedExportsOrder')) {
      // user has defined named exports already
      return undefined;
    }

    const s = new _magicString.default(code);
    const orderedExports = exports.filter(e => e !== 'default');
    s.append(`;export const __namedExportsOrder = ${JSON.stringify(orderedExports)};`);
    return {
      code: s.toString(),
      map: s.generateMap({
        hires: true,
        source: id
      })
    };
  }

};
exports.injectExportOrderPlugin = injectExportOrderPlugin;