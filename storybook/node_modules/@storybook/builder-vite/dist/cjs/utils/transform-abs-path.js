"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformAbsPath = transformAbsPath;

var _path = _interopRequireDefault(require("path"));

var _vite = require("vite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We need to convert from an absolute path, to a traditional node module import path,
// so that vite can correctly pre-bundle/optimize
function transformAbsPath(absPath) {
  const splits = absPath.split(`node_modules${_path.default.sep}`); // Return everything after the final "node_modules/"

  const module = (0, _vite.normalizePath)(splits[splits.length - 1]);
  return module;
}