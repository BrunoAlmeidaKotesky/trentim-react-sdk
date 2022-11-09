"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  includeConditionalArg: () => includeConditionalArg,
  isExportStory: () => isExportStory,
  parseKind: () => parseKind,
  sanitize: () => sanitize,
  storyNameFromExport: () => storyNameFromExport,
  toId: () => toId
});
module.exports = __toCommonJS(src_exports);
var import_startCase = __toESM(require("lodash/startCase"));

// src/includeConditionalArg.ts
var import_isEqual = __toESM(require("lodash/isEqual"));
var count = (vals) => vals.map((v) => typeof v !== "undefined").filter(Boolean).length;
var testValue = (cond, value) => {
  const { exists, eq, neq, truthy } = cond;
  if (count([exists, eq, neq, truthy]) > 1) {
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists, eq, neq })}`);
  }
  if (typeof eq !== "undefined") {
    return (0, import_isEqual.default)(value, eq);
  }
  if (typeof neq !== "undefined") {
    return !(0, import_isEqual.default)(value, neq);
  }
  if (typeof exists !== "undefined") {
    const valueExists = typeof value !== "undefined";
    return exists ? valueExists : !valueExists;
  }
  const shouldBeTruthy = typeof truthy === "undefined" ? true : truthy;
  return shouldBeTruthy ? !!value : !value;
};
var includeConditionalArg = (argType, args, globals) => {
  if (!argType.if)
    return true;
  const { arg, global } = argType.if;
  if (count([arg, global]) !== 1) {
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg, global })}`);
  }
  const value = arg ? args[arg] : globals[global];
  return testValue(argType.if, value);
};

// src/index.ts
var sanitize = (string) => {
  return string.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};
var sanitizeSafe = (string, part) => {
  const sanitized = sanitize(string);
  if (sanitized === "") {
    throw new Error(`Invalid ${part} '${string}', must include alphanumeric characters`);
  }
  return sanitized;
};
var toId = (kind, name) => `${sanitizeSafe(kind, "kind")}${name ? `--${sanitizeSafe(name, "name")}` : ""}`;
var storyNameFromExport = (key) => (0, import_startCase.default)(key);
function matches(storyKey, arrayOrRegex) {
  if (Array.isArray(arrayOrRegex)) {
    return arrayOrRegex.includes(storyKey);
  }
  return storyKey.match(arrayOrRegex);
}
function isExportStory(key, { includeStories, excludeStories }) {
  return key !== "__esModule" && (!includeStories || matches(key, includeStories)) && (!excludeStories || !matches(key, excludeStories));
}
var parseKind = (kind, { rootSeparator, groupSeparator }) => {
  const [root, remainder] = kind.split(rootSeparator, 2);
  const groups = (remainder || kind).split(groupSeparator).filter((i) => !!i);
  return {
    root: remainder ? root : null,
    groups
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  includeConditionalArg,
  isExportStory,
  parseKind,
  sanitize,
  storyNameFromExport,
  toId
});
