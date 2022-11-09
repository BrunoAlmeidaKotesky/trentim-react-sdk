// src/index.ts
import startCase from "lodash/startCase";

// src/includeConditionalArg.ts
import isEqual from "lodash/isEqual";
var count = (vals) => vals.map((v) => typeof v !== "undefined").filter(Boolean).length;
var testValue = (cond, value) => {
  const { exists, eq, neq, truthy } = cond;
  if (count([exists, eq, neq, truthy]) > 1) {
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists, eq, neq })}`);
  }
  if (typeof eq !== "undefined") {
    return isEqual(value, eq);
  }
  if (typeof neq !== "undefined") {
    return !isEqual(value, neq);
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
var storyNameFromExport = (key) => startCase(key);
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
export {
  includeConditionalArg,
  isExportStory,
  parseKind,
  sanitize,
  storyNameFromExport,
  toId
};
